const TestimonialBanner = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Empowering Chiropractors. Elevating the Profession.
        </h2>
        
        <blockquote className="text-xl md:text-2xl text-muted-foreground italic max-w-4xl mx-auto leading-relaxed">
          "I've been a ChiroUp subscriber for several years, and the new EHR system is simple, smooth, and amazing. The clear, evidence-based education has made me a more confident chiropractor—and my patients are improving faster. After 40 years in practice, I've rediscovered my excitement for chiropractic."
        </blockquote>
        
        <p className="text-lg font-medium italic">
          — Dr. Kirk Weber — Essentials User Since 2020 | EHR User Since 2024
        </p>
      </div>
    </section>
  );
};

export default TestimonialBanner;