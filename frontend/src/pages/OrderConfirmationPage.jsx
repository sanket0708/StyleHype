import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slices/cartSlice";

// const checkout = {
//   _id: "12323",
//   createdAt: new Date(),
//   checkoutItems: [
//     {
//       productId: 1,
//       name: "Jacket",
//       color: "black",
//       size: "M",
//       price: 100,
//       image: "https://picsum.photos/200?random=1",
//       quantity: 1,
//     },
//     {
//       productId: 2,
//       name: "Jacket",
//       color: "black",
//       size: "M",
//       price: 120,
//       image: "https://picsum.photos/200?random=2",
//       quantity: 2,
//     },
//   ],

//   shippingAddress: {
//     address: "123 fashion street",
//     city: "California",
//     country: "USA",
//   },
// };

const OrderConfirmationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { checkout } = useSelector((state) => state.checkout);

  //clear the cart after confirmed
  useEffect(() => {
    if (checkout && checkout._id) {
      dispatch(clearCart());
      localStorage.removeItem("cart");
    } else {
      navigate("/my-orders");
    }
  }, [checkout, dispatch, navigate]);

  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString();
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm shadow-gray-900/5 p-6 sm:p-8">
        <h1 className="text-2xl md:text-3xl uppercase tracking-widest font-light text-center mb-8">
          Thank you for your order
        </h1>

        {checkout && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div>
                <h2 className="text-sm uppercase tracking-widest text-gray-700">
                  Order Id
                </h2>
                <p className="text-base font-medium">{checkout._id}</p>
                <p className="text-sm text-gray-500">
                  Order Date:{" "}
                  {new Date(checkout.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="text-sm text-emerald-700">
                Estimated delivery:{" "}
                {calculateEstimatedDelivery(checkout.createdAt)}
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {checkout.checkoutItems.map((item) => (
                <div
                  key={item.productId}
                  className="flex items-center gap-4 py-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-20 object-cover rounded"
                  />
                  <div className="min-w-0">
                    <h4 className="text-sm font-medium truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      Size: {item.size} • Color: {item.color}
                    </p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-sm font-medium">
                      ${"" + item.price.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gray-700 mb-2">
                  Payment
                </h4>
                <p className="text-sm text-gray-600">PayPal</p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gray-700 mb-2">
                  Delivery
                </h4>
                <p className="text-sm text-gray-600">
                  {checkout.shippingAddress.address}
                </p>
                <p className="text-sm text-gray-600">
                  {checkout.shippingAddress.city},{" "}
                  {checkout.shippingAddress.country}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
