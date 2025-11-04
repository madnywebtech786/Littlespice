"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const CountdownUnit = ({ value, label }) => (
  <div className="text-center border-2 border-white/10 rounded-lg p-4 sm:p-6 w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] flex flex-col justify-center">
    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white block leading-none">
      {String(value).padStart(2, "0")}
    </span>
    <span className="text-xs sm:text-sm text-white/70 uppercase mt-1">
      {label}
    </span>
  </div>
);

const SpecialOffer = () => {
  // store a fixed target date so it doesn't get re-created every second
  const targetRef = useRef(null);

  const calculateTimeLeft = () => {
    const now = new Date();

    // create and persist the target date only once
    if (!targetRef.current) {
      const targetDate = new Date(now);
      targetDate.setDate(now.getDate() + 2);
      targetDate.setHours(now.getDate() + 2);
      targetDate.setMinutes(now.getMinutes() + 33);
      targetDate.setSeconds(now.getSeconds() + 58);
      targetRef.current = targetDate;
    }

    const difference = +targetRef.current - +now;
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[#131313] bg-fixed flex flex-col justify-center py-20 lg:py-32 overflow-hidden min-h-[650px]">
      <div className="relative z-10">
        <div className="flex w-full justify-center items-center">
          <div className="text-center w-10/12">
            <div className="relative inline-block mb-6">
              <h5 className=" flex items-center justify-center text-primary-red uppercase font-bold text-sm sm:text-base tracking-wider animate-pulse">
                save up to 20% off
              </h5>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
              Super <span className="text-primary-red"> Delicious </span> Roll
            </h2>

            <p className="text-lg text-white/80 mt-4 font-medium">
              Chicken Tikka or Beef Kebab Roll
            </p>

            <div className="flex justify-center items-center space-x-2 sm:space-x-4 mt-8">
              <CountdownUnit value={timeLeft.days} label="Days" />
              <CountdownUnit value={timeLeft.hours} label="Hours" />
              <CountdownUnit value={timeLeft.minutes} label="Minutes" />
              <CountdownUnit value={timeLeft.seconds} label="Seconds" />
            </div>
          </div>
        </div>
      </div>
      <Image
        loading="lazy"
        src="/images/coming-left.webp"
        alt="offer shape"
        width={500}
        height={400}
        className="w-4/5 sm:h-auto hidden lg:absolute top-10 -left-1/2 "
      />

      <Image
        loading="lazy"
        src="/images/coming-right.webp"
        alt="Super Delicious Burger"
        width={700}
        height={695}
        className="w-5/6 h-auto hidden lg:absolute top-0 -right-1/2 "
      />
    </section>
  );
};

export default SpecialOffer;
