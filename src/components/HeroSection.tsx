import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-slate-50/50 to-primary/5 overflow-hidden">
      {/* Dynamic wave background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--primary))_0%,transparent_60%)] opacity-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_120%_at_80%_-40%,hsl(var(--primary))_0%,transparent_70%)] opacity-15 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
      </div>
      
      {/* Floating particle system */}
      <div className="absolute inset-0">
        {/* Large floating orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl animate-bounce opacity-60" style={{ animationDuration: '6s', animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-gradient-to-bl from-blue-400/8 via-purple-400/4 to-transparent rounded-full blur-2xl animate-bounce opacity-50" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-gradient-to-tr from-emerald-400/6 via-teal-400/3 to-transparent rounded-full blur-3xl animate-bounce opacity-40" style={{ animationDuration: '10s', animationDelay: '4s' }}></div>
        
        {/* Moving particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-primary/50 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-primary/25 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 right-2/3 w-3 h-3 bg-primary/35 rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Morphing geometric shapes */}
      <div className="absolute top-32 left-16 w-16 h-16 border-2 border-primary/20 rounded-lg transform rotate-12 animate-spin opacity-60" style={{ animationDuration: '20s' }}></div>
      <div className="absolute top-48 right-24 w-12 h-12 border-2 border-primary/30 rounded-full animate-bounce opacity-50" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-32 w-8 h-20 bg-gradient-to-t from-primary/15 to-transparent rounded-full animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 right-40 w-20 h-8 bg-gradient-to-r from-primary/15 to-transparent rounded-full animate-pulse opacity-40" style={{ animationDelay: '3s' }}></div>
      
      {/* Flowing energy lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent transform -rotate-12 animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-0 w-full h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent transform rotate-6 animate-pulse opacity-50" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent transform rotate-3 animate-pulse opacity-55" style={{ animationDelay: '5s' }}></div>
      
      <div className="container text-center space-y-8 relative z-10">
        <div className="space-y-6 max-w-7xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight bg-gradient-to-r from-gray-900 via-gray-800 to-primary bg-clip-text text-transparent">
              More Than Software. A Movement<br />
              <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent animate-scale-in">
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