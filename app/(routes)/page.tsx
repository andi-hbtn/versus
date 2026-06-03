import Header from "@/components/layout/Header";
import ProductJourney from "@/components/Home/ProductJourney";
import ServicesSection from "@/components/Home/ServicesSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <ProductJourney />
      <ServicesSection />
    </>
  );
}