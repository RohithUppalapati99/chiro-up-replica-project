import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30"></div>
      
      {/* Floating animated orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-primary/15 to-blue-400/10 rounded-full blur-2xl animate-bounce"></div>
      <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/10 to-pink-400/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-emerald-400/10 to-teal-400/5 rounded-full blur-3xl animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-gradient-to-r from-indigo-400/8 to-blue-400/4 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      
      {/* Moving geometric shapes */}
      <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-primary/40 rotate-45 animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-8 bg-gradient-to-b from-primary/40 to-transparent animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/3 left-1/3 w-4 h-1 bg-emerald-400/30 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      
      {/* Flowing animated lines */}
      <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -rotate-12 animate-pulse"></div>
      <div className="absolute bottom-40 right-0 w-full h-px bg-gradient-to-l from-transparent via-blue-400/15 to-transparent transform rotate-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Subtle moving gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/3 to-transparent animate-pulse" style={{ animationDelay: '4s' }}></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(59,130,246,0.05)_60deg,transparent_120deg)] animate-spin" style={{ animationDuration: '20s' }}></div>
      
      <div className="container text-center space-y-8 relative z-10">
        <div className="space-y-6 max-w-4xl mx-auto">
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

        <div className="mt-16 max-w-5xl mx-auto relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="relative inline-block w-full max-w-2xl group">
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