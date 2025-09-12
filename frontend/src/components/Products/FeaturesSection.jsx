import React from "react";
import { HiOutlineCreditCard, HiShoppingBag } from "react-icons/hi";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";

const FeaturesSection = () => {
  return (
    <section className="py-12 px-4 mb-4 lg:px-8 xl:px-16 2xl:px-24 bg-gradient-to-br from-amber-50/30 via-white to-amber-50/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 tracking-wide mb-3">
            Why Choose StyleHype?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            Experience premium fashion with exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 text-center shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 border border-amber-100/50 hover:border-amber-200/70">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 cursor-pointer">
              <div className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md group-hover:shadow-lg">
                <HiShoppingBag className="text-xl lg:text-2xl text-amber-700 group-hover:text-amber-800 transition-colors duration-300" />
              </div>
              <h4 className="text-base lg:text-lg font-bold text-gray-900 mb-2 tracking-wide group-hover:text-amber-800 transition-colors duration-300">
                Free Global Shipping
              </h4>
              <p className="text-gray-600 text-xs lg:text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Get free global shipping with every $100+ order
              </p>
            </div>
          </div>

          <div className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 text-center shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 border border-amber-100/50 hover:border-amber-200/70">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 cursor-pointer">
              <div className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md group-hover:shadow-lg">
                <HiArrowPathRoundedSquare className="text-xl lg:text-2xl text-amber-700 group-hover:text-amber-800 transition-colors duration-300" />
              </div>
              <h4 className="text-base lg:text-lg font-bold text-gray-900 mb-2 tracking-wide group-hover:text-amber-800 transition-colors duration-300">
                Easy 30-Day Returns
              </h4>
              <p className="text-gray-600 text-xs lg:text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Love it or your money back, guaranteed
              </p>
            </div>
          </div>

          <div className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 text-center shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 border border-amber-100/50 hover:border-amber-200/70 sm:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 cursor-pointer">
              <div className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md group-hover:shadow-lg">
                <HiOutlineCreditCard className="text-xl lg:text-2xl text-amber-700 group-hover:text-amber-800 transition-colors duration-300" />
              </div>
              <h4 className="text-base lg:text-lg font-bold text-gray-900 mb-2 tracking-wide group-hover:text-amber-800 transition-colors duration-300">
                Secure Checkout
              </h4>
              <p className="text-gray-600 text-xs lg:text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                100% Secure Checkout—Your Data, Fully Protected
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
