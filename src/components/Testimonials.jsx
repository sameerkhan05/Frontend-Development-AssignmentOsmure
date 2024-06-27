import React from "react";
import video from "../assets/Video.png"; // Replace with your actual image path

const Testimonials = () => {
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      <div className="container mx-auto px-4">
        <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-12 md:pt-24 mb-8">
          What Our Pharma Partners Say
        </h1>
        <p className="text-lg md:text-xl mb-8 text-center leading-loose">
          Driving Transformations, One Brand at a Time
        </p>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex items-center">
            {/* Left side image */}
            <div className="md:w-1/1 p-8">
              <img
                src={video}
                alt="Video"
                className="object-cover w-full h-96 rounded-lg"
              />
            </div>
            {/* Right side content */}
            <div className="md:w-2/3 p-8 ">
              <div className="flex items-center mb-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={video}
                  alt="Author"
                />
                <h3 className="text-3xl font-bold ml-4">Tabish Khan</h3>
              </div>
              <p className="text-lg leading-relaxed">
                Osumare's expertise in pharma marketing is unparalleled. Their
                strategies helped us navigate complex regulations while driving
                remarkable growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
