import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 sm:py-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 px-4 lg:px-0">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Get early access to new arrivals, exclusive deals, and more.
          </p>
          <p className="font-medium text-sm text-gray-700 mb-6">
            Join us and receive 10% off your initial order.
          </p>

          <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 text-sm border border-gray-300 rounded-l-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
              required
            />
            <button
              type="submit"
              className="bg-amber-500 text-white px-6 py-3 text-sm font-medium rounded-r-md sm:rounded-l-none sm:rounded-r-md hover:bg-amber-600 transition-all duration-200 cursor-pointer transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-3">
            <li>
              <Link to="#" className="text-gray-600 hover:text-amber-500 transition-colors duration-200 text-sm font-medium">
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-amber-500 transition-colors duration-200 text-sm font-medium">
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-amber-500 transition-colors duration-200 text-sm font-medium">
                Men's Bottom Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-amber-500 transition-colors duration-200 text-sm font-medium">
                Women's Bottom Wear
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
          <ul className="space-y-3">
            <li>
              <Link to="#" className="text-gray-600 hover:text-amber-500 transition-colors duration-200 text-sm font-medium">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-amber-500 transition-colors duration-200 text-sm font-medium">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-amber-500 transition-colors duration-200 text-sm font-medium">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-amber-500 transition-colors duration-200 text-sm font-medium">
                Features
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-amber-100 rounded-full transition-all duration-200 hover:scale-110"
            >
              <TbBrandMeta className="h-5 w-5 text-gray-600 hover:text-amber-500 transition-colors duration-200" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-amber-100 rounded-full transition-all duration-200 hover:scale-110"
            >
              <IoLogoInstagram className="h-5 w-5 text-gray-600 hover:text-amber-500 transition-colors duration-200" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-amber-100 rounded-full transition-all duration-200 hover:scale-110"
            >
              <RiTwitterXLine className="h-4 w-4 text-gray-600 hover:text-amber-500 transition-colors duration-200" />
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-gray-600 text-sm font-medium">Call Us</p>
            <p className="text-gray-700 font-medium flex items-center">
              <FiPhoneCall className="mr-2 text-amber-500" />
              +1 (984) 768-3048
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-sm text-center">
          © 2025, STYLEHYPE. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
