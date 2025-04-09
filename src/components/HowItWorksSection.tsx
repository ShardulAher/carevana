
import { Check, Download, UserPlus, Heart } from "lucide-react";

const steps = [
  {
    title: "Download the App",
    description: "Get started by downloading our app from the App Store or Google Play Store.",
    icon: Download,
    color: "bg-gentle-blue"
  },
  {
    title: "Create Your Profile",
    description: "Set up your family profile and share your child's specific needs and preferences.",
    icon: UserPlus,
    color: "bg-gentle-purple"
  },
  {
    title: "Access Support Services",
    description: "Connect with healthcare providers, therapists, schools, and community resources.",
    icon: Heart,
    color: "bg-gentle-green"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="container-padding bg-gentle-yellow/10">
      <div className="container mx-auto">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Getting started with GentleHearts is easy. Follow these simple steps to access our comprehensive support system.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="flex-1">
              <div className="bg-white rounded-2xl p-8 shadow-md h-full border border-gray-100 relative">
                <div className={`${step.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <step.icon size={28} className="text-white" />
                </div>
                
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gentle-yellow text-text-dark flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-text-light">{step.description}</p>
                
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check size={18} className="text-gentle-green" />
                    <span className="text-sm">Simple and intuitive</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={18} className="text-gentle-green" />
                    <span className="text-sm">Personalized experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={18} className="text-gentle-green" />
                    <span className="text-sm">24/7 assistance</span>
                  </li>
                </ul>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block h-12 w-12 mx-auto relative">
                  <div className="absolute top-0 left-1/2 h-full w-0.5 bg-gentle-purple/20"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
