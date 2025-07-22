import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle, 
  Sparkles, 
  Globe, 
  Users, 
  Clock, 
  BarChart3,
  Stethoscope,
  FileText,
  ArrowRight,
  Star,
  Zap
} from "lucide-react";

const ProductComparison = () => {
  const essentialsFeatures = [
    { icon: Stethoscope, text: "Evidence-based protocols" },
    { icon: Users, text: "Patient education tools" },
    { icon: BarChart3, text: "Smart diagnostics" },
    { icon: Clock, text: "Time-saving workflows" },
  ];

  const ehrFeatures = [
    { icon: FileText, text: "Complete EHR system" },
    { icon: Users, text: "Practice management" },
    { icon: BarChart3, text: "Advanced reporting" },
    { icon: Zap, text: "Built for chiropractors" },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-chiro-green-light via-primary/10 to-chiro-green-light/50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-chiro-green/20 rounded-full blur-2xl animate-bounce animation-delay-2000"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-16 right-16 opacity-20">
          <Sparkles className="w-8 h-8 text-primary animate-pulse" />
        </div>
        <div className="absolute bottom-40 left-24 opacity-15">
          <Star className="w-6 h-6 text-chiro-green animate-pulse animation-delay-1500" />
        </div>
      </div>

      <div className="container relative z-10">
        {/* Enhanced Header */}
        <div className="text-center space-y-6 mb-20 animate-fade-in">
          <Badge variant="secondary" className="mb-4 px-6 py-3 bg-white/60 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Choose Your Perfect Solution
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Two Products. <span className="text-primary bg-gradient-to-r from-primary to-chiro-green bg-clip-text text-transparent">ONE Mission.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the right solution for YOU and transform your practice today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* ChiroUp Essentials - Enhanced */}
          <Card className="group relative overflow-hidden bg-gradient-to-br from-background to-primary/5 border-primary/30 hover:border-primary/60 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl animate-fade-in animation-delay-300">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <CardHeader className="relative z-10 text-center space-y-4 pb-6">
              <div className="flex justify-center">
                <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2">
                  <Globe className="w-4 h-4 mr-2" />
                  Worldwide
                </Badge>
              </div>
              <CardTitle className="text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                ChiroUp Essentials
              </CardTitle>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Evidence-based protocols, smarter diagnostics, and instant patient education—delivered without slowing you down.
              </p>
            </CardHeader>
            
            <CardContent className="relative z-10 space-y-8">
              {/* Enhanced Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 p-2 group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/5b64f605-b947-43f2-bee9-4aea15f4df06.png" 
                  alt="ChiroUp Essentials Interface"
                  className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-primary">
                  Live Demo
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {essentialsFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center space-x-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-300 animate-fade-in`}
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="p-2 bg-primary/20 rounded-full">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{feature.text}</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-auto" />
                  </div>
                ))}
              </div>

              <Separator className="my-6" />
              
              {/* CTA Section */}
              <div className="text-center space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-chiro-green hover:from-primary/90 hover:to-chiro-green/90 text-primary-foreground font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 group"
                >
                  <Sparkles className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  TRY FOR FREE
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                  <Globe className="w-4 h-4" />
                  Available worldwide
                </p>
              </div>
            </CardContent>
          </Card>

          {/* ChiroUp EHR - Enhanced */}
          <Card className="group relative overflow-hidden bg-gradient-to-br from-background to-chiro-green/5 border-chiro-green/30 hover:border-chiro-green/60 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl animate-fade-in animation-delay-600">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-chiro-green/0 via-chiro-green/10 to-chiro-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <CardHeader className="relative z-10 text-center space-y-4 pb-6">
              <div className="flex justify-center">
                <Badge variant="outline" className="bg-chiro-green/20 text-chiro-green border-chiro-green/30 px-4 py-2">
                  <Users className="w-4 h-4 mr-2" />
                  US Only
                </Badge>
              </div>
              <CardTitle className="text-3xl font-bold group-hover:text-chiro-green transition-colors duration-300">
                ChiroUp EHR
              </CardTitle>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A full scale EHR & practice management system. Built by chiropractors to match how we think, treat & run clinics.
              </p>
            </CardHeader>
            
            <CardContent className="relative z-10 space-y-8">
              {/* Enhanced Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-chiro-green/10 to-chiro-green/20 p-2 group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/2caa6733-5951-4a13-8d42-669d7cd0b570.png" 
                  alt="ChiroUp EHR Interface"
                  className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-chiro-green">
                  Full EHR
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {ehrFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center space-x-3 p-3 rounded-lg bg-chiro-green/5 hover:bg-chiro-green/10 transition-colors duration-300 animate-fade-in`}
                    style={{ animationDelay: `${900 + index * 100}ms` }}
                  >
                    <div className="p-2 bg-chiro-green/20 rounded-full">
                      <feature.icon className="w-4 h-4 text-chiro-green" />
                    </div>
                    <span className="font-medium text-foreground">{feature.text}</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-auto" />
                  </div>
                ))}
              </div>

              <Separator className="my-6" />
              
              {/* CTA Section */}
              <div className="text-center space-y-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-2 border-chiro-green text-chiro-green hover:bg-chiro-green hover:text-white font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 group"
                >
                  <Users className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                  BOOK A DEMO
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                  <Users className="w-4 h-4" />
                  Currently available in the U.S. only
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in animation-delay-1200">
          <p className="text-lg text-muted-foreground mb-6">
            Not sure which solution is right for you?
          </p>
          <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary font-semibold group">
            Compare Features Side by Side
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductComparison;