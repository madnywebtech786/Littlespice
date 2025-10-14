"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/testi-1-1.png",
    quote:
      "“Absolutely love Little Spice! The flavors are incredible — everything tastes fresh and authentic. Their butter chicken and biryani remind me of home. The new look after renovation is amazing too!”",
    name: "Victoria Wotton",
  },
  {
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/testi-1-2.png",
    quote:
      "“We stopped by Little Spice for lunch and were blown away! The food came out hot, flavorful, and perfectly spiced. The staff were super friendly and welcoming. Easily one of Calgary’s best Indian and Pakistani restaurants.”",
    name: "Emma Mia",
  },
  {
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/testi-1-1.png",
    quote:
      "“Little Spice never disappoints! From the juicy kebabs to the crispy samosas, every dish is packed with flavor. The renovated space feels cozy and modern — perfect for family dinners or takeout nights.”",
    name: "Alex Johnson",
  },
];

const QuoteIcon = () => (
  <Image
    unoptimized
    src="https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/testi-1-quote.png"
    alt="Quote icon"
    width={60}
    height={46}
    className="absolute -top-5 -left-5 w-12 h-auto md:w-10"
  />
);

export default function Testimonials() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollTo = (index) => {
    api?.scrollTo(index);
  };

  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <Image
        unoptimized
        src="/images/menu/gobi-pakora.png"
        alt="Decorative Shape"
        width={193}
        height={175}
        className="absolute top-1/2 right-10 hidden lg:block"
      />
      <Image
        unoptimized
        src="/images/menu/papri-chat.png"
        alt="Decorative Shape"
        width={196}
        height={192}
        className="absolute top-10 left-0 hidden lg:block"
      />
      <Image
        unoptimized
        src="/images/menu/kheer.png"
        alt="Decorative Chili"
        width={100}
        height={100}
        className="absolute bottom-[10%] left-[5%] hidden lg:block"
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary-red font-bold text-sm tracking-widest leading-none uppercase">
            Testimonials
          </p>
          <h2 className="text-dark-text text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            Our <span className="text-primary-red"> Happy  </span> Customers Feedback
          </h2>
          <Image
            unoptimized
            src="/images/divider.svg"
            alt="Title Shape"
            width={304}
            height={10}
            className="mx-auto mt-4"
          />
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Autoplay]}
          loop
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center my-5">
                <div className="relative bg-white shadow-lg rounded-xl mt-16 max-w-2xl mx-auto p-8 pt-20 text-center">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image
                      unoptimized
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={120}
                      height={120}
                      className="rounded-full w-32 h-32 border-4 border-primary-red"
                    />
                  </div>
                  <div className="relative pt-6">
                    <QuoteIcon />
                    <p className="text-lg text-gray-text italic max-w-lg mx-auto">
                      {testimonial.quote}
                    </p>
                    <h3 className="text-xl font-bold text-dark-text mt-6">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-text mt-1">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center items-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index + 1 ? "bg-primary-red w-5" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
