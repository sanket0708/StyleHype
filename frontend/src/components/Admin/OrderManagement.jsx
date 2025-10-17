import React from "react";

const OrderManagement = () => {
  const orders = [
    {
      _id: 123123,
      user: {
        name: "John doe",
      },
      totalPrice: 110,
      status: "Processing",
    },
  ];

  const handleStatusChange = (orderId, status) => {
    // console.log({ id: orderId, status });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl md:text-3xl uppercase tracking-widest font-light mb-8">
        Order Management
      </h2>
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm shadow-gray-900/5 overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-xs uppercase tracking-widest text-gray-700 py-3 px-4">
                Order ID
              </th>
              <th className="text-xs uppercase tracking-widest text-gray-700 py-3 px-4">
                Customer
              </th>
              <th className="text-xs uppercase tracking-widest text-gray-700 py-3 px-4">
                Total Price
              </th>
              <th className="text-xs uppercase tracking-widest text-gray-700 py-3 px-4">
                Status
              </th>
              <th className="text-xs uppercase tracking-widest text-gray-700 py-3 px-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="py-3 px-4">{order.user.name}</td>
                  <td className="py-3 px-4">${order.totalPrice}</td>
                  <td className="py-3 px-4">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                      className="w-full rounded border border-gray-300 bg-white px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => handleStatusChange(order._id, "Delivered")}
                      className="bg-black hover:bg-gray-900 text-white px-3 py-2 rounded text-sm uppercase tracking-widest"
                    >
                      Mark as Delivered
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-3 px-4 text-center text-gray-500">
                  No Orders found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
