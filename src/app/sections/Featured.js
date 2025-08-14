"use client";

import Image from "next/image";
import Link from "next/link";

const foodItems = [
  {
    imageSrc:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_3-305x300.png",
    price: "$177.85",
    title: "Fry Chicken Ball",
    description:
      "At the heart of our kitchen are bold flavors, high-quality ingredients",
    cartLink: "/?add-to-cart=637",
    productLink: "/barab-shop/fry-chicken-ball/",
  },
  {
    imageSrc:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_5-305x300.png",
    price: "$30.99",
    title: "Delicious Black Burger",
    description:
      "The soul of our kitchen: bold flavors, high-quality ingredients",
    cartLink: "/?add-to-cart=635",
    productLink: "/barab-shop/delicious-black-burger/",
  },
  {
    imageSrc:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_6-305x300.png",
    price: "$30.00",
    title: "Solo Snack Pack",
    description: "Our kitchen thrives on bold flavors and premium ingredients",
    cartLink: "/?add-to-cart=634",
    productLink: "/barab-shop/solo-snack-pack/",
  },
  {
    imageSrc:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/product_1_8-305x300.png",
    price: "$19.00",
    originalPrice: "$29.00",
    title: "Pepperoni Burger",
    description:
      "Fueling our kitchen: bold flavors and high-quality ingredients",
    cartLink: "/?add-to-cart=632",
    productLink: "/barab-shop/pepperoni-burger/",
  },
];

const FoodCard = ({ item }) => (
  <div className="bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.07)] overflow-hidden text-center group transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:-translate-y-2">
    <div className="relative overflow-hidden">
      <Link href={item.productLink}>
        <Image
          unoptimized
          src={item.imageSrc}
          alt={item.title}
          width={250}
          height={250}
          className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </Link>
      <Link
        href={item.cartLink}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bg-primary-red text-white py-3 px-6 rounded-md text-sm font-semibold whitespace-nowrap"
      >
        Add to cart
      </Link>
    </div>
    <div className="p-7">
      <p className="text-primary-red font-bold text-xl flex justify-center items-baseline gap-2">
        {item.price}
        {item.originalPrice && (
          <del className="text-gray-400 font-normal text-base">
            {item.originalPrice}
          </del>
        )}
      </p>
      <h4 className="text-2xl font-bold text-dark-text mt-3 mb-2">
        <Link
          href={item.productLink}
          className="hover:text-primary-red transition-colors duration-300"
        >
          {item.title}
        </Link>
      </h4>
      <p className="text-gray-text text-[15px] leading-relaxed">
        {item.description}
      </p>
    </div>
  </div>
);

export default function FeaturedFoods() {
  return (
    <section
      className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-light-background bg-no-repeat bg-bottom"
      style={{
        backgroundImage:
          "url('https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/shape-bottom.png')",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary-red font-semibold tracking-wider text-lg">
            Food Category
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mt-2">
            Our <span className="text-primary-red">Delicious</span> Fast Foods
          </h2>
          <div className="flex justify-center mt-4">
            <Image
              unoptimized
              src="https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/title-shape.png"
              alt="title shape"
              width={160}
              height={17}
              className="w-auto h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {foodItems.map((item, index) => (
            <FoodCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
