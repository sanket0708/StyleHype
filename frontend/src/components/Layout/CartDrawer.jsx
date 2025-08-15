import React from "react";
import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white border-l border-gray-200 shadow-2xl rounded-l-2xl transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer} className="group p-1 rounded-full hover:bg-gray-100 transition-all duration-200 focus:outline-none">
          <IoMdClose className="h-6 w-6 cursor-pointer text-gray-500 group-hover:text-amber-500 transition-all duration-200" />
        </button>
      </div>
      {/* Cart contents  */}
      <div className="flex-grow p-6 overflow-y-auto">
        <h2 className="text-lg font-extrabold uppercase tracking-widest text-gray-900 mb-6">Your Cart</h2>
        {/* Component for the details */}
        <CartContents />
      </div>

      <div className="p-6 bg-white border-t border-gray-100 sticky bottom-0">
        <button className="w-full cursor-pointer bg-amber-500 text-white py-3 rounded-lg font-bold uppercase tracking-widest shadow-md hover:bg-black hover:text-amber-400 transition-all duration-200">
          Checkout
        </button>
        <p className="text-xs tracking-wide text-gray-500 mt-3 text-center">
          Shipping fees, taxes, and any discounts will be applied during checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
