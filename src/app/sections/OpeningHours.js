import Image from "next/image";
import Link from "next/link";

const scheduleData = [
  {
    days: "Monday to Friday",
    hours: ["11:00 AM", "10:00 PM"],
  },
  {
    days: "Saturday to Sunday",
    hours: ["11:00 AM", "10:00 PM"],
  },
];

const OpeningHours = () => {
  return (
    <section className="bg-light-background w-full overflow-hidden">
      <div className="lg:grid lg:grid-cols-2 items-stretch">
        {/* Image Column */}
        <div className="relative flex items-center justify-center h-96 lg:h-auto min-h-[550px] w-full p-6 sm:p-8 lg:p-10">
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg">
            <Image
              unoptimized
              src="/images/gallery/IMG_3450.webp"
              alt="Interior of the Little Spice"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover rounded-3xl"
            />
          </div>
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
                  className="py-6 border-b-2 border-dashed border-primary-red last:border-b-0 first:pt-0"
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
                href="/contact"
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
