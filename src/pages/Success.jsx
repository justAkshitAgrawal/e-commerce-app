import React from "react";
import NavBar from "../components/NavBar";
import { AiFillCheckCircle } from "react-icons/ai";

function Success() {
  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-center ">
        <div className="w-[80%] lg:w-[30%]">
          <div className="flex flex-col mt-10 lg:mt-20 items-center  bg-[#00B33C] p-5 rounded-xl text-white shadow-xl">
            <div className="flex items-center space-x-2 text-white">
              <AiFillCheckCircle />
              <h1>Order Placed</h1>
            </div>
            <h1 className="mt-2">
              Order ID: {` `}
              <span className="font-semibold">
                {Math.floor(Math.random() * 100000000000000)}
              </span>
            </h1>
            <h1 className="mt-5 text-center">
              You will receive a confirmation email shortly. Thank you for your
              purchase.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
