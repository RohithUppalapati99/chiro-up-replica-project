import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-primary-dark overflow-hidden">
      {/* Curved top divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-current text-background transform rotate-180">
          <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-secondary rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-white/50 rounded-full blur-2xl animate-bounce animation-delay-2000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        {/* Floating Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      
      <div className="container text-center space-y-10 relative z-10">
        {/* Header with Animation */}
        <div className="space-y-6 text-white animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 animate-scale-in">
            <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
            <span className="text-sm font-medium">Transform Your Practice Today</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-300">
            Practice{" "}
            <span className="relative inline-block group">
              <span className="text-secondary font-extrabold drop-shadow-lg">
                SMARTER
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-secondary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </span>
            . Not harder.
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-500">
            Join thousands of chiropractors who've transformed their practice with evidence-based tools
          </p>
        </div>
        
        {/* CTA Buttons with Enhanced Animation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-700">
          <Button 
            size="lg" 
            className="group relative text-lg px-10 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-full shadow-2xl hover:shadow-secondary/25 hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative flex items-center gap-2">
              SEE PRODUCTS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-10 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-105"
          >
            Watch Demo
          </Button>
        </div>

        {/* Stats Animation */}
        <div className="flex flex-wrap justify-center gap-6 pt-4 animate-fade-in animation-delay-1000">
          {[
            { number: "3,000+", label: "Happy Practitioners" },
            { number: "16", label: "Countries Served" },
            { number: "99.9%", label: "Uptime" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${1200 + index * 200}ms` }}
            >
              <div className="text-xl md:text-2xl font-bold text-secondary group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-xs text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;