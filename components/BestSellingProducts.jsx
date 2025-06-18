import React, { useRef } from "react";

export default function BestSellingProducts() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const products = [
    {
      img: "/b5d506ba564dadaf25df9a99f7c08d02000e2a28.jpg",
      title: "ALYA SKIN CLEANSER.",
      price: "$29.99",
    },
    {
      img: "/7f8a2c6c21eba852591a3204e9530ab266e489a9.jpg",
      title: "RITUAL OF SAKURA.",
      price: "$27.99",
    },
    {
      img: "/85cb9ca1071e88c75a0e9f1dae2c60adebceca2e.jpg",
      title: "THE BODY LOTION.",
      price: "$19.99",
    },
  ];

  return (
    <section className="bg-[#f1f4e3] px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Row: Bullet, Heading, Arrows */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Bullet */}
          <div className="inline-flex items-center border border-[#2d3b36] px-5 py-2 rounded-full text-[#2d3b36] hover:bg-[#2d3b36] hover:text-white transition-all duration-300 text-base font-medium w-fit cursor-pointer">
            <span className="text-3xl font-bold mr-2">•</span> Best Selling Products
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center text-center">
            <p className="text-[30px] sm:text-[40px] text-[#2d3b36] font-semibold">
              Skincare that brings out
            </p>
            <p className="text-[30px] sm:text-[40px] text-[#2d3b36] font-semibold">
              your natural radiance
            </p>
          </div>

          {/* Arrows */}
          <div className="flex space-x-4">
            <img
              src="/left arrow 1.svg"
              alt="Left Arrow"
              className="w-10 h-10 cursor-pointer hover:scale-110 transition"
              onClick={() => scroll("left")}
            />
            <img
              src="/right arrow 1.svg"
              alt="Right Arrow"
              className="w-10 h-10 cursor-pointer hover:scale-110 transition"
              onClick={() => scroll("right")}
            />
          </div>
        </div>

        {/* Product Images with Overlay Info */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 overflow-x-auto gap-6 scroll-smooth snap-x snap-mandatory scrollbar-hide"
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="min-w-[280px] md:min-w-0 snap-start relative group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-[700px] object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Info Rectangle Inside Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white px-4 py-3 rounded-md flex justify-between items-center shadow group-hover:scale-[1.02] transition">
                <div>
                  <h3 className="text-[#2d3b36] text-sm font-semibold">{product.title}</h3>
                  <p className="text-[#2d3b36] text-xs">FROM {product.price}</p>
                </div>
                <div className="bg-[#2D3B361A] p-2 rounded-md flex items-center justify-center">
                  <img
                    src="/cart-large-2-svgrepo-com 5.svg"
                    alt="Cart"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Full-Width Image Banner Section */}

    </section>
  );
}
