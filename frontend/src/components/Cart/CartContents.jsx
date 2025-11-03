import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  updateCartItemQuantity,
  removeFromCart,
} from "../../redux/slices/cartSlice";

const CartContents = ({ cart, userId, guestId }) => {
  // const cartProducts = [
  //   {
  //     productId: 1,
  //     name: "Tshirt",
  //     size: "M",
  //     color: "Red",
  //     quantity: 1,
  //     price: 15,
  //     image: "https://picsum.photos/200?random=1",
  //   },
  //   {
  //     productId: 2,
  //     name: "Jeans",
  //     size: "M",
  //     color: "Blue",
  //     quantity: 1,
  //     price: 25,
  //     image: "https://picsum.photos/200?random=1",
  //   },
  //   {
  //     productId: 3,
  //     name: "Hoodie",
  //     size: "M",
  //     color: "Green",
  //     quantity: 1,
  //     price: 35,
  //     image: "https://picsum.photos/200?random=1",
  //   },
  // ];
  const dispatch = useDispatch();

  //handle adding
  const handleAddToCart = (productId, delta, quantity, size, color) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      dispatch(
        updateCartItemQuantity({
          productId,
          quantity: newQuantity,
          guestId,
          userId,
          size,
          color,
        })
      );
    }
  };

  //removing
  const handleRemoveFromCart = (productId, size, color) => {
    dispatch(removeFromCart({ productId, guestId, userId, size, color }));
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {cart.products.map((product, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row items-start justify-between p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-start sm:items-center flex-1 w-full sm:w-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-20 sm:w-20 sm:h-24 object-cover mr-3 sm:mr-4 rounded-lg shadow-sm flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-800 text-base sm:text-lg mb-1">
                {product.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                Size: <span className="font-medium">{product.size}</span> |
                Color: <span className="font-medium">{product.color}</span>
              </p>
              <div className="flex items-center">
                <button
                  onClick={() =>
                    handleAddToCart(
                      product.productId,
                      -1,
                      product.quantity,
                      product.size,
                      product.color
                    )
                  }
                  className="border cursor-pointer border-gray-300 rounded-l-lg px-2 sm:px-3 py-1 text-sm sm:text-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                >
                  -
                </button>
                <span className="mx-2 sm:mx-4 font-semibold text-gray-700 min-w-[1.5rem] sm:min-w-[2rem] text-center text-sm sm:text-base">
                  {product.quantity}
                </span>
                <button
                  onClick={() =>
                    handleAddToCart(
                      product.productId,
                      1,
                      product.quantity,
                      product.size,
                      product.color
                    )
                  }
                  className="border cursor-pointer border-gray-300 rounded-r-lg px-2 sm:px-3 py-1 text-sm sm:text-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-between w-full sm:w-auto mt-3 sm:mt-0 sm:ml-4 sm:h-24">
            <p className="font-bold text-base sm:text-lg text-gray-800">
              ${product.price.toLocaleString()}
            </p>
            <button
              onClick={() =>
                handleRemoveFromCart(
                  product.productId,
                  product.size,
                  product.color
                )
              }
              className="p-1.5 cursor-pointer sm:p-2 hover:bg-red-50 rounded-full transition-colors duration-200 group ml-auto sm:ml-0"
            >
              <RiDeleteBin3Line className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 group-hover:text-red-600 transition-colors duration-200" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
