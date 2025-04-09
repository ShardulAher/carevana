
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gentle-gradient flex items-center justify-center">
            <span className="text-white font-poppins font-bold text-xl">C</span>
          </div>
          <h1 className="font-poppins font-bold text-xl md:text-2xl">
            <span className="text-gentle-blue">Care</span>
            <span className="text-text-dark">vana</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="font-medium hover:text-gentle-blue transition-colors">Features</a>
          <a href="#how-it-works" className="font-medium hover:text-gentle-blue transition-colors">How It Works</a>
          <a href="#testimonials" className="font-medium hover:text-gentle-blue transition-colors">Testimonials</a>
          <a href="#faq" className="font-medium hover:text-gentle-blue transition-colors">FAQ</a>
          <a href="#contact" className="font-medium hover:text-gentle-blue transition-colors">Contact</a>
          <Button className="btn-primary">Download App</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-text-dark p-2 focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#features" 
              className="font-medium py-2 hover:text-gentle-blue transition-colors"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="font-medium py-2 hover:text-gentle-blue transition-colors"
              onClick={toggleMenu}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="font-medium py-2 hover:text-gentle-blue transition-colors"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="font-medium py-2 hover:text-gentle-blue transition-colors"
              onClick={toggleMenu}
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              className="font-medium py-2 hover:text-gentle-blue transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <Button className="btn-primary w-full mt-2">Download App</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
