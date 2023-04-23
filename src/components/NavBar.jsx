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
import { FadeIn } from "react-slide-fade-in";

import loginStateAtom from "../atoms/loginAtom";
import userCartStateAtom from "../atoms/userCartAtom";
import LoginModal from "./LoginModal";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const loginState = useRecoilValue(loginStateAtom);
  const userCartState = useRecoilValue(userCartStateAtom);
  const [showLoginModal, setShowLoginModal] = React.useState(false);

  const navigate = useNavigate();
  let sum = 0;
  userCartState.forEach((item) => {
    sum += item.quantity;
  });

  return (
    <>
      {showLoginModal && (
        <FadeIn durationInMilliseconds={500}>
          <LoginModal setShowLoginModal={setShowLoginModal} />
        </FadeIn>
      )}
      <div className="sticky top-0 flex items-center justify-between p-5 bg-white border-b-2 shadow-lg lg:px-10 z-[100]">
        <div
          className="flex items-center justify-center space-x-1 cursor-pointer lg:justify-start text-[#007ACC]"
          onClick={() => navigate("/")}
        >
          <MdStoreMallDirectory className="nav-icons" />
          <h1 className="text-xl font-bold tracking-wider transition-all lg:text-3xl">
            AMP
          </h1>
        </div>
        <div className="items-center justify-between hidden px-4 py-2 -ml-5 space-x-1 transition-all bg-gray-100 rounded-full cursor-pointer lg:flex hover:bg-gray-200">
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
        <div className="items-center hidden px-2 space-x-3 rounded-full cursor-pointer lg:flex hover:bg-gray-200 ">
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
            onClick={() => {
              if (!loginState) {
                setShowLoginModal(true);
              }
            }}
          />
          <AiOutlineHeart className="nav-icons hover:text-red-500" />
          <div
            className="relative cursor-pointer "
            onClick={() => {
              navigate("/cart");
            }}
          >
            <h1 className="absolute px-1 text-xs text-white bg-red-500 rounded-full -top-2 -right-2 lg:top-0 lg:right-0">
              {sum > 0 && sum}
            </h1>
            <RiShoppingCartFill className="nav-icons hover:text-[#007ACC]" />
          </div>
        </div>
      </div>
      <div id="recaptcha-container"></div>
    </>
  );
}

export default NavBar;
