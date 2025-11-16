import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./sections/Hero";
import FoodCategories from "./sections/FoodCategory";
import AboutSection from "./sections/About";
import FeaturedFoods from "./sections/Featured";
import HistorySection from "./sections/History";
import MenuSection from "./sections/FoodMenu";
import FoodGallery from "./sections/FoodGallery";
import Offers from "./sections/Offers";
// import ChefTeam from "./sections/Chefs";
import OpeningHours from "./sections/OpeningHours";
import Testimonials from "./sections/Testimonials";
import Footer from "./components/Footer";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FoodCategories />
      <Offers />
      <AboutSection />
      <FeaturedFoods />
      <HistorySection />
      <MenuSection />
      <FoodGallery />
      {/* <ChefTeam /> */}
      <OpeningHours />
      <Testimonials />
      <Contact />
    </>
  );
}
