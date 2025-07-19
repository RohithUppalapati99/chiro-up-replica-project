import { Button } from "@/components/ui/button";

const ProductComparison = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Two Products. <span className="text-primary">ONE Mission.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the solution that fits your practice needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* ChiroUp Essentials */}
          <div className="bg-white rounded-lg p-8 shadow-card space-y-6 border border-primary/20">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-center">ChiroUp Essentials</h3>
              <p className="text-muted-foreground text-center">
                Essential tools for evidence-based chiropractic care with patient education and SOAP templates.
              </p>
            </div>
            
            <div className="aspect-video bg-muted/30 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/5b64f605-b947-43f2-bee9-4aea15f4df06.png" 
                alt="ChiroUp Essentials Interface"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="text-center">
              <Button variant="outline" size="lg" className="w-full">
                Try for Free
              </Button>
            </div>
          </div>

          {/* ChiroUp EHR */}
          <div className="bg-white rounded-lg p-8 shadow-card space-y-6 border border-primary/20">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-center">ChiroUp EHR</h3>
              <p className="text-muted-foreground text-center">
                Complete electronic health records with scheduling, billing, and comprehensive practice management.
              </p>
            </div>
            
            <div className="aspect-video bg-muted/30 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/2caa6733-5951-4a13-8d42-669d7cd0b570.png" 
                alt="ChiroUp EHR Interface"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="text-center">
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductComparison;