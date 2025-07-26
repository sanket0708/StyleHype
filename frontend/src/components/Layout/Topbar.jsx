import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-black text-white border-b border-gray-800 font-light tracking-wide">
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="transition hover:text-yellow-400 hover:scale-110 duration-200">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="transition hover:text-yellow-400 hover:scale-110 duration-200">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="transition hover:text-yellow-400 hover:scale-110 duration-200">
            <RiTwitterXLine className="h-5 w-5" />
          </a>
        </div>
        <div className="text-xs text-center flex-grow select-none">
          <span className="uppercase tracking-widest text-gray-200">Global delivery available — swift and dependable service!</span>
        </div>
        <div className="text-xs hidden md:block">
          <a href="tel:+1234567890" className="transition hover:text-yellow-400 hover:underline duration-200">
            +1 (984) 768-3048
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
