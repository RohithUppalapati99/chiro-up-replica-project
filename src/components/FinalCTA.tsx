import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="relative py-16 bg-primary overflow-hidden">
      {/* Curved top divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-current text-background transform rotate-180">
          <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
      
      <div className="container text-center space-y-8 relative z-10">
        <div className="space-y-6 text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Practice{" "}
            <span className="relative inline-block">
              SMARTER
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-secondary rounded-full" />
            </span>
            . Not harder.
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            A software that fits every clinic's needs.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            SEE PRODUCTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;