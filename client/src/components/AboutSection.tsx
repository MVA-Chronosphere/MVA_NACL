import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Leaf, Award } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish is crafted with passion and authentic family recipes passed down through generations."
  },
  {
    icon: Users,
    title: "Real People",
    description: "We are not machines. Our team of experienced chefs brings genuine care to every meal."
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "We source the finest local ingredients, ensuring freshness and supporting our community."
  },
  {
    icon: Award,
    title: "Authentic Taste",
    description: "Traditional cooking methods and original spice blends create the authentic flavors you crave."
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8" data-testid="about-section">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-foreground mb-6" data-testid="about-title">
            You are what you <span className="text-primary">eat.</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground font-inter leading-relaxed">
              Once upon a time, our founders had a dream to bring authentic Indian flavors to Burhanpur. 
              Just like the renowned Green Rebel that served real food from fresh local ingredients, 
              NACL Restaurant is committed to serving wholesome, authentic food.
            </p>
            <p className="text-lg text-muted-foreground font-inter leading-relaxed">
              We believe that real food comes from real people who care about what they serve. 
              Every ingredient is carefully selected, every recipe is time-tested, and every dish 
              is prepared with the love and attention it deserves.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center hover-elevate active-elevate-2 transition-all duration-300" data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="p-8">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-poppins font-semibold text-primary mb-4">
              Don't eat less. Just eat real.
            </h3>
            <p className="text-muted-foreground font-inter text-lg">
              Join us in celebrating authentic flavors, traditional cooking, and the joy of sharing real food with real people.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}