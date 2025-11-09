import React from "react";
import heroImg from "../../assets/heroImage.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="hero image"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-9xl font-light tracking-wide uppercase mb-4">
            Wardrobe <br /> Goals
          </h1>
          <p className="text-sm tracking-wide md:text-lg mb-6 font-light">
            Explore fashion with rapid worldwide delivery.
          </p>
          <Link
            to="/collections/all"
            className="inline-block bg-white/90 backdrop-blur-sm text-gray-900 px-8 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:bg-white hover:scale-[1.02]"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
