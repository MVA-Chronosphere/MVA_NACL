import { motion } from "framer-motion";
import carrotBunchImg from "@assets/image_1758690036616.png";

interface CarrotHeroProps {
  className?: string;
}

export default function CarrotHero({ className = "" }: CarrotHeroProps) {
  return (
    <motion.div 
      className={`pointer-events-none ${className}`}
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
      data-testid="carrot-hero"
    >
      <motion.img
        src={carrotBunchImg}
        alt="Fresh Carrots with Green Tops"
        className="h-[600px] w-auto object-contain select-none"
        animate={{
          y: [-8, 8, -8],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.2))",
        }}
      />
    </motion.div>
  );
}