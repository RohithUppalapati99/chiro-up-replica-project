const EmotionalTestimonial = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-chiro-green-dark to-chiro-green">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            When We Said Built to Get You Home Sooner...We Meant It.
          </h2>
          
          <blockquote className="text-xl md:text-2xl leading-relaxed">
            "I have <strong>ALL of my charts done...on day one!</strong> I now have{" "}
            <strong>enough time to go to the gym and pick my son up from school.</strong>"
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <img 
              src="/lovable-uploads/3ea4b606-1a23-4e6d-aaad-cac14d9ec33f.png" 
              alt="Dr. Lacey Jackson" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <p className="text-lg font-medium">
              — Dr. Lacey Jackson
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalTestimonial;