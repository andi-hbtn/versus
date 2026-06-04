import Header from "@/components/Layout/Header";
import ProductJourney from "@/components/Home/ProductJourney";
import ServicesSection from "@/components/Home/ServicesSection";
import Footer from "@/components/Layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <ProductJourney />
      <ServicesSection />
    </>
  );
}