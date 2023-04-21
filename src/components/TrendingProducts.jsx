import React from "react";

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
  return (
    <div className="flex justify-center py-5 lg:py-8 whitespace-nowrap ">
      <div className="flex lg:w-[80%] space-x-5  lg:space-x-10 overflow-x-scroll scrollbar-hide">
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
