import React from "react";
import logo from "../assets/logo.png";


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-2 px-4 md:py-6 md:px-6 lg:px-8 backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center flex-shrink-0">
          <img className="h-12 md:h-14 lg:h-16" src={logo} alt="logo" />
        </div>
        <div className="flex items-center">
          <button className="bg-transparent border border-black text-black rounded-full px-4 md:px-6 lg:px-8 py-1 md:py-2 lg:py-2.5 hover:bg-black hover:text-white hover:border-transparent font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



