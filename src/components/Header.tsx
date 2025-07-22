import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Stethoscope,
  Calendar,
  CreditCard,
  FileText,
  Users,
  BookOpen,
  TrendingUp,
  MessageSquare,
  Award,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productCategories = [
    {
      title: "Essentials",
      description: "Core tools for chiropractic practice",
      icon: Stethoscope,
      features: [
        { name: "Clinical Skills", href: "/essentials#clinical-skills" },
        { name: "Patient Education", href: "/essentials#patient-education" },
        { name: "Marketing Tools", href: "/essentials#marketing" },
      ]
    },
    {
      title: "EHR Solutions",
      description: "Complete electronic health records",
      icon: FileText,
      features: [
        { name: "SOAP Notes", href: "/ehr#soap-notes" },
        { name: "Scheduling", href: "/ehr#scheduling" },
        { name: "Billing", href: "/ehr#billing" },
        { name: "Reporting", href: "/ehr#reporting" },
        { name: "Support & Training", href: "/ehr#support-training" },
      ]
    }
  ];

  const resources = [
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "Case Studies", href: "/case-studies", icon: TrendingUp },
    { name: "Community", href: "/community", icon: MessageSquare },
    { name: "Certifications", href: "/certifications", icon: Award },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-background/80 backdrop-blur-xl border-b shadow-lg" 
        : "bg-background/95 backdrop-blur-sm border-b"
    )}>
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/de143e80-99d9-4594-9af5-e33f84570f54.png" 
            alt="ChiroUp Logo" 
            className="h-8 w-auto transition-transform hover:scale-105"
          />
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {/* Products Mega Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[800px] grid-cols-2 gap-6 p-6">
                  {productCategories.map((category) => (
                    <div key={category.title} className="space-y-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <category.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{category.title}</h3>
                          <p className="text-sm text-muted-foreground">{category.description}</p>
                        </div>
                      </div>
                      <div className="space-y-1">
                        {category.features.map((feature) => (
                          <NavigationMenuLink key={feature.name} asChild>
                            <a
                              href={feature.href}
                              className="block rounded-md p-3 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              {feature.name}
                            </a>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="col-span-2 mt-4 pt-4 border-t">
                    <Button className="w-full" size="lg">
                      <Sparkles className="mr-2 h-4 w-4" />
                      View All Products
                    </Button>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Resources Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-6">
                  {resources.map((resource) => (
                    <NavigationMenuLink key={resource.name} asChild>
                      <a
                        href={resource.href}
                        className="flex items-center gap-3 rounded-md p-3 transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <resource.icon className="h-5 w-5 text-primary" />
                        <span className="font-medium">{resource.name}</span>
                      </a>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Simple Links */}
            <NavigationMenuItem>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md")} href="/about">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md")} href="/pricing">
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="ghost" className="text-base font-medium" asChild>
            <a href="https://app.chiroup.com">Log in</a>
          </Button>
          <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
            <Sparkles className="mr-2 h-4 w-4" />
            SEE PRODUCTS
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="sm" className="px-2">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <img 
                  src="/lovable-uploads/de143e80-99d9-4594-9af5-e33f84570f54.png" 
                  alt="ChiroUp Logo" 
                  className="h-6 w-auto"
                />
                ChiroUp
              </SheetTitle>
              <SheetDescription>
                Premium chiropractic software solutions
              </SheetDescription>
            </SheetHeader>
            
            <div className="mt-8 space-y-6">
              {/* Products Section */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-primary" />
                  Products
                </h3>
                {productCategories.map((category) => (
                  <div key={category.title} className="space-y-2">
                    <div className="flex items-center gap-2 font-medium">
                      <category.icon className="h-4 w-4 text-primary" />
                      {category.title}
                    </div>
                    <div className="pl-6 space-y-1">
                      {category.features.map((feature) => (
                        <a
                          key={feature.name}
                          href={feature.href}
                          className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {feature.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <Separator />

              {/* Resources Section */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Resources
                </h3>
                {resources.map((resource) => (
                  <a
                    key={resource.name}
                    href={resource.href}
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <resource.icon className="h-4 w-4 text-primary" />
                    {resource.name}
                  </a>
                ))}
              </div>

              <Separator />

              {/* Navigation Links */}
              <div className="space-y-2">
                <a
                  href="/about"
                  className="block py-2 text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="/pricing"
                  className="block py-2 text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="https://app.chiroup.com"
                  className="block py-2 text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log in
                </a>
              </div>

              <Separator />

              {/* CTA Button */}
              <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                <Sparkles className="mr-2 h-4 w-4" />
                SEE PRODUCTS
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;