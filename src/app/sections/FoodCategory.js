"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const categories = [
  {
    name: "Starters",
    items: 8,
    image: "/images/menu/samosa.png",
    href: "/menu",
  },
  {
    name: "Veg Curry Platters",
    items: 4,
    image: "/images/featurefood/vegcurry.png",
    href: "/menu",
  },
  {
    name: "Chicken Curry Platters",
    items: 4,
    image: "/images/featurefood/chickencurry.png",
    href: "/menu",
  },
  {
    name: "Lamb & Beef Curry Platters",
    items: 4,
    image: "/images/featurefood/beefcurry.png",
    href: "/menu",
  },
  {
    name: "Biryani",
    items: 2,
    image: "/images/menu/biryani.png",
    href: "/menu",
  },
  {
    name: "Poutiene",
    items: 2,
    image: "/images/featurefood/poutiene.png",
    href: "/menu",
  },
  {
    name: "BBQ Platters",
    items: 13,
    image: "/images/featurefood/bbq.png",
    href: "/menu",
  },
  {
    name: "Desserts",
    items: 3,
    image: "/images/featurefood/kheer.png",
    href: "/menu",
  },
  {
    name: "Side Dishes",
    items: 16,
    image: "/images/menu/pakora.png",
    href: "/menu",
  },
  {
    name: "BBQ Sides",
    items: 8,
    image: "/images/featurefood/bbq-side.png",
    href: "/menu",
  },
  {
    name: "Hot Drinks",
    items: 4,
    image: "/images/menu/karak-tea.png",
    href: "/menu",
  },
  {
    name: "Shakes",
    items: 12,
    image: "/images/menu/oreo-shake.png",
    href: "/menu",
  },
];

const FoodCategories = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const shadowImg = "/images/menuBottom2.svg";

  return (
    <section className="bg-[#FFFBF2] py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="">
        <div className="relative mb-12">
          <div className="text-center">
            <span className="text-primary-red font-bold text-sm tracking-widest uppercase">
              Food Category
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-text mt-2">
              Browse <span className="text-primary-red"> Foods </span>
              Category
            </h2>
            <div className="flex justify-center mt-1">
              <Image
                src="/images/divider.svg"
                alt="title shape"
                width={304}
                height={10}
                 loading="lazy"
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
          slidesPerView={2}
          spaceBetween={10}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay, Navigation]}
          loop
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            768: { slidesPerView: 3, spaceBetween: 10 },
            1024: { slidesPerView: 6, spaceBetween: 10 },
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
                      src={category.image}
                      alt={category.name}
                      width={171}
                      height={171}
                       loading="lazy"
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
                src={shadowImg}
                alt=""
                width={420}
                height={300}
                 loading="lazy"
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
