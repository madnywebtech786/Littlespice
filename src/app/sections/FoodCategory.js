"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const categories = [
  {
    name: "Craft Pizza",
    items: 25,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-1.png",
    shadowImage:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/cat-1-bottom.png",
    href: "#",
  },
  {
    name: "Grilled Chicken",
    items: 22,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-2.png",
    shadowImage:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/cat-1-bottom.png",
    href: "#",
  },
  {
    name: "Gourmet Burgers",
    items: 23,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-3.png",
    shadowImage:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/cat-1-bottom.png",
    href: "#",
  },
  {
    name: "Meal Boxes",
    items: 22,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-4.png",
    shadowImage:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/cat-1-bottom.png",
    href: "#",
  },
  {
    name: "Fried Chicken",
    items: 25,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-5.png",
    shadowImage:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/cat-1-bottom.png",
    href: "#",
  },
  {
    name: "Food Combos",
    items: 25,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-6.png",
    shadowImage:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/cat-1-bottom.png",
    href: "#",
  },
  {
    name: "Craft Pizza",
    items: 25,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-1.png",
    shadowImage:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/cat-1-bottom.png",
    href: "#",
  },
  {
    name: "Grilled Chicken",
    items: 22,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-2.png",
    shadowImage:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/cat-1-bottom.png",
    href: "#",
  },
  {
    name: "Gourmet Burgers",
    items: 23,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-3.png",
    shadowImage:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/cat-1-bottom.png",
    href: "#",
  },
  {
    name: "Meal Boxes",
    items: 22,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-4.png",
    shadowImage:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/cat-1-bottom.png",
    href: "#",
  },
  {
    name: "Fried Chicken",
    items: 25,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-5.png",
    shadowImage:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/cat-1-bottom.png",
    href: "#",
  },
  {
    name: "Food Combos",
    items: 25,
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/category_1-6.png",
    shadowImage:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/cat-1-bottom.png",
    href: "#",
  },
];

const FoodCategories = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#FEFBF4] py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="container mx-auto px-4">
        <div className="relative mb-12">
          <div className="text-center">
            <span className="text-primary-red font-bold text-sm tracking-widest uppercase">
              Food Category
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-text mt-2">
              Browse Fast Foods Category
            </h2>
            <div className="flex justify-center mt-4">
              <Image
                unoptimized
                src="https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/title-shape.png"
                alt="title shape"
                width={164}
                height={15}
              />
            </div>
          </div>
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-0 space-x-2">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full bg-primary-red text-white flex items-center justify-center hover:bg-red-700 transition"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
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
          modules={[Autoplay]}
          loop
        >
          {categories.map((category, index) => (
            <SwiperSlide>
              <a
                href={category.href}
                key={index}
                className="flex-shrink-0 group text-center w-[171px]"
              >
                <div className="relative w-[171px] h-[171px] mx-auto mb-5">
                  <Image
                    unoptimized
                    src={category.shadowImage}
                    alt=""
                    width={171}
                    height={62}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2"
                  />
                  <Image
                    unoptimized
                    src={category.image}
                    alt={category.name}
                    width={171}
                    height={171}
                    className="relative z-10 w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-dark-text group-hover:text-primary-red transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-text mt-1">
                  {category.items} Items Available
                </p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FoodCategories;
