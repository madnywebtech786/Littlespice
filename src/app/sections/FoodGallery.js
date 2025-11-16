"use client";

import React, { useRef } from "react";
import Image from "next/image";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const galleryImages = [
  {
    src: "/images/gallery/IMG_3447.webp",
  },
  { src: "/images/offers/offer1.webp" },
  {
    src: "/images/gallery/IMG_3450.webp",
  },
  { src: "/images/offers/offer2.webp" },
  {
    src: "/images/gallery/IMG_3453.webp",
  },

  {
    src: "/images/gallery/IMG_3484.webp",
  },
  {
    src: "/images/gallery/IMG_3456.webp",
  },
  {
    src: "/images/gallery/IMG_3491.webp",
  },
  {
    src: "/images/gallery/IMG_3492.webp",
  },
  {
    src: "/images/gallery/IMG_3498.webp",
  },

  {
    src: "/images/gallery/IMG_3497.webp",
  },

  { src: "/images/offers/offer3.webp" },
];

const ArrowLeftIcon = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.7998 17.1996L5.5998 11.9996L10.7998 6.7996"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M18.3999 12H5.7299"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

const ArrowRightIcon = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.2001 6.8004L18.4001 12.0004L13.2001 17.2004"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M5.6001 12H18.2701"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

const PlusIcon = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 9H1"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    ></path>
    <path
      d="M9 1V17"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    ></path>
  </svg>
);

const CloseIcon = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 6L6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FoodGallery = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-white overflow-hidden">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div className="text-center lg:text-left w-full lg:w-auto">
            <p className="text-primary-red font-bold uppercase tracking-widest text-sm">
              Our Food Gallery
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mt-2 !leading-tight">
              Where Every Bite Is a Burst of Flavor
            </h2>
            <Image
              loading="lazy"
              src="/images/divider.svg"
              alt="title shape"
              width={200}
              height={10}
              className="mt-4 mx-auto lg:mx-0"
            />
          </div>
          <div className="hidden lg:flex items-center space-x-3 mt-8 lg:mt-0">
            <button
              ref={prevRef}
              aria-label="Previous slide"
              className="w-12 h-12 rounded-full bg-primary-red text-white hover:bg-red-700  transition-all duration-300 flex items-center justify-center shadow-md"
            >
              <ArrowLeftIcon />
            </button>
            <button
              ref={nextRef}
              aria-label="Next slide"
              className="w-12 h-12 rounded-full bg-primary-red text-white hover:bg-red-700  transition-all duration-300 flex items-center justify-center shadow-md"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
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
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
            1240: { slidesPerView: 5 },
          }}
        >
          {galleryImages.map((item, index) => (
            <SwiperSlide>
              <div key={index} className="flex-grow-0 flex-shrink-0 w-full">
                <div
                  className="relative group rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(item.src)}
                  role="button"
                  aria-label={`View image ${index + 1} in lightbox`}
                >
                  <Image
                    loading="lazy"
                    src={item.src}
                    alt={`Food gallery image ${index + 1}`}
                    width={320}
                    height={320}
                    className="w-full h-64 md:h-72 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <PlusIcon />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="lg:hidden flex justify-center space-x-3 mt-8">
          <button
            aria-label="Previous slide"
            className="w-12 h-12 rounded-full bg-white text-dark-text hover:bg-primary-red hover:text-white transition-all duration-300 flex items-center justify-center shadow-md"
          >
            <ArrowLeftIcon />
          </button>
          <button
            aria-label="Next slide"
            className="w-12 h-12 rounded-full bg-white text-dark-text hover:bg-primary-red hover:text-white transition-all duration-300 flex items-center justify-center shadow-md"
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FoodGallery;
