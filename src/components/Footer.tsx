import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    essentials: {
      title: "Essentials",
      links: [
        "Clinical Sites",
        "Marketing Tools", 
        "SOAP Templates",
        "Patient Education",
        "Condition Library"
      ]
    },
    ehr: {
      title: "EHR",
      links: [
        "SOAP Notes",
        "Scheduling",
        "Billing",
        "Patient Portal",
        "Reports"
      ]
    },
    resources: {
      title: "Resources",
      links: [
        "Blog",
        "Webinars",
        "Podcast",
        "Research",
        "Case Studies"
      ]
    },
    getStarted: {
      title: "Get Started",
      links: [
        "Try for Free",
        "Pricing",
        "Book a Demo",
        "Migration",
        "Training"
      ]
    },
    support: {
      title: "Support",
      links: [
        "Contact Us",
        "FAQs",
        "Let's Chat",
        "Help Center",
        "System Status"
      ]
    }
  };

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container py-16">
        <div className="grid md:grid-cols-5 gap-8">
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <h3 className="font-semibold text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/de143e80-99d9-4594-9af5-e33f84570f54.png" 
              alt="ChiroUp Logo" 
              className="h-6 w-auto"
            />
            <span className="text-sm text-muted-foreground">
              © 2025 ChiroUp. All rights reserved.
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;