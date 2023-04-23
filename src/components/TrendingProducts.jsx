import React, { useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const data = [
  "Macbook Pro",
  "Macbook Air",
  "Nike AF1",
  "Airpods Pro",
  "Airpods",
  "iPhone 12",
  "iPhone 12 Pro",
  "iPhone 12 Pro Max",
  "iPhone 12 Mini",
  "iPhone 11",
];

function TrendingProducts() {
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="relative flex justify-center py-5 lg:py-8 whitespace-nowrap ">
      <BsChevronLeft
        className="absolute w-5 h-5 text-gray-500 left-2 top-7 lg:left-[8vw] lg:top-[4.2vh] cursor-pointer"
        onClick={() => scroll(-100)}
      />
      <BsChevronRight
        className="absolute w-5 h-5 text-gray-500 right-2 top-7 lg:right-[8vw] lg:top-[4.2vh] cursor-pointer"
        onClick={() => scroll(100)}
      />

      <div
        ref={ref}
        className="flex lg:w-[80%] space-x-5 mx-10 items-center relative lg:space-x-10 overflow-x-scroll scrollbar-hide scroll-smooth"
      >
        {data.map((item) => {
          return (
            <div
              key={item}
              className="px-4 py-2 transition-all bg-gray-100 rounded-full cursor-pointer hover:bg-gray-300"
            >
              <h1 className="text-sm lg:text-base ">{item}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TrendingProducts;
