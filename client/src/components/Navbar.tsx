import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
// import { useTheme } from "./ThemeProvider";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  // Brown for menu page
  const isMenuPage = location === "/menu";
  // const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    // Mobile view glitch fix: force layout recalculation on mount
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        window.scrollBy(0, 1);
        window.scrollBy(0, -1);
      }, 50);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SPA scroll-to-section logic
  // Helper to scroll after navigation
  // Helper: scroll to section by id after navigation
  function scrollToSection(sectionId: string) {
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 120);
  }

  const [, setLocation] = useLocation();
  const navLinks = [
    { href: "/", label: "Home", onClick: () => { setLocation("/"); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
    {
      href: "/menu",
      label: "Menu",
      onClick: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (location === "/menu") return;
        if (location === "/") {
          scrollToSection("menu");
        } else {
          window.location.href = "/menu";
        }
      },
    },
    {
      href: "/#about",
      label: "About",
      onClick: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (location === "/") {
          scrollToSection("about");
        } else {
          window.location.href = "/#about";
        }
      },
    },
    {
      href: "/#contact",
      label: "Order Lunch",
      onClick: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (location === "/") {
          scrollToSection("contact");
        } else {
          window.location.href = "/#contact";
        }
      },
    },
    {
      href: "/#contact",
      label: "Contact",
      onClick: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (location === "/") {
          scrollToSection("contact");
        } else {
          window.location.href = "/#contact";
        }
      },
    },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isMenuPage
          ? 'bg-[#a0763a] border-b border-[#8a6530]'
          : isScrolled
            ? 'md:bg-white md:border-b md:border-gray-200 md:shadow-lg bg-white border-b border-gray-200 shadow-lg'
            : 'md:bg-transparent md:border-0 bg-white border-b border-gray-200 shadow-lg'}
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
  <nav className="container mx-auto px-3 sm:px-4 lg:px-6 h-16 flex items-center justify-between w-full max-w-7xl min-h-[4rem]">
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0">
          <button
            className="bg-white rounded-full p-1 flex items-center justify-center flex-shrink-0 border-0 outline-none"
            style={{ width: 40, height: 40 }}
            onClick={() => {
              if (location === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                setLocation("/");
              }
            }}
            aria-label="Go to top of homepage"
          >
            <img src={logo} alt="Logo" style={{ width: 32, height: 32 }} className="sm:w-9 sm:h-9" />
          </button>
          <button
            onClick={() => {
              if (location === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                setLocation("/");
              }
            }}
            className="border-0 outline-none bg-transparent p-0 m-0"
            style={{ display: "inline" }}
            data-testid="link-home"
            aria-label="Go to top of homepage"
          >
            <motion.div
              className={`text-lg xs:text-xl sm:text-2xl font-bold font-sans transition-colors truncate ${isScrolled ? 'md:text-black text-black' : 'md:text-white text-black'}`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              NaCl
            </motion.div>
          </button>
        </div>

        {/* Desktop Navigation */}
  <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 w-auto mr-8 lg:mr-12 xl:mr-16">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-testid={`link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              onClick={e => {
                if (link.onClick) {
                  e.preventDefault();
                  link.onClick();
                }
              }}
              className="cursor-pointer"
            >
              <motion.span
                className={`relative font-medium md:font-bold text-sm lg:text-base transition-colors
                  ${isScrolled ? 'md:text-black md:hover:text-primary text-black hover:text-primary' : 'md:text-white md:hover:text-primary text-black hover:text-primary'}
                  ${location === link.href ? 'text-primary font-bold' : ''}
                `}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {link.label}
                {location === link.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeTab"
                  />
                )}
              </motion.span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
            className="bg-white !border !border-gray-200 h-10 w-10 flex-shrink-0"
          >
            {isOpen ? <X className="h-5 w-5 text-black" /> : <Menu className="h-5 w-5 text-black" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="block md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 space-y-3 sm:space-y-4 max-w-7xl">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  onClick={e => {
                    setIsOpen(false);
                    if (link.onClick) {
                      e.preventDefault();
                      link.onClick();
                    }
                  }}
                  className="block cursor-pointer"
                >
                  <motion.div
                    className={`block py-2 text-base sm:text-lg font-bold transition-colors text-black ${location === link.href ? "text-primary font-bold" : ""}`}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {link.label}
                  </motion.div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
