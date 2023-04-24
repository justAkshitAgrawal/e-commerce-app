import React, { useEffect, useRef, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, setDoc } from "firebase/firestore";
import {
  TbChevronLeft,
  TbChevronRight,
  TbShoppingCartPlus,
} from "react-icons/tb";
import { useRecoilState, useRecoilValue } from "recoil";
import userCartStateAtom from "../atoms/userCartAtom";
import { AiFillCheckCircle } from "react-icons/ai";
import loginStateAtom from "../atoms/loginAtom";

function DailyPromotions() {
  const [dailyPromotions, setDailyPromotions] = useState([]);
  const ref = useRef(null);
  const [cart, setCart] = useRecoilState(userCartStateAtom);
  const loginState = useRecoilValue(loginStateAtom);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

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
      setDailyPromotions(dailyPromotions);
    });
  }, []);

  return (
    <div className="relative pb-10 mx-10 mt-5 lg:mx-0 lg:mt-5 lg:items-center lg:flex lg:flex-col ">
      <div className="hidden lg:absolute lg:block top-[25vh] left-[7vw]">
        <TbChevronLeft
          className="w-10 h-10 text-gray-500 cursor-pointer"
          onClick={() => scroll(-300)}
        />
      </div>
      <div className="hidden lg:absolute lg:block top-[25vh] right-[7vw]">
        <TbChevronRight
          className="w-10 h-10 text-gray-500 cursor-pointer"
          onClick={() => scroll(300)}
        />
      </div>
      <div className=" lg:w-[80%]">
        <h1 className="ml-2 font-semibold lg:ml-0 lg:self-start lg:text-xl ">
          Daily Promotions
        </h1>
        <div
          ref={ref}
          className="flex w-full py-4 mt-3 space-x-5 overflow-x-scroll lg:mt-6 lg:gap-0 lg:space-x-10 scrollbar-hide scroll-smooth"
        >
          <div className="items-center flex flex-col p-5 cursor-pointer lg:min-w-[15vw] lg:max-w-[20vw] min-w-[60vw] hover:bg-gray-200 transition-all bg-gray-100 border-2 rounded-xl lg:p-10">
            <h1 className="text-sm font-bold lg:text-xl">Get Airpods free</h1>
            <h1 className="mt-2 text-xs lg:text-base lg:font-semibold">
              Included with purchase of select iPhone models.
            </h1>
            <div className="mt-4">
              <img
                src="https://i.ibb.co/Dz15kdD/image.png"
                alt=""
                className="object-contain max-h-[25vh]"
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
                <div className="flex items-center justify-between mt-10 lg:text-lg ">
                  ₹ {Number(dailyPromotion.price).toLocaleString("en-IN")}
                  {cart.find((item) => item.id === dailyPromotion.id) ? (
                    <div>
                      <h1 className="font-semibold text-[#00B33C] ">
                        <AiFillCheckCircle className="w-7 h-7" />
                      </h1>
                    </div>
                  ) : loginState ? (
                    <button
                      title="Add to cart"
                      className="p-2 transition-all bg-gray-300 rounded-full shadow-lg hover:scale-125 disabled:cursor-not-allowed disabled:scale-100"
                      onClick={() => {
                        setCart((prev) => [
                          ...prev,
                          {
                            id: dailyPromotion.id,
                            name: dailyPromotion.name,
                            brand: dailyPromotion.brand,
                            image: dailyPromotion.image,
                            price: dailyPromotion.price,
                            quantity: 1,
                          },
                        ]);

                        localStorage.setItem(
                          "cart",
                          JSON.stringify([
                            ...cart,
                            {
                              id: dailyPromotion.id,
                              name: dailyPromotion.name,
                              brand: dailyPromotion.brand,
                              image: dailyPromotion.image,
                              price: dailyPromotion.price,
                              quantity: 1,
                            },
                          ])
                        );
                      }}
                    >
                      <TbShoppingCartPlus className="w-6 h-6 " />
                    </button>
                  ) : (
                    <h1 className="text-xs text-red-400">Login to buy</h1>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DailyPromotions;
