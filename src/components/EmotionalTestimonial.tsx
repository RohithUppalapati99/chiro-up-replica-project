import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Quote, Heart, Clock, Star } from "lucide-react";

const EmotionalTestimonial = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-chiro-green-dark via-chiro-green to-primary overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-56 h-56 bg-white/5 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-bounce animation-delay-2000"></div>
        
        {/* Floating Stars */}
        <div className="absolute top-20 right-20 opacity-30">
          <Star className="w-6 h-6 text-white animate-pulse" />
        </div>
        <div className="absolute bottom-32 left-32 opacity-20">
          <Star className="w-4 h-4 text-white animate-pulse animation-delay-1500" />
        </div>
        <div className="absolute top-40 left-1/3 opacity-25">
          <Star className="w-5 h-5 text-white animate-pulse animation-delay-500" />
        </div>
      </div>

      {/* Curved top divider with enhanced styling */}
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
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Enhanced Header */}
          <div className="space-y-6 animate-fade-in">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2">
              <Heart className="w-4 h-4 mr-2" />
              Real Stories, Real Impact
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in animation-delay-300">
              When We Said Built to Get You Home Sooner… 
              <span className="block text-white/90">We Meant It.</span>
            </h2>
          </div>
          
          {/* Enhanced Testimonial Card */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in animation-delay-600">
            <CardContent className="p-8 md:p-12 relative">
              {/* Large Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                <Quote className="w-8 h-8 text-white" />
              </div>
              
              <blockquote className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-white/95 mb-8 relative">
                "Okay, I am in tears. Today was our first day using ChiroUp EHR, and I have{" "}
                <strong className="text-white bg-white/20 px-2 py-1 rounded-md">
                  ALL of my charts done… on day one!
                </strong>{" "}
                I cannot believe it is this intuitive to use. I now have{" "}
                <strong className="text-white bg-white/20 px-2 py-1 rounded-md">
                  enough time to go to the gym and pick my son up from school.
                </strong>{" "}
                I cannot thank you guys enough!"
              </blockquote>

              {/* Enhanced Author Section */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-white/20">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16 ring-4 ring-white/30 hover:ring-white/50 transition-all duration-300">
                    <AvatarImage 
                      src="/lovable-uploads/3ea4b606-1a23-4e6d-aaad-cac14d9ec33f.png" 
                      alt="Dr. Lacey Jackson" 
                    />
                    <AvatarFallback className="bg-white/20 text-white font-bold text-lg">
                      LJ
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-xl font-bold text-white">
                      Dr. Lacey Jackson
                    </p>
                    <p className="text-white/80 font-medium">
                      EHR User Since 2025
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                  <Clock className="w-4 h-4 text-white" />
                  <span className="text-white font-medium text-sm">More Family Time</span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-4 right-4 opacity-20">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-white fill-current" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="animate-fade-in animation-delay-1000">
            <p className="text-white/90 text-lg md:text-xl font-medium">
              Join thousands of chiropractors who've reclaimed their time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalTestimonial;