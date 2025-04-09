
import { 
  Video, MessageCircle, Flask, UserPlus, MapPin, Brain, 
  Users, Building, Lock, Bot, School 
} from "lucide-react";

const features = [
  {
    title: "Medical Consultation",
    description: "Connect with specialists via chat or video calls for personalized care and guidance.",
    icon: Video,
    color: "bg-gentle-blue"
  },
  {
    title: "Genetic Testing & Early Detection",
    description: "Access information and services for early diagnosis and intervention planning.",
    icon: Flask,
    color: "bg-gentle-green"
  },
  {
    title: "Caregiver and Nursing",
    description: "Book trained professionals for home support tailored to your child's specific needs.",
    icon: UserPlus,
    color: "bg-gentle-yellow"
  },
  {
    title: "GPS Doctor & Nurse Locator",
    description: "Find nearby healthcare professionals specialized in Down syndrome care.",
    icon: MapPin,
    color: "bg-gentle-purple"
  },
  {
    title: "Therapy & Support",
    description: "Access physical, speech, occupational, and emotional therapy resources.",
    icon: Brain,
    color: "bg-gentle-pink"
  },
  {
    title: "Community Sharing",
    description: "Connect with other parents to share experiences, stories, and valuable advice.",
    icon: Users,
    color: "bg-gentle-blue"
  },
  {
    title: "NGO & Financial Assistance",
    description: "Discover organizations offering funding help and donation opportunities.",
    icon: Building,
    color: "bg-gentle-green"
  },
  {
    title: "Encrypted Health Records",
    description: "Store and access medical information with complete security and privacy.",
    icon: Lock,
    color: "bg-gentle-yellow"
  },
  {
    title: "24/7 AI Chatbot",
    description: "Get instant answers to questions and guidance whenever you need it.",
    icon: Bot,
    color: "bg-gentle-purple"
  },
  {
    title: "Special School Directory",
    description: "Find educational institutions specializing in children with special needs.",
    icon: School,
    color: "bg-gentle-pink"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="container-padding">
      <div className="container mx-auto">
        <h2 className="section-title">
          Supporting Every Step
        </h2>
        <p className="section-subtitle">
          Our comprehensive platform offers everything families need to provide the best care and support for children with Down syndrome.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group"
            >
              <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-text-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
