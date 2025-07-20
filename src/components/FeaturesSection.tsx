import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";

const features = [
  {
    iconSrc: "/lovable-uploads/7c1a42b6-3155-48ac-9f89-046fcddc6fbc.png",
    title: "Built to Get You Home Sooner",
    description: "Spend less time on paperwork and more time with the people who matter most."
  },
  {
    iconSrc: "/lovable-uploads/17e79eba-f8b0-469d-bc22-006343bbd6b0.png",
    title: "Here to Make Your Patients Say \"Wow\"",
    description: "Deliver exceptional care that leaves patients impressed and excited about their progress."
  },
  {
    iconSrc: "/lovable-uploads/08be4c94-2fd6-44fb-96b8-bbf28e31eef9.png",
    title: "Turning Outcomes Into Income",
    description: "Achieve better patient results while streamlining your practice for higher productivity and growth."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-chiro-green/8 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center space-y-6 mb-20">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            Premium Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in">
            Other companies sell features.<br />
            <span className="text-primary bg-gradient-to-r from-primary to-chiro-green bg-clip-text text-transparent">
              We're creating a lifestyle.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-300">
            Transform your practice with solutions designed for modern chiropractors
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-0 bg-gradient-to-br from-background to-primary/5 hover:from-primary/5 hover:to-primary/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in`}
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <CardContent className="p-8 text-center space-y-6">
                {/* Enhanced Image Container */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-chiro-green/20 p-4 group-hover:scale-110 transition-transform duration-500">
                    <img 
                      src={feature.iconSrc} 
                      alt={feature.title}
                      className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                  
                  {/* Floating Badge */}
                  <Badge 
                    variant="outline" 
                    className="absolute -top-2 -right-2 bg-background border-primary/30 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
                  >
                    Premium
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <div className="pt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-lg transition-all duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center animate-fade-in animation-delay-1000">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-chiro-green hover:from-primary/90 hover:to-chiro-green/90 text-primary-foreground font-bold px-12 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <Sparkles className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
            VIEW SOLUTIONS
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;