import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import logo from "../assets/logo.png";

const Bottom = () => {
  return (
    <footer className="relative h-screen overflow-hidden flex items-center justify-center">
      <div className="container mx-auto px-4 bg-white rounded-t-lg">
        <div className="bg-gradient-to-t from-blue-300 via-blue-100 to-blue-100 text-neutral-800 rounded-t-lg p-12">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 lg:gap-52 p-36 ">
            {/* Address */}
            <div className="flex-1">
              <img className="h-12 pb-2" src={logo} alt="Logo" />
              <p className="text-sm mb-4">The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.</p>
              <h3 className="text-lg font-bold mb-4">Address</h3>
              <p className="text-sm">1234 Street Name</p>
              <p className="text-sm">City, State, Zip Code</p>
              <p className="text-sm">Country</p>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <div className="flex items-center mb-2">
                <FaEnvelope className="mr-2" />
                <p className="text-sm">hello@osumare.in</p>
              </div>
              <div className="flex items-center font-medium">
                <FaPhone className="mr-2" />
                <p className="text-sm">+91 8459 8762 26</p>
              </div>
            </div>
            {/* Menu */}
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-4">Menu</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300">Home</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">About Us</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">Services</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">Contact</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">Blog</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">Career</a>
                </li>
              </ul>
            </div>
            {/* Social Media */}
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
       <h3 className="text-lg md:text-xl pt-4 text-center leading-loose sm:text-2xl"> © 2023 Osumare. All rights reserved.</h3>
      </div>
    </footer>
  );
};

export default Bottom;
