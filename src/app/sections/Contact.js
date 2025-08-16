"use client";
import { Clock9, MapPin, PhoneCall } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="bg-[#FFFBF2] py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      {/* Contact Information Section */}
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-white p-8 rounded-4xl shadow-xl ">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              CONTACT <span className="text-primary-red"> INFORMATION</span>
            </h2>
            <p>
              Relax and enjoy your food in our cozy restaurant, or take it
              in-go. Great taste, great service – every visit is a favourable
              experience worth coming back for.
            </p>

            <div className="flex flex-col gap-3 mt-3">
              {/* Address Card */}
              <div className="bg-[#FFFBF2] p-4 rounded-3xl">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-red rounded-full p-4">
                    <MapPin size={20} className="text-white w-8 h-8" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold text-xl">Address</span>
                    <p className=" text-gray-600">
                      8550 Preston Rd, Ingleswood, MA 02360
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#FFFBF2] p-4 rounded-3xl">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-red rounded-full p-4">
                    <PhoneCall size={20} className="text-white w-8 h-8" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold text-xl">Address</span>
                    <p className=" text-gray-600">
                      8550 Preston Rd, Ingleswood, MA 02360
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#FFFBF2] p-4 rounded-3xl">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-red rounded-full p-4">
                    <Clock9 size={20} className="text-white w-8 h-8" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold text-xl">Address</span>
                    <p className=" text-gray-600">
                      8550 Preston Rd, Ingleswood, MA 02360
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className=" pt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Get In Touch!
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-white text-primary-red placeholder:text-primary-red border border-primary-red/50  rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-white text-primary-red placeholder:text-primary-red border border-primary-red/50  rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-white text-primary-red placeholder:text-primary-red border border-primary-red/50  rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Write Message...
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-white text-primary-red placeholder:text-primary-red border border-primary-red/50  rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-red text-white py-3 rounded-md hover:bg-gray-900 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321200.49227131513!2d-114.087835!3d51.027623299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2s!4v1755347493635!5m2!1sen!2s"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="w-full min-h-[350px] mx-auto mt-10 rounded-2xl "
      ></iframe>
    </div>
  );
};

export default Contact;
