import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FloatingVegetables from "./FloatingVegetables";

export default function Hero() {
  const scrollToMenu = () => {
    const element = document.querySelector("#menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />
      
      {/* Floating vegetables */}
      <FloatingVegetables density="high" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-poppins font-bold text-foreground leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="hero-title"
          >
            We are not <span className="text-primary">Machines.</span>
            <br />
            We are <span className="text-primary">Real people.</span>
          </motion.h1>

          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-inter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-testid="hero-subtitle"
          >
            Experience authentic Indian cuisine crafted with love, fresh ingredients, and traditional recipes passed down through generations.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg"
              onClick={scrollToMenu}
              className="px-8 py-3 text-lg font-inter"
              data-testid="button-discover-menu"
            >
              Discover Our Menu
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg font-inter bg-background/50 backdrop-blur-sm"
              data-testid="button-order-online"
            >
              Order Online
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}