"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/menu/biryani.png",
    "/images/menu/papri-chat.png",
    "/images/menu/nihari.png",
    "/images/menu/daal-makhni.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side - Text Content */}
        <div className="lg:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Savor the Flavor of
            <span className="pl-3 text-primary-red">Authentic Cuisine</span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Discover a world of exquisite flavors and culinary delights. Our
            carefully crafted dishes use only the freshest ingredients, prepared
            with passion and tradition. From farm to table, we ensure every bite
            is an unforgettable experience.
          </p>

          <button className="bg-primary-red hover:to-red-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg">
            Explore Our Menu
          </button>
        </div>

        {/* Right Side - Image Slider */}
        <div className="lg:w-1/3 mx-auto relative h-86 md:h-[500px] lg:h-[500px] w-full overflow-hidden rounded-2xl ">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentImageIndex
                  ? "translate-x-0 scale-100 opacity-100 z-10"
                  : index < currentImageIndex
                  ? "-translate-x-full scale-95 opacity-0 z-0"
                  : "translate-x-full scale-95 opacity-0 z-0"
              }`}
            >
              <Image
                src={img}
                alt={`Food showcase ${index + 1}`}
                width={450}
                height={450}
                className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[450px] lg:h-[450px] mx-auto"
              />
              {/* Overlay gradient for better text contrast */}
              <div className="absolute inset-0 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
