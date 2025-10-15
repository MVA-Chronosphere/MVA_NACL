import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useState } from "react";
// Use public folder path for Netlify hosting
const logoBg = "/attached_assets/generated_images/logo alone.png";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: "Near All Is Well Multi-Speciality Hospital, Mohammadpura, Madhya Pradesh-450331"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+91 7692844444"
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Sun: 10:30 AM - 10:30 PM"
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@naclburhanpur.com"
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
  <section id="contact" className="relative py-8 xs:py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5" data-testid="contact-section">
    {/* Left Decorative Image */}
    <img
      src="/assets/generated_images/nonveg platter.png"
      alt="Nonveg Platter Left"
      className="hidden lg:block absolute z-10 transition-all duration-300 left-0"
      style={{
        top: '21.79%',
        width: 'clamp(32px, 5vw, 60px)',
        height: 'auto',
        transform: 'translateY(-50%)',
        maxWidth: '60px',
        minWidth: '24px',
      }}
    />
    {/* Right Decorative Image */}
    <img
      src="/assets/generated_images/vegii.png"
      alt="Veg Platter Right"
      className="hidden lg:block absolute z-10 transition-all duration-300 right-0"
      style={{
        top: '22%',
        width: 'clamp(48px, 7vw, 90px)',
        height: 'auto',
        maxWidth: '90px',
        minWidth: '32px',
        transform: 'translateY(-50%)',
      }}
    />
  <div className="max-w-7xl mx-auto relative lg:px-8 xl:px-12 2xl:px-16">
        <motion.div
          className="text-center mb-8 xs:mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-poppins font-bold text-foreground mb-4 underline" style={{ textUnderlineOffset: 6, fontSize: 'clamp(1.5rem, 6vw, 3rem)' }} data-testid="contact-title">
            Planning a working lunch or <span className="text-primary">event?</span>
          </h2>
          <p className="text-muted-foreground font-inter max-w-2xl mx-auto" style={{ fontSize: 'clamp(0.875rem, 3vw, 1.125rem)' }}>
            Feel good about the food you're ordering. Don't hesitate to call us for any advice. We're here to help you!
          </p>
        </motion.div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 relative">
          {/* Contact Form (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-[2px]" style={{ borderColor: '#8B5C2A' }}>
              <CardHeader>
                <CardTitle className="text-lg xs:text-xl sm:text-2xl font-poppins text-foreground">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-6" data-testid="contact-form">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="font-inter text-sm xs:text-base"
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
                      className="font-inter text-sm xs:text-base"
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
                      className="min-h-24 xs:min-h-32 font-inter text-sm xs:text-base"
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

          {/* Contact Information (Right) with blended background */}
          <div className="relative">
            {/* Removed logo background image as requested */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 relative z-10"
            >
              <h3 className="text-lg xs:text-xl sm:text-2xl font-poppins font-semibold text-foreground mb-4 xs:mb-6">
                Get in Touch
              </h3>
              <ul className="space-y-4 xs:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.li
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2 xs:gap-4 bg-transparent"
                    data-testid={`contact-info-${info.title.toLowerCase()}`}
                  >
                    <span className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-poppins font-semibold text-foreground mb-1 text-sm xs:text-base sm:text-lg">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground font-inter break-words text-xs xs:text-sm sm:text-base">
                        {info.details}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}