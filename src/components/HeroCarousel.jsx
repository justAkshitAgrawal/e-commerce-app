import React from "react";
import { AiFillApple } from "react-icons/ai";

function HeroCarousel() {
  return (
    <div className="flex items-center justify-center mt-5 ">
      <div className="flex flex-col lg:justify-center cursor-pointer lg:rounded-3xl items-center lg:py-0 w-[80%] px-5 lg:px-10 pt-10 bg-black hover:scale-105 rounded-xl lg:flex-row shadow-xl transition-all">
        <div className="flex flex-col items-center lg:items-start lg:space-y-2 lg:mt-10">
          <div className="flex items-center mt-4 space-x-1 text-sm text-white lg:text-3xl">
            <AiFillApple className="w-4 h-4 lg:h-8 lg:w-8 -mt-[3px]" />
            <h1>iPhone 14 Pro</h1>
          </div>
          <h1 className="text-xl font-semibold text-transparent lg:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Pro. Beyond.
          </h1>
          <h1 className="text-xs text-white lg:text-xl">Available now</h1>
        </div>
        <img
          src="https://i.ibb.co/1m3H7qB/iphone-14-pro-overview-3dn6st99cpea-og.png"
          alt=""
          className="mt-4 lg:mt-24 lg:w-[50%]"
        />
      </div>
    </div>
  );
}

export default HeroCarousel;
