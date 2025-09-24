import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CarrotHero from "./FloatingVegetables";

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
    <section id="menu" className="relative" data-testid="menu-section">
      {/* Green Rebel Style Menu Hero Section */}
      <div className="relative h-screen bg-amber-100 overflow-hidden">
        {/* Background with exact Green Rebel beige color */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-amber-50 to-orange-50" />
        
        {/* Left Content - Exact Green Rebel Layout */}
        <div className="relative z-10 flex items-center h-full">
          <div className="w-1/2 pl-16 lg:pl-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl lg:text-7xl font-bold text-gray-800 mb-8 leading-tight" data-testid="menu-title">
                NACL MENU
              </h2>
              
              <div className="space-y-4 mb-12">
                <p className="text-xl lg:text-2xl text-gray-700 font-medium uppercase tracking-wide">
                  THE CHOICE IS EASY WHEN IT'S REAL FOOD.
                </p>
                <p className="text-xl lg:text-2xl text-gray-700 font-medium uppercase tracking-wide">
                  EAT REAL. FEEL REAL.
                </p>
              </div>

              <Button 
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-medium border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300"
                data-testid="button-discover-menu"
              >
                DISCOVER MENU
              </Button>
            </motion.div>
          </div>

          {/* Right Side - Carrot Image positioned exactly like Green Rebel */}
          <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center">
            <CarrotHero className="scale-150" />
          </div>
        </div>
      </div>

      {/* Menu Items Section with updated styling */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl sm:text-4xl font-poppins font-bold text-foreground mb-4">
              Our Signature Dishes
            </h3>
            <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
              Every dish crafted with authentic ingredients and traditional cooking methods.
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
      </div>
    </section>
  );
}