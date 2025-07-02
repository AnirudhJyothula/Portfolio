
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="#hero" 
          className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
        >
          Anirudh
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-4"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        {/* Cancel Button */}
        <div className="absolute top-4 right-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={closeMenu}
            className="text-foreground hover:text-primary"
          >
            <X size={24} />
          </Button>
        </div>
        
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
