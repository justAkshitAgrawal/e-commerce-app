import React from "react";
import {
  MdKeyboardDoubleArrowDown,
  MdStoreMallDirectory,
} from "react-icons/md";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { RiArrowDownSLine, RiShoppingCartFill } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import loginStateAtom from "../atoms/loginAtom";

function NavBar() {
  const loginState = useRecoilValue(loginStateAtom);
  return (
    <div className="flex items-center justify-between p-5 border-b-2 shadow-lg lg:px-10">
      <div className="flex items-center justify-center space-x-1 cursor-pointer lg:justify-start text-[#007ACC]">
        <MdStoreMallDirectory className="nav-icons" />
        <h1 className="text-xl font-bold tracking-wider transition-all lg:text-3xl">
          AMP
        </h1>
      </div>
      <div className="flex items-center justify-between px-4 py-2 -ml-5 space-x-1 bg-gray-100 rounded-full cursor-pointer">
        <MdKeyboardDoubleArrowDown className="w-5 h-5" />
        <h1 className=" txet-lg">Filter</h1>
      </div>
      <div className="items-center hidden w-[50%] px-3 py-2 bg-gray-100 lg:flex rounded-full ">
        <AiOutlineSearch className="w-5 h-5" />
        <input
          className="w-full ml-3 bg-transparent outline-none"
          placeholder="Find something interesting..."
        />
      </div>
      <div className="items-center hidden space-x-3 cursor-pointer lg:flex ">
        <BsGlobe className="w-6 h-6" />
        <div className="text-sm">
          <h1>Region</h1>
          <h1 className="font-semibold ">India</h1>
        </div>
        <RiArrowDownSLine className="w-5 h-5 " />
      </div>
      <div className="flex items-center space-x-3 lg:space-x-5">
        <FiUser
          className=" nav-icons"
          style={{
            color: loginState ? "#007ACC" : "red",
          }}
        />
        <AiOutlineHeart className="nav-icons hover:text-red-500" />
        <RiShoppingCartFill className="nav-icons hover:text-[#007ACC]" />
      </div>
    </div>
  );
}

export default NavBar;
