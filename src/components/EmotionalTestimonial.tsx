const EmotionalTestimonial = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-chiro-green-dark to-chiro-green">
      {/* Curved top divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-current text-white transform rotate-180">
          <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            When We Said Built to Get You Home Sooner… We Meant It.
          </h2>
          
          <blockquote className="text-xl md:text-2xl leading-relaxed">
            "Okay, I am in tears. Today was our first day using ChiroUp EHR, and I have <strong>ALL of my charts done… on day one!</strong> I cannot believe it is this intuitive to use. I now have <strong>enough time to go to the gym and pick my son up from school.</strong> I cannot thank you guys enough!"
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <img 
              src="/lovable-uploads/3ea4b606-1a23-4e6d-aaad-cac14d9ec33f.png" 
              alt="Dr. Lacey Jackson" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <p className="text-lg font-medium italic">
              — Dr. Lacey Jackson, EHR User Since 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalTestimonial;