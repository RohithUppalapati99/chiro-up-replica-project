import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-chiro-green-dark to-slate-900 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Geometric Shapes */}
        <div className="absolute top-12 left-12 w-24 h-24 bg-chiro-green/20 rounded-full blur-2xl animate-ping animation-delay-1000"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-chiro-green-light/10 rounded-full blur-xl animate-ping animation-delay-2000"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse"></div>
        
        {/* Reduced Floating Particles */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-chiro-green/40 rounded-full animate-ping"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 1}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container text-center space-y-8 relative z-10 max-w-4xl">
        {/* Compact Header */}
        <div className="space-y-4 text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20 transform hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-3 h-3 text-chiro-green animate-pulse" />
            <span className="text-xs font-medium">Transform Your Practice</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Practice{" "}
            <span className="relative inline-block group">
              <span className="text-chiro-green font-extrabold drop-shadow-lg animate-pulse">
                SMARTER
              </span>
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-chiro-green rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </span>
            <br className="md:hidden" />
            <span className="block md:inline">Not harder.</span>
          </h2>
          
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of chiropractors using evidence-based tools
          </p>
        </div>
        
        {/* Streamlined CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button 
            size="lg" 
            className="group relative text-base px-8 py-4 bg-chiro-green hover:bg-chiro-green/90 text-white font-bold rounded-full shadow-xl hover:shadow-chiro-green/30 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            {/* Enhanced Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="text-base px-8 py-4 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-105"
          >
            Watch Demo
          </Button>
        </div>

        {/* Compact Stats */}
        <div className="flex justify-center gap-8 pt-2">
          {[
            { number: "3K+", label: "Practitioners" },
            { number: "16", label: "Countries" },
            { number: "99.9%", label: "Uptime" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-110 transition-transform duration-300"
            >
              <div className="text-lg md:text-xl font-bold text-chiro-green">
                {stat.number}
              </div>
              <div className="text-xs text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;