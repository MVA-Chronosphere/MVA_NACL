import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import NotFound from "@/pages/not-found";
import { Navigation } from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import BanquetHallCarousel from "@/components/BanquetHallCarousel";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MenuPage from "@/pages/MenuPage";

function HomePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
  <Navigation />
      <main className="w-full">
        <Hero />
        <MenuSection />
  <AboutSection />
  {/* Banquet Hall Carousel Section */}
  <BanquetHallCarousel />
  <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/menu" component={MenuPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <div className="font-sans antialiased w-full overflow-x-hidden">
            <Router />
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
