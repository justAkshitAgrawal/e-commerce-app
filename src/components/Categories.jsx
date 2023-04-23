import React, { useEffect, useRef, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

function Categories() {
  const [categories, setCategories] = useState([]);
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

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
    <div className="relative pb-10 mx-10 mt-10 lg:mx-0 lg:mt-12 lg:items-center lg:flex lg:flex-col ">
      <div className="hidden lg:absolute lg:block top-[13vh] left-[7vw]">
        <TbChevronLeft
          className="w-10 h-10 text-gray-500 cursor-pointer"
          onClick={() => scroll(-200)}
        />
      </div>
      <div className="hidden lg:absolute lg:block top-[13vh] right-[7vw]">
        <TbChevronRight
          className="w-10 h-10 text-gray-500 cursor-pointer"
          onClick={() => scroll(200)}
        />
      </div>
      <div className=" lg:w-[80%] ">
        <h1 className="ml-2 font-semibold lg:ml-0 lg:self-start lg:text-xl ">
          Categories for you
        </h1>
        <div
          ref={ref}
          className="grid grid-cols-2 gap-5 mt-5 lg:flex lg:mt-6 lg:gap-0 lg:space-x-10 lg:overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {categories.map((category) => {
            return (
              <div
                className="flex flex-col items-center cursor-pointer group lg:min-w-[10vw]"
                key={category.id}
              >
                <div className="p-5 transition-all bg-gray-100 shadow-md lg:p-7 rounded-xl group-hover:bg-gray-200 ">
                  <img
                    className="object-contain w-20 h-20 lg:w-36 lg:h-36"
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
