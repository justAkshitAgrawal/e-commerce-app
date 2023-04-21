import React from "react";
import NavBar from "../components/NavBar";
import TrendingProducts from "../components/TrendingProducts";
import HeroCarousel from "../components/HeroCarousel";
import Categories from "../components/Categories";
import DailyPromotions from "../components/DailyPromotions";
import PromoSections from "../components/PromoSections";
import Brands from "../components/Brands";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen">
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
