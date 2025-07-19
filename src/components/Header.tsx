import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b backdrop-blur supports-[backdrop-filter]:bg-white/95">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/de143e80-99d9-4594-9af5-e33f84570f54.png" 
            alt="ChiroUp Logo" 
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative">
            <button 
              className="flex items-center space-x-1 hover:text-primary transition-colors"
              onClick={() => toggleDropdown('products')}
            >
              <span>Products</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {activeDropdown === 'products' && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border rounded-md shadow-lg z-50">
                <div className="py-1">
                  <a href="/essentials" className="block px-4 py-2 text-sm hover:bg-gray-100">Essentials</a>
                  <a href="/essentials#clinical-skills" className="block px-4 py-2 text-sm hover:bg-gray-100">Clinical Skills</a>
                  <a href="/essentials#patient-education" className="block px-4 py-2 text-sm hover:bg-gray-100">Patient Education</a>
                  <a href="/essentials#marketing" className="block px-4 py-2 text-sm hover:bg-gray-100">Marketing Tools</a>
                  <hr className="my-1" />
                  <a href="/ehr#soap-notes" className="block px-4 py-2 text-sm hover:bg-gray-100">SOAP Notes</a>
                  <a href="/ehr#scheduling" className="block px-4 py-2 text-sm hover:bg-gray-100">Scheduling</a>
                  <a href="/ehr#billing" className="block px-4 py-2 text-sm hover:bg-gray-100">Billing</a>
                  <a href="/ehr#reporting" className="block px-4 py-2 text-sm hover:bg-gray-100">Reporting</a>
                  <a href="/ehr#support-training" className="block px-4 py-2 text-sm hover:bg-gray-100">Support & Training</a>
                </div>
              </div>
            )}
          </div>
          <a href="/about" className="hover:text-primary transition-colors">About</a>
          <a href="/resources" className="hover:text-primary transition-colors">Resources</a>
          <a href="/pricing" className="hover:text-primary transition-colors">Pricing</a>
          <a href="https://app.chiroup.com" className="hover:text-primary transition-colors">Log in</a>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-primary hover:bg-primary/90 font-bold">
            SEE PRODUCTS
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b md:hidden">
            <nav className="flex flex-col space-y-4 p-4">
              <div className="space-y-2">
                <div className="font-medium">Products</div>
                <div className="pl-4 space-y-1">
                  <a href="/essentials" className="block text-sm">Essentials</a>
                  <a href="/essentials#clinical-skills" className="block text-sm">Clinical Skills</a>
                  <a href="/essentials#patient-education" className="block text-sm">Patient Education</a>
                  <a href="/essentials#marketing" className="block text-sm">Marketing Tools</a>
                  <a href="/ehr#soap-notes" className="block text-sm">SOAP Notes</a>
                  <a href="/ehr#scheduling" className="block text-sm">Scheduling</a>
                  <a href="/ehr#billing" className="block text-sm">Billing</a>
                  <a href="/ehr#reporting" className="block text-sm">Reporting</a>
                  <a href="/ehr#support-training" className="block text-sm">Support & Training</a>
                </div>
              </div>
              <a href="/about">About</a>
              <a href="/resources">Resources</a>
              <a href="/pricing">Pricing</a>
              <a href="https://app.chiroup.com">Log in</a>
              <Button className="bg-primary hover:bg-primary/90 w-full font-bold">
                SEE PRODUCTS
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;