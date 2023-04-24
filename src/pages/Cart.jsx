import React, { useEffect } from "react";
import NavBar from "../components/NavBar";

import userCartStateAtom from "../atoms/userCartAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import loginStateAtom from "../atoms/loginAtom";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [userCart, setUserCart] = useRecoilState(userCartStateAtom);
  const loginState = useRecoilValue(loginStateAtom);
  const [payment, setPayment] = React.useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (loginState) {
      if (localStorage.getItem("cart") === null) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      setUserCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, [loginState]);

  let price = 0;
  userCart?.forEach((item) => {
    price += item.price * item.quantity;
  });

  let sum = 0;
  userCart.forEach((item) => {
    sum += item.quantity;
  });

  const handleMinus = (item) => {
    setUserCart(
      userCart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          };
        }
        return cartItem;
      })
    );
    localStorage.setItem(
      "cart",
      JSON.stringify(
        userCart.map((cartItem) => {
          if (cartItem.id === item.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            };
          }
          return cartItem;
        })
      )
    );
  };

  const handlePlus = (item) => {
    setUserCart(
      userCart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
        return cartItem;
      })
    );
    localStorage.setItem(
      "cart",
      JSON.stringify(
        userCart.map((cartItem) => {
          if (cartItem.id === item.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          }
          return cartItem;
        })
      )
    );
  };

  const handleDelete = (item) => {
    setUserCart(
      userCart.filter((cartItem) => {
        return cartItem.id !== item.id;
      })
    );

    localStorage.setItem(
      "cart",
      JSON.stringify(
        userCart.filter((cartItem) => {
          return cartItem.id !== item.id;
        })
      )
    );
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen lg:items-center lg:flex lg:flex-col lg:mt-10">
        <div className="p-5 lg:w-[80%] flex flex-col lg:flex-row lg:justify-around ">
          <div>
            <h1 className="text-xl font-semibold lg:text-3xl ">Your Cart</h1>
            {userCart.length > 0 &&
              userCart.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="relative flex items-center p-5 my-5 space-x-8 bg-gray-100 shadow-xl lg:my-10 rounded-xl lg:w-[40vw]"
                  >
                    <img
                      src={item.image}
                      className="object-contain w-24 h-24 lg:h-40 lg:w-40"
                      alt=""
                    />
                    <div className="lg:flex lg:items-center lg:justify-between lg:w-[22vw]">
                      <h1 className="text-lg font-semibold lg:text-2xl">
                        {item.name}
                      </h1>
                      {item.id != "free-item" && (
                        <>
                          <h1 className="lg:hidden">
                            ₹ {Number(item.price).toLocaleString("en-IN")}
                          </h1>
                          <div className="flex items-center mt-3 space-x-2 lg:mt-0">
                            <h1 className="hidden lg:block lg:mr-4 lg:text-xl">
                              ₹ {Number(item.price).toLocaleString("en-IN")}
                            </h1>
                            <AiOutlineMinusCircle
                              className="w-5 h-5 cursor-pointer lg:w-6 lg:h-6 "
                              onClick={() => {
                                handleMinus(item);
                              }}
                            />
                            <h1 className="mt-[1px] lg:text-xl">
                              {item.quantity}
                            </h1>
                            <AiOutlinePlusCircle
                              className="w-5 h-5 cursor-pointer lg:w-6 lg:h-6 "
                              onClick={() => {
                                handlePlus(item);
                              }}
                            />
                          </div>
                        </>
                      )}
                    </div>
                    {item.id != "free-item" && (
                      <div
                        className="absolute p-1 transition-all bg-gray-300 rounded-full shadow-lg cursor-pointer lg:p-2 bottom-3 right-3 hover:scale-110"
                        onClick={() => {
                          handleDelete(item);
                        }}
                      >
                        <RiDeleteBin5Line className="w-5 h-5 " />
                      </div>
                    )}
                  </div>
                );
              })}
            {userCart.length === 0 && (
              <h1 className="mt-10 text-xl font-semibold text-center">
                Your cart is empty
              </h1>
            )}
          </div>

          <div>
            <div className="flex flex-col p-5 bg-gray-100 shadow-xl rounded-xl lg:sticky lg:top-28">
              <h1 className="text-lg font-semibold pb-2 border-b-[2px]">
                Your Total
              </h1>

              <div className="flex justify-between mt-8">
                <h1>Subtotal ({sum} items)</h1>
                <h1>₹ {Number(price).toLocaleString("en-IN")}</h1>
              </div>
              <div className="flex justify-between mt-2">
                <h1>Shipping</h1>
                <h1>₹ 0</h1>
              </div>

              <div className="flex justify-between pt-2 mt-5 text-lg border-t-2">
                <h1 className="font-semibold">Total</h1>
                <h1 className="font-semibold">
                  ₹ {Number(price).toLocaleString("en-IN")}
                </h1>
              </div>
              <button
                disabled={sum === 0}
                className="mt-5 bg-[#007ACC] px-10 w-fit self-center py-3 text-white font-semibold rounded-full disabled:bg-gray-300 "
                style={{
                  backgroundColor: payment ? "#00B33C" : "",
                }}
                onClick={() => {
                  setPayment(true);
                  setTimeout(() => navigate("/success"), 1500);
                  localStorage.removeItem("cart");
                  // setUserCart([]);
                }}
              >
                {payment ? (
                  <div
                    className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em]"
                    role="status"
                  ></div>
                ) : (
                  <h1>Proceed to Pay</h1>
                )}
              </button>
              <div>
                <h1 className="mt-5 text-sm font-semibold">Still Deciding?</h1>
                <h1 className="text-xs ">
                  You can save your cart and come back later to complete your
                  order.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
