import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Quote, Heart, Clock, Star } from "lucide-react";

const EmotionalTestimonial = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-chiro-green-dark via-chiro-green to-primary overflow-hidden">
      {/* Curved top divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-current text-background transform rotate-180">
          <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* Curved bottom divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-current text-background">
          <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* Minimal Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-8 right-12 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-12 left-16 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(24)].map((_, i) => (
              <div 
                key={i} 
                className="h-full bg-white/5 animate-pulse" 
                style={{ animationDelay: `${i * 100}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Compact Header */}
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              When We Said Built to Get You Home Sooner… We Meant It.
            </h2>
            <div className="w-24 h-1 bg-white/40 mx-auto rounded-full animate-scale-in animation-delay-300"></div>
          </div>
          
          {/* Elegant Testimonial Card */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-700 hover:scale-[1.01] hover:shadow-2xl animate-fade-in animation-delay-500 group">
            <CardContent className="p-6 md:p-8 relative">
              {/* Floating Quote */}
              <Quote className="absolute -top-3 -left-3 w-6 h-6 text-white/60 animate-bounce animation-delay-1000" />
              
              {/* Full Original Quote */}
              <blockquote className="text-lg md:text-xl leading-relaxed text-white/95 mb-6 animate-fade-in animation-delay-700">
                "Okay, I am in tears. Today was our first day using ChiroUp EHR, and I have{" "}
                <span className="relative inline-block">
                  <span className="bg-white/20 px-2 py-1 rounded font-semibold">
                    ALL of my charts done… on day one!
                  </span>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></span>
                </span>
                {" "}I cannot believe it is this intuitive to use. I now have{" "}
                <span className="text-white font-semibold bg-gradient-to-r from-white/20 to-white/30 px-2 py-1 rounded">
                  enough time to go to the gym and pick my son up from school.
                </span>
                {" "}I cannot thank you guys enough!"
              </blockquote>

              {/* Compact Author Section */}
              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12 ring-2 ring-white/30 group-hover:ring-white/50 transition-all duration-300">
                    <AvatarImage 
                      src="/lovable-uploads/3ea4b606-1a23-4e6d-aaad-cac14d9ec33f.png" 
                      alt="Dr. Lacey Jackson" 
                    />
                    <AvatarFallback className="bg-white/20 text-white font-bold">
                      LJ
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-white font-semibold">Dr. Lacey Jackson</p>
                    <p className="text-white/70 text-sm">EHR User Since 2025</p>
                  </div>
                </div>
                
                {/* Animated Rating */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 text-yellow-300 fill-current animate-fade-in" 
                      style={{ animationDelay: `${1000 + i * 100}ms` }}
                    />
                  ))}
                </div>
              </div>

              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </CardContent>
          </Card>

          {/* Compact CTA */}
          <div className="text-center mt-6 animate-fade-in animation-delay-1200">
            <p className="text-white/80 text-sm font-medium">
              Join thousands reclaiming their time
              <span className="inline-block ml-2 w-2 h-2 bg-white/60 rounded-full animate-pulse"></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalTestimonial;