import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParmas, setSearchParmas] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy",
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const materials = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyster",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];

  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ];

  const genders = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParmas]);
    // {category top wear , maxprice : 100 } params.category
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });

    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParmas]);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    // console.log({ name, value, checked, type });
    let newFilters = { ...filters };
    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }

    setFilters(newFilters);
    // console.log(newFilters);
    updateURLParams(newFilters);
  };

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });

    setSearchParmas(params);
    navigate(`?${params.toString()}`);
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPriceRange([0, newPrice]);
    const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };
    setFilters(filters);
    updateURLParams(newFilters);
  };

  return (
    <div className="p-6 bg-white">
      <h3 className="text-xl font-light tracking-wide uppercase text-gray-800 mb-6 border-b border-gray-100 pb-3">Filter</h3>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 uppercase tracking-wide mb-3">Category</label>
        {categories.map((category) => (
          <div className="flex items-center mb-2" key={category}>
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleFilterChange}
              checked={filters.category === category}
              className="mr-3 h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300"
            />
            <span className="text-gray-700 font-light">{category}</span>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 uppercase tracking-wide mb-3">Gender</label>
        {genders.map((gender) => (
          <div className="flex items-center mb-2" key={gender}>
            <input
              type="radio"
              name="gender"
              value={gender}
              onChange={handleFilterChange}
              checked={filters.gender === gender}
              className="mr-3 h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300"
            />
            <span className="text-gray-700 font-light">{gender}</span>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 uppercase tracking-wide mb-3">Color</label>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              value={color}
              onClick={handleFilterChange}
              className={`w-10 h-10 rounded-full border-2 border-gray-200 cursor-pointer transition-all duration-200 hover:scale-110 hover:border-gray-400 ${
                filters.color === color ? "ring-2 ring-gray-600 border-gray-600" : ""
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
            ></button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 uppercase tracking-wide mb-3">Size</label>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <label key={size} className="flex items-center justify-center cursor-pointer">
              <input
                type="checkbox"
                name="size"
                value={size}
                onChange={handleFilterChange}
                checked={filters.size.includes(size)}
                className="sr-only"
              />
              <div className={`w-full py-2 px-3 text-center border border-gray-200 rounded-md transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 ${
                filters.size.includes(size) ? 'bg-gray-800 text-white border-gray-800' : 'text-gray-700'
              }`}>
                <span className="text-sm font-medium">{size}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 uppercase tracking-wide mb-3">Materials</label>
        {materials.map((material) => (
          <div key={material} className="flex items-center mb-2">
            <input
              type="checkbox"
              name="material"
              value={material}
              onChange={handleFilterChange}
              checked={filters.material.includes(material)}
              className="mr-3 h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300"
            />
            <span className="text-gray-700 font-light">{material}</span>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 uppercase tracking-wide mb-3">Brands</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-2">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              onChange={handleFilterChange}
              checked={filters.brand.includes(brand)}
              className="mr-3 h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300"
            />
            <span className="text-gray-700 font-light">{brand}</span>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 uppercase tracking-wide mb-3">Price Range</label>
        <input
          type="range"
          name="priceRange"
          min={0}
          max={100}
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-gray-600 mt-3 text-sm">
          <span className="font-medium">$0</span>
          <span className="bg-gray-100 px-2 py-1 rounded font-medium">${priceRange[1]}</span>
          <span className="font-medium">$100</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
