import { Button } from "@/components/ui/button";

const features = [
  {
    iconSrc: "/lovable-uploads/7c1a42b6-3155-48ac-9f89-046fcddc6fbc.png",
    title: "Built to Get You Home Sooner",
    description: "Streamline your workflow with intuitive tools designed to reduce administrative burden and get you home to what matters most."
  },
  {
    iconSrc: "/lovable-uploads/17e79eba-f8b0-469d-bc22-006343bbd6b0.png",
    title: "Here to Make Your Patients Say \"Wow\"",
    description: "Deliver exceptional patient experiences with comprehensive care plans and visual education tools that engage and inspire."
  },
  {
    iconSrc: "/lovable-uploads/08be4c94-2fd6-44fb-96b8-bbf28e31eef9.png",
    title: "Turning Outcomes Into Income",
    description: "Track patient progress, demonstrate value, and build a thriving practice with outcome-based care documentation."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Other companies sell features.<br />
            <span className="text-primary">We're creating a lifestyle.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4 p-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-chiro-green-light rounded-full flex items-center justify-center p-3">
                  <img 
                    src={feature.iconSrc} 
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold px-8 py-4">
            VIEW SOLUTIONS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;