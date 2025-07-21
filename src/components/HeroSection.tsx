import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-slate-50/50 to-primary/5 overflow-hidden">
      {/* Enhanced animated background for chiropractic theme */}
      <div className="absolute inset-0">
        {/* Large moving gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-primary/15 to-primary/8 rounded-full blur-2xl animate-pulse transform translate-x-1/3 translate-y-1/3" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full blur-xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] animate-pulse" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 2px, transparent 0)', backgroundSize: '60px 60px', animationDuration: '3s' }}></div>
        
        {/* Floating wellness particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-3 h-3 bg-primary/30 rounded-full animate-bounce" style={{ animationDuration: '3s', animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-primary/25 rounded-full animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-20 w-2 h-2 bg-primary/35 rounded-full animate-bounce" style={{ animationDuration: '6s', animationDelay: '3s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-primary/20 rounded-full animate-bounce" style={{ animationDuration: '7s', animationDelay: '4s' }}></div>
        </div>
        
        {/* Subtle spine-like curved lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800">
          <path d="M100,100 Q200,300 300,200 T500,300 T700,200 T900,300" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" className="animate-pulse" style={{ animationDuration: '5s' }}></path>
          <path d="M200,600 Q300,400 400,500 T600,400 T800,500 T1000,400" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }}></path>
        </svg>
      </div>
      
      <div className="container text-center space-y-8 relative z-10">
        <div className="space-y-6 max-w-7xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight bg-gradient-to-r from-gray-900 via-gray-800 to-primary bg-clip-text text-transparent">
              More Than Software. A Movement<br />
              <span className="text-primary font-bold">
                For Chiropractic Care.
              </span>
            </h1>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mt-6 font-medium">
              Empowering chiropractors to deliver outcomes that transform lives—AND elevate our profession.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold rounded-xl border-0 relative group overflow-hidden">
            <span className="relative z-10">SEE PRODUCTS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>

        <div className="mt-16 w-full mx-auto relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="relative inline-block w-full max-w-5xl group">
            {/* Main image with enhanced styling */}
            <div className="relative transform transition-transform duration-500 hover:scale-105">
              <img 
                src="/lovable-uploads/b2036cdc-45af-44b6-bc6a-fdb1215bf335.png" 
                alt="Screenshot of ChiroUp app (EHR interface)" 
                className="w-full h-auto rounded-2xl shadow-2xl relative z-10 border border-gray-200/50"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
            </div>
            
            {/* Floating secondary image with animation */}
            <div className="absolute top-8 -right-8 md:-right-16 w-1/2 max-w-xs transform transition-transform duration-500 hover:scale-110 hover:rotate-1">
              <img 
                src="/lovable-uploads/5b64f605-b947-43f2-bee9-4aea15f4df06.png" 
                alt="Guided for Success - About Your Condition document" 
                className="w-full rounded-xl shadow-2xl z-20 border border-gray-200/50"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-lg opacity-60 -z-10"></div>
            </div>
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