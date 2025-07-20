const TestimonialBanner = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/5 via-primary/10 to-chiro-green-light/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-48 h-48 bg-chiro-green/15 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-bounce animation-delay-2000"></div>
      </div>
      
      {/* Decorative Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </div>

      <div className="container relative z-10 text-center space-y-10">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-fade-in animation-delay-300 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Empowering Chiropractors. Elevating the Profession.
        </h2>
        
        <div className="relative max-w-5xl mx-auto animate-fade-in animation-delay-600">
          {/* Quote Marks */}
          <div className="absolute -top-4 -left-4 text-6xl text-primary/30 font-serif">"</div>
          <div className="absolute -bottom-8 -right-4 text-6xl text-primary/30 font-serif">"</div>
          
          <blockquote className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed px-8 py-6 bg-background/60 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
            "I've been a ChiroUp subscriber for several years, and the new EHR system is simple, smooth, and amazing. The clear, evidence-based education has made me a more confident chiropractor—and my patients are improving faster. After 40 years in practice, I've rediscovered my excitement for chiropractic."
          </blockquote>
        </div>
        
        <div className="animate-fade-in animation-delay-900">
          <p className="text-lg font-semibold text-primary bg-primary/10 inline-block px-6 py-3 rounded-full border border-primary/20">
            — Dr. Kirk Weber — Essentials User Since 2020 | EHR User Since 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialBanner;