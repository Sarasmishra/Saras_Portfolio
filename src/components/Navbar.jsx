import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


import { fadeUp } from "@/animations/fade";
import { scaleHover } from "@/animations/hover";
import navItems from "../data/navItems";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navItems.map((item) => {
        const hash = item.href.split("#")[1];
        return document.getElementById(hash);
      });
      
      sections.forEach((section) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Brand */}
        <a
          href="/#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Saras</span> Portfolio
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={item.href}
              whileHover="hover"
              {...scaleHover}
              className={cn(
                "relative text-sm font-medium transition-colors",
                activeSection === item.href
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
              )}
            >
              {item.name}
              {activeSection === item.href && (
                <motion.span
                  layoutId="activeLink"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden"
            >
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col space-y-8 text-xl"
              >
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "transition-colors",
                      activeSection === item.href
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
