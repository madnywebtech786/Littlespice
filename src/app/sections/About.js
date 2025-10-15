import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 md:px-12 lg:px-20 relative overflow-hidden">
      <Image
        unoptimized
        src="https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/about-shape-1.1.png"
        alt="Decorative Shape"
        width={122}
        height={125}
        className="absolute top-[15%] right-0 w-20 h-auto lg:w-auto lg:h-auto hidden md:block"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <Image
              src="/images/about-side.png"
              alt="A delicious-looking plate of fast food including a burger and fries"
              width={590}
              height={580}
               loading="lazy"
              className="w-full h-auto rounded-lg relative z-10"
            />
    
          </div>
          <div className="relative z-10">
            <span className="text-primary-red font-bold uppercase tracking-[0.1em] text-sm">
              About our restaurant
            </span>
            <h2 className="text-dark-text font-bold text-4xl md:text-[45px] leading-tight mt-3 mb-6">
              We <span className="text-primary-red"> invite you </span> to visit our Restaurant
            </h2>
            <p className="text-gray-text text-lg leading-relaxed">
              Welcome to Little Spice Restaurant, your go-to destination in Calgary for authentic Indian and Pakistani cuisine — where every dish is crafted with passion, flavor, and a touch of home.At Little Spice, we blend tradition with taste. From aromatic biryanis and creamy butter chicken to sizzling kebabs, spicy wraps, and fresh naan, every meal is prepared with high-quality ingredients and the perfect balance of spices.
            </p>
            <div className="mt-8 pt-4">
              <p className={`${caveat.className} text-dark-text text-5xl`}>
                10 Years Of Experience
              </p>
              <p className="text-gray-text mt-1 text-sm font-medium">
                Best In Calgary
              </p>
            </div>
            <div className="mt-10">
              <Link href="/contact">
    <button className="bg-primary-red text-white font-bold rounded-md hover:bg-red-700 transition-colors duration-300 text-sm py-6 px-8 uppercase tracking-wider">
      VISIT OUR RESTAURANT
    </button>
  </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
