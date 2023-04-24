import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import TrendingProducts from "../components/TrendingProducts";
import HeroCarousel from "../components/HeroCarousel";
import Categories from "../components/Categories";
import DailyPromotions from "../components/DailyPromotions";
import PromoSections from "../components/PromoSections";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import loginStateAtom from "../atoms/loginAtom";
import userCartStateAtom from "../atoms/userCartAtom";

function Home() {
  const loginState = useRecoilValue(loginStateAtom);
  const setUserCart = useSetRecoilState(userCartStateAtom);

  useEffect(() => {
    if (!loginState) {
      toast.info("Please login to avail full functionality", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (loginState) {
      // setUserCart(JSON.parse(localStorage.getItem("userCart")));
      if (localStorage.getItem("cart") === null) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      setUserCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, [loginState]);

  return (
    <div className="min-h-screen">
      {loginState ? null : <ToastContainer />}
      <NavBar />
      <TrendingProducts />
      <HeroCarousel />
      <Categories />
      <DailyPromotions />
      <PromoSections />
      <Brands />
      <Footer />
    </div>
  );
}

export default Home;
