import React from "react";
import mensImage from "../../assets/menC.png";
import womensImage from "../../assets/womenC.png";
import { Link } from "react-router-dom";

const GenderCollectionSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Women's Collection */}
          <div className="group relative overflow-hidden">
            <img
              src={womensImage}
              alt="Women's Collection"
              className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="bg-white/95 backdrop-blur-sm p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  Women's Collection
                </h3>
                <Link
                  to="/collections/all?gender=Women"
                  className="inline-block bg-gray-900 text-white px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:bg-gray-700 hover:scale-[1.02] group/btn"
                >
                  <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">
                    Shop Now
                  </span>
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Men's Collection */}
          <div className="group relative overflow-hidden">
            <img
              src={mensImage}
              alt="Men's Collection"
              className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="bg-white/95 backdrop-blur-sm p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  Men's Collection
                </h3>
                <Link
                  to="/collections/all?gender=Men"
                  className="inline-block bg-gray-900 text-white px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:bg-gray-700 hover:scale-[1.02] group/btn"
                >
                  <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">
                    Shop Now
                  </span>
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
