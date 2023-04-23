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
            <h1 className="font-semibold footer-link ">Order your products</h1>
            <h1 className="footer-link">Referral program</h1>
            <h1 className="footer-link">Our pickup location</h1>
            <h1 className="footer-link">Become a vendor</h1>
            <h1 className="footer-link"> What to sell</h1>
            <h1 className="footer-link">Open a drop-off point</h1>
          </div>

          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold footer-link">About us</h1>
            <h1 className="footer-link">About our company</h1>
            <h1 className="footer-link">Jobs</h1>
            <h1 className="footer-link">Press contacts</h1>
            <h1 className="footer-link">Offers</h1>
            <h1 className="footer-link">Development</h1>
          </div>

          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold footer-link">Assistants</h1>
            <h1 className="footer-link">How to order</h1>
            <h1 className="footer-link">Shipping</h1>
            <h1 className="footer-link">Pay</h1>
            <h1 className="footer-link">Security</h1>
          </div>

          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold footer-link">For business</h1>
            <h1 className="footer-link">Add item</h1>
            <h1 className="footer-link">Add company</h1>
            <h1 className="footer-link">My company</h1>
            <h1 className="footer-link">Gifting</h1>
          </div>

          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold ">All rights reserved</h1>
            <div className="flex items-center justify-around">
              <AiOutlineTwitter className="footer-icons" />
              <AiFillYoutube className="footer-icons" />
              <AiFillFacebook className="footer-icons" />
              <AiFillInstagram className="footer-icons" />
            </div>
          </div>
        </div>

        <div className="w-full h-1 bg-gray-200 rounded-full"></div>
        <div className="flex items-center px-2 mt-4 space-x-4 lg:px-4 lg:mt-8 lg:pb-10 lg:space-x-0 lg:justify-between lg:text-xl">
          <h1 className="text-sm font-semibold lg:text-2xl">AMP</h1>
          <h1 className="footer-link">Online Store</h1>
          <h1 className="footer-link">Jobs</h1>
          <h1 className="footer-link">Post</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
