import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative bg-gray-50">
      <div className="flex md:hidden p-4 bg-black text-white z-20 shadow-sm">
        <button onClick={toggleSideBar}>
          <FaBars size={24} />
        </button>
        <h1 className="ml-4 text-xl font-light uppercase tracking-widest">Admin Dashboard</h1>
      </div>

      {isSideBarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSideBar}
        ></div>
      )}

      <div
        className={`bg-white w-64 min-h-screen text-gray-900 border-r border-gray-200 shadow-sm absolute md:relative transform ${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:static md:block z-20`}
      >
        {/*Sidebar content*/}
        <AdminSidebar closeSideBar={closeSideBar} />
      </div>

      <div className="flex-grow p-6 md:p-8 overflow-auto">
        <Outlet />
       </div>

    </div>
  );
};

export default AdminLayout;
