import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const querySnapshot = await getDocs(collection(db, "categories"));
      const categories = [];
      querySnapshot.forEach((doc) => {
        categories.push({ id: doc.id, ...doc.data() });
      });
      return categories;
    };
    getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  return (
    <div className="pb-10 mx-10 mt-10 lg:mx-0 lg:mt-12 lg:items-center lg:flex lg:flex-col ">
      <div className=" lg:w-[80%] ">
        <h1 className="ml-2 font-semibold lg:ml-0 lg:self-start lg:text-xl ">
          Categories for you
        </h1>
        <div className="grid grid-cols-2 gap-5 mt-5 lg:flex lg:mt-6 lg:gap-0 lg:space-x-10 lg:overflow-x-scroll scrollbar-hide">
          {categories.map((category) => {
            return (
              <div
                className="flex flex-col items-center cursor-pointer group"
                key={category.id}
              >
                <div className="p-5 transition-all bg-gray-100 rounded-xl group-hover:bg-gray-200 ">
                  <img
                    className="object-contain w-20 h-20 lg:w-40 lg:h-40"
                    src={category.image}
                    alt=""
                  />
                </div>
                <h1 className="mt-2 text-sm font-semibold lg:text-lg">
                  {category.name}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
