import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import AboutSection from "../sections/About";
import Testimonials from "../sections/Testimonials";
import HistorySection from "../sections/History";

export default function page() {
  return (
    <div>
      <Breadcrumb name={"About Us"} />
      <AboutSection />
      <HistorySection />
      <Testimonials />
    </div>
  );
}
