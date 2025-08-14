"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const menuItems = [
  {
    id: 1,
    name: "Grill Chicken Pizza",
    description: "Candied Jerusalem artichokes, truffle",
    price: "$30.99",
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_14-150x150.png",
    category: "Pizza",
  },
  {
    id: 2,
    name: "Smoked Salmon Bagel",
    description: "Smoky Pepperoni, Melting Cheese",
    price: "$39.85",
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_1-150x150.png",
    category: "Burger",
  },
  {
    id: 3,
    name: "Bacon Italian Pizza",
    description: "Spicy Jalapeño, Creamy Ranch",
    price: "$20.99",
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_4-150x150.png",
    category: "Pizza",
  },
  {
    id: 4,
    name: "Delicious Pizza",
    description: "Spicy Jalapeño, Creamy Ranch",
    price: "$40.99",
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_7-150x150.png",
    category: "Pizza",
  },
  {
    id: 5,
    name: "Delicious Pizza",
    description: "Truffle Mushroom, Garlic Butter",
    price: "$32.85",
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_9-150x150.png",
    category: "Pizza",
  },
  {
    id: 6,
    name: "Combo: Solo Snack Pack",
    description: "1 Personal Pizza + Fries + 1 Drinks",
    price: "$232.85",
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_10-150x150.png",
    category: "Combo",
  },
  {
    id: 7,
    name: "Combo: Family Feast",
    description: "2 Medium Pizza + 2 Side + 1 Dessert + 4 Soft Drinks",
    price: "$60.00",
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_11-150x150.png",
    category: "Combo",
  },
  {
    id: 8,
    name: "Fry Chicken Ball",
    description: "At the heart of our kitchen are bold flavors",
    price: "$177.85",
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_3-150x150.png",
    category: "Chicken",
  },
  {
    id: 9,
    name: "Delicious Black Burger",
    description: "The soul of our kitchen: bold ingredients",
    price: "$30.99",
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_5-150x150.png",
    category: "Burger",
  },
  {
    id: 10,
    name: "Solo Snack Pack",
    description: "Our kitchen thrives on premium ingredients",
    price: "$30.00",
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_6-150x150.png",
    category: "Combo",
  },
  {
    id: 11,
    name: "Grill Chicken Fry",
    description: "Sweet Pineapple, Tangy Ham",
    price: "$16.85",
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_details_1_1-150x150.png",
    category: "Chicken",
  },
];

const categories = ["Pizza", "Burger", "Chicken", "Combo"];
const features = [
  "Event Creating",
  "Meal Plans",
  "Food Delivery",
  "Diet Plans",
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Pizza");

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#FFFBF2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-lg font-bold text-primary-red mb-2">Menu Card</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-text leading-tight">
            Our Fast Foods Menu Card
          </h2>
          <Image
            unoptimized
            src="https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/title-shape.png"
            alt="Title shape"
            width={100}
            height={16}
            className="mx-auto mt-4"
          />
        </div>
        <div className="flex justify-center flex-wrap gap-3 md:gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? "bg-primary-red text-white shadow-lg"
                  : "bg-white text-dark-text hover:bg-primary-red hover:text-white shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <aside className="lg:col-span-4 space-y-8 hidden lg:block">
            <Image
              unoptimized
              src="https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/menu-1-1.jpg"
              alt="Assorted food items"
              width={390}
              height={330}
              className="rounded-lg w-full max-h-[550px] object-cover"
            />
          </aside>

          <main className="lg:col-span-8">
            <div className="space-y-4 max-h-[820px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-primary-red scrollbar-track-red-100">
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
                  <div className="flex-grow flex flex-col md:flex-row md:items-baseline">
                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-bold text-dark-text hover:text-primary-red transition-colors duration-300 cursor-pointer">
                        {item.name}
                      </h3>
                      <p className="text-gray-text text-sm mt-1 max-w-xs">
                        {item.description}
                      </p>
                    </div>
                    <span className="hidden md:inline-block flex-grow border-b-2 border-dotted border-gray-300 mx-4 mb-2"></span>
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
