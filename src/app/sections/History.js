import Image from "next/image";

const timelineData = [
  {
    year: "2015",
    title: "The Beginning of Little Spice",
    description:
      "A decade ago, Little Spice Restaurant opened its doors in Calgary, bringing authentic Indian and Pakistani flavors to the local community.",
    imageUrl:
      "/images/gallery/IMG_3450.webp",
  },
  {
    year: "2018",
    title: "Growing with Passion",
    description:
      "With love from our loyal customers, Little Spice expanded its menu and refined its recipes — blending traditional South Asian cooking with a modern fast-food twist.",
    imageUrl:
      "/images/gallery/IMG_3491.webp",
  },
  {
    year: "2025",
    title: "A New Chapter Begins",
    description:
      "After years of success, we proudly reopened Little Spice Restaurant in 2025 with a fresh new look and upgraded experience.",
    imageUrl:
      "/images/gallery/IMG_3447.webp",
  },
];

const HistorySection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-16 px-4 sm:px-8 md:px-12 lg:px-20"
      style={{
        backgroundImage:
          "url('/images/gallery/IMG_3492.webp')",
      }}
    >
      <div className="absolute inset-0 bg-dark-text/70"></div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="text-base font-semibold uppercase tracking-widest text-primary-red">
            Our History
          </p>
          <h2 className="mt-2 text-4xl font-bold text-white md:text-5xl">
            A <span className="text-primary-red">  History</span> of restaurant
          </h2>
          <Image
            unoptimized
            src="https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/title-shape2.png"
            alt="title shape"
            width={188}
            height={12}
            className="mx-auto mt-4"
          />
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
          {timelineData.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <h4 className="mb-4 text-7xl font-bold text-primary-red">
                {item.year}
              </h4>
              <h3 className="mb-3 text-2xl font-bold text-white">
                {item.title}
              </h3>
              <p className="max-w-xs text-gray-300">{item.description}</p>
              <div className="mt-8">
                <Image
                  unoptimized
                  src={item.imageUrl}
                  alt={item.title}
                  width={210}
                  height={210}
                  className="h-48 w-48 rounded-full border-4 border-white/10 object-cover shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
