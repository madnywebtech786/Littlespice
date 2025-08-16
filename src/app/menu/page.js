"use client";
import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import MenuItemCard from "../components/MenuItemCard";
export default function page() {
  const menuItems = [
    {
      id: 1,
      name: "Grill Chicken Pizza",
      desc: "Candied Jerusalem artichokes, truffle",
      price: "$30.99",
      img: "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_14-150x150.png",
      category: "Pizza",
    },
    {
      id: 2,
      name: "Smoked Salmon Bagel",
      desc: "Smoky Pepperoni, Melting Cheese",
      price: "$39.85",
      img: "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_1-150x150.png",
      category: "Burger",
    },
    {
      id: 3,
      name: "Bacon Italian Pizza",
      desc: "Spicy Jalapeño, Creamy Ranch",
      price: "$20.99",
      img: "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_4-150x150.png",
      category: "Pizza",
    },
    {
      id: 4,
      name: "Delicious Pizza",
      desc: "Spicy Jalapeño, Creamy Ranch",
      price: "$40.99",
      img: "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_7-150x150.png",
      category: "Pizza",
    },
    {
      id: 5,
      name: "Delicious Pizza",
      desc: "Truffle Mushroom, Garlic Butter",
      price: "$32.85",
      img: "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_9-150x150.png",
      category: "Pizza",
    },
    {
      id: 6,
      name: "Combo: Solo Snack Pack",
      desc: "1 Personal Pizza + Fries + 1 Drinks",
      price: "$232.85",
      img: "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_10-150x150.png",
      category: "Combo",
    },
    {
      id: 7,
      name: "Combo: Family Feast",
      desc: "2 Medium Pizza + 2 Side + 1 Dessert + 4 Soft Drinks",
      price: "$60.00",
      img: "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_11-150x150.png",
      category: "Combo",
    },
    {
      id: 8,
      name: "Fry Chicken Ball",
      desc: "At the heart of our kitchen are bold flavors",
      price: "$177.85",
      img: "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_3-150x150.png",
      category: "Chicken",
    },
    {
      id: 9,
      name: "Delicious Black Burger",
      desc: "The soul of our kitchen: bold ingredients",
      price: "$30.99",
      img: "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_5-150x150.png",
      category: "Burger",
    },
    {
      id: 10,
      name: "Solo Snack Pack",
      desc: "Our kitchen thrives on premium ingredients",
      price: "$30.00",
      img: "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_6-150x150.png",
      category: "Combo",
    },
    {
      id: 11,
      name: "Grill Chicken Fry",
      desc: "Sweet Pineapple, Tangy Ham",
      price: "$16.85",
      img: "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_details_1_1-150x150.png",
      category: "Chicken",
    },
  ];

  const categories = [
    "Pizza",
    "Burger",
    "Chicken",
    "Combo",
    "Pizza",
    "Burger",
    "Chicken",
    "Combo",
    "Pizza",
    "Burger",
    "Chicken",
    "Combo",
  ];
  const [activeCategory, setActiveCategory] = useState("Pizza");

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );
  return (
    <div>
      <Breadcrumb name={"Our Menu"} />
      <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#FFFBF2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark-text leading-tight">
              Our <span className="text-primary-red"> Foods</span> Menu Card
            </h2>
            <Image
              unoptimized
              src="/images/divider.svg"
              alt="Title shape"
              width={304}
              height={10}
              className="mx-auto mt-4"
            />
          </div>
          <div className="flex justify-center flex-wrap gap-3 md:gap-4 mb-8">
            <Swiper
              slidesPerView={8}
              spaceBetween={10}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Autoplay]}
              loop
              className="w-4/5 mx-auto"
            >
              {categories.map((category) => (
                <SwiperSlide>
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-105 w-[90%] mx-auto my-4 ${
                      activeCategory === category
                        ? "bg-primary-red text-white shadow-lg"
                        : "bg-white text-dark-text hover:bg-primary-red hover:text-white shadow-md"
                    }`}
                  >
                    {category}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-4 gap-10 auto-rows-fr">
          {menuItems.map((item, index) => (
            <MenuItemCard {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
