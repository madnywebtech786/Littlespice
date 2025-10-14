"use client";
import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import MenuItemCard from "../components/MenuItemCard";
import { categories, menuItems } from "../data/menuData";

export default function page() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

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
              slidesPerView={3}
              spaceBetween={10}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Autoplay]}
              loop
              breakpoints={{
                768: { slidesPerView: 4, spaceBetween: 10 },
                1024: { slidesPerView: 4, spaceBetween: 10 },
              }}
              className="w-full lg:w-4/5 mx-auto"
            >
              {categories.map((category) => (
                <SwiperSlide key={category}>
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 w-[90%] mx-auto my-4 ${
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

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 auto-rows-fr">
          {filteredItems.map((item, index) => (
            <MenuItemCard key={item.id ?? index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
