"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const menuItems = [
  // 🥟 Samosa
  {
    id: 1,
    name: "Samosa",
    description: "Crispy fried pastry stuffed with spiced potatoes and peas.",
    price: "$3.50",
    image: "/images/menu/samosa.png",
    category: "Samosa",
  },
  {
    id: 2,
    name: "Samosa Chat",
    description: "Crispy samosa topped with yogurt, chutneys & spices.",
    price: "$5.99",
    image: "/images/menu/samosa-chat.png",
    category: "Samosa",
  },

  // 🍛 Desi
  {
    id: 3,
    name: "Biryani",
    description: "Fragrant basmati rice layered with spiced meat & herbs.",
    price: "$12.99",
    image: "/images/menu/biryani.png",
    category: "Desi",
  },
  {
    id: 4,
    name: "Nihari",
    description: "Slow-cooked beef stew in rich spices.",
    price: "$13.99",
    image: "/images/menu/nihari.png",
    category: "Desi",
  },
  {
    id: 5,
    name: "Papri Chat",
    description: "Crispy wafers, potatoes, chickpeas & yogurt chutney.",
    price: "$6.99",
    image: "/images/menu/papri-chat.png",
    category: "Desi",
  },
  {
    id: 6,
    name: "Haleem",
    description: "Wheat, lentils & meat cooked into a savory porridge.",
    price: "$11.99",
    image: "/images/menu/haleem.png",
    category: "Desi",
  },
  {
    id: 7,
    name: "Daal Makhni",
    description: "Creamy black lentils simmered with butter & cream.",
    price: "$10.99",
    image: "/images/menu/daal-makhni.png",
    category: "Desi",
  },
  {
    id: 8,
    name: "Coconut Curry",
    description: "Aromatic curry made with coconut milk & spices.",
    price: "$11.50",
    image: "/images/menu/coconut-curry.png",
    category: "Desi",
  },
  {
    id: 9,
    name: "Dahi Bhaly",
    description: "Soft lentil dumplings topped with yogurt & chutneys.",
    price: "$5.50",
    image: "/images/menu/dahi-bhaly.png",
    category: "Desi",
  },

  // 🥟 Pakora
  {
    id: 10,
    name: "Bread Pakora",
    description: "Stuffed bread slices dipped in gram flour batter & fried.",
    price: "$4.99",
    image: "/images/menu/bread-pakora.png",
    category: "Pakora",
  },
  {
    id: 11,
    name: "Gobi Pakora",
    description: "Cauliflower florets deep fried in spiced gram flour batter.",
    price: "$5.50",
    image: "/images/menu/gobi-pakora.png",
    category: "Pakora",
  },
  {
    id: 12,
    name: "Fish Pakora",
    description: "Fish pieces coated in spiced batter & fried till crispy.",
    price: "$8.99",
    image: "/images/menu/fish-pakora.png",
    category: "Pakora",
  },
  {
    id: 13,
    name: "Pakora",
    description: "Classic mixed vegetable fritters fried golden brown.",
    price: "$4.50",
    image: "/images/menu/pakora.png",
    category: "Pakora",
  },

  // 🥤 Shakes
  {
    id: 14,
    name: "Mango Shake",
    description: "Refreshing mango shake made with fresh mangoes & milk.",
    price: "$6.50",
    image: "/images/menu/mango-shake.png",
    category: "Shakes",
  },
  {
    id: 15,
    name: "Strawberry Shake",
    description: "Sweet strawberry shake with creamy texture.",
    price: "$6.50",
    image: "/images/menu/strawberry-shake.png",
    category: "Shakes",
  },
  {
    id: 16,
    name: "Rose Shake",
    description: "Delicate rose-flavored shake blended with milk.",
    price: "$6.00",
    image: "/images/menu/rose-shake.png",
    category: "Shakes",
  },
  {
    id: 17,
    name: "Oreo Shake",
    description: "Creamy shake blended with Oreos & chocolate syrup.",
    price: "$6.99",
    image: "/images/menu/oreo-shake.png",
    category: "Shakes",
  },
  {
    id: 18,
    name: "Chocolate Shake",
    description: "Rich chocolate shake topped with whipped cream.",
    price: "$6.99",
    image: "/images/menu/chochlate-shake.png",
    category: "Shakes",
  },

  // 🍵 Tea
  {
    id: 19,
    name: "Karak Tea",
    description: "Strong spiced tea brewed with milk & cardamom.",
    price: "$2.99",
    image: "/images/menu/karak-tea.png",
    category: "Tea",
  },

  // 🍰 Deserts
  {
    id: 20,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center.",
    price: "$7.50",
    image: "/images/menu/choclate-lava-cake.png",
    category: "Deserts",
  },
  {
    id: 21,
    name: "Kheer",
    description: "Traditional rice pudding cooked with milk & sugar.",
    price: "$5.99",
    image: "/images/menu/kheer.png",
    category: "Deserts",
  },
  {
    id: 22,
    name: "Gulab Jamun",
    description: "Soft fried milk dumplings soaked in syrup.",
    price: "$5.50",
    image: "/images/menu/gulab-jamun.png",
    category: "Deserts",
  },
];

const categories = ["Samosa", "Desi", "Pakora", "Shakes", "Tea", "Deserts"];

const features = [
  "Event Creating",
  "Meal Plans",
  "Food Delivery",
  "Diet Plans",
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Samosa");

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

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

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <aside className="lg:col-span-4 space-y-8 hidden lg:block">
            <Image
              unoptimized
              src="/images/menu-side.png"
              alt="Assorted food items"
              width={600}
              height={600}
              className="rounded-lg w-full h-[550px]"
            />
          </aside>

          <main className="lg:col-span-8">
            <div className="space-y-4 max-h-[560px] overflow-y-auto pr-4 custom-scrollbar">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 transition-all duration-300 hover:bg-white hover:shadow-lg rounded-xl"
                >
                  <Image
                    unoptimized
                    src={item.image}
                    alt={item.name}
                    width={90}
                    height={90}
                    className="flex-shrink-0 rounded-full w-[70px] h-[70px] md:w-[90px] md:h-[90px] object-cover border-2 border-white shadow-sm"
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
