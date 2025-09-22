import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PayPalButton from "./PayPalButton";

const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      image: "https://picsum.photos/150?random=1",
    },
    {
      name: "Casual Sneakers",
      size: "M",
      color: "White",
      price: 70,
      image: "https://picsum.photos/150?random=1",
    },
  ],

  totalPrice: 190,
};

const Checkout = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId(123);
  };

  const handlePaymentSuccess = (details) => {
    console.log("Payment successful", details);
    navigate("/order-confirmation");
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Checkout Form */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm shadow-gray-900/5 p-6 sm:p-8">
          <h2 className="text-2xl md:text-3xl uppercase tracking-widest font-light mb-6">Checkout</h2>
          <form onSubmit={handleCreateCheckout} className="space-y-6">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-700 mb-3">Contact Details</h3>
              <div className="mb-4">
                <label className="block text-xs uppercase tracking-widest text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  value="user@example.com"
                  className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 disabled:bg-gray-50"
                  disabled
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-700 mb-3">Delivery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-600 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    required
                    value={shippingAddress.firstName}
                    onChange={(e) =>
                      setShippingAddress({
                        ...shippingAddress,
                        firstName: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-600 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    required
                    value={shippingAddress.lastName}
                    onChange={(e) =>
                      setShippingAddress({
                        ...shippingAddress,
                        lastName: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs uppercase tracking-widest text-gray-600 mb-2">Address</label>
                <input
                  type="text"
                  value={shippingAddress.address}
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      address: e.target.value,
                    })
                  }
                  className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-600 mb-2">City</label>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    required
                    value={shippingAddress.city}
                    onChange={(e) =>
                      setShippingAddress({
                        ...shippingAddress,
                        city: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-600 mb-2">Postal Code</label>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    required
                    value={shippingAddress.postalCode}
                    onChange={(e) =>
                      setShippingAddress({
                        ...shippingAddress,
                        postalCode: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-600 mb-2">Country</label>
                  <input
                    type="text"
                    value={shippingAddress.country}
                    onChange={(e) =>
                      setShippingAddress({
                        ...shippingAddress,
                        country: e.target.value,
                      })
                    }
                    className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-600 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={shippingAddress.phone}
                    onChange={(e) =>
                      setShippingAddress({
                        ...shippingAddress,
                        phone: e.target.value,
                      })
                    }
                    className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="pt-2">
              {!checkoutId ? (
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded transition-colors duration-200 hover:bg-gray-900 uppercase tracking-widest text-sm"
                >
                  Continue to Payment
                </button>
              ) : (
                <div className="mt-2">
                  <h3 className="text-sm uppercase tracking-widest text-gray-700 mb-4">Pay with PayPal</h3>
                  <PayPalButton
                    amount={100}
                    onSuccess={handlePaymentSuccess}
                    onError={(err) => alert("Payment failed, Try again later!")}
                  />
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 sm:p-8 h-max">
          <h3 className="text-sm uppercase tracking-widest text-gray-700 mb-4">Order Summary</h3>
          <div className="divide-y divide-gray-200">
            {cart.products.map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-4 py-4"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-24 object-cover rounded"
                  />
                  <div className="min-w-0">
                    <h4 className="text-sm font-medium truncate">{product.name}</h4>
                    <p className="text-xs text-gray-500">Size: {product.size}</p>
                    <p className="text-xs text-gray-500">Color: {product.color}</p>
                  </div>
                </div>
                <p className="text-base font-medium">${product.price?.toLocaleString()}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-medium">${cart.totalPrice?.toLocaleString()}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Shipping</p>
              <p className="font-medium">Free</p>
            </div>
            <div className="flex justify-between items-center border-t pt-4 text-base">
              <p className="uppercase tracking-widest">Total</p>
              <p className="font-semibold">${cart.totalPrice?.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
