import { motion } from "framer-motion";
import { Heart, MapPin, Phone, Mail } from "lucide-react";
// Use public folder path for Netlify hosting
const logoFooter = "/attached_assets/generated_images/logo alone.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8 xs:py-10 sm:py-12 px-2 xs:px-4 sm:px-6 lg:px-8 relative overflow-hidden" data-testid="footer">
      {/* Left Decorative Image */}
      <img
        src="/assets/generated_images/half flower left footer.png"
        alt="Footer Left Decoration"
        className="hidden lg:block absolute z-10 transition-all duration-300 left-0"
        style={{
          width: 'clamp(32px, 5vw, 60px)',
          height: 'auto',
          bottom: '2.5rem',
          opacity: 0.5,
          filter: 'blur(0.5px)',
          maxWidth: '60px',
          minWidth: '24px',
          transform: 'scale(1)'
        }}
      />
      {/* Right Decorative Image */}
      <img
        src="/assets/generated_images/half flower right footer.png"
        alt="Footer Right Decoration"
        className="hidden lg:block absolute z-10 transition-all duration-300 right-0"
        style={{
          width: 'clamp(32px, 5vw, 60px)',
          height: 'auto',
          bottom: '2.5rem',
          opacity: 0.5,
          filter: 'blur(0.5px)',
          maxWidth: '60px',
          minWidth: '24px',
          transform: 'scale(1)'
        }}
      />
      <div className="max-w-7xl mx-auto lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xs:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 xs:gap-3 mb-2 xs:mb-4">
              <img
                src={logoFooter}
                alt="NaCl Logo"
                className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 object-contain"
                style={{ maxWidth: '2.5rem', height: 'auto' }}
              />
              <h3 className="text-lg xs:text-xl sm:text-2xl font-poppins font-bold" data-testid="footer-brand">
                NaCl Restaurant
              </h3>
            </div>
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
            <h4 className="text-base xs:text-lg font-poppins font-semibold mb-2 xs:mb-4">Quick Contact</h4>
            <div className="space-y-2 xs:space-y-3">
              <div className="flex items-center space-x-3" data-testid="footer-address">
                <MapPin className="w-4 h-4 text-primary-foreground/90" />
                <span className="font-inter text-xs xs:text-sm text-primary-foreground/90">
                  Near All Is Well Multi-Speciality Hospital, Mohammadpura, Madhya Pradesh-450331
                </span>
              </div>
              <div className="flex items-center space-x-3" data-testid="footer-phone">
                <Phone className="w-4 h-4 text-primary-foreground/90" />
                <span className="font-inter text-xs xs:text-sm text-primary-foreground/90">
                  +91 7692844444
                </span>
              </div>
              <div className="flex items-center space-x-3" data-testid="footer-email">
                <Mail className="w-4 h-4 text-primary-foreground/90" />
                <span className="font-inter text-xs xs:text-sm text-primary-foreground/90">
                  info@naclburhanpur.com
                </span>
              </div>
            </div>
          </motion.div>

          {/* Hours + Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between md:space-x-6">
              <div className="flex flex-col w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <h4 className="text-base xs:text-lg font-poppins font-semibold mb-2 xs:mb-4">Opening Hours</h4>
                  <div className="flex items-center gap-2 md:gap-3">
                    <span className="text-xs xs:text-sm font-poppins font-semibold text-primary-foreground/80 mr-1 md:mr-2">Follow Us</span>
                    {/* Facebook */}
                    <a href="#" aria-label="Facebook" className="text-white hover:text-blue-500 transition-colors" tabIndex={0}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                      </svg>
                    </a>
                    {/* Instagram */}
                    <a href="#" aria-label="Instagram" className="text-white hover:text-pink-500 transition-colors" tabIndex={0}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.808 2.256 6.088 2.243 6.497 2.243 12c0 5.503.013 5.912.072 7.192.059 1.276.353 2.449 1.32 3.416.967.967 2.14 1.261 3.416 1.32 1.28.059 1.689.072 7.192.072s5.912-.013 7.192-.072c1.276-.059 2.449-.353 3.416-1.32.967-.967 1.261-2.14 1.32-3.416.059-1.28.072-1.689.072-7.192s-.013-5.912-.072-7.192c-.059-1.276-.353-2.449-1.32-3.416C21.449.425 20.276.131 19 .072 17.72.013 17.311 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                      </svg>
                    </a>
                    {/* YouTube */}
                    <a href="#" aria-label="YouTube" className="text-white hover:text-red-600 transition-colors" tabIndex={0}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.479 3.5 12 3.5 12 3.5s-7.479 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.1 0 12 0 12s0 3.9.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.521 20.5 12 20.5 12 20.5s7.479 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.9 24 12 24 12s0-3.9-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="space-y-1 xs:space-y-2 mt-2">
                  <div className="flex justify-between font-inter text-xs xs:text-sm text-primary-foreground/90">
                    <span>Monday - Sunday</span>
                  </div>
                  <div className="flex justify-between font-inter text-xs xs:text-sm text-primary-foreground/90">
                    <span>10:30 AM - 10:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-primary-foreground/20 mt-6 xs:mt-8 pt-6 xs:pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="font-inter text-xs xs:text-sm text-primary-foreground/90 flex items-center justify-center gap-1" data-testid="footer-copyright">
            © {currentYear} NaCl Restaurant. Made with <Heart className="w-4 h-4 text-red-400" /> in Burhanpur
          </p>
        </motion.div>
      </div>
    </footer>
  );
}