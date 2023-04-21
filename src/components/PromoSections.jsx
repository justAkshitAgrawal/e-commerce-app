import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function PromoSections() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const querySnapshot = await getDocs(collection(db, "promo"));
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      return items;
    };
    getCategories().then((items) => {
      setItems(items);
    });
  }, []);

  return (
    <div className="pb-10 mx-10 mt-5 lg:mx-0 lg:mt-5 lg:items-center lg:flex lg:flex-col ">
      <div className=" lg:w-[80%]">
        <h1 className="ml-2 font-semibold lg:ml-0 lg:self-start lg:text-xl ">
          You might like these
        </h1>
        <div className="flex flex-col items-center mt-5 lg:mt-10 lg:justify-between lg:space-x-10 lg:flex-row">
          {items.map((item) => {
            return (
              <div
                className="flex items-center w-full px-3 py-2 space-x-5 transition-all shadow-xl cursor-pointer hover:scale-105 lg:justify-around group rounded-xl bg-gray-200/20"
                key={item.id}
              >
                <h1 className="font-semibold lg:text-2xl lg:max-w-xs">
                  {item.name}
                </h1>
                <img
                  className="object-contain w-40 h-40 lg:w-52 lg:h-52"
                  src={item.image}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PromoSections;
