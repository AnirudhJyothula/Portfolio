
import React, { useEffect } from "react";
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import PortfolioHero from "@/components/PortfolioHero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SplashCursor } from "@/components/ui/splash-cursor";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        const offset = 80;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SplashCursor />
      <Navbar />
      <main>
        <section id="hero">
          <PortfolioHero />
        </section>
        <About />
        <Projects />
        <Resume />
        
        {/* Collaboration CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-blue-500/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Want to see more projects or collaborate on something amazing?
              </h3>
              <Button asChild className="rounded-full px-8 py-3 text-lg">
                <a href="#contact">
                  Let's Work Together
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
