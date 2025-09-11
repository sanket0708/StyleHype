import React from "react";
import { Link } from "react-router-dom";
import featured from "../../assets/featured.png";

const FeaturedCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center rounded-3xl bg-amber-50/60">
        <div className="lg:w-1/2 p-8 md:p-10 lg:p-12 text-center lg:text-left">
          <h2 className="text-sm md:text-base font-semibold text-amber-700 mb-2 tracking-wide uppercase">
            Style That Moves With You
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight text-gray-900">
            Fashion that fits your lifestyle — effortlessly and stylishly.
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
            Discover premium fashion collections crafted with attention to
            detail, timeless style, and everyday comfort. Elevate your wardrobe
            with pieces designed to inspire confidence and redefine modern
            elegance.
          </p>
          <Link
            to="/collections/all"
            className="inline-block bg-amber-600 text-white px-6 md:px-8 py-3 rounded-lg text-sm md:text-base font-medium uppercase tracking-wider shadow-md transition-all duration-200 hover:bg-amber-700 active:scale-[.98] focus:outline-none focus:ring-2 focus:ring-amber-400/60 cursor-pointer"
          >
            SHOP NOW
          </Link>
        </div>

        <div className="lg:w-1/2 w-full overflow-hidden rounded-t-3xl lg:rounded-tr-3xl lg:rounded-br-3xl group">
          <img
            src={featured}
            alt="Featured Collection"
            className="w-full h-[280px] sm:h-[360px] lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
