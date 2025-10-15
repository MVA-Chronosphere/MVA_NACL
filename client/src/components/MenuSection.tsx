import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";
import menuBg from "@/assets/menu bg image.png";
import menuRightBg from "@/assets/menu-section-bg-right.png";
import menuRightBg2 from "@/assets/menu bg image 2.png";
import menuCorner from "@/assets/menu corner.png";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Star } from "lucide-react";
import carrotImg from "@/assets/carrot.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// todo: remove mock functionality
// Use public folder paths for Netlify hosting
const biryaniImage = "/attached_assets/generated_images/Aromatic_biryani.png";
const paneerMealImage = "/assets/panner butter meal.png";
const vegBiryaniImage = "/assets/veg biriyani sig.jpg";

const menuCategories = [
    {
        items: [
            {
                id: 1,
                name: "Paneer Butter Masala Meal",
                description: "A comforting platter featuring our rich and creamy Paneer Butter Masala, paired with aromatic jeera rice.",
                price: "₹350",
                image: paneerMealImage,
                category: "Signature Meal",
                isSpecialty: true,
                tags: ["Chef's Special"],
                isVegetarian: true,
            },
            {
                id: 2,
                name: "Vegetable Biryani",
                description: "Fragrant basmati rice layered with colorful vegetables, saffron, and traditional herbs, served with raita",
                price: "₹420",
                image: vegBiryaniImage,
                category: "Rice",
                isSpecialty: true,
                tags: ["Chef's Special"],
                isVegetarian: true,
            },
            {
                id: 3,
                name: "Hyderabadi Biryani",
                description: "Fragrant basmati rice layered with succulent meat and aromatic spices",
                price: "₹450",
                image: biryaniImage,
                category: "Rice",
                isSpecialty: true,
                tags: ["Chef's Special"],
                isVegetarian: false,
            },
        ],
    },
];

export default function MenuSection() {
    const carrotRef = useRef<HTMLImageElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!carrotRef.current || !sectionRef.current) return;
        gsap.to(carrotRef.current, {
            y: 100,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });
    }, []);

    const [, setLocation] = useLocation();
    const handleDiscoverMenu = () => {
        setLocation("/menu");
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "auto" });
        }, 10);
    };

    return (
        <section
            id="menu"
            className="relative"
            data-testid="menu-section"
            ref={sectionRef}
        >
            {/* Green Rebel Style Menu Hero Section */}
            <div
                className="relative w-full overflow-hidden"
                style={{ 
                    backgroundColor: "#C4A484",
                    height: "clamp(500px, 80vh, 100vh)",
                    minHeight: "500px"
                }}
            >
                {/* Blended menu background image only on left sandal part */}
                <div className="absolute left-0 top-0 h-full w-full sm:w-2/3 overflow-hidden">
                    <img
                        src={menuBg}
                        alt="Menu Background"
                        className="w-full h-full object-cover"
                        style={{ filter: "brightness(0.45) blur(2px)" }}
                    />
                    {/* Overlay for better readability */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C4A484]/80 via-[#B8956F]/70 to-[#A68660]/80" />
                </div>
                {/* Right side collage: first image (top), second image (bottom) */}
                <div className="absolute right-0 top-0 w-1/3 h-full flex-col overflow-hidden hidden sm:flex">
                    <img
                        src={menuRightBg}
                        alt="Menu Section Right Background Top"
                        className="w-full object-cover"
                        style={{ height: '50%' }}
                    />
                    <img
                        src={menuRightBg2}
                        alt="Menu Section Right Background Bottom"
                        className="w-full object-cover"
                        style={{ height: '50%' }}
                    />
                </div>

                {/* Left Content - Green Rebel Layout */}
                <div className="relative z-20 flex flex-col sm:flex-row items-center h-full w-full">
                    <div className="w-full sm:w-2/3 pl-4 sm:pl-8 lg:pl-16 xl:pl-24 flex items-center justify-center sm:justify-start h-full py-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="max-w-xs sm:max-w-sm md:max-w-md mx-auto p-4 flex flex-col items-center text-center"
                        >
                            <motion.h2
                                className="font-bold text-white mb-4 leading-none tracking-tight drop-shadow-lg"
                                data-testid="menu-title"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                viewport={{ once: true }}
                                style={{ fontSize: 'clamp(1.5rem, 8vw, 4rem)' }}
                            >
                                NaCl MENU
                            </motion.h2>
                            <motion.div
                                className="mb-2"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-white font-medium uppercase tracking-wide drop-shadow text-center" style={{ fontSize: 'clamp(0.75rem, 3vw, 1rem)' }}>
                                    THE CHOICE IS EASY WHEN IT'S REAL FOOD.
                                </p>
                            </motion.div>
                            <motion.div
                                className="mb-4"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.35 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-white font-semibold tracking-wide drop-shadow italic text-center" style={{ fontSize: 'clamp(0.75rem, 3vw, 1rem)' }}>
                                    Eat real. Feel real.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <Button
                                    className="px-4 py-2 sm:px-6 sm:py-3 font-medium border-2 border-white bg-white text-[#7c5a2b] hover:bg-[#7c5a2b] hover:text-white transition-all duration-300 drop-shadow text-sm sm:text-base"
                                    data-testid="button-discover-menu"
                                    onClick={handleDiscoverMenu}
                                >
                                    DISCOVER MENU
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                    {/* Left bottom corner image, brought to front, responsive and smooth */}
                    <img
                        src={menuCorner}
                        alt="Menu Corner"
                        className="absolute left-0 bottom-0 z-30 object-contain pointer-events-none transition-all duration-500"
                        style={{
                            width: 'clamp(80px, 25vw, 280px)',
                            height: 'auto',
                            maxWidth: '280px',
                            minWidth: '80px',
                        }}
                        loading="eager"
                        fetchPriority="high"
                    />
                </div>
            </div>

            {/* Menu Items Section with updated styling */}
                        <div className="relative py-12 xs:py-16 sm:py-20 px-2 xs:px-4 sm:px-6 lg:px-8 bg-background overflow-visible">
                                {/* Left Decorative Image - overlap margin, no visible gap */}
                                <img
                                    src="/assets/generated_images/half flower.png"
                                    alt="Left Decoration"
                                    className="hidden lg:block absolute top-1/2 left-0 -translate-y-1/2 z-30 transition-all duration-300"
                                    style={{
                                        width: 'clamp(40px, 5vw, 70px)',
                                        height: 'auto',
                                        maxWidth: '70px',
                                        minWidth: '32px',
                                        transform: 'translateY(-50%)',
                                        pointerEvents: 'none',
                                    }}
                                />
                                {/* Right Decorative Image - overlap margin, no visible gap */}
                                <img
                                    src="/assets/generated_images/half flower right.png"
                                    alt="Right Decoration"
                                    className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 z-30 transition-all duration-300"
                                    style={{
                                        width: 'clamp(40px, 5vw, 70px)',
                                        height: 'auto',
                                        maxWidth: '70px',
                                        minWidth: '32px',
                                        transform: 'translateY(-50%)',
                                        pointerEvents: 'none',
                                    }}
                                />
                                <div className="max-w-7xl mx-auto lg:px-8 xl:px-12 2xl:px-16">
                    <motion.div
                        className="text-center mb-10 xs:mb-14 sm:mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl xs:text-3xl sm:text-4xl font-poppins font-bold text-foreground mb-4 underline" style={{ textUnderlineOffset: 6 }}>
                            Our Signature Dishes
                        </h3>
                        <p className="text-base xs:text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
                            Every dish crafted with authentic ingredients and traditional cooking
                            methods.
                        </p>
                    </motion.div>

                    {menuCategories[0].items && (
                        <motion.div
                            className="mb-8 xs:mb-10 sm:mb-12"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {menuCategories[0].items.map((item, itemIndex) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        {('image' in item) && ('category' in item) ? (
                                            <Card className="h-full flex flex-col" style={{ background: '#B8956F' }}>
                                                <div className="relative overflow-hidden rounded-t-md" style={{height: '12rem', minHeight: '140px', background: '#B8956F'}}>
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                                                    />
                                                </div>
                                                <CardContent className="flex-1 flex flex-col p-4 xs:p-6">
                                                    <div className="mb-2 xs:mb-3">
                                                        <h3 className="text-lg xs:text-xl font-semibold" style={{ color: '#fff' }}>{item.name}</h3>
                                                    </div>
                                                    <p className="mb-2 xs:mb-3 text-sm xs:text-base" style={{ color: '#fff' }}>{item.description}</p>
                                                    <div className="flex flex-row justify-between items-end mt-auto">
                                                        <Badge 
                                                            variant="secondary" 
                                                            className="text-xs px-2 py-0.5 font-medium rounded inline-flex w-auto min-w-0"
                                                            style={{minWidth: 0, width: 'auto', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '0.5rem', paddingRight: '0.5rem', color: '#fff', background: 'rgba(255,255,255,0.15)'}}
                                                        >
                                                            {item.category}
                                                        </Badge>
                                                        <span className="flex items-center gap-0.5">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" fill="#facc15" />
                                                            ))}
                                                        </span>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ) : null}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    <motion.div
                        className="text-center mt-10 xs:mt-12 sm:mt-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Button
                            size="lg"
                            className="px-8 py-3 text-lg font-inter"
                            data-testid="button-view-full-menu"
                            onClick={handleDiscoverMenu}
                        >
                            View Full Menu
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}