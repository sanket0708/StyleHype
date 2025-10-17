import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-3 px-6 bg-white border-b border-gray-200 shadow-sm shadow-gray-900/5">
        {/* left logo */}
        <div>
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-widest text-black uppercase logo-text relative transition-all duration-200 hover:text-amber-500 focus:text-amber-500"
            style={{
              letterSpacing: "0.18em",
              textShadow: "0 1px 8px rgba(0,0,0,0.08)",
            }}
          >
            STYLEHYPE
            <span
              className="absolute left-0 -bottom-1 w-full h-1 rounded bg-amber-500 opacity-0 transition-all duration-200 group-hover:opacity-100 group-focus:opacity-100"
              style={{ height: "3px" }}
            ></span>
          </Link>
        </div>
        {/* Center nav links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/collections/all"
            className="text-gray-700 hover:text-amber-500 text-sm font-medium uppercase tracking-widest transition-all duration-200 hover:underline hover:underline-offset-4 hover:scale-105"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-amber-500 text-sm font-medium uppercase tracking-widest transition-all duration-200 hover:underline hover:underline-offset-4 hover:scale-105"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-amber-500 text-sm font-medium uppercase tracking-widest transition-all duration-200 hover:underline hover:underline-offset-4 hover:scale-105"
          >
            Top Wear
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-amber-500 text-sm font-medium uppercase tracking-widest transition-all duration-200 hover:underline hover:underline-offset-4 hover:scale-105"
          >
            Bottom Wear
          </Link>
        </div>
        {/* icons */}
        <div className="flex items-center space-x-5">
          <Link
            to="/admin"
            className="hover:text-amber-500 transition-all duration-200 block bg-black rounded px-2 py-1 text-white text-sm"
          >
            Admin
          </Link>
          <Link
            to="/profile"
            className="hover:text-amber-500 transition-all duration-200"
          >
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-amber-500 transition-all duration-200"
          >
            <HiOutlineShoppingBag className="h-6 w-6 cursor-pointer text-gray-700" />
            <span className="absolute -top-1 bg-amber-500 text-white text-xs rounded-full px-2 py-0.5 shadow-md">
              4
            </span>
          </button>
          {/* search icon */}

          <SearchBar />

          <button
            onClick={toggleNavDrawer}
            className="md:hidden hover:text-amber-500 transition-all duration-200"
          >
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile navbar */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleNavDrawer}
            className="p-1 hover:text-amber-500 transition-colors duration-200"
          >
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="px-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-8">Menu</h2>
          <nav className="space-y-6">
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-700 hover:text-amber-500 text-sm font-medium uppercase tracking-widest transition-colors duration-200"
            >
              Men
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-700 hover:text-amber-500 text-sm font-medium uppercase tracking-widest transition-colors duration-200"
            >
              Women
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-700 hover:text-amber-500 text-sm font-medium uppercase tracking-widest transition-colors duration-200"
            >
              Top Wear
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-700 hover:text-amber-500 text-sm font-medium uppercase tracking-widest transition-colors duration-200"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
