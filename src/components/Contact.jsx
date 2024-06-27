import React from "react";

const Contact = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Left and Right gradient overlays */}
      <div className="absolute inset-0 flex">
        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-circle-red opacity-25"></div>
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-circle-blue opacity-25"></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center items-center text-black">
        <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-12 md:pt-24 mb-8">
          Connect with Our Digital Marketing Experts
        </h1>
        <p className="text-lg md:text-xl text-center leading-loose pb-16">
          Reach Out for Tailored Strategies and Results-Driven Solutions. Let's
          Elevate Your Online Presence Together
        </p>
        <div className="max-w-xl w-full bg-white rounded-lg shadow-lg overflow-hidden p-8 flex">
          {/* Left side form inputs */}
          <div className="w-1/2 pr-4">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Right side message input */}
          <div className="w-1/2 pl-4">
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button className="bg-blue-500 text-white px-10 py-3 rounded-full hover:bg-blue-600 transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
