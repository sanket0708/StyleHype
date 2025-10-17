import React from "react";
import { Link } from "react-router-dom";

const ProductManagement = () => {
  const products = [
    {
      _id: 123123,
      name: "Jeans",
      price: 110,
      sku: "123123213",
    },
  ];

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
    //   console.log("Delete", id);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl md:text-3xl uppercase tracking-widest font-light mb-8">Product Management</h2>
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm shadow-gray-900/5 overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-xs uppercase tracking-widest text-gray-700 py-3 px-4">Name</th>
              <th className="text-xs uppercase tracking-widest text-gray-700 py-3 px-4">Price</th>
              <th className="text-xs uppercase tracking-widest text-gray-700 py-3 px-4">SKU</th>
              <th className="text-xs uppercase tracking-widest text-gray-700 py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product._id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap">{product.name}</td>
                  <td className="py-3 px-4">${product.price}</td>
                  <td className="py-3 px-4">{product.sku}</td>
                  <td className="py-3 px-4">
                    <Link
                      to={`/admin/products/${product._id}/edit`}
                      className="inline-flex items-center justify-center bg-black hover:bg-gray-900 text-white px-3 py-2 rounded text-sm uppercase tracking-widest mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded text-sm uppercase tracking-widest"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-6 text-center text-gray-500">No Products Found!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
