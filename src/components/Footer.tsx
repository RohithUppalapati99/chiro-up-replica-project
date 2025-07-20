import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const footerLinks = {
    essentials: {
      title: "Essentials",
      badge: "Popular",
      badgeVariant: "default" as const,
      links: [
        { text: "Clinical Sites", href: "/clinical-sites", isNew: true },
        { text: "Patient Education", href: "/patient-education" },
        { text: "Marketing Tools", href: "/marketing-tools" },
        { text: "SOAP Templates", href: "/soap-templates" },
        { text: "Condition Library", href: "/condition-library" }
      ]
    },
    ehr: {
      title: "EHR",
      badge: "Complete",
      badgeVariant: "secondary" as const,
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
      badge: "Free",
      badgeVariant: "outline" as const,
      links: [
        { text: "Blog", href: "/blog" },
        { text: "Webinars", href: "/webinars", isNew: true },
        { text: "Podcast", href: "/podcast" },
        { text: "Events", href: "/events" },
        { text: "Toolkits", href: "/toolkits" }
      ]
    },
    getStarted: {
      title: "Get Started",
      links: [
        { text: "Try for Free", href: "/try-for-free", featured: true },
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
        { text: "Let's Chat", href: "#", featured: true },
        { text: "Help Center", href: "/help-center" },
        { text: "System Status", href: "/system-status" }
      ]
    }
  };

  return (
    <footer className="bg-gradient-to-br from-background to-muted/20 text-foreground border-t border-border">
      <div className="container py-16">
        <div className="grid md:grid-cols-5 gap-8">
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="space-y-4 group">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {section.title}
                </h3>
                {"badge" in section && (
                  <Badge variant={section.badge === "Popular" ? "default" : section.badge === "Complete" ? "secondary" : "outline"} className="text-xs">
                    {section.badge}
                  </Badge>
                )}
              </div>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className={`group/link flex items-center gap-2 text-sm transition-all duration-300 hover:translate-x-1 ${
                        link.featured 
                          ? "text-primary font-semibold hover:text-primary/80" 
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="relative">
                        {link.text}
                        {link.isNew && (
                          <span className="absolute -top-1 -right-6 w-2 h-2 bg-primary rounded-full animate-pulse" />
                        )}
                      </span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Separator className="my-12" />
        
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <span className="font-medium text-foreground">4460 N Illinois St. Suite 8</span><br />
                  Swansea, IL 62226
                </div>
              </div>
              
              {/* Social Links with enhanced styling */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-foreground">Follow us:</span>
                <div className="flex gap-2">
                  {[
                    { icon: Facebook, href: "https://facebook.com/ChiroUp", name: "Facebook" },
                    { icon: Instagram, href: "https://instagram.com/ChiroUp", name: "Instagram" },
                    { icon: Linkedin, href: "https://linkedin.com/company/ChiroUp", name: "LinkedIn" }
                  ].map(({ icon: Icon, href, name }) => (
                    <Button
                      key={name}
                      variant="ghost"
                      size="sm"
                      className="w-10 h-10 p-0 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      asChild
                    >
                      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
                        <Icon className="w-4 h-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter signup placeholder */}
            <div className="text-right">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4 border border-primary/20">
                <p className="text-sm font-medium text-foreground mb-2">Stay Updated</p>
                <p className="text-xs text-muted-foreground">Get the latest updates and features</p>
              </div>
            </div>
          </div>
          
          <Separator />
          
          {/* Legal links */}
          <div className="text-center space-y-4">
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
              {[
                { text: "Essentials Terms of Use", href: "https://help.chiroup.com/terms-essentials" },
                { text: "EHR Terms of Use", href: "https://help.chiroup.com/terms-ehr" },
                { text: "Privacy Policy", href: "https://help.chiroup.com/privacy-policy" }
              ].map((link, index) => (
                <div key={link.href} className="flex items-center gap-4">
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline underline-offset-4"
                  >
                    {link.text}
                  </a>
                  {index < 2 && <span className="text-muted-foreground/50">•</span>}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 ChiroUp. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;