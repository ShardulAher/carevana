
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, PhoneCall } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden container-padding">
      <div 
        className="absolute -top-12 -right-12 w-64 h-64 bg-gentle-purple rounded-full opacity-30 blur-3xl"
        aria-hidden="true"
      ></div>
      <div 
        className="absolute -bottom-12 -left-12 w-64 h-64 bg-gentle-green rounded-full opacity-30 blur-3xl"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block bg-gentle-yellow/30 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse-gentle">
              Supporting Children with Down Syndrome & Their Families
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Empowering Every Child with
              <span className="bg-gradient-to-r from-gentle-blue to-gentle-purple bg-clip-text text-transparent"> Love & Care</span>
            </h1>
            <p className="text-lg md:text-xl text-text-light mb-8 max-w-2xl mx-auto lg:mx-0">
              A comprehensive support system providing medical consultations, caregiver services, and community connections for families navigating the beautiful journey of Down syndrome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-primary">
                <Download size={18} />
                Download the App
              </Button>
              <Button className="btn-secondary">
                <PhoneCall size={18} />
                Book a Consultation
              </Button>
            </div>
            <div className="mt-12 hidden lg:block">
              <a 
                href="#features" 
                className="flex items-center gap-2 text-text-light hover:text-gentle-blue transition-all duration-300"
                aria-label="Scroll to features"
              >
                Learn More <ArrowDown size={16} className="animate-bounce" />
              </a>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gentle-blue via-gentle-blue to-gentle-purple opacity-20 blur-xl animate-pulse-gentle"></div>
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1611246981214-baa9bd735a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Happy children with Down syndrome with their caregivers"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-4 shadow-lg border border-gray-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="bg-gentle-green w-10 h-10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                  </div>
                  <div>
                    <p className="font-medium text-sm">24/7 Support</p>
                    <p className="text-xs text-text-light">Always here for you</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-5 -left-5 bg-white rounded-2xl p-4 shadow-lg border border-gray-100 animate-float animation-delay-500">
                <div className="flex items-center gap-3">
                  <div className="bg-gentle-purple w-10 h-10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Expert Advice</p>
                    <p className="text-xs text-text-light">Qualified Professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
