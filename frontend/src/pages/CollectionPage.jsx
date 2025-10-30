import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import { useRef } from "react";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilters } from "../redux/slices/productSlice";

const CollectionPage = () => {
  const { collection } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const queryParams = Object.fromEntries([...searchParams]);

  const sidebarRef = useRef(null);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProductsByFilters({ collection, ...queryParams }));
  }, [dispatch, collection, searchParams]);

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const handleClickOutside = (e) => {
    //close sidebar
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSideBarOpen(false);
    }
  };

  useEffect(() => {
    //clicking
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     const fetchedProducts = [
  //       {
  //         _id: 1,
  //         name: "Product 1",
  //         price: 120,
  //         images: [{ url: "https://picsum.photos/200?random=3" }],
  //       },
  //       {
  //         _id: 2,
  //         name: "Product 2",
  //         price: 120,
  //         images: [{ url: "https://picsum.photos/200?random=3" }],
  //       },
  //       {
  //         _id: 3,
  //         name: "Product 3",
  //         price: 120,
  //         images: [{ url: "https://picsum.photos/200?random=3" }],
  //       },
  //       {
  //         _id: 4,
  //         name: "Product 4",
  //         price: 120,
  //         images: [{ url: "https://picsum.photos/200?random=3" }],
  //       },
  //       {
  //         _id: 1,
  //         name: "Product 5",
  //         price: 120,
  //         images: [{ url: "https://picsum.photos/200?random=3" }],
  //       },
  //       {
  //         _id: 2,
  //         name: "Product 6",
  //         price: 120,
  //         images: [{ url: "https://picsum.photos/200?random=3" }],
  //       },
  //       {
  //         _id: 3,
  //         name: "Product 7",
  //         price: 120,
  //         images: [{ url: "https://picsum.photos/200?random=3" }],
  //       },
  //       {
  //         _id: 4,
  //         name: "Product 8",
  //         price: 120,
  //         images: [{ url: "https://picsum.photos/200?random=3" }],
  //       },
  //     ];
  //     setProducts(fetchedProducts);
  //   }, 1000);
  // }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/*mobile filer*/}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" />
      </button>

      {/*sidebar*/}
      <div
        ref={sidebarRef}
        className={`${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl lg:text-4xl mt-4 font-light tracking-wide uppercase mb-4 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent">
          All Collections
        </h2>

        <p className="text-gray-600 font-light tracking-wide mb-8 max-w-3xl text-lg leading-relaxed">
          Discover our curated selection of premium fashion pieces where each
          item is crafted with attention to detail and designed to elevate your
          wardrobe with effortless sophistication.
        </p>

        <SortOptions />

        {/*product grid */}
        <ProductGrid products={products} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default CollectionPage;
