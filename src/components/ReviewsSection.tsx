import { Star } from "lucide-react";

const reviews = [
  {
    name: "Matthew Barnhart",
    rating: 5,
    text: "Such a great program! They have so many great tools and they make the training... Read more",
    avatar: "/lovable-uploads/3ea4b606-1a23-4e6d-aaad-cac14d9ec33f.png"
  },
  {
    name: "Stephen Michael Sherman",
    rating: 5,
    text: "I use ChiroUp daily in my clinic as a great resource for both providers and patients... Read more",
    avatar: "/lovable-uploads/3ea4b606-1a23-4e6d-aaad-cac14d9ec33f.png"
  },
  {
    name: "Zachary Jameson",
    rating: 5,
    text: "Great resource for evidence-based chiropractic! Read more",
    avatar: "/lovable-uploads/3ea4b606-1a23-4e6d-aaad-cac14d9ec33f.png"
  },
  {
    name: "Kyle Jensen",
    rating: 5,
    text: "This is a must have for all chiropractors. Evidence based practice... Read more",
    avatar: "/lovable-uploads/3ea4b606-1a23-4e6d-aaad-cac14d9ec33f.png"
  },
  {
    name: "Dr. Amanda Taylor",
    rating: 5,
    text: "The best investment I've made for my practice. Patient satisfaction has never been higher... Read more",
    avatar: "/lovable-uploads/3ea4b606-1a23-4e6d-aaad-cac14d9ec33f.png"
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container">
        <div className="grid md:grid-cols-5 gap-6 relative">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 space-y-4">
              <div className="flex space-x-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-sm text-gray-600 leading-relaxed">
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
          
          {/* Navigation arrow */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg cursor-pointer">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;