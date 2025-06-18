import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import BestSellingProducts from "@/components/BestSellingProducts";
import BannerImage from "@/components/BannerImage"; // ✅ Step 1: Import the new BannerImage

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffefc]">
      {/* Navbar at the top */}
      <Navbar />

      {/* Hero Section below Navbar */}
      <Hero />

      {/* WhyUs Section */}
      <WhyUs />

      {/* Best Selling Products Section */}
      <BestSellingProducts />

      {/* ✅ Banner Image Section */}
      <BannerImage />

      {/* Optional: Main Content */}
      <main className="p-10">

    
      </main>
    </div>
  );
}
