import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero section fade-in
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      });

      // Animate paragraph lines one-by-one
      gsap.from(textRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="bg-[#f1f4e3] px-4 md:px-12 py-16 md:py-24 relative overflow-hidden"
    >
 <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center relative px-4 md:px-0">
  {/* Left - Paragraph Text */}
  <div ref={textRef} className="space-y-4 col-span-1 max-w-full md:max-w-[335px]">
    <p className="text-sm md:text-base text-[#2d3b36] leading-relaxed">
      Transform your skin routine with premium products that restore, protect, and enhance your natural glow every day.
    </p>
  </div>

  {/* Center - Glow Naturally Text */}
  <div className="text-center col-span-1 max-w-full md:max-w-[398px] mx-auto">
    <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-[#2d3b36] leading-tight transition duration-300 hover:scale-105 hover:text-[#3e4b42] cursor-pointer">
      GLOW <br />NATURALLY
    </h1>
  </div>

  {/* Right - Image aligned with Glow Naturally */}
  <div className="flex justify-center md:justify-end col-span-1">
    <Image
      src="/bfa6cb471def1625f335564f2d78bc0748f6b64c (1).jpg"
      alt="Product Plum"
      width={150}
      height={200}
      className="rounded-xl object-cover transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
    />
  </div>
</div>


      {/* SKINCARE Section with overlapping image and shop pill */}
      <div className="mt-12 mb-6 w-full flex justify-center items-center relative">
        {/* SKINCARE Text */}
        <h2 className="mt-30 text-[70px] sm:text-[150px] md:text-[250px] font-bold text-[#2d3b36] tracking-tight text- leading-none">
          SKINCARE
        </h2>

        {/* Image overlapping SKINCARE center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <Image
            src="/eaf98c86e767898b5d5bf09e2afbcbba14d30f51.png"
            alt="On Skincare"
            width={290}
            height={120}
            className="rounded-xl object-cover transition duration-700 ease-in-out hover:shadow-2xl hover:scale-110 hover:shadow-2xl hover:brightness-110"
          />
        </div>

        {/* SHOP NOW pill */}
        <div className="absolute left-[10%] top-[0%] bg-[#2d3b36] text-white text-sm md:text-base font-semibold px-4 py-2 rounded-full shadow-md z-20 border-2 border-transparent hover:border-white transition duration-300 cursor-pointer">
          SHOP NOW
        </div>
      </div>

      <section className="px-8 py-12 md:py-20 bg-[#f1f4e3] text-center">
  <div className="max-w-5xl mx-auto text-[40px] md:text-[22px] leading-relaxed tracking-wide">
    
    {/* Mixed Paragraph */}
    <p className="font-inter font-normal text-[30px] leading-[78px] tracking-[-0.035em] text-[#2d3b36] text-center max-w-5xl mx-auto px-4">

      <span className="text-[#2d3b36] font-semibold">
        Experience the ultimate in skincare with our expertly formulated products,
        crafted to nourish, protect, and rejuvenate your skin. Combining the finest
        natural ingredients with{" "}
      </span>
      advanced science, our collection ensures every skin type can achieve a radiant, healthy glow. Embrace your beauty with confidence every day. Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin.
    </p>

  </div>
</section>

    </section>
  );
}
