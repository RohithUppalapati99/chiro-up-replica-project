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
    <footer className="bg-white border-t">
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
                      className="text-gray-600 hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t mt-12 pt-8 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                4460 N Illinois St, Suite B<br />
                Swansea, IL 62226
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-gray-600">
              © 2025 ChiroUp. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-600">
              <a href="#" className="hover:text-primary transition-colors">Essentials Terms of Use</a>
              <span>|</span>
              <a href="#" className="hover:text-primary transition-colors">EHR Terms of Use</a>
              <span>|</span>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;