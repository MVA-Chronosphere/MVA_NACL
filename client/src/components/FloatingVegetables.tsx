import { motion } from "framer-motion";
import carrotBunchImg from "@assets/image_1758690036616.png";

interface CarrotHeroProps {
  className?: string;
}

export default function CarrotHero({ className = "" }: CarrotHeroProps) {
  return (
    <motion.div 
      className={`pointer-events-none absolute ${className}`}
      initial={{ opacity: 0, x: 100, scale: 0.8, rotate: -10 }}
      animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
      transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
      data-testid="carrot-hero"
      style={{
        right: "15%",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10
      }}
    >
      <motion.img
        src={carrotBunchImg}
        alt="Fresh Carrots with Green Tops"
        className="h-[500px] lg:h-[600px] w-auto object-contain select-none"
        animate={{
          y: [-12, 12, -12],
          rotate: [-2, 2, -2],
          scale: [0.98, 1.02, 0.98],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.25))",
        }}
      />
      
      {/* Additional floating shadow effect */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          y: [-8, 8, -8],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          background: "radial-gradient(ellipse 60% 20% at 50% 90%, rgba(0,0,0,0.3) 0%, transparent 70%)",
          filter: "blur(10px)",
        }}
      />
    </motion.div>
  );
}