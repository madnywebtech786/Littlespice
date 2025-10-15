"use client";

import Image from "next/image";
import Link from "next/link";

const foodItems = [
  {
    imageSrc: "/images/menu/bbq/chicken-tikka-platter.png",
    price: "$21.95",
    title: "Chicken Tikka Platter",
    description:
      "Savor our juicy Chicken Tikka Platter — perfectly grilled, marinated in aromatic spices, and served with tangy mint chutney.",
    cartLink: "/contact",
  },
  {
    imageSrc: "/images/menu/bbq/beef-tikka-platter.png",
    price: "$22.95",
    title: "Beef Tikka Platter",
    description:
      "Indulge in our tender Beef Tikka Platter — marinated in bold spices and flame-grilled to perfection.",
    cartLink: "/contact",
  },
  {
    imageSrc: "/images/menu/bbq/tandori-chicken.png",
    price: "$21.95",
    title: "Tandoori Chicken",
    description:
      "Enjoy our classic Tandoori Chicken — marinated in yogurt and traditional spices, then roasted in a clay oven for that signature smoky flavor.",
    cartLink: "/contact",
  },
  {
    imageSrc: "/images/menu/bbq/lamb-chops.png",
    price: "$29.95",
    title: "Lamb Chops Platter",
    description:
      "Treat yourself to our Lamb Chops Platter — juicy, spice-marinated chops grilled to perfection for a rich, smoky taste.",
    cartLink: "/contact",
  },
];

const FoodCard = ({ item }) => (
  <div className="py-10 section-shape bg-white hover:bg-primary-red group rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.07)] overflow-hidden text-center transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:-translate-y-2">
    <div className="relative overflow-hidden">
      <Image
        src={item.imageSrc}
        alt={item.title}
        width={200}
        height={200}
         loading="lazy"
        className="w-full max-w-[250px] mx-auto h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <Link
        href={item.cartLink}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bg-white text-primary-red py-3 px-6 rounded-md text-sm font-semibold whitespace-nowrap"
      >
        Order Now
      </Link>
    </div>
    <div className="p-7">
      <p className="text-primary-red group-hover:text-white duration-300 font-bold text-xl flex justify-center items-baseline gap-2">
        {item.price}
      </p>
      <h4 className="text-2xl font-bold text-dark-text mt-3 mb-2 group-hover:text-white duration-300">
        {item.title}
      </h4>
      <p className="text-gray-text group-hover:text-white duration-300 text-[15px] leading-relaxed">
        {item.description}
      </p>
    </div>
  </div>
);

export default function FeaturedFoods() {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-light-background bg-no-repeat bg-bottom">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary-red font-semibold tracking-wider text-lg">
            Food Category
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mt-2">
            Our <span className="text-primary-red">Delicious</span> Foods
          </h2>
          <div className="flex justify-center mt-4">
            <Image
              src="/images/divider.svg"
              alt="title shape"
              width={304}
              height={10}
              className="w-auto h-auto"
               loading="lazy"
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
