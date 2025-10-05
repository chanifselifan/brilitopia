import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import DetailBuku from "@/components/DetailBuku";
import DetailVideo from "@/components/DetailVideo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductsSection />
      <DetailBuku />
      <DetailVideo />
      <Footer />
    </div>
  );
}