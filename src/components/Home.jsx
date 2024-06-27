import React from "react";
import Background from "../assets/bg.png";
import image from "../assets/Headerimage.png";

// const Home = () => {
//   return (
//     <div className="relative h-screen overflow-hidden">
//       {/* Background Image */}
//       <img
//         className="absolute w-full h-full"
//         src={Background}
//         alt="Background"
//       />

//       {/* Content */}
//       <div className="relative z-10 h-full flex items-center justify-center">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 pt-72 md:grid-cols gap-8 items-center">
//             {/* Left Column */}
//             <div className="text-center text-black">
//               <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-4 leading-relaxed">
//                 Elevate{" "}
//                 <span className="font-bold text-blue-600">
//                   Real Estate Success
//                 </span>{" "}
//                 with Osumare's Digital Expertise
//               </h1>
//               <p className="text-lg md:text-xl mb-8">
//                 Tailored Solutions for Thriving in the Digital Real Estate
//                 Landscape
//               </p>
//               {/* Button */}
//               <button className="bg-blue-600 text-white px-16 py-2 rounded-full hover:bg-blue-500 hover:shadow-lg transition duration-300">
//                 Get Started
//               </button>
//             </div>

//             {/* Right Column */}
//             <div className="text-center">
//               <img className="w-full h-auto md:max-w-lg mx-auto md:pt-32" src={image} alt="Image" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute w-full h-full"
        src={Background}
        alt="Background"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 pt-72 md:grid-cols gap-8 items-center ">
            {/* heading section */}
            <div className="text-center text-black">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-4">
                Elevate{" "}
                <span className="font-bold text-[#0078FF]">
                  Real Estate Success
                </span>{" "}
                with Osumare's Digital Expertise
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-loose">
                Tailored Solutions for Thriving in the Digital Real Estate
                Landscape
              </p>
              {/* Button */}
              <button className="bg-[#0078FF] text-white px-16 py-2 rounded-full hover:bg-blue-500 hover:shadow-lg transition duration-300">
                Get Started
              </button>
            </div>

            {/* image Header */}
            <div className="text-center">
              <img className="w-full h-auto md:max-w-xl mx-auto md:pt-8" src={image} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;