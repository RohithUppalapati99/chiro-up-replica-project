import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-20 bg-chiro-green-light">
      <div className="container text-center space-y-8">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            More Than Software. A Movement<br />
            <span className="text-primary">For Chiropractic Care.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mt-6">
            Empowering chiropractors to deliver outcomes that transform lives—AND elevate our profession.
          </p>
        </div>
        
        <div className="flex justify-center mt-8">
          <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 font-bold rounded">
            SEE PRODUCTS
          </Button>
        </div>

        <div className="mt-16 max-w-5xl mx-auto relative">
          <div className="relative inline-block w-full max-w-2xl">
            <img 
              src="/lovable-uploads/b2036cdc-45af-44b6-bc6a-fdb1215bf335.png" 
              alt="Screenshot of ChiroUp app (EHR interface)" 
              className="w-full h-auto rounded-lg shadow-card relative z-10"
            />
            <img 
              src="/lovable-uploads/5b64f605-b947-43f2-bee9-4aea15f4df06.png" 
              alt="Guided for Success - About Your Condition document" 
              className="absolute top-8 -right-8 md:-right-16 w-1/2 max-w-xs rounded shadow-lg z-20"
            />
          </div>
        </div>
      </div>
      
      {/* Curved bottom divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-current text-chiro-green-light">
          <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;