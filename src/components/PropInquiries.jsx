import React from "react";
import { propertyInquiriesToConversions } from "../constants"; 

const PropInquiries = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-12 md:pt-24 mb-8">
          Real Estate-Focused Digital Mastery
        </h1>
        <div className="flex flex-wrap justify-center">
          {propertyInquiriesToConversions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden  m-10 p-6 max-w-md"
            >
              <img
                className="h-24 w-24 object-contain mx-auto mb-4"
                src={item.image}
                alt={item.title}
              />
              <div className="text-center">
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropInquiries;
