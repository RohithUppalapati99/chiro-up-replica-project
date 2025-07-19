import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    essentials: {
      title: "Essentials",
      links: [
        { text: "Clinical Sites", href: "/clinical-sites" },
        { text: "Patient Education", href: "/patient-education" },
        { text: "Marketing Tools", href: "/marketing-tools" },
        { text: "SOAP Templates", href: "/soap-templates" },
        { text: "Condition Library", href: "/condition-library" }
      ]
    },
    ehr: {
      title: "EHR",
      links: [
        { text: "SOAP Notes", href: "/soap-notes" },
        { text: "Scheduling", href: "/scheduling" },
        { text: "Billing", href: "/billing" },
        { text: "Reporting", href: "/reporting" },
        { text: "Support & Training", href: "/support-training" }
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { text: "Blog", href: "/blog" },
        { text: "Webinars", href: "/webinars" },
        { text: "Podcast", href: "/podcast" },
        { text: "Events", href: "/events" },
        { text: "Toolkits", href: "/toolkits" }
      ]
    },
    getStarted: {
      title: "Get Started",
      links: [
        { text: "Try for Free", href: "/try-for-free" },
        { text: "EHR Demo", href: "/ehr-demo" },
        { text: "Pricing", href: "/pricing" },
        { text: "Students", href: "/students" },
        { text: "Recent Grads", href: "/recent-grads" }
      ]
    },
    support: {
      title: "Support",
      links: [
        { text: "FAQs", href: "/faqs" },
        { text: "Contact Us", href: "/contact" },
        { text: "Let's Chat", href: "#" },
        { text: "Help Center", href: "/help-center" },
        { text: "System Status", href: "/system-status" }
      ]
    }
  };

  return (
    <footer className="bg-chiro-green-dark text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-5 gap-8">
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <h3 className="font-semibold text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-white hover:text-chiro-green-light transition-colors text-sm"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="space-y-2">
              <p className="text-sm text-white">
                4460 N Illinois St. Suite 8<br />
                Swansea, IL 62226
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com/ChiroUp" target="_blank" className="text-white hover:text-chiro-green-light transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://instagram.com/ChiroUp" target="_blank" className="text-white hover:text-chiro-green-light transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com/company/ChiroUp" target="_blank" className="text-white hover:text-chiro-green-light transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-4 text-center space-y-2">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-white">
              <a href="https://help.chiroup.com/terms-essentials" className="hover:text-chiro-green-light transition-colors">Essentials Terms of Use</a>
              <span className="hidden md:inline">|</span>
              <a href="https://help.chiroup.com/terms-ehr" className="hover:text-chiro-green-light transition-colors">EHR Terms of Use</a>
              <span className="hidden md:inline">|</span>
              <a href="https://help.chiroup.com/privacy-policy" className="hover:text-chiro-green-light transition-colors">Privacy Policy</a>
            </div>
            <p className="text-sm text-white">
              © 2025 ChiroUp. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;