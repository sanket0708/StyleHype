import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "Stripe",
      shippingMethod: "Standard",
      shippingAddress: { city: "California", country: "USA" },
      orderItems: [
        {
          productId: "1",
          name: "Jacket",
          price: 100,
          quantity: 1,
          image: "https://picsum.photos/500/500?random=1",
        },
        {
          productId: "2",
          name: "Shirt",
          price: 100,
          quantity: 2,
          image: "https://picsum.photos/500/500?random=1",
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm shadow-gray-900/5 p-6 sm:p-8">
        <h2 className="text-2xl md:text-3xl uppercase tracking-widest font-light mb-8">Order Details</h2>
        {!orderDetails ? (
          <p className="text-gray-600">No order details found!</p>
        ) : (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-gray-700">Order ID</h3>
                <p className="text-base font-medium">#{orderDetails._id}</p>
                <p className="text-sm text-gray-500">
                  {new Date(orderDetails.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-2">
                <span
                  className={`${
                    orderDetails.isPaid
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  } px-3 py-1 rounded-full text-xs uppercase tracking-widest font-medium`}
                >
                  {orderDetails.isPaid ? "Approved" : "Pending"}
                </span>
                <span
                  className={`${
                    orderDetails.isDelivered
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  } px-3 py-1 rounded-full text-xs uppercase tracking-widest font-medium`}
                >
                  {orderDetails.isDelivered ? "Delivered" : "Pending Delivery"}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gray-700 mb-3">Payment Info</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">Payment Method: <span className="font-medium">{orderDetails.paymentMethod}</span></p>
                  <p className="text-gray-600">Status: <span className="font-medium">{orderDetails.isPaid ? "Paid" : "Unpaid"}</span></p>
                </div>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gray-700 mb-3">Shipping Info</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">Shipping Method: <span className="font-medium">{orderDetails.shippingMethod}</span></p>
                  <p className="text-gray-600">
                    Address: <span className="font-medium">{`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}</span>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest text-gray-700 mb-4">Products</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full table-fixed">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-xs uppercase tracking-widest text-gray-700 py-3 px-4 text-left w-2/5">Product</th>
                      <th className="text-xs uppercase tracking-widest text-gray-700 py-3 px-4 text-center w-1/6">Unit Price</th>
                      <th className="text-xs uppercase tracking-widest text-gray-700 py-3 px-4 text-center w-1/6">Quantity</th>
                      <th className="text-xs uppercase tracking-widest text-gray-700 py-3 px-4 text-center w-1/6">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {orderDetails.orderItems.map((item) => (
                      <tr key={item.productId}>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-20 object-cover rounded flex-shrink-0"
                            />
                            <Link
                              to={`/product/${item.productId}`}
                              className="text-sm font-medium hover:text-amber-600 transition-colors truncate"
                            >
                              {item.name}
                            </Link>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-sm font-medium text-center">${item.price?.toLocaleString()}</td>
                        <td className="py-4 px-4 text-sm text-gray-600 text-center">{item.quantity}</td>
                        <td className="py-4 px-4 text-sm font-medium text-center">${(item.price * item.quantity)?.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <Link 
                to="/my-orders" 
                className="inline-flex items-center text-sm uppercase tracking-widest text-gray-600 hover:text-black transition-colors"
              >
                ← Back to My Orders
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDetailsPage;
