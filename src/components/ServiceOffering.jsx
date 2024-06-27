import React from "react";
import { serviceOfferings } from "../constants/index.jsx";

const ServiceOffering = ({ title, image, description }) => (
  <div className="max-w-xs mx-auto bg-white rounded-lg overflow-hidden shadow-lg m-2 flex flex-col items-center">
    <div className="flex justify-center items-center h-20 w-20 mt-4">
      <img className="h-14 object-contain" src={image} alt={title} />
    </div>
    <div className="p-4 text-center">
      <h2 className="text-md font-bold mb-2">{title}</h2>
      <p className="text-xs">{description}</p>
    </div>
  </div>
);

const ServiceOfferings = () => {
  return (
    <div className="relative h-screen overflow-y-auto bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-center font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl mb-4">
          Our Service Offerings
        </h2>
        <p className="text-md md:text-xl mb-8 text-center leading-loose">
          Strategies that Drive Property Market Excellence
        </p>
        <div className="flex flex-wrap justify-center items-center">
          {serviceOfferings.map((service, index) => (
            <ServiceOffering
              key={index}
              title={service.title}
              image={service.image}
              description={service.description}
            />
          ))}
        </div>
        <div className="flex justify-center pt-6 md:pt-28">
          {/* Button */}
          <button className="bg-[#0078FF] text-white px-6 md:px-16 py-2 md:py-3 rounded-full hover:bg-blue-500 hover:shadow-lg transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceOfferings;
