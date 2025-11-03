import React from "react";
import { Link } from "react-router-dom";

const AdminHomePage = () => {
  const orders = [
    {
      _id: 1231233,
      user: {
        name: "John Doe",
      },
      totalPrice: 100,
      status: "Success",
    },
    {
      _id: 1231234,
      user: {
        name: "John Doe",
      },
      totalPrice: 100,
      status: "Pending",
    },
    {
      _id: 123123,
      user: {
        name: "John Doe",
      },
      totalPrice: 100,
      status: "Pending",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl md:text-3xl uppercase tracking-widest font-light mb-8">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm shadow-gray-900/5 p-5">
          <h2 className="text-xs uppercase tracking-widest text-gray-600">Revenue</h2>
          <p className="mt-2 text-2xl font-semibold text-gray-900">$1000</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm shadow-gray-900/5 p-5">
          <h2 className="text-xs uppercase tracking-widest text-gray-600">Total Orders</h2>
          <p className="mt-2 text-2xl font-semibold text-gray-900">150</p>
          <Link
            to="/admin/orders"
            className="mt-3 inline-flex text-sm uppercase tracking-widest text-gray-600 hover:text-black transition-colors"
          >
            Manage Orders →
          </Link>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm shadow-gray-900/5 p-5">
          <h2 className="text-xs uppercase tracking-widest text-gray-600">Total Products</h2>
          <p className="mt-2 text-2xl font-semibold text-gray-900">50</p>
          <Link
            to="/admin/products"
            className="mt-3 inline-flex text-sm uppercase tracking-widest text-gray-600 hover:text-black transition-colors"
          >
            Manage Products →
          </Link>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="mt-8 bg-white rounded-lg border border-gray-200 shadow-sm shadow-gray-900/5 p-5 sm:p-6">
        <h2 className="text-sm uppercase tracking-widest text-gray-700 mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-xs uppercase tracking-widest text-gray-700 py-3 px-4 text-left w-1/4">Order ID</th>
                <th className="text-xs uppercase tracking-widest text-gray-700 py-3 px-4 text-left w-1/3">User</th>
                <th className="text-xs uppercase tracking-widest text-gray-700 py-3 px-4 text-center w-1/6">Total Price</th>
                <th className="text-xs uppercase tracking-widest text-gray-700 py-3 px-4 text-center w-1/6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4 font-medium align-middle whitespace-nowrap">#{order._id}</td>
                    <td className="py-3 px-4 align-middle">{order.user.name}</td>
                    <td className="py-3 px-4 text-center font-medium align-middle whitespace-nowrap">${order.totalPrice}</td>
                    <td className="py-3 px-4 text-center align-middle">
                      <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest bg-yellow-100 text-yellow-800 border border-yellow-200">
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-6 text-center text-gray-500">
                    No orders found!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
