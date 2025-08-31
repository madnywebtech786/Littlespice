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
  // 🥟 Samosa
  {
    id: 1,
    name: "Samosa",
    desc: "Crispy fried pastry stuffed with spiced potatoes and peas.",
    price: "$3.50",
    img: "/images/menu/samosa.png",
    category: "Samosa",
  },
  {
    id: 2,
    name: "Samosa Chat",
    desc: "Crispy samosa topped with yogurt, chutneys & spices.",
    price: "$5.99",
    img: "/images/menu/samosa-chat.png",
    category: "Samosa",
  },

  // 🍛 Desi
  {
    id: 3,
    name: "Biryani",
    desc: "Fragrant basmati rice layered with spiced meat & herbs.",
    price: "$12.99",
    img: "/images/menu/biryani.png",
    category: "Desi",
  },
  {
    id: 4,
    name: "Nihari",
    desc: "Slow-cooked beef stew in rich spices.",
    price: "$13.99",
    img: "/images/menu/nihari.png",
    category: "Desi",
  },
  {
    id: 5,
    name: "Papri Chat",
    desc: "Crispy wafers, potatoes, chickpeas & yogurt chutney.",
    price: "$6.99",
    img: "/images/menu/papri-chat.png",
    category: "Desi",
  },
  {
    id: 6,
    name: "Haleem",
    desc: "Wheat, lentils & meat cooked into a savory porridge.",
    price: "$11.99",
    img: "/images/menu/haleem.png",
    category: "Desi",
  },
  {
    id: 7,
    name: "Daal Makhni",
    desc: "Creamy black lentils simmered with butter & cream.",
    price: "$10.99",
    img: "/images/menu/daal-makhni.png",
    category: "Desi",
  },
  {
    id: 8,
    name: "Coconut Curry",
    desc: "Aromatic curry made with coconut milk & spices.",
    price: "$11.50",
    img: "/images/menu/coconut-curry.png",
    category: "Desi",
  },
  {
    id: 9,
    name: "Dahi Bhaly",
    desc: "Soft lentil dumplings topped with yogurt & chutneys.",
    price: "$5.50",
    img: "/images/menu/dahi-bhaly.png",
    category: "Desi",
  },

  // 🥟 Pakora
  {
    id: 10,
    name: "Bread Pakora",
    desc: "Stuffed bread slices dipped in gram flour batter & fried.",
    price: "$4.99",
    img: "/images/menu/bread-pakora.png",
    category: "Pakora",
  },
  {
    id: 11,
    name: "Gobi Pakora",
    desc: "Cauliflower florets deep fried in spiced gram flour batter.",
    price: "$5.50",
    img: "/images/menu/gobi-pakora.png",
    category: "Pakora",
  },
  {
    id: 12,
    name: "Fish Pakora",
    desc: "Fish pieces coated in spiced batter & fried till crispy.",
    price: "$8.99",
    img: "/images/menu/fish-pakora.png",
    category: "Pakora",
  },
  {
    id: 13,
    name: "Pakora",
    desc: "Classic mixed vegetable fritters fried golden brown.",
    price: "$4.50",
    img: "/images/menu/pakora.png",
    category: "Pakora",
  },

  // 🥤 Shakes
  {
    id: 14,
    name: "Mango Shake",
    desc: "Refreshing mango shake made with fresh mangoes & milk.",
    price: "$6.50",
    img: "/images/menu/mango-shake.png",
    category: "Shakes",
  },
  {
    id: 15,
    name: "Strawberry Shake",
    desc: "Sweet strawberry shake with creamy texture.",
    price: "$6.50",
    img: "/images/menu/strawberry-shake.png",
    category: "Shakes",
  },
  {
    id: 16,
    name: "Rose Shake",
    desc: "Delicate rose-flavored shake blended with milk.",
    price: "$6.00",
    img: "/images/menu/rose-shake.png",
    category: "Shakes",
  },
  {
    id: 17,
    name: "Oreo Shake",
    desc: "Creamy shake blended with Oreos & chocolate syrup.",
    price: "$6.99",
    img: "/images/menu/oreo-shake.png",
    category: "Shakes",
  },
  {
    id: 18,
    name: "Chocolate Shake",
    desc: "Rich chocolate shake topped with whipped cream.",
    price: "$6.99",
    img: "/images/menu/chochlate-shake.png",
    category: "Shakes",
  },

  // 🍵 Tea
  {
    id: 19,
    name: "Karak Tea",
    desc: "Strong spiced tea brewed with milk & cardamom.",
    price: "$2.99",
    img: "/images/menu/karak-tea.png",
    category: "Tea",
  },

  // 🍰 Deserts
  {
    id: 20,
    name: "Chocolate Lava Cake",
    desc: "Warm chocolate cake with molten center.",
    price: "$7.50",
    img: "/images/menu/choclate-lava-cake.png",
    category: "Deserts",
  },
  {
    id: 21,
    name: "Kheer",
    desc: "Traditional rice pudding cooked with milk & sugar.",
    price: "$5.99",
    img: "/images/menu/kheer.png",
    category: "Deserts",
  },
  {
    id: 22,
    name: "Gulab Jamun",
    desc: "Soft fried milk dumplings soaked in syrup.",
    price: "$5.50",
    img: "/images/menu/gulab-jamun.png",
    category: "Deserts",
  },
];

const categories = [
  "Samosa",
  "Desi",
  "Pakora",
  "Shakes",
  "Tea",
  "Deserts",
];

  const [activeCategory, setActiveCategory] = useState("Samosa");

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
              slidesPerView={3}
              spaceBetween={10}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Autoplay]}
              loop
              breakpoints={{
                768: { slidesPerView: 4, spaceBetween: 10 },
                1024: { slidesPerView: 6, spaceBetween: 10 },
              }}
              className="w-full lg:w-4/5 mx-auto"
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

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 auto-rows-fr">
          {menuItems.map((item, index) => (
            <MenuItemCard {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
