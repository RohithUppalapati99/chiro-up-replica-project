import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-chiro-green to-chiro-green-dark">
      <div className="container text-center space-y-8">
        <div className="space-y-4 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Practice SMARTER. Not harder.
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            A software that fits every clinic's needs.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
          >
            See Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;