import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-600 via-gray-700 to-gray-600 text-white">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8 xl:px-16 2xl:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-amber-400 tracking-wider mb-4">STYLEHYPE</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Elevate your style with premium fashion that speaks to your unique personality.
              </p>
            </div>
            
            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 text-sm bg-gray-700/50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all duration-300 placeholder-gray-400"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-amber-500 cursor-pointer hover:bg-black text-white px-4 py-3 text-sm font-medium rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm font-medium">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm font-medium">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm font-medium">
                  Sale
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm font-medium">
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm font-medium">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm font-medium">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm font-medium">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm font-medium">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FiPhoneCall className="h-4 w-4 text-amber-400" />
                <span className="text-gray-300 text-sm">+1 (984) 768-3048</span>
              </div>
              <div>
                <p className="text-gray-300 text-sm">support@stylehype.com</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-gray-300 text-sm mb-3">Follow us</p>
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-700/50 hover:bg-amber-600 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <IoLogoInstagram className="h-4 w-4 text-gray-300 hover:text-white" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-700/50 hover:bg-amber-600 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <RiTwitterXLine className="h-4 w-4 text-gray-300 hover:text-white" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-700/50 hover:bg-amber-600 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <TbBrandMeta className="h-4 w-4 text-gray-300 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8 xl:px-16 2xl:px-24 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 STYLEHYPE. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
