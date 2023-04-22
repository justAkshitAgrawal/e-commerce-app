import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-[#f7f7f7] p-5 mt-10 flex flex-col items-center justify-center">
      <div className=" lg:w-[80%]  ">
        <div className="justify-between hidden px-2 py-5 mb-5 lg:flex">
          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold ">Order your products</h1>
            <h1>Referral program</h1>
            <h1>Our pickup location</h1>
            <h1>Become a vendor</h1>
            <h1>What to sell</h1>
            <h1>Open a drop-off point</h1>
          </div>

          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold ">About us</h1>
            <h1>About our company</h1>
            <h1>Jobs</h1>
            <h1>Press contacts</h1>
            <h1>Offers</h1>
            <h1>Development</h1>
          </div>

          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold ">Assistants</h1>
            <h1>How to order</h1>
            <h1>Shipping</h1>
            <h1>Pay</h1>
            <h1>Security</h1>
          </div>

          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold ">For business</h1>
            <h1>Add item</h1>
            <h1>Add company</h1>
            <h1>My company</h1>
            <h1>Gifting</h1>
          </div>

          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold ">All rights reserved</h1>
            <div className="flex items-center justify-around">
              <AiOutlineTwitter className="w-5 h-5" />
              <AiFillYoutube className="w-5 h-5" />
              <AiFillFacebook className="w-5 h-5" />
              <AiFillInstagram className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="w-full h-1 bg-gray-200 rounded-full"></div>
        <div className="flex items-center px-2 mt-4 space-x-4 lg:px-4 lg:mt-8 lg:pb-10 lg:space-x-0 lg:justify-between lg:text-xl">
          <h1 className="text-sm font-semibold lg:text-2xl ">AMP</h1>
          <h1>Online Store</h1>
          <h1>Jobs</h1>
          <h1>Post</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
