import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
// import { Heart, Users, Leaf, Award, Clock } from "lucide-react";
// Use images from the public folder so Netlify / static hosting serves them directly
const chefImagePublic = "/assets/generated_images/Nacl%20Chef.jpg";
const exteriorImagePublic = "/assets/generated_images/Nacl%20image.png";
// Use public folder paths for Netlify hosting
const aboutBg = "/attached_assets/generated_images/nacl about  without bg.png";
// Path for logo image to be centered on the green line
const aboutLogo = "/attached_assets/generated_images/nacl about  without bg.png";
const madeWithLoveImg = "/attached_assets/generated_images/made with love.jpg";
const freshIngredientsImg = "/attached_assets/generated_images/fresh incredients.jpg";
const authenticTasteImg = "/attached_assets/generated_images/authentic taste.jpg";
const realPeopleImg = "/attached_assets/generated_images/real people.jpg";

const features = [
  {
    img: madeWithLoveImg,
    title: "Made with Love",
    description: "Every dish is prepared with passion and traditional family recipes."
  },
  {
    img: freshIngredientsImg,
    title: "Fresh Ingredients",
    description: "We source the finest local ingredients, ensuring freshness and supporting our community."
  },
  {
    img: authenticTasteImg,
    title: "Authentic Taste",
    description: "Traditional cooking methods and original spice blends create the authentic flavors you crave."
  },
  {
    img: realPeopleImg,
    title: "Real People",
    description: "We are not machines. Our team of experienced chefs brings genuine care to every meal."
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-8 xs:py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" data-testid="about-section">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Green border line with centered logo above About heading */}
        <div className="w-full flex items-center justify-center mb-6 xs:mb-8 sm:mb-10 lg:mb-12" style={{ position: 'relative' }}>
          {/* Left green bullet */}
          <span
            className="inline-block bg-green-700"
            style={{
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              minWidth: '12px',
              minHeight: '12px',
              marginRight: '-9px',
              zIndex: 2,
              border: '2px solid #fff',
              boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
            }}
          />
          <div className="flex-grow border-t-4 border-green-700" style={{ minWidth: 0 }} />
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'white',
              borderRadius: '50%',
              padding: '0.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              zIndex: 2,
              maxWidth: '90px',
              maxHeight: '90px',
              width: '18vw',
              height: '18vw',
              minWidth: '48px',
              minHeight: '48px',
            }}
          >
            <img
              src={aboutLogo}
              alt="NACL About Logo"
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }}
              loading="lazy"
            />
          </div>
          <div className="flex-grow border-t-4 border-green-700" style={{ minWidth: 0 }} />
          {/* Right green bullet */}
          <span
            className="inline-block bg-green-700"
            style={{
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              minWidth: '12px',
              minHeight: '12px',
              marginLeft: '-9px',
              zIndex: 2,
              border: '2px solid #fff',
              boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
            }}
          />
        </div>
        {/* Main About Heading and Story (updated: removed heading and first story paragraph, moved section up) */}
        <motion.div
          className="text-center mb-6 xs:mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        </motion.div>

        {/* New About Info Section with Images */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-16 items-center mb-8 xs:mb-12 sm:mb-16 lg:mb-20 relative">
          {/* Blended background image only for left/text side */}
          <div className="absolute left-0 top-0 h-full w-1/2 pointer-events-none z-0 hidden sm:block">
            <img 
              src={aboutBg} 
              alt="About Section Background" 
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: '120%', // slightly bigger
                height: '120%',
                transform: 'translate(-55%, -50%)', // center and keep in left half
                objectFit: 'contain',
                objectPosition: 'left center',
                borderRadius: 0,
                opacity: 0.16,
                mixBlendMode: 'multiply',
                zIndex: 1
              }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
            style={{ color: '#3B2C1A' }} // darker font for readability
          >
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 xs:mb-6" style={{ color: '#3B2C1A' }}>
              About NACL Restaurant
            </h2>
            <p className="text-sm xs:text-base sm:text-lg mb-3 xs:mb-4 sm:mb-6 leading-relaxed font-bold text-justify" style={{ color: '#3B2C1A', fontWeight: 'bold', fontSize: 'clamp(0.875rem, 2.5vw, 1.15rem)', textAlign: 'justify' }}>
              Once upon a time in the historic city of Burhanpur, a passionate chef had a vision to serve 
              authentic Indian cuisine that honored tradition while embracing innovation. Fresh, delicious, 
              wholesome, authentic food which was sourced from local farmers and prepared with recipes 
              passed down through generations.
            </p>
            <p className="text-sm xs:text-base sm:text-lg mb-3 xs:mb-4 sm:mb-6 leading-relaxed font-bold text-justify" style={{ color: '#3B2C1A', fontWeight: 'bold', fontSize: 'clamp(0.875rem, 2.5vw, 1.15rem)', textAlign: 'justify' }}>
              We believe that real food comes from real people who care about what they serve. Every ingredient is carefully selected, every recipe is time-tested, and every dish is prepared with the love and attention it deserves.
            </p>
            <p className="text-sm xs:text-base sm:text-lg mb-4 xs:mb-6 sm:mb-8 leading-relaxed font-bold text-justify" style={{ color: '#3B2C1A', fontWeight: 'bold', fontSize: 'clamp(0.875rem, 2.5vw, 1.15rem)', textAlign: 'justify' }}>
              Today, NACL Restaurant continues this legacy, bringing you the finest flavors of Burhanpur's 
              culinary heritage with every meal we serve.
            </p>
            <button 
              className="px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg text-sm xs:text-base sm:text-lg font-semibold shadow-md hover:bg-primary/80 transition" 
              onClick={() => console.log('Read more about NACL clicked')}
              data-testid="button-read-more"
            >
              Read Our Story
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-2 xs:gap-4 sm:gap-6">
              {/* Portrait containers - keep consistent size and show full image with object-fit: contain */}
              <div
                className="w-full border-2 xs:border-4 border-primary rounded-sm overflow-hidden flex items-center justify-center"
                style={{
                  maxWidth: '520px',
                  minWidth: '120px',
                  width: '100%',
                  // Portrait aspect ratio 3:4 (width:height), but we set via padding-top trick for better cross-browser support
                  aspectRatio: '3 / 4',
                  height: 'clamp(180px, 36vw, 420px)'
                }}
              >
                <img
                  src={chefImagePublic}
                  alt="Chef preparing traditional dishes"
                  // show full portrait on mobile, fill frame on sm+ screens
                  className="w-full h-full object-contain sm:object-cover"
                  style={{
                    display: 'block',
                    objectPosition: 'center'
                  }}
                  data-testid="img-chef"
                />
              </div>

              <div
                className="w-full border-2 xs:border-4 border-primary rounded-sm overflow-hidden flex items-center justify-center"
                style={{
                  maxWidth: '520px',
                  minWidth: '120px',
                  width: '100%',
                  aspectRatio: '3 / 4',
                  height: 'clamp(180px, 36vw, 420px)'
                }}
              >
                <img
                  src={exteriorImagePublic}
                  alt="NACL Restaurant exterior"
                  // match behavior: full portrait on mobile, fill frame on sm+ screens
                  className="w-full h-full object-contain sm:object-cover"
                  style={{
                    display: 'block',
                    objectPosition: 'center'
                  }}
                  data-testid="img-exterior"
                />
              </div>
            </div>
            <div className="absolute -bottom-1 xs:-bottom-2 sm:-bottom-4 -left-1 xs:-left-2 sm:-left-4 bg-primary text-primary-foreground p-2 xs:p-4 sm:p-6 rounded-md max-w-[180px] xs:max-w-[200px] sm:max-w-xs text-xs xs:text-sm">
              <p className="font-semibold">
                "Authentic flavors, made with love, served with pride."
              </p>
              <p className="mt-1 xs:mt-2 opacity-90">- Chef Manoj Kumar Singh</p>
            </div>
          </motion.div>
        </div>

        {/* Features Grid (merged and expanded) */}
  <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 mt-8 xs:mt-10 sm:mt-14 lg:mt-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title + index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className="h-full text-center hover-elevate active-elevate-2 transition-all duration-300 border-2 border-green-700"
                style={{ background: 'linear-gradient(90deg, #FED89B 0%, #FFF7EB 50%)', borderColor: '#388e3c' }}
                data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <CardContent className="p-4 xs:p-6 sm:p-8">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-primary/10 rounded-full mb-3 xs:mb-4 overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="object-cover w-full h-full rounded-full"
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                  </motion.div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-poppins font-semibold text-foreground mb-2 xs:mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base text-muted-foreground font-inter leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* ...existing code... */}
      </div>
    </section>
  );
}