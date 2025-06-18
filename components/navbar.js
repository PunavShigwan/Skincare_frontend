import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-[#f1f4e3] px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left - Brand Name */}
        <div className="text-xl font-bold text-[#2d3b36]">SKINCARE</div>

        <div className="hidden md:flex space-x-6 text-sm font-medium text-[#2d3b36]">
  <a
    href="#"
    className="pb-1 hover:border-b-2 hover:border-[#2d3b36] hover:text-[#2d3b36] transition-all cursor-pointer"
  >
    All Products
  </a>
  <a
    href="#"
    className="pb-1 hover:border-b-2 hover:border-[#2d3b36] hover:text-[#2d3b36] transition-all cursor-pointer"
  >
    Serum
  </a>
  <a
    href="#"
    className="pb-1 hover:border-b-2 hover:border-[#2d3b36] hover:text-[#2d3b36] transition-all cursor-pointer"
  >
    Sunscreen
  </a>
  <a
    href="#"
    className="pb-1 hover:border-b-2 hover:border-[#2d3b36] hover:text-[#2d3b36] transition-all cursor-pointer"
  >
    Bundle
  </a>
</div>


        {/* Right - Icons like reference image */}
        <div className="flex items-center space-x-6">
          {/* Cart with text */}
          <div className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition">
            <div className="bg-[#f9fce8] p-3 rounded-full">
              <img src="bag-4-svgrepo-com%201.svg" alt="Cart" className="w-5 h-5" />
            </div>
            <span className="text-[#2d3b36] font-medium text-sm">Cart (1)</span>
          </div>

          {/* Heart */}
          <div className="bg-[#f9fce8] p-3 rounded-full cursor-pointer hover:scale-105 transition">
            <img src="heart-svgrepo-com%20(1)%201%20(1).svg" alt="Heart" className="w-5 h-5" />
          </div>

          {/* User */}
          <div className="bg-[#f9fce8] p-3 rounded-full cursor-pointer hover:scale-105 transition">
            <img src="person%201.svg" alt="User" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </nav>
  );
}
