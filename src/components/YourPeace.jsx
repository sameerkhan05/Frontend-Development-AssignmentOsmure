import React from "react";

const YourPeace = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Left and Right gradient overlays */}
      <div className="absolute inset-0 flex">
        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-circle-red opacity-25"></div>
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-circle-blue opacity-25"></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center items-center text-black">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
          Your Peace of Mind
        </h1>
        <p className="text-base md:text-lg pt-4 md:pt-6 text-center mx-48">
          Through our conversion-focused strategies, we ensure that property
          seekers are not just visitors, but engaged prospects ready to make
          their next move in the real estate market.
        </p>
        <div className="pt-6 md:pt-8">
          {/* Button */}
          <button className="bg-[#0078FF] text-white px-10 md:px-16 py-2 md:py-3 rounded-full hover:bg-blue-500 hover:shadow-lg transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourPeace;
