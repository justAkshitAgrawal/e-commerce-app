import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Brands() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const querySnapshot = await getDocs(collection(db, "brands"));
      const logos = [];
      querySnapshot.forEach((doc) => {
        logos.push({ id: doc.id, ...doc.data() });
      });
      return logos;
    };
    getCategories().then((logos) => {
      setLogos(logos);
    });
  }, []);

  return (
    <div className="pb-10 mx-10 mt-10 lg:mx-0 lg:mt-10 lg:items-center lg:flex lg:flex-col ">
      <div className=" lg:w-[80%] ">
        <h1 className="ml-2 font-semibold lg:ml-0 lg:self-start lg:text-xl ">
          Brands connected with us
        </h1>
        <div className="grid grid-cols-2 gap-10 mt-8 lg:grid-cols-5 lg:mt-6 lg:gap-20 lg:overflow-x-scroll scrollbar-hide">
          {logos.map((logo) => {
            return (
              <div
                className="flex flex-col items-center transition-all cursor-pointer hover:scale-105 group"
                key={logo.id}
              >
                <img
                  className="object-contain w-14 h-14 lg:w-20 lg:h-20"
                  src={logo.logo}
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

export default Brands;
