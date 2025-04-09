
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gentle-blue/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-full bg-gentle-gradient flex items-center justify-center">
                <span className="text-white font-poppins font-bold text-xl">C</span>
              </div>
              <h2 className="font-poppins font-bold text-xl">
                <span className="text-gentle-blue">Care</span>
                <span className="text-text-dark">vana</span>
              </h2>
            </div>
            <p className="text-text-light mb-6">
              Supporting children with Down syndrome and their families with comprehensive resources, community, and care.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-white p-2 rounded-full text-gentle-blue hover:text-white hover:bg-gentle-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-white p-2 rounded-full text-gentle-blue hover:text-white hover:bg-gentle-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="bg-white p-2 rounded-full text-gentle-blue hover:text-white hover:bg-gentle-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-white p-2 rounded-full text-gentle-blue hover:text-white hover:bg-gentle-blue transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-text-light hover:text-gentle-blue transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-text-light hover:text-gentle-blue transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-text-light hover:text-gentle-blue transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-text-light hover:text-gentle-blue transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-text-light hover:text-gentle-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-text-light hover:text-gentle-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-text-light hover:text-gentle-blue transition-colors">Support Guide</a></li>
              <li><a href="#" className="text-text-light hover:text-gentle-blue transition-colors">Research</a></li>
              <li><a href="#" className="text-text-light hover:text-gentle-blue transition-colors">Events</a></li>
              <li><a href="#" className="text-text-light hover:text-gentle-blue transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Download</h3>
            <div className="space-y-3">
              <a href="#" className="block">
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on the App Store" 
                  className="h-10"
                />
              </a>
              <a href="#" className="block">
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Get it on Google Play" 
                  className="h-14 -ml-2"
                />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-light text-sm">
            © {new Date().getFullYear()} Carevana. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-text-light hover:text-gentle-blue transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-text-light hover:text-gentle-blue transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-text-light hover:text-gentle-blue transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>

        <Button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 rounded-full h-12 w-12 shadow-lg bg-gentle-purple hover:bg-gentle-purple/90 text-white p-0 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
