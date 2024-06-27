import React from "react";
import rimage from "../assets/bro.png";

const Inquiries = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-12 md:pt-24 mb-8">
          Streamlined Strategies for Real Estate Success{" "}
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start pt-8 md:pt-12">
          {/* Image */}
          <div className="md:w-1/2 md:pr-8">
            <img
              className="w-full h-auto md:max-w-full"
              src={rimage}
              alt="Real Estate"
            />
          </div>
          {/* Text Content */}
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-center md:text-left font-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mt-10">
              Optimized Path to Property Purchase{" "}
            </h2>
            <p className="text-center md:text-left sm:text-left text-lg md:text-xl pt-4 md:py-5">
              In the dynamic realm of real estate, the journey from a property
              inquiry to a successful conversion demands a well-crafted
              approach. At Osumare, we specialize in guiding potential buyers
              through this journey seamlessly, maximizing
              inquiries-turned-conversions with expert strategies.
            </p>
            <div className="pt-6 md:pt-8 text-center md:text-left">
              {/* Button */}
              <button className="bg-[#0078FF] text-white px-10 md:px-16 py-2 md:py-3 rounded-full hover:bg-blue-500 hover:shadow-lg transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiries;
