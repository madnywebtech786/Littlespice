import Image from "next/image";

const chefs = [
  {
    name: "Alina Morish",
    title: "Expert Chef",
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/team_1_1.png",
  },
  {
    name: "Michel Clark",
    title: "Expert Chef",
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/team_1_2.png",
  },
  {
    name: "Esa Elizabed",
    title: "Expert Chef",
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/team_1_3.png",
  },
  {
    name: "William Latham",
    title: "Expert Chef",
    image:
      "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/team_1_4.png",
  },
];

const BG_SHAPE_URL =
  "/images/chef-shadow.png";
const TITLE_SHAPE_URL = "/images/divider.svg";

const ChefTeam = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary-red font-bold uppercase tracking-widest text-sm">
            Our Chefs
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-text mt-3">
            Meet Our Expert Chef
          </h2>
          <Image
            unoptimized
            src={TITLE_SHAPE_URL}
            alt="title shape"
            width={304}
            height={10}
            className="mx-auto mt-6"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="text-center group flex flex-col items-center"
            >
              <div className="relative inline-block mb-6 w-[280px] h-[280px] chef-shape bg-primary-red">
                <Image
                  unoptimized
                  src={BG_SHAPE_URL}
                  alt="chef background shape"
                  width={280}
                  height={280}
                  className="opacity-25 transition-transform duration-[2000ms] ease-in-out group-hover:rotate-[360deg]"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="overflow-hidden rounded-full ">
                    <Image
                      unoptimized
                      src={chef.image}
                      alt={chef.name}
                      width={250}
                      height={250}
                      className="rounded-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-dark-text mb-1">
                <a
                  href="#"
                  className="hover:text-primary-red transition-colors duration-300"
                >
                  {chef.name}
                </a>
              </h3>
              <p className="text-gray-text text-base">{chef.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefTeam;
