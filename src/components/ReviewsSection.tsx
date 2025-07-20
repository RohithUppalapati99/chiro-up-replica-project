import { Star, Quote, TrendingUp, Clock, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const reviews = [
  {
    name: "Dr. Matthew Barnhart",
    specialty: "Sports Chiropractic",
    rating: 5,
    text: "Such a great program! They have so many great tools and they make the training incredibly comprehensive. My practice efficiency has doubled since implementing ChiroUp.",
    highlight: "Practice efficiency doubled",
    category: "Training"
  },
  {
    name: "Dr. Stephen Michael Sherman",
    specialty: "Family Practice",
    rating: 5,
    text: "I use ChiroUp daily in my clinic as a great resource for both providers and patients. The evidence-based approach has transformed how we deliver care.",
    highlight: "Daily clinical resource",
    category: "Clinical Excellence"
  },
  {
    name: "Dr. Zachary Jameson",
    specialty: "Rehabilitation",
    rating: 5,
    text: "Great resource for evidence-based chiropractic! The research backing and practical applications are exactly what modern practitioners need.",
    highlight: "Evidence-based approach",
    category: "Research"
  },
  {
    name: "Dr. Kyle Jensen",
    specialty: "Wellness Care",
    rating: 5,
    text: "This is a must have for all chiropractors. Evidence based practice made simple and accessible. Patient outcomes have never been better.",
    highlight: "Must-have for all DCs",
    category: "Patient Outcomes"
  },
  {
    name: "Dr. Amanda Taylor",
    specialty: "Pediatric Chiropractic",
    rating: 5,
    text: "The best investment I've made for my practice. Patient satisfaction has never been higher and my confidence in treatment has skyrocketed.",
    highlight: "Best practice investment",
    category: "Patient Satisfaction"
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Sports Medicine",
    rating: 5,
    text: "ChiroUp has revolutionized my treatment protocols. The step-by-step guidance and outcome tracking have made me a better clinician.",
    highlight: "Revolutionary protocols",
    category: "Clinical Improvement"
  },
  {
    name: "Dr. Sarah Williams",
    specialty: "Functional Medicine",
    rating: 5,
    text: "Finally, evidence-based chiropractic that's practical! My patients notice the difference and my referrals have increased significantly.",
    highlight: "Increased referrals",
    category: "Practice Growth"
  },
  {
    name: "Dr. James Rodriguez",
    specialty: "Pain Management",
    rating: 5,
    text: "The EHR system is intuitive and the educational content is gold. I'm seeing patients improve faster than ever before.",
    highlight: "Faster patient improvement",
    category: "EHR Excellence"
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-chiro-green/8 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Heart className="w-4 h-4 mr-2" />
            Trusted by Thousands
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Chiropractors Are Saying
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real practitioners transforming their practices
          </p>
        </div>

        {/* Scrolling Reviews Container */}
        <div className="relative">
          {/* First Row - Moving Right */}
          <div className="flex space-x-6 mb-8 animate-marquee">
            {reviews.slice(0, 4).map((review, index) => (
              <Card 
                key={index} 
                className="min-w-[350px] bg-gradient-to-br from-background to-primary/5 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-xl group"
              >
                <CardContent className="p-6 space-y-4">
                  {/* Rating and Category */}
                  <div className="flex justify-between items-start">
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-fade-in" 
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs bg-primary/10">
                      {review.category}
                    </Badge>
                  </div>
                  
                  {/* Quote */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/30" />
                    <p className="text-muted-foreground leading-relaxed pl-4">
                      "{review.text}"
                    </p>
                  </div>
                  
                  {/* Highlight */}
                  <div className="bg-primary/10 rounded-lg p-3 border-l-4 border-primary">
                    <p className="text-sm font-semibold text-primary flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {review.highlight}
                    </p>
                  </div>
                  
                  {/* Author Info */}
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.specialty}</p>
                  </div>

                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Second Row - Moving Left */}
          <div className="flex space-x-6 animate-marquee-reverse">
            {reviews.slice(4, 8).map((review, index) => (
              <Card 
                key={index + 4} 
                className="min-w-[350px] bg-gradient-to-br from-background to-chiro-green/5 border-chiro-green/20 hover:border-chiro-green/40 transition-all duration-500 hover:scale-105 hover:shadow-xl group"
              >
                <CardContent className="p-6 space-y-4">
                  {/* Rating and Category */}
                  <div className="flex justify-between items-start">
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-fade-in" 
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs bg-chiro-green/10">
                      {review.category}
                    </Badge>
                  </div>
                  
                  {/* Quote */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-chiro-green/30" />
                    <p className="text-muted-foreground leading-relaxed pl-4">
                      "{review.text}"
                    </p>
                  </div>
                  
                  {/* Highlight */}
                  <div className="bg-chiro-green/10 rounded-lg p-3 border-l-4 border-chiro-green">
                    <p className="text-sm font-semibold text-chiro-green flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {review.highlight}
                    </p>
                  </div>
                  
                  {/* Author Info */}
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.specialty}</p>
                  </div>

                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-chiro-green/0 via-chiro-green/5 to-chiro-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in animation-delay-1000">
          <p className="text-lg text-muted-foreground mb-4">
            Join the thousands of chiropractors transforming their practices
          </p>
          <div className="flex justify-center items-center space-x-2">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 bg-primary rounded-full border-2 border-background flex items-center justify-center animate-bounce"
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  <Star className="w-4 h-4 text-white fill-current" />
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-primary">5,000+ Happy Practitioners</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;