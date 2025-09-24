import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import restaurantImg1 from "@assets/stock_images/elegant_restaurant_d_9bffdc1d.jpg";
import restaurantImg2 from "@assets/stock_images/elegant_restaurant_d_e1ec0064.jpg";
import kitchenImg1 from "@assets/stock_images/professional_restaur_91d562f0.jpg";

const heroSlides = [
  {
    image: restaurantImg1,
    title: "We are not Machines.",
    subtitle: "We are Real people.",
    alt: "NACL Restaurant Interior"
  },
  {
    image: kitchenImg1,
    title: "The choice is easy when it's Real Food.",
    subtitle: "",
    alt: "NACL Restaurant Kitchen"
  },
  {
    image: restaurantImg2,
    title: "You are what you eat.",
    subtitle: "",
    alt: "NACL Restaurant Dining"
  },
  {
    image: kitchenImg1,
    title: "Don't eat less. Just eat real.",
    subtitle: "",
    alt: "NACL Restaurant Kitchen"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToMenu = () => {
    const element = document.querySelector("#menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden" data-testid="hero-banner">
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
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center text-white max-w-4xl"
          key={currentSlide}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl sm:text-7xl lg:text-8xl font-poppins font-bold mb-6"
            data-testid="hero-title"
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

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              size="lg"
              onClick={scrollToMenu}
              className="px-10 py-4 text-lg font-inter bg-white text-black hover:bg-gray-100 transition-all duration-300"
              data-testid="button-order-catering"
            >
              ORDER CATERING ONLINE
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation arrows like Green Rebel - functional */}
      <motion.div 
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20"
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
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20"
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

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            data-testid={`slide-indicator-${index}`}
          />
        ))}
      </div>
    </section>
  );
}