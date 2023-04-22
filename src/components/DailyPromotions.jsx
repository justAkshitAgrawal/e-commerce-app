import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { TbShoppingCartPlus } from "react-icons/tb";

function DailyPromotions() {
  const [dailyPromotions, setDailyPromotions] = useState([]);

  useEffect(() => {
    const getDailyPromotions = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const dailyPromotions = [];
      querySnapshot.forEach((doc) => {
        dailyPromotions.push({ id: doc.id, ...doc.data() });
      });
      return dailyPromotions;
    };

    getDailyPromotions().then((dailyPromotions) => {
      setDailyPromotions(dailyPromotions.slice(0, 5));
    });
  }, []);

  return (
    <div className="pb-10 mx-10 mt-5 lg:mx-0 lg:mt-5 lg:items-center lg:flex lg:flex-col ">
      <div className=" lg:w-[80%]">
        <h1 className="ml-2 font-semibold lg:ml-0 lg:self-start lg:text-xl ">
          Daily Promotions
        </h1>
        <div className="flex w-full py-4 mt-3 space-x-5 overflow-x-scroll lg:mt-6 lg:gap-0 lg:space-x-10 scrollbar-hide">
          <div className="items-start p-5 cursor-pointer lg:min-w-[15vw] min-w-[60vw] bg-gray-100 border-2 rounded-xl lg:p-10">
            <h1 className="text-sm font-bold lg:text-xl">Get Airpods free</h1>
            <h1 className="mt-2 text-xs lg:text-base lg:font-semibold">
              Included with purchase of select iPhone models.
            </h1>
            <div className="mt-4">
              <img
                src="https://i.ibb.co/Dz15kdD/image.png"
                alt=""
                className="object-contain "
              />
            </div>
          </div>
          {dailyPromotions.map((dailyPromotion) => {
            return (
              <div
                key={dailyPromotion.id}
                className="items-start cursor-pointer hover:bg-gray-200 transition-all justify-between shadow-lg p-5 bg-gray-100 rounded-xl lg:p-10 min-w-[60vw] lg:min-w-[15vw]"
              >
                <div className="flex justify-center">
                  <img
                    src={dailyPromotion.image}
                    alt=""
                    className="object-contain max-h-[15vh]  lg:w-52 lg:h-52 "
                  />
                </div>
                <h1 className="mt-10 text-lg font-semibold lg:text-xl ">
                  {dailyPromotion.name}
                </h1>
                <h1 className="flex items-center justify-between mt-10 lg:text-lg ">
                  ₹ {Number(dailyPromotion.price).toLocaleString("en-IN")}
                  <div
                    title="Add to cart"
                    className="p-2 transition-all bg-gray-300 rounded-full shadow-lg hover:scale-125"
                  >
                    <TbShoppingCartPlus className="w-6 h-6 " />
                  </div>
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DailyPromotions;
