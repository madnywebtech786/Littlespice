import Image from "next/image";

const timelineData = [
  {
    year: "1998",
    title: "Evolution of Restaurants",
    description:
      "At the heart of our kitchen are bold flavors, high-quality ingredients, and a commitment to consistency.",
    imageUrl:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/history.jpg",
  },
  {
    year: "2016",
    title: "Fine Dining & the Concept",
    description:
      "At the heart of our kitchen are bold flavors, high-quality ingredients, and a commitment to consistency.",
    imageUrl:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/history1.jpg",
  },
  {
    year: "2025",
    title: "Modern Fast Food Origins",
    description:
      "At the heart of our kitchen are bold flavors, high-quality ingredients, and a commitment to consistency.",
    imageUrl:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/history2.jpg",
  },
];

const HistorySection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-16 px-4 sm:px-8 md:px-12 lg:px-20"
      style={{
        backgroundImage:
          "url('https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/history-main.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-dark-text/90"></div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="text-base font-semibold uppercase tracking-widest text-primary-red">
            Our History
          </p>
          <h2 className="mt-2 text-4xl font-bold text-white md:text-5xl">
            A <span className="text-secondary">  History</span> of restaurant
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
              <h4 className="mb-4 text-7xl font-bold text-warm-orange">
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
