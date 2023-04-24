import React, { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";
import { IoIosClose } from "react-icons/io";
import OTPInput from "react-otp-input";
import { useSetRecoilState } from "recoil";
import loginStateAtom from "../atoms/loginAtom";
import profileStateAtom from "../atoms/profileAtom";
import userCartStateAtom from "../atoms/userCartAtom";
import { db } from "../firebase";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

function LoginModal({ setShowLoginModal }) {
  const [otp, setOtp] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const loginState = useSetRecoilState(loginStateAtom);
  const profileState = useSetRecoilState(profileStateAtom);
  const setUserCart = useSetRecoilState(userCartStateAtom);

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {},
      },
      auth
    );
  };

  // auth.onAuthStateChanged((user) => {
  //   if (user) {
  //     const cartRef = doc(db, "carts", user.uid);
  //     console.log("logging in");
  //     setDoc(cartRef, {
  //       items: [],
  //     });
  //   }
  // });

  const getOTP = () => {
    generateRecaptcha();
    const phoneNumberWithCountryCode = "+91" + phoneNumber;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumberWithCountryCode, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const verifyOTP = () => {
    let confirmationResult = window.confirmationResult;

    confirmationResult
      .confirm(otp)
      .then((result) => {
        loginState(true);
        setShowLoginModal(false);
        localStorage.setItem("user", JSON.stringify(result.user));
        profileState(result.user);
        const getCategories = async () => {
          const querySnapshot = await getDocs(collection(db, "carts"));
          const carts = [];
          querySnapshot.forEach((doc) => {
            carts.push({ id: doc.id, ...doc.data() });
          });
          const cart = carts.filter((cart) => cart.userId === result.user.uid);
          setUserCart(cart);
          return cart;
        };
        getCategories();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none font-poppins focus:outline-none">
        <div className="relative w-auto max-w-3xl mx-10 my-6 lg:mx-auto">
          {/*content*/}
          <div className="flex flex-col items-center p-8 bg-white rounded-xl">
            <IoIosClose
              className="absolute w-6 h-6 text-black cursor-pointer top-3 right-5 "
              onClick={() => {
                setShowLoginModal(false);
              }}
            />
            <h1 className="text-xl font-semibold ">Login</h1>
            <input
              type="text"
              disabled={showOTP}
              className="w-full px-4 py-2 mt-5 tracking-widest bg-gray-200 outline-none lg:text-xl rounded-xl text-end disabled:bg-gray-300"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
            {!showOTP && (
              <button
                disabled={phoneNumber.length !== 10 || showOTP}
                onClick={() => {
                  getOTP();
                  setShowOTP(true);
                }}
                className="bg-[#007ACC] mt-2 text-white p-2 rounded-xl disabled:bg-gray-400 "
              >
                Get OTP
              </button>
            )}
            {showOTP && (
              <>
                <h1 className="self-start mt-5 font-semibold">Enter OTP:</h1>
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  placeholder="XXXXXX"
                  containerStyle=""
                  inputStyle="h-[45px] lg:!w-[50px] !w-[50%] bg-gray-200 outline-none rounded-xl  mx-1"
                  renderInput={(props) => <input {...props} />}
                />
                <button
                  className="mt-5 bg-[#007ACC] text-white px-4 py-2 rounded-xl disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={otp.length !== 6}
                  onClick={() => {
                    verifyOTP();
                  }}
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
}

export default LoginModal;
