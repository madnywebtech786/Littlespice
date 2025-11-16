"use client";

import Image from "next/image";
import { Sparkles, Clock, Tag } from "lucide-react";

// Offers data
const offers = [
  {
    id: 1,
    name: "Hot and Sour Chicken Soup",
    description: "Delicious papdi with savory chicken soup - perfect comfort food",
    price: "$9.95",
    img: "/images/offers/offer1.webp",
    tag: "Popular",
  },
  {
    id: 2,
    name: "Butter Chicken Platter",
    description: "Complete meal with butter chicken, rice, naan, and fresh salad",
    price: "$21.95",
    img: "/images/offers/offer2.webp",
    tag: "Best Value",
  },
  {
    id: 3,
    name: "Lunch Special",
    description: "Butter chicken, chana masala, rice, naan, veg pakora & samosa",
    price: "$16.95",
    img: "/images/offers/offer3.webp",
    tag: "11 AM - 3 PM",
    special: true,
  },
];

// Individual Offer Card Component
const OfferCard = ({ offer }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
      {/* Animated gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-red via-secondary to-warm-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

      <div className="relative bg-white m-[2px] rounded-2xl overflow-hidden">
        {/* Tag Badge */}
        <div className="absolute top-4 left-4 z-10">
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white backdrop-blur-sm ${
            offer.special
              ? "bg-gradient-to-r from-warm-orange to-secondary shadow-lg"
              : "bg-gradient-to-r from-primary-red to-red-600 shadow-lg"
          }`}>
            {offer.special ? <Clock size={14} /> : <Tag size={14} />}
            {offer.tag}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-light-background to-gray-100">
          <Image
            src={offer.img}
            alt={offer.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-dark-text mb-2 group-hover:text-primary-red transition-colors duration-300">
            {offer.name}
          </h3>

          {/* Description */}
          <p className="text-gray-text text-sm leading-relaxed mb-4 line-clamp-2">
            {offer.description}
          </p>

          {/* Price & CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-primary-red">
                {offer.price}
              </span>
              {offer.special && (
                <Sparkles size={18} className="text-warm-orange animate-pulse" />
              )}
            </div>

      
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-red/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

// Main Offers Section
export default function Offers() {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-br from-light-background via-white to-light-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles size={20} className="text-primary-red animate-pulse" />
            <p className="text-primary-red font-bold text-sm tracking-widest uppercase">
              Special Deals
            </p>
            <Sparkles size={20} className="text-primary-red animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mt-2">
            Exclusive <span className="text-primary-red">Offers</span>
          </h2>
          <Image
            src="/images/divider.svg"
            alt="title shape"
            width={304}
            height={10}
            className="mx-auto mt-4"
            loading="lazy"
          />
          <p className="text-gray-text text-base mt-4 max-w-2xl mx-auto">
            Indulge in our handcrafted special offers - delicious flavors at unbeatable prices
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-text text-sm">
            Limited time offers • Available while supplies last
          </p>
        </div>
      </div>
    </section>
  );
}
