import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import restaurantImg1 from "@assets/stock_images/elegant_restaurant_d_9bffdc1d.jpg";
import restaurantImg2 from "@assets/stock_images/elegant_restaurant_d_e1ec0064.jpg";
import kitchenImg1 from "@assets/stock_images/professional_restaur_91d562f0.jpg";

export default function Hero() {
  const scrollToMenu = () => {
    const element = document.querySelector("#menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Banner Carousel */}
      <section className="relative h-screen overflow-hidden" data-testid="hero-banner">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img 
            src={restaurantImg1} 
            alt="NACL Restaurant Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.h1 
              className="text-5xl sm:text-7xl lg:text-8xl font-poppins font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              data-testid="hero-title"
            >
              We are not <span className="text-orange-400">Machines.</span>
              <br />
              We are <span className="text-orange-400">Real people.</span>
            </motion.h1>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Button 
                size="lg"
                onClick={scrollToMenu}
                className="px-10 py-4 text-lg font-inter bg-white text-black hover:bg-gray-100"
                data-testid="button-order-catering"
              >
                ORDER CATERING ONLINE
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Navigation arrows like Green Rebel */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20">
          <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Button>
        </div>
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
          <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </section>

      {/* Additional Hero Images */}
      <section className="relative h-screen overflow-hidden" data-testid="hero-banner-2">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img 
            src={kitchenImg1} 
            alt="NACL Restaurant Kitchen" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-4xl sm:text-6xl font-poppins font-bold mb-6">
              The choice is easy when it's <span className="text-orange-400">Real Food.</span>
            </h2>
            <Button 
              size="lg"
              onClick={scrollToMenu}
              className="px-10 py-4 text-lg font-inter bg-white text-black hover:bg-gray-100 mt-8"
            >
              ORDER CATERING ONLINE
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}