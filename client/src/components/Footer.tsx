import { motion } from "framer-motion";
import { Heart, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-poppins font-bold mb-4" data-testid="footer-brand">
              NACL Restaurant
            </h3>
            <p className="font-inter text-primary-foreground/90 leading-relaxed">
              Authentic Indian cuisine crafted with love, fresh ingredients, and traditional recipes. 
              Real food for real people.
            </p>
          </motion.div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-poppins font-semibold mb-4">Quick Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3" data-testid="footer-address">
                <MapPin className="w-4 h-4 text-primary-foreground/90" />
                <span className="font-inter text-sm text-primary-foreground/90">
                  123 Food Street, Burhanpur, MP 450331
                </span>
              </div>
              <div className="flex items-center space-x-3" data-testid="footer-phone">
                <Phone className="w-4 h-4 text-primary-foreground/90" />
                <span className="font-inter text-sm text-primary-foreground/90">
                  +91 98765 43210
                </span>
              </div>
              <div className="flex items-center space-x-3" data-testid="footer-email">
                <Mail className="w-4 h-4 text-primary-foreground/90" />
                <span className="font-inter text-sm text-primary-foreground/90">
                  info@naclrestaurant.com
                </span>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-poppins font-semibold mb-4">Opening Hours</h4>
            <div className="space-y-2">
              <div className="flex justify-between font-inter text-sm text-primary-foreground/90">
                <span>Monday - Sunday</span>
                <span>11:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between font-inter text-sm text-primary-foreground/90">
                <span>Kitchen Closes</span>
                <span>10:30 PM</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-primary-foreground/20 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="font-inter text-sm text-primary-foreground/90 flex items-center justify-center gap-1" data-testid="footer-copyright">
            © {currentYear} NACL Restaurant. Made with <Heart className="w-4 h-4 text-red-400" /> in Burhanpur
          </p>
        </motion.div>
      </div>
    </footer>
  );
}