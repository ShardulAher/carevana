
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Parent",
    quote: "The GentleHearts app has been life-changing for our family. The online consultations saved us countless trips to specialists, and the community support helped us feel less alone in our journey.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Dr. Michael Lee",
    role: "Pediatric Specialist",
    quote: "As a healthcare provider, I'm impressed with the comprehensive resources this platform offers. The secure health records system makes it easy to coordinate care across different specialists.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Elena Martinez",
    role: "Special Education Teacher",
    quote: "The school directory feature has helped many of my students' families find the right educational fit. I recommend GentleHearts to all parents looking for support in their journey.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "James Wilson",
    role: "Parent & Advocate",
    quote: "Finding qualified caregivers used to be our biggest challenge. Now with GentleHearts, we can easily book trained professionals who understand our son's specific needs. It's given us peace of mind.",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="container-padding bg-gentle-blue/5">
      <div className="container mx-auto">
        <h2 className="section-title">What Our Community Says</h2>
        <p className="section-subtitle">
          Hear from parents, healthcare providers, and educators about their experiences with GentleHearts.
        </p>

        <div className="relative mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gentle-purple/20 mx-auto">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gentle-yellow px-3 py-1 rounded-full text-xs font-medium">
                    <div className="flex items-center gap-1">
                      <Star size={12} fill="currentColor" className="text-yellow-500" />
                      <Star size={12} fill="currentColor" className="text-yellow-500" />
                      <Star size={12} fill="currentColor" className="text-yellow-500" />
                      <Star size={12} fill="currentColor" className="text-yellow-500" />
                      <Star size={12} fill="currentColor" className="text-yellow-500" />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
                  <p className="text-text-light text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="relative">
                  <svg className="w-8 h-8 text-gentle-purple opacity-20 absolute -top-4 -left-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                  <p className="text-lg italic mb-6">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-3">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-gentle-purple scale-125" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>

          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-text-dark hover:text-gentle-blue transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-text-dark hover:text-gentle-blue transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
