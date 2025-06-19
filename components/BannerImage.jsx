import React, { useState } from "react";

export default function BannerImage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are your products safe for sensitive skin?",
      answer:
        "Yes, our products are formulated to be gentle and suitable for all skin types, including sensitive skin.",
    },
    {
      question: "Are your products cruelty-free?",
      answer:
        "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
    },
    {
      question: "What’s your return policy?",
      answer:
        "We offer a 30-day return policy. If you're not satisfied, contact our support team for help.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship worldwide! Shipping costs and times may vary based on your location.",
    },
    {
      question: "How do I choose the right product?",
      answer:
        "Use our skin quiz or reach out to our skincare experts for personalized recommendations.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f1f4e3] px-4 py-10">
      {/* Banner Image with Overlay Text and Shop Now */}
      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-[1720px] rounded-[30px] overflow-hidden">
          <img
            src="/193c7506b5761ba24a86531417253435f11954cb.png"
            alt="Banner"
            className="w-full h-auto object-cover rounded-[30px]"
          />

          <div className="absolute inset-0 flex flex-col justify-end items-center pb-10 px-4 text-center">
            <p className="text-[#FEFFF4] font-inter text-[28px] sm:text-[60px] md:text-[80px] font-normal leading-[1] tracking-[-0.02em] mb-6">
              Feel beautiful inside and out <br />
              with every product
            </p>

            <div className="border-2 border-white text-[#2d3b36] bg-white hover:bg-[#2d3b36] hover:text-white transition px-8 py-3 rounded-full font-semibold cursor-pointer">
              SHOP NOW
            </div>
          </div>
        </div>
      </div>

      {/* Heading above Category Boxes */}
      <div className="mt-28 mb-8 text-center">
        <p className="text-[#2d3b36] font-inter text-[28px] sm:text-[50px] font-normal leading-[1.2] tracking-[-0.02em]">
          Feel beautiful Inside and Out <br />
          with Every Product.
        </p>
      </div>

      {/* Category Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 max-w-5xl mx-auto">
        {["NEW ARRIVAL", "CLEANSING", "ACNE FIGHTER", "ANTI AGING"].map(
          (label, index) => (
            <div
              key={index}
              className="w-[180px] h-[50px] mx-auto text-center flex items-center justify-center border border-[#2d3b36] rounded-full text-[#2d3b36] font-semibold hover:bg-[#2d3b36] hover:text-white transition duration-300 cursor-pointer"
            >
              {label}
            </div>
          )
        )}
      </div>

      {/* Product Cards */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {[
          {
            img: "/b5d506ba564dadaf25df9a99f7c08d02000e2a28.jpg",
            title: "ALYA SKIN CLEANSER",
            price: "$29.99",
            cartColor: "light",
          },
          {
            img: "/7f8a2c6c21eba852591a3204e9530ab266e489a9.jpg",
            title: "DEEP MOISTURIZER",
            price: "$19.99",
            cartColor: "dark",
          },
          {
            img: "/85cb9ca1071e88c75a0e9f1dae2c60adebceca2e.jpg",
            title: "VITAMIN C SERUM",
            price: "$24.99",
            cartColor: "light",
          },
        ].map((product, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-[700px] object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute bottom-4 left-4 right-4 bg-white px-4 py-3 rounded-md flex justify-between items-center shadow group-hover:scale-[1.02] transition">
              <div>
                <h3 className="text-[#2d3b36] text-sm font-semibold">
                  {product.title}
                </h3>
                <p className="text-[#2d3b36] text-xs">FROM {product.price}</p>
              </div>
              <div
                className={`${
                  product.cartColor === "dark"
                    ? "bg-[#2d3b36] text-white"
                    : "bg-[#2D3B361A] text-[#2d3b36]"
                } p-2 rounded-md flex flex-col items-center justify-center text-xs transition`}
              >
                <img
                  src="/cart-large-2-svgrepo-com 5.svg"
                  alt="Cart"
                  className={`w-6 h-6 ${
                    product.cartColor === "dark" ? "invert" : ""
                  }`}
                />
                {product.cartColor === "dark" && (
                  <span className="text-[10px] mt-1">Added</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-28 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Image with Headphone Box */}
        <div className="relative">
          <img
            src="/85cb9ca1071e88c75a0e9f1dae2c60adebceca2e.jpg"
            alt="FAQ Visual"
            className="rounded-xl w-full h-auto object-cover max-h-[700px]"
          />
          <div className="absolute bottom-4 left-1/3 bg-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-md">
            <img
              src="/headphone-svgrepo-com 1.svg"
              alt="Support"
              className="w-6 h-6"
            />
            <span className="text-[#2d3b36] text-sm font-medium">
              24/7 We're here to help you
            </span>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <div className="inline-flex items-center border border-[#2d3b36] px-5 py-2 rounded-full text-[#2d3b36] text-base font-medium w-fit mb-4">
            <span className="text-3xl font-bold mr-2">•</span> Frequently Asked
            Questions
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#2d3b36] mb-8">
            Answers to your skincare questions, all in one place
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#2d3b36] rounded-md p-4 cursor-pointer transition duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between text-[#2d3b36] font-medium">
                  <span>{faq.question}</span>
                  <span className="text-xl font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-3 text-[#2d3b36] text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

     {/* Footer Section */}
<footer className="bg-[#2d3b36] text-[#f1f4e3] mt-18 relative overflow-hidden min-h-[700px] w-full">
  {/* Large faded SKINCARE background */}
  <div className="absolute bottom-2 left-0 w-full text-center pointer-events-none">
    <span className="text-[200px] sm:text-[150px] md:text-[280px] font-bold opacity-10 leading-none">
      SKINCARE
    </span>
  </div>

  {/* Foreground content */}
  <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
    {/* Left Side */}
    <div className="flex flex-col justify-between">
      <p className="text-xl md:text-4xl font-medium mb-4">
        Join the Skincare <br /> Community Now.
      </p>
      <div className="flex space-x-6 mb-4">
        {["Facebook", "Instagram", "YouTube"].map((plat) => (
          <span
            key={plat}
            className="cursor-pointer text-sm uppercase tracking-wide transition hover:underline hover:scale-105"
          >
            {plat}
          </span>
        ))}
      </div>
    </div>

    {/* Right Side */}
    <div className="flex flex-col justify-between text-right">
      <div>
        <p className="text-sm md:text-3xl ">Get in Touch</p>
        <p className="text-4xl font-semibold mt-2">contact.skincare.com</p>
      </div>
      <div className="mt-8 space-x-4 text-sm">
        {[
          "Terms of Service",
          "Privacy Policy",
          "Cookies Policy",
        ].map((item, idx, arr) => (
          <React.Fragment key={item}>
            <span className="cursor-pointer transition hover:underline hover:scale-105">
              {item}
            </span>
            {idx < arr.length - 1 && <span className="mx-1">|</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
</footer>
    </section>
  );
}
