
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="container-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Have questions or suggestions? We'd love to hear from you. Reach out to our team for support.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border-gray-200"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border-gray-200"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border-gray-200"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can assist you..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border-gray-200 min-h-[120px]"
                />
              </div>
              
              <Button type="submit" className="btn-primary w-full">
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gentle-blue w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-text-light">support@gentlehearts.com</p>
                    <p className="text-text-light">info@gentlehearts.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gentle-purple w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-text-light">Support: +1 (800) 123-4567</p>
                    <p className="text-text-light">Care Hotline: +1 (800) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gentle-green w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-text-light">123 Care Street</p>
                    <p className="text-text-light">San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 lg:mt-0 bg-gentle-yellow/20 rounded-2xl p-6">
              <h4 className="font-bold mb-2">Subscribe to Our Newsletter</h4>
              <p className="text-text-light text-sm mb-4">
                Stay updated with the latest resources, events, and app updates.
              </p>
              
              <form className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="rounded-lg border-gray-200"
                />
                <Button className="btn-secondary whitespace-nowrap">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
