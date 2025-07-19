import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-chiro-green-light to-background">
      <div className="container text-center space-y-8">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            More Than Software. A Movement{" "}
            <span className="text-primary">For Chiropractic Care.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering chiropractors to deliver outcomes that transform lives—AND elevate our profession.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
            See Products
          </Button>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <img 
            src="/lovable-uploads/b2036cdc-45af-44b6-bc6a-fdb1215bf335.png" 
            alt="ChiroUp Software Interface" 
            className="w-full h-auto rounded-lg shadow-card"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;