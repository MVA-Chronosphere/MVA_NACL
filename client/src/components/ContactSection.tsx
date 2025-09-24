import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: "123 Food Street, Burhanpur, Madhya Pradesh 450331"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+91 98765 43210"
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Sun: 11:00 AM - 11:00 PM"
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@naclrestaurant.com"
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // todo: remove mock functionality
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5" data-testid="contact-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-foreground mb-4" data-testid="contact-title">
            Planning a working lunch or <span className="text-primary">event?</span>
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Feel good about the food you're ordering. Don't hesitate to call us for any advice. We're here to help you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-poppins font-semibold text-foreground mb-6">
              Get in Touch
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover-elevate active-elevate-2 transition-all duration-300" data-testid={`contact-info-${info.title.toLowerCase()}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-poppins font-semibold text-foreground mb-1">
                            {info.title}
                          </h4>
                          <p className="text-muted-foreground font-inter">
                            {info.details}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <Button size="lg" className="w-full sm:w-auto" data-testid="button-call-now">
                Call Now for Catering
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-poppins text-foreground">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="font-inter"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="font-inter"
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your event or catering needs..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="min-h-32 font-inter"
                      data-testid="textarea-message"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full font-inter"
                    data-testid="button-send-message"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}