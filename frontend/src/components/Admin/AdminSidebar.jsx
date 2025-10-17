import React from "react";
import {
  FaBoxOpen,
  FaClipboardList,
  FaSignOutAlt,
  FaStore,
  FaUsers,
} from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";


const AdminSidebar = ({closeSideBar}) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <Link to="/admin" className="text-xl uppercase tracking-widest font-light text-gray-900">
          StyleHype
        </Link>
      </div>
      <h2 className="text-sm uppercase tracking-widest text-gray-600 mb-6 text-center">Admin Dashboard</h2>

      <nav className="flex flex-col space-y-1">
        <NavLink
          to="/admin/users" onClick={closeSideBar}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-100 text-gray-900 border border-gray-200 py-2.5 px-3 rounded flex items-center gap-2"
              : "text-gray-700 hover:bg-gray-50 py-2.5 px-3 rounded flex items-center gap-2"
          }
        >
          <FaUsers className="w-5 h-5" />
          <span className="text-sm uppercase tracking-widest">Users</span>
        </NavLink>
        <NavLink
          to="/admin/products"  onClick={closeSideBar}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-100 text-gray-900 border border-gray-200 py-2.5 px-3 rounded flex items-center gap-2"
              : "text-gray-700 hover:bg-gray-50 py-2.5 px-3 rounded flex items-center gap-2"
          }
        >
          <FaBoxOpen className="w-5 h-5" />
          <span className="text-sm uppercase tracking-widest">Products</span>
        </NavLink>
        <NavLink
          to="/admin/orders"  onClick={closeSideBar}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-100 text-gray-900 border border-gray-200 py-2.5 px-3 rounded flex items-center gap-2"
              : "text-gray-700 hover:bg-gray-50 py-2.5 px-3 rounded flex items-center gap-2"
          }
        >
          <FaClipboardList className="w-5 h-5" />
          <span className="text-sm uppercase tracking-widest">Orders</span>
        </NavLink>
        <NavLink
          to="/admin/shop"  onClick={closeSideBar}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-100 text-gray-900 border border-gray-200 py-2.5 px-3 rounded flex items-center gap-2"
              : "text-gray-700 hover:bg-gray-50 py-2.5 px-3 rounded flex items-center gap-2"
          }
        >
          <FaStore className="w-5 h-5" />
          <span className="text-sm uppercase tracking-widest">Shop</span>
        </NavLink>
      </nav>
      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="w-full bg-black hover:bg-gray-900 text-white py-2.5 px-3 rounded flex items-center gap-2"
        >
          <FaSignOutAlt className="w-5 h-5" />
          <span className="text-sm uppercase tracking-widest">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
