import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Term:", searchTerm);
    setIsOpen(false);
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "fixed inset-0 bg-white/95 backdrop-blur-sm h-28 z-50 shadow-2xl" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full"
        >
          <div className="relative w-11/12 sm:w-2/3 md:w-1/2">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-100 px-5 py-3 rounded-full focus:outline-none w-full placeholder:text-gray-500 text-base shadow-md border border-gray-200 focus:border-amber-500 transition-all duration-200"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-amber-500 transition-all duration-200"
            >
              <HiMagnifyingGlass className="h-6 cursor-pointer w-6" />
            </button>
          </div>
          {/* close button */}
          <button
            type="button"
            onClick={handleSearchToggle}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-all duration-200"
          >
            <HiMiniXMark className="h-7 w-7 cursor-pointer" />
          </button>
        </form>
      ) : (
        <button
          onClick={handleSearchToggle}
          className="ml-2 text-gray-700 hover:text-amber-500 transition-all duration-200"
        >
          <HiMagnifyingGlass className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
