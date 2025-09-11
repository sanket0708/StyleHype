import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbWidthPercent, setThumbWidthPercent] = useState(0);

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/200?random=1",
          alt: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Stylish Jacket",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/200?random=1",
          alt: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "3",
      name: "Stylish Jacket",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/200?random=1",
          alt: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylish Jacket",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/200?random=1",
          alt: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "Stylish Jacket",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/200?random=1",
          alt: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "6",
      name: "Stylish Jacket",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/200?random=1",
          alt: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "7",
      name: "Stylish Jacket",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/200?random=1",
          alt: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "8",
      name: "Stylish Jacket",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/200?random=1",
          alt: "Stylish Jacket",
        },
      ],
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScroll =
        container.scrollWidth > leftScroll + container.clientWidth;

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScroll);

      const maxScroll = container.scrollWidth - container.clientWidth;
      const progress = maxScroll > 0 ? leftScroll / maxScroll : 0;
      setScrollProgress(progress);
      const thumbPercent =
        container.scrollWidth > 0
          ? (container.clientWidth / container.scrollWidth) * 100
          : 0;
      setThumbWidthPercent(Math.max(10, Math.min(100, thumbPercent)));
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      const handleResize = () => updateScrollButtons();
      window.addEventListener("resize", handleResize);
      return () => {
        container.removeEventListener("scroll", updateScrollButtons);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto mb-8 relative">
        <div className="grid grid-cols-1 items-center gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-end sm:gap-4">
          <div className="hidden sm:block"></div>
          <div className="justify-self-center text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-gray-900 tracking-wide">
              Latest drops
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-1 sm:mt-2">
              Explore new arrivals blending timeless elegance with modern
              design—each piece tells stories.
            </p>
          </div>
          <div className="flex items-center gap-3 justify-self-center sm:justify-self-end mt-1 sm:mt-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`h-10 w-10 rounded-full border transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-900/10 active:scale-95 ${
                canScrollLeft
                  ? "bg-white text-gray-900 hover:bg-gray-50"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
              }`}
              aria-label="Scroll left"
            >
              <FiChevronLeft className="text-xl mx-auto" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`h-10 w-10 rounded-full border transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-900/10 active:scale-95 ${
                canScrollRight
                  ? "bg-white text-gray-900 hover:bg-gray-50"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
              }`}
              aria-label="Scroll right"
            >
              <FiChevronRight className="text-xl mx-auto" />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="container mx-auto overflow-x-auto scrollbar-hide flex gap-5 sm:gap-6 relative snap-x snap-mandatory select-none cursor-grab active:cursor-grabbing scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[78%] sm:min-w-[65%] md:min-w-[50%] lg:min-w-[32%] xl:min-w-[28%] relative snap-start group"
          >
            <img
              src={product.images[0]?.url}
              alt="Image"
              className="w-full h-[340px] sm:h-[380px] lg:h-[440px] object-cover rounded-xl"
              draggable="false"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent text-white p-4 sm:p-5 rounded-b-xl opacity-95">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium tracking-wide drop-shadow-sm">
                  {product.name}
                </h4>
                <p className="mt-1 text-sm opacity-90">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="container mx-auto mt-4">
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gray-900 rounded-full transition-all duration-200"
            style={{
              width: `${thumbWidthPercent}%`,
              marginLeft: `${
                (1 - thumbWidthPercent / 100) * scrollProgress * 100
              }%`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
