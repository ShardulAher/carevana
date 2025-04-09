
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the medical consultation feature work?",
    answer: "Our app connects you with specialists via chat or video calls. You can book appointments, share medical records securely, and have virtual consultations from the comfort of your home."
  },
  {
    question: "Is my child's health information secure?",
    answer: "Absolutely. We use end-to-end encryption for all health records and comply with all medical data privacy regulations. Your family's information is only accessible to you and the healthcare providers you authorize."
  },
  {
    question: "How are caregivers and nurses vetted?",
    answer: "All caregivers undergo rigorous background checks, verification of credentials, specialized training in Down syndrome care, and must provide professional references. We regularly review performance based on family feedback."
  },
  {
    question: "Can I use the app if I'm in a rural area?",
    answer: "Yes! Our app is designed to serve families everywhere. The telemedicine features are especially valuable for those in remote areas with limited access to specialists."
  },
  {
    question: "How accurate is the AI chatbot for medical questions?",
    answer: "Our AI chatbot provides general guidance and information based on trusted medical sources. However, it always clarifies that it's not a replacement for professional medical advice and will prompt you to connect with a specialist for specific medical concerns."
  },
  {
    question: "Is the app available on both iOS and Android?",
    answer: "Yes, GentleHearts is available for both iOS and Android devices. You can download it from the App Store or Google Play Store."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="container-padding bg-gentle-purple/5">
      <div className="container mx-auto">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Find answers to common questions about GentleHearts and how it can support your family.
        </p>
        
        <div className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-100 rounded-lg mb-4 bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gentle-blue/5 rounded-t-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-text-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
