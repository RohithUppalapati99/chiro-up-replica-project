import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-chiro-green-dark to-chiro-green">
      {/* Curved top divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-current text-chiro-green-light transform rotate-180">
          <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
      
      <div className="container text-center space-y-8 relative z-10">
        <div className="space-y-4 text-white">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Practice SMARTER.<br />Not harder.
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            A software that fits every clinic's needs.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 font-bold"
          >
            SEE PRODUCTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;