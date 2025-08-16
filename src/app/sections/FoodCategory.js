"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation  } from "swiper/modules";

const categories = [
  {
    name: "Craft Pizza",
    items: 25,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-1.png",
    shadowImage: "/images/menuBottom2.svg",
    href: "#",
  },
  {
    name: "Grilled Chicken",
    items: 22,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-2.png",
    shadowImage: "/images/menuBottom2.svg",
    href: "#",
  },
  {
    name: "Gourmet Burgers",
    items: 23,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-3.png",
    shadowImage: "/images/menuBottom2.svg",
    href: "#",
  },
  {
    name: "Meal Boxes",
    items: 22,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-4.png",
    shadowImage: "/images/menuBottom2.svg",
    href: "#",
  },
  {
    name: "Fried Chicken",
    items: 25,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-5.png",
    shadowImage: "/images/menuBottom2.svg",
    href: "#",
  },
  {
    name: "Food Combos",
    items: 25,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-6.png",
    shadowImage: "/images/menuBottom2.svg",
    href: "#",
  },
  {
    name: "Craft Pizza",
    items: 25,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-1.png",
    shadowImage: "/images/menuBottom2.svg",
    href: "#",
  },
  {
    name: "Grilled Chicken",
    items: 22,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-2.png",
    shadowImage: "/images/menuBottom2.svg",
    href: "#",
  },
  {
    name: "Gourmet Burgers",
    items: 23,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-3.png",
    shadowImage: "/images/menuBottom2.svg",
    href: "#",
  },
  {
    name: "Meal Boxes",
    items: 22,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-4.png",
    shadowImage: "/images/menuBottom2.svg",
    href: "#",
  },
  {
    name: "Fried Chicken",
    items: 25,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-5.png",
    shadowImage: "/images/menuBottom2.svg",
    href: "#",
  },
  {
    name: "Food Combos",
    items: 25,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-6.png",
    shadowImage: "/images/menuBottom2.svg",
    href: "#",
  },
];

const FoodCategories = () => {
   const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-[#FFFBF2] py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="container mx-auto px-4">
        <div className="relative mb-12">
          <div className="text-center">
            <span className="text-primary-red font-bold text-sm tracking-widest uppercase">
              Food Category
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-text mt-2">
              Browse <span className="text-primary-red"> Fast Foods </span>
              Category
            </h2>
            <div className="flex justify-center mt-1">
              <Image
                unoptimized
                src="/images/divider.svg"
                alt="title shape"
                width={304}
                height={10}
              />
            </div>
          </div>
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-0 space-x-2">
            <button
              ref={prevRef}
              className="w-11 h-11 rounded-full bg-primary-red text-white flex items-center justify-center hover:bg-red-700 transition"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              ref={nextRef}
              className="w-11 h-11 rounded-full bg-primary-red text-white flex items-center justify-center hover:bg-red-700 transition"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay,Navigation]}
          loop
          navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
          
        }}
         onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        >
          {categories.map((category, index) => (
            <SwiperSlide>
              <div className="pb-16 flex flex-col group items-center gap-2 bg-[#fff3d6] hover:bg-primary-red duration-200 rounded-t-full p-4">
                <a
                  href={category.href}
                  key={index}
                  className="flex-shrink-0 group text-center w-[171px]"
                >
                  <div className="relative w-[171px] h-[171px] mx-auto">
                    <Image
                      unoptimized
                      src={category.image}
                      alt={category.name}
                      width={171}
                      height={171}
                      className="relative z-10 w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-dark-text group-hover:text-white   transition-colors duration-300 relative z-20">
                    {category.name}
                  </h3>
                  <p className="text-gray-text group-hover:text-white mt-1 relative z-20">
                    {category.items} Items Available
                  </p>
                </a>
              </div>
              <Image
                unoptimized
                src={category.shadowImage}
                alt=""
                width={420}
                height={300}
                className="w-full mx-auto z-10 absolute top-9/12 left-0 "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FoodCategories;
