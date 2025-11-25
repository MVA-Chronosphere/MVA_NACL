import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import homeFoodImg from "@/assets/homepgae food.jpg";
import homepage1Img from "@/assets/homepage 1.jpg";
import homepage2Img from "@/assets/homepage 2.jpg";
import homepage3Img from "@/assets/homepage 3.png";
import homepage4Img from "@/assets/homepage 4.jpg";

const heroSlides = [
  {
    image: homepage3Img,
    title: "Where Meal ",
    subtitle: "Feels Like Home.",
    alt: "NACL Restaurant Interior"
  },
  {
    image: homepage1Img,
    title: "More Than Food, It’s a Feeling.",
    subtitle: "",
    alt: "NACL Restaurant Kitchen"
  },
  {
    image: homepage2Img,
    title: "Taste That Touches the Soul.",
    subtitle: "",
    alt: "NACL Restaurant Dining"
  },
  {
    image: homepage4Img,
    title: "A Table That Feels Like Family.",
    subtitle: "",
    alt: "NACL Restaurant Kitchen"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [, setLocation] = useLocation();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Mobile view glitch fix: force layout recalculation on mount
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        window.scrollBy(0, 1);
        window.scrollBy(0, -1);
      }, 50);
    }
  }, []);
  return (
    <section
      className="relative w-full overflow-hidden"
      data-testid="hero-banner"
      onClick={(e) => {
        // Prevent arrow/button/indicator clicks from triggering next slide
        const tag = (e.target as HTMLElement).tagName.toLowerCase();
        if (["button", "svg", "path"].includes(tag)) return;
        nextSlide();
      }}
      style={{ 
        cursor: "pointer", 
        height: "calc(100vh - 4rem)",
        minHeight: "500px",
        maxHeight: "100vh"
      }}
    >
      {/* Background Images with Carousel */}
      {heroSlides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentSlide ? 1 : 0,
            scale: index === currentSlide ? 1 : 1.1 
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img 
            src={slide.image} 
            alt={slide.alt} 
            className="w-full h-full object-cover object-center"
            style={{ 
              width: "100%", 
              height: "100%", 
              minHeight: "500px",
              maxHeight: "100vh"
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="text-center text-white w-full max-w-sm xs:max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-2"
          key={currentSlide}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="font-poppins font-bold mb-4 sm:mb-6 leading-tight break-words text-center"
            data-testid="hero-title"
            style={{ 
              lineHeight: '1.1', 
              wordBreak: 'break-word',
              fontSize: 'clamp(1.5rem, 8vw, 5rem)'
            }}
          >
            {heroSlides[currentSlide].title.split(' ').map((word, index) => (
              <span key={index} className={
                word === 'Machines.' || word === 'people.' || word === 'Food.' || word === 'eat.' || word === 'real.' ? 'text-orange-400' : ''
              }>
                {word}{' '}
              </span>
            ))}
            {heroSlides[currentSlide].subtitle && (
              <>
                <br />
                {heroSlides[currentSlide].subtitle.split(' ').map((word, index) => (
                  <span key={index} className={
                    word === 'people.' ? 'text-orange-400' : ''
                  }>
                    {word}{' '}
                  </span>
                ))}
              </>
            )}
          </motion.h1>
        </motion.div>
      </div>

      {/* Navigation arrows - responsive position */}
      <motion.div 
        className="absolute left-2 xs:left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button 
          variant="outline" 
          size="icon" 
          onClick={prevSlide}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          data-testid="button-prev-slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Button>
      </motion.div>
      
      <motion.div 
        className="absolute right-2 xs:right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button 
          variant="outline" 
          size="icon" 
          onClick={nextSlide}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          data-testid="button-next-slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </motion.div>

      {/* Slide indicators - responsive position */}
      <div className="absolute bottom-4 xs:bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 xs:w-3 xs:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            data-testid={`slide-indicator-${index}`}
          />
        ))}
      </div>
    </section>
  );
}