import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Curved top divider with enhanced styling */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-current text-background transform rotate-180">
          <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
      
      <div className="container text-center space-y-12 relative z-10">
        {/* Icon with animation */}
        <div className="flex justify-center animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse" />
            <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-6 border border-white/20">
              <Sparkles className="w-12 h-12 text-white animate-bounce" />
            </div>
          </div>
        </div>

        <div className="space-y-6 text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Practice{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                SMARTER
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-white/60 to-transparent rounded-full" />
            </span>
            .<br />
            Not harder.
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            A comprehensive software solution that adapts to every clinic's unique needs and grows with your practice.
          </p>
        </div>
        
        {/* Enhanced CTA button with multiple variants */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="group text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 font-bold shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300"
          >
            <Zap className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            SEE PRODUCTS
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="group text-lg px-8 py-6 bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white font-bold backdrop-blur-sm transition-all duration-300"
          >
            LEARN MORE
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="pt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex justify-center items-center space-x-8 text-white/70 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Trusted by 3,000+ Clinics</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-current text-background opacity-20">
          <path d="M0,120 C300,0 900,0 1200,120 L1200,0 L0,0 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default FinalCTA;