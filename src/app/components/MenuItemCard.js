import Image from "next/image";
import React from "react";

export default function MenuItemCard({ img, name, desc, price, link = "" }) {
  return (
    /* root set to full-height so grid cells can make every card same height */
    <div className="w-full h-full group">
      <div className="relative h-full flex flex-col">
        <div className="shape-mask bg-[#fff3d6] shadow-2xl mask-container w-[300px] h-[300px] flex items-center justify-center relative flex-none">
          <Image
            loading="lazy"
            src={img}
            alt="Little Spice"
            // className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full drop-shadow-2xl z-10 transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12"
            className="w-72 md:w-96 h-auto object-contain drop-shadow-2xl z-10 transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12"
            width={500}
            height={500}
          />
        </div>

        <div className="bg-primary-red shape-mask2 w-full px-5 py-8 -mt-6 flex-1 flex flex-col">
          <div>
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="my-2 text-sm text-white">{desc}</p>
          </div>

          {/* push price to bottom of the card so all cards line up */}
          <div className="mt-auto">
            <div className="bg-white text-primary-red px-3 py-3 rounded-full shadow-lg text-center w-28 mx-auto transition-all duration-300 group-hover:w-full">
              <div className="text-sm leading-none">{price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
