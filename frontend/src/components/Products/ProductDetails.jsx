import React, { useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description:
    "This slim-fit jacket is tailored for a sleek, modern silhouette that flatters every frame. Crafted from high-quality materials, it offers both style and comfort in equal measure. Perfect for layering or making a statement on its own, it transitions effortlessly from day to night.",
  brand: "FashionStreet",
  material: "Leather",
  size: ["S", "M", "L", "XL"],
  colors: ["Red", "Brown", "Black"],
  images: [
    {
      url: "https://picsum.photos/200?random=1",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/200?random=2",
      altText: "Stylish Jacket 2",
    },
  ],
};

const similarProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 120,
    images: [{ url: "https://picsum.photos/200?random=3" }],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 120,
    images: [{ url: "https://picsum.photos/200?random=3" }],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 120,
    images: [{ url: "https://picsum.photos/200?random=3" }],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 120,
    images: [{ url: "https://picsum.photos/200?random=3" }],
  },
];

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(
    selectedProduct.images?.[0]?.url ?? null
  );

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  

  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and color!", {
        duration: 1000,
      });
      return;
    }

    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success("Items added to cart successfully!", { duration: 1000 });
      setIsButtonDisabled(false);
    }, 500);
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto p-0 md:p-0">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border transition-all duration-200 hover:scale-105 hover:shadow ${
                  mainImage === image.url
                    ? "border-amber-600 ring-2 ring-amber-500/60"
                    : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          <div className="md:w-1/2">
            <div className="mb-4 group relative overflow-hidden rounded-xl">
              {mainImage && (
              <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              />)}
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-amber-500/10" />
            </div>
          </div>
          <div className="md:hidden flex overflow-x-auto space-x-4 mb-6 pb-2 -mx-1 px-1 snap-x">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border snap-start transition-all duration-200 hover:scale-105 hover:shadow ${
                  mainImage === image.url
                    ? "border-amber-600 ring-2 ring-amber-500/60"
                    : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray-500 mb-1 line-through select-none">
              {selectedProduct.originalPrice &&
                `$${selectedProduct.originalPrice}`}
            </p>
            <p className="text-2xl font-semibold text-amber-500 mb-3">
              $ {selectedProduct.price}
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {selectedProduct.description}
            </p>
            <div className="mb-4">
              <p className="text-gray-800 font-medium">Color</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-lg border transition-all duration-200 cursor-pointer hover:shadow focus:outline-none focus:ring-2 focus:ring-amber-400/60 ${
                      selectedColor === color
                        ? "border-4 bg-amber-500"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-800 font-medium">Size</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.size.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border transition-all duration-200 cursor-pointer hover:shadow focus:outline-none focus:ring-2 focus:ring-amber-400/60 ${
                      selectedSize === size
                        ? "bg-amber-500 text-white"
                        : "bg-white hover:bg-amber-50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-800 font-medium">Quantity</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="px-3 py-1.5 bg-gray-200 rounded-lg text-lg cursor-pointer transition active:scale-95 hover:bg-amber-100"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="px-3 py-1.5 bg-gray-200 rounded-lg text-lg cursor-pointer transition active:scale-95 hover:bg-amber-100"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`bg-amber-500 hover:bg-black hover:text-amber-400 text-white py-3 px-6 rounded-xl w-full mb-4 shadow-md transition-all duration-200 ${
                isButtonDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer hover:bg-amber-700 active:scale-[.98]"
              }`}
            >
              {isButtonDisabled ? "ADDING..." : "ADD TO CART"}
            </button>
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">More Details</h3>
              <table className="w-full text-left text-sm text-gray-600 border-separate border-spacing-y-2">
                <tbody>
                  <tr>
                    <td className="py-2 text-gray-500">Brand</td>
                    <td className="py-2 font-medium">
                      {selectedProduct.brand}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-500">Material</td>
                    <td className="py-2 font-medium">
                      {selectedProduct.material}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4 lg:text-3xl">
            You May Also Like
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
