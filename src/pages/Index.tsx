import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TestimonialBanner from "@/components/TestimonialBanner";
import FeaturesSection from "@/components/FeaturesSection";
import EmotionalTestimonial from "@/components/EmotionalTestimonial";
import ReviewsSection from "@/components/ReviewsSection";
import ProductComparison from "@/components/ProductComparison";
import PartnerLogos from "@/components/PartnerLogos";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TestimonialBanner />
      <FeaturesSection />
      <EmotionalTestimonial />
      <ReviewsSection />
      <ProductComparison />
      <PartnerLogos />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
