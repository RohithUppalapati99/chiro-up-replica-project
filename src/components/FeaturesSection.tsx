import { Home, Heart, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Built to Get You Home Sooner",
    description: "Streamline your workflow with intuitive tools designed to reduce administrative burden and get you home to what matters most."
  },
  {
    icon: Heart,
    title: "Here to Make Your Patients Say \"Wow\"",
    description: "Deliver exceptional patient experiences with comprehensive care plans and visual education tools that engage and inspire."
  },
  {
    icon: TrendingUp,
    title: "Turning Outcomes Into Income",
    description: "Track patient progress, demonstrate value, and build a thriving practice with outcome-based care documentation."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Other companies sell features.{" "}
            <span className="italic text-primary">We're creating a lifestyle.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4 p-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;