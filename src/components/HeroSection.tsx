import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-slate-50/50 to-primary/5 overflow-hidden">
      {/* Professional healing aura background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,hsl(var(--primary))_0deg,transparent_60deg,hsl(var(--primary))_120deg,transparent_180deg,hsl(var(--primary))_240deg,transparent_300deg,hsl(var(--primary))_360deg)] opacity-5 animate-spin" style={{ animationDuration: '60s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary))_0%,transparent_70%)] opacity-10 animate-pulse" style={{ animationDuration: '4s' }}></div>
      </div>
      
      {/* Floating wellness elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Healing energy circles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rounded-full animate-ping opacity-40" style={{ animationDuration: '3s', animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-primary/30 rounded-full animate-ping opacity-50" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 border border-primary/15 rounded-full animate-ping opacity-30" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        
        {/* Floating wellness icons */}
        <div className="absolute top-20 right-20 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg animate-bounce opacity-70" style={{ animationDuration: '6s', animationDelay: '0s' }}>
          <div className="w-6 h-6 bg-primary/60 rounded-full"></div>
        </div>
        <div className="absolute top-40 left-16 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg animate-bounce opacity-60" style={{ animationDuration: '7s', animationDelay: '2s' }}>
          <div className="w-4 h-4 bg-gradient-to-br from-primary to-primary/60 rounded-sm"></div>
        </div>
        <div className="absolute bottom-40 right-32 p-3 bg-white/75 backdrop-blur-sm rounded-full shadow-md animate-bounce opacity-65" style={{ animationDuration: '8s', animationDelay: '4s' }}>
          <div className="w-5 h-5 bg-primary/50 rounded-full"></div>
        </div>
        
        {/* Connecting lines representing healing pathways */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800">
          <path d="M100,400 Q300,200 500,400 T900,400" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDuration: '6s' }}>
            <animate attributeName="stroke-dasharray" values="0,1000;1000,1000;0,1000" dur="8s" repeatCount="indefinite" />
          </path>
          <path d="M200,600 Q400,300 600,500 T1000,300" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" className="animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}>
            <animate attributeName="stroke-dasharray" values="0,800;800,800;0,800" dur="10s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>
      
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