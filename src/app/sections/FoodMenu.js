"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { categories, menuItems } from "../data/menuData";

const features = [
  "Event Creating",
  "Meal Plans",
  "Food Delivery",
  "Diet Plans",
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#FFFBF2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-lg font-bold text-primary-red mb-2">Menu Card</p>
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
            loading="lazy"
            draggable={false}
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
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 w-[90%] mx-auto my-4 ${
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

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <aside className="lg:col-span-4 space-y-8 hidden lg:block">
            <Image
              src="/images/menu-side.png"
              alt="Assorted food items"
              width={600}
              height={600}
              className="rounded-lg w-full h-[550px]"
              loading="lazy"
              draggable={false}
            />
          </aside>

          <main className="lg:col-span-8">
            <div
              className="space-y-4 max-h-[560px] overflow-y-auto pr-4 custom-scrollbar"
              // promote this scrolling container to its own layer to reduce jank
              style={{ willChange: "transform", transform: "translateZ(0)" }}
            >
              {filteredItems.map((item, index) => (
                <div
                  key={item.id ?? `${item.name ?? "item"}-${index}`}
                  className="flex items-center gap-4 p-4 transition-all duration-300 hover:bg-white hover:shadow-lg rounded-xl"
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={90}
                    height={90}
                    className="flex-shrink-0 rounded-full w-[70px] h-[70px] md:w-[90px] md:h-[90px] object-cover "
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="flex-grow flex flex-col md:flex-row md:items-center">
                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-bold text-dark-text hover:text-primary-red transition-colors duration-300 cursor-pointer">
                        {item.name}
                      </h3>
                      <p className="text-gray-text text-sm mt-1 max-w-xs">
                        {item.description}
                      </p>
                    </div>
                    <span className="hidden md:inline-block flex-grow border-b-2 border-dotted border-primary-red mx-4 "></span>
                    <p className="text-lg font-bold text-primary-red flex-shrink-0 mt-2 md:mt-0">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
