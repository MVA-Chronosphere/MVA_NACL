import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FloatingVegetables from "./FloatingVegetables";

// todo: remove mock functionality
const menuCategories = [
  {
    name: "Signature Dishes",
    items: [
      {
        name: "NACL Special Biryani",
        description: "Aromatic basmati rice with tender lamb, fragrant spices, and garnished with fresh herbs",
        price: "₹450",
        tags: ["Signature", "Spicy"],
        isVegetarian: false
      },
      {
        name: "Paneer Butter Masala",
        description: "Rich and creamy tomato-based curry with soft paneer cubes and aromatic spices",
        price: "₹320",
        tags: ["Popular", "Creamy"],
        isVegetarian: true
      },
      {
        name: "Tandoori Chicken",
        description: "Perfectly marinated chicken grilled in our traditional tandoor oven",
        price: "₹380",
        tags: ["Grilled", "Smoky"],
        isVegetarian: false
      }
    ]
  },
  {
    name: "Fresh Salads",
    items: [
      {
        name: "Garden Fresh Salad",
        description: "Mixed greens, cherry tomatoes, cucumber, and bell peppers with mint chutney",
        price: "₹180",
        tags: ["Fresh", "Healthy"],
        isVegetarian: true
      },
      {
        name: "Sprouted Moong Salad",
        description: "Nutritious sprouted moong beans with fresh vegetables and tangy dressing",
        price: "₹160",
        tags: ["Protein Rich", "Light"],
        isVegetarian: true
      }
    ]
  }
];

export default function MenuSection() {
  return (
    <section id="menu" className="relative py-20 px-4 sm:px-6 lg:px-8" data-testid="menu-section">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/5" />
      <FloatingVegetables density="low" className="opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-foreground mb-4" data-testid="menu-title">
            The choice is easy when it's <span className="text-primary">Real Food.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Eat real. Feel real. Every dish crafted with authentic ingredients and traditional cooking methods.
          </p>
        </motion.div>

        <div className="space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-poppins font-semibold text-primary mb-8 text-center">
                {category.name}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover-elevate active-elevate-2 transition-all duration-300" data-testid={`menu-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <CardHeader>
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <CardTitle className="font-poppins text-lg text-foreground">
                              {item.name}
                            </CardTitle>
                            <CardDescription className="font-inter text-muted-foreground mt-2">
                              {item.description}
                            </CardDescription>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="text-xl font-poppins font-semibold text-primary">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.isVegetarian && (
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              Vegetarian
                            </Badge>
                          )}
                          {item.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="font-inter">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button 
                          className="w-full" 
                          variant="outline"
                          data-testid={`button-add-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          Add to Order
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="px-8 py-3 text-lg font-inter" data-testid="button-view-full-menu">
            View Full Menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
}