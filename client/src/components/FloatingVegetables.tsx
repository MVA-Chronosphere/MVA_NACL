import { motion } from "framer-motion";
import carrotImg from "@assets/generated_images/Fresh_organic_carrot_cutout_fe467e7e.png";
import lettuceImg from "@assets/generated_images/Fresh_lettuce_leaf_cutout_79047acc.png";
import tomatoImg from "@assets/generated_images/Fresh_cherry_tomato_cutout_0abb79ec.png";
import pepperImg from "@assets/generated_images/Fresh_red_pepper_cutout_ef99f255.png";
import basilImg from "@assets/generated_images/Fresh_basil_leaves_cutout_97e8a232.png";
import eggplantImg from "@assets/generated_images/Fresh_purple_eggplant_cutout_0a92ad17.png";

const vegetableImages = [
  { src: carrotImg, alt: "Fresh Carrot" },
  { src: lettuceImg, alt: "Fresh Lettuce" },
  { src: tomatoImg, alt: "Fresh Tomato" },
  { src: pepperImg, alt: "Fresh Pepper" },
  { src: basilImg, alt: "Fresh Basil" },
  { src: eggplantImg, alt: "Fresh Eggplant" },
];

interface FloatingVegetablesProps {
  density?: "low" | "medium" | "high";
  className?: string;
}

export default function FloatingVegetables({ density = "medium", className = "" }: FloatingVegetablesProps) {
  const getVegetableCount = () => {
    switch (density) {
      case "low": return 3;
      case "medium": return 6;
      case "high": return 9;
      default: return 6;
    }
  };

  const generateRandomVegetables = () => {
    const count = getVegetableCount();
    return Array.from({ length: count }, (_, index) => {
      const randomVeg = vegetableImages[Math.floor(Math.random() * vegetableImages.length)];
      const size = Math.random() * 40 + 30; // 30-70px
      const left = Math.random() * 90 + 5; // 5-95%
      const top = Math.random() * 80 + 10; // 10-90%
      const duration = Math.random() * 10 + 15; // 15-25s
      const delay = Math.random() * 5; // 0-5s delay

      return {
        id: index,
        ...randomVeg,
        size,
        left,
        top,
        duration,
        delay,
      };
    });
  };

  const vegetables = generateRandomVegetables();

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} data-testid="floating-vegetables">
      {vegetables.map((veg) => (
        <motion.img
          key={veg.id}
          src={veg.src}
          alt={veg.alt}
          className="absolute opacity-60 select-none"
          style={{
            width: `${veg.size}px`,
            height: `${veg.size}px`,
            left: `${veg.left}%`,
            top: `${veg.top}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            rotate: [-2, 2, -2],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: veg.duration,
            delay: veg.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          data-testid={`floating-vegetable-${veg.id}`}
        />
      ))}
    </div>
  );
}