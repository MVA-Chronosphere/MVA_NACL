import { motion } from "framer-motion";
import carrotBunchImg from "@assets/image_1758690036616.png";

interface CarrotHeroProps {
  className?: string;
}

export default function CarrotHero({ className = "" }: CarrotHeroProps) {
  return (
    <motion.div 
      className={`absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none ${className}`}
      initial={{ opacity: 0, x: 50, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      data-testid="carrot-hero"
    >
      <motion.img
        src={carrotBunchImg}
        alt="Fresh Carrots with Green Tops"
        className="h-96 w-auto object-contain select-none"
        animate={{
          y: [-3, 3, -3],
          rotate: [-0.5, 0.5, -0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.15))",
        }}
      />
    </motion.div>
  );
}