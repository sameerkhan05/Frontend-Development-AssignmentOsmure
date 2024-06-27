import React from "react";
import rightImage from "../assets/Frame.png"
import { insightContent } from "../constants/index.jsx";

const Insights = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-12 md:pt-24 mb-8">
          Navigating Real Estate's Digital Landscape
        </h1>
        <p className="text-lg md:text-xl mb-8 text-center leading-loose">
          Tailored Solutions for Thriving in the Digital Real Estate Landscape
        </p>
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/3 lg:w-1/2">
            {insightContent.map((insight, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg m-5 p-10 flex"
              >
                <img
                  className="h-14 w-14 object-contain mr-4"
                  src={insight.image}
                  alt={insight.title}
                />
                <div>
                  <h2 className="text-2xl font-bold mb-2">{insight.title}</h2>
                  <p className="text-sm">{insight.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/3 lg:w-1/2 relative">
            <img
              className="absolute top-0 right-16 w-full h-full"
              src={rightImage}
              alt=""
              style={{ zIndex: -1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
