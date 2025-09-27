import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    //fetching orders
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "12345",
          createdAt: new Date(),
          shippingAddress: { city: "California", country: "USA" },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: "34567",
          createdAt: new Date(),
          shippingAddress: { city: "California", country: "USA" },
          orderItems: [
            {
              name: "Product 2",
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: "78910",
          createdAt: new Date(),
          shippingAddress: { city: "New York", country: "USA" },
          orderItems: [
            {
              name: "Product 2",
              image: "https://picsum.photos/500/500?random=3",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
      ];

      setOrders(mockOrders);
    }, 1000);
  }, []);

  const handleRowClick = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm shadow-gray-900/5 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wider">
            Order History
          </h2>
          <p className="text-amber-100 text-sm mt-1">
            Track and manage your recent orders
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-gray-500">
            <thead className="bg-amber-50/50 text-xs uppercase text-gray-700 border-b border-amber-100">
              <tr>
                <th className="py-3 px-4 sm:py-4 font-semibold tracking-wider">
                  Image
                </th>
                <th className="py-3 px-4 sm:py-4 font-semibold tracking-wider">
                  Order ID
                </th>
                <th className="py-3 px-4 sm:py-4 font-semibold tracking-wider">
                  Created
                </th>
                <th className="py-3 px-4 sm:py-4 font-semibold tracking-wider">
                  Shipping
                </th>
                <th className="py-3 px-4 sm:py-4 font-semibold tracking-wider">
                  Items
                </th>
                <th className="py-3 px-4 sm:py-4 font-semibold tracking-wider">
                  Price
                </th>
                <th className="py-3 px-4 sm:py-4 font-semibold tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    onClick={() => handleRowClick(order._id)}
                    className="border-b border-amber-50 hover:bg-amber-50/30 transition-colors duration-200 cursor-pointer group"
                  >
                    <td className="py-3 px-4">
                      <div className="relative group-hover:scale-105 transition-transform duration-200">
                        <img
                          src={order.orderItems[0].image}
                          alt="Order image"
                          className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-lg shadow-sm"
                        />
                      </div>
                    </td>
                    <td className="py-3 px-4 font-semibold text-gray-900 whitespace-nowrap">
                      <span className="text-amber-600">#{order._id}</span>
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-900">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {new Date(order.createdAt).toLocaleTimeString()}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">
                      {order.shippingAddress
                        ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                        : "N/A"}
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
                        {order.orderItems.length}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-semibold text-gray-900">
                      ${order.totalPrice}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                          order.isPaid
                            ? "bg-green-100 text-green-800 border border-green-200"
                            : "bg-red-100 text-red-800 border border-red-200"
                        }`}
                      >
                        {order.isPaid ? "✓ Paid" : "⏳ Pending"}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-12 px-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                        <svg
                          className="w-8 h-8 text-amber-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        No orders yet!
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Start shopping to see your orders here
                      </p>
                    </div>
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

export default MyOrdersPage;
