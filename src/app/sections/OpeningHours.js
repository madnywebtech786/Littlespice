import Image from "next/image";
import Link from "next/link";

const scheduleData = [
  {
    days: "Monday to Tuesday",
    hours: ["10:00 AM", "20:00 PM"],
  },
  {
    days: "Friday to Sunday",
    hours: ["12:00 AM", "23:00 PM"],
  },
];

const OpeningHours = () => {
  return (
    <section className="bg-light-background w-full overflow-hidden">
      <div className="lg:grid lg:grid-cols-2 items-stretch">
        {/* Image Column */}
        <div className="relative h-96 lg:h-auto min-h-[550px] w-full">
          <Image
            unoptimized
            src="https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/opening-1-left.jpg"
            alt="Interior of the Barab restaurant"
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover rounded-tr-3xl rounded-br-3xl"
          />
        </div>

        {/* Content Column */}
        <div className="flex items-center justify-center py-16 px-4 sm:px-6 lg:py-24 lg:px-12 xl:px-20">
          <div className="max-w-md w-full">
            <p className="font-semibold text-primary-red uppercase tracking-wider text-sm">
              Opening Hours
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-dark-text sm:text-4xl">
              Our Opening Hours
            </h2>
            <div className="mt-4">
              <Image
                unoptimized
                src="https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/title-shape2.png"
                alt="decorative shape"
                width={105}
                height={13}
              />
            </div>

            <div className="mt-12">
              {scheduleData.map((item, index) => (
                <div
                  key={index}
                  className="py-6 border-b-2 border-dashed border-gray-300 last:border-b-0 first:pt-0"
                >
                  <p className="text-lg font-medium text-gray-800">
                    {item.days}
                  </p>
                  <div className="mt-3">
                    {item.hours.map((hour) => (
                      <h4
                        key={hour}
                        className="text-3xl sm:text-4xl font-bold text-dark-text leading-tight mt-2"
                      >
                        {hour}
                      </h4>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/reservation"
                className="inline-block bg-primary-red text-white font-bold py-4 px-8 rounded-md text-base hover:bg-red-700 transition-colors duration-300 shadow-md"
              >
                Book Your Table
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
