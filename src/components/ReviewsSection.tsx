import { Star } from "lucide-react";

const reviews = [
  {
    name: "Dr. Sarah Mitchell",
    rating: 5,
    text: "ChiroUp has transformed my practice. My patients love the educational materials and I love the efficiency.",
    avatar: "/lovable-uploads/3ea4b606-1a23-4e6d-aaad-cac14d9ec33f.png"
  },
  {
    name: "Dr. Michael Chen",
    rating: 5,
    text: "The SOAP templates save me hours every week. I can focus more on patient care instead of paperwork.",
    avatar: "/lovable-uploads/3ea4b606-1a23-4e6d-aaad-cac14d9ec33f.png"
  },
  {
    name: "Dr. Lisa Rodriguez",
    rating: 5,
    text: "Outstanding support and incredible results. My patients are more engaged than ever before.",
    avatar: "/lovable-uploads/3ea4b606-1a23-4e6d-aaad-cac14d9ec33f.png"
  },
  {
    name: "Dr. James Wilson",
    rating: 5,
    text: "ChiroUp helps me demonstrate value to patients like never before. Highly recommend!",
    avatar: "/lovable-uploads/3ea4b606-1a23-4e6d-aaad-cac14d9ec33f.png"
  },
  {
    name: "Dr. Amanda Taylor",
    rating: 5,
    text: "The best investment I've made for my practice. Patient satisfaction has never been higher.",
    avatar: "/lovable-uploads/3ea4b606-1a23-4e6d-aaad-cac14d9ec33f.png"
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container">
        <div className="grid md:grid-cols-5 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-card space-y-4">
              <div className="flex space-x-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex items-center space-x-3">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm font-medium">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;