import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b backdrop-blur supports-[backdrop-filter]:bg-background/95">
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
          <div className="flex items-center space-x-1 cursor-pointer hover:text-primary transition-colors">
            <span>Products</span>
            <ChevronDown className="h-4 w-4" />
          </div>
          <a href="#" className="hover:text-primary transition-colors">About</a>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-primary transition-colors">
            <span>Resources</span>
            <ChevronDown className="h-4 w-4" />
          </div>
          <a href="#" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#" className="hover:text-primary transition-colors">Log In</a>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-primary hover:bg-primary/90">
            See Products
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
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="flex flex-col space-y-4 p-4">
              <div className="flex items-center space-x-1 cursor-pointer">
                <span>Products</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <a href="#">About</a>
              <div className="flex items-center space-x-1 cursor-pointer">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <a href="#">Pricing</a>
              <a href="#">Log In</a>
              <Button className="bg-primary hover:bg-primary/90 w-full">
                See Products
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;