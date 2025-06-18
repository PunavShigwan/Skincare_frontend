import React from "react";

export default function WhyUs() {
  return (
    <section className="bg-[#f1f4e3] px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div className="space-y-8">
          <div className="inline-flex items-center border border-[#2d3b36] px-5 py-2 rounded-full text-[#2d3b36] text-base font-medium w-fit">
            <span className="text-5xl font-bold mr-2">•</span> Why our products
          </div>

          {/* 01 */}
          <div className="flex items-start space-x-4 hover:bg-[#e8eddd] p-3 rounded-lg transition-all duration-300 cursor-pointer">
            <span className="text-[40px] font-semibold bg-gradient-to-r from-[#76b852] to-[#8DC26F] bg-clip-text text-transparent">
              01.
            </span>
            <div>
              <h3 className="text-[40px] font-semibold text-[#2d3b36]">
                Bio Ingredients
              </h3>
              <p className="text-[#4e5c53] text-[20px] mt-1">
                Get naturally beautiful and transform with our bio <br />
                ingredients creams for healthy, radiant skin.
              </p>
            </div>
          </div>

          {/* 02 */}
          <div className="flex items-start space-x-4 hover:bg-[#e8eddd] p-3 rounded-lg transition-all duration-300 cursor-pointer">
            <span className="text-[40px] font-semibold bg-gradient-to-r from-[#76b852] to-[#8DC26F] bg-clip-text text-transparent">
              02.
            </span>
            <div>
              <h3 className="text-[40px] font-semibold text-[#2d3b36]">
                Everything Natural
              </h3>
              <p className="text-[#4e5c53] text-[20px] mt-1">
                Pure ingredients for pure skin. The perfect solution <br />
                for your skin care needs.
              </p>
            </div>
          </div>

          {/* 03 */}
          <div className="flex items-start space-x-4 hover:bg-[#e8eddd] p-3 rounded-lg transition-all duration-300 cursor-pointer">
            <span className="text-[40px] font-semibold bg-gradient-to-r from-[#76b852] to-[#8DC26F] bg-clip-text text-transparent">
              03.
            </span>
            <div>
              <h3 className="text-[40px] font-semibold text-[#2d3b36]">
                All Handmade
              </h3>
              <p className="text-[#4e5c53] text-[20px] mt-1">
                Made with love and care. Just for you. Give your skin <br />
                the tender loving care it deserves.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Image with overlay box and SINCE 2001 */}
        <div className="w-full max-w-[500px] ml-auto flex flex-col items-end relative">
          <img
            src="/5617a13221609fb0ba6cd721b235ba7e9b1ffa06.png"
            alt="Skincare Display"
            className="rounded-xl w-full object-cover shadow-lg hover:ring-4 hover:ring-[#2d3b36] transition-all duration-300"
          />
          {/* Overlay box */}
          <div className="absolute bottom-8 left-1/5 bg-white px-4 py-2 rounded-full flex items-center space-x-2 ">
            <img src="/award-svgrepo-com 1.svg" alt="Natural" className="w-6 h-6" />
            <span className="text-[#2d3b36] text-sm font-medium">Best Skincare Product Award Winning</span>
          </div>
          <p className="text-[#2d3b36] text-xs font-medium mt-2 self-start pl-2">
            SINCE 2001
          </p>
        </div>
      </div>
    </section>
  );
}
