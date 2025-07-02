
import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">{personalInfo.name}</h3>
              <p className="text-muted-foreground">
                {personalInfo.role} passionate about creating amazing web experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
                <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
                <a href="#resume" className="block text-muted-foreground hover:text-primary transition-colors">
                  Resume
                </a>
                <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-muted-foreground">{personalInfo.email}</p>
                <p className="text-muted-foreground">{personalInfo.location}</p>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://github.com/AnirudhJyothula" target="_blank" rel="noopener noreferrer">
                      <Github size={18} />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://www.linkedin.com/in/anirudh-jyothula/" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={18} />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="mailto:anirudh.j1998@gmail.com">
                      <Mail size={18} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm">
                © {currentYear} {personalInfo.name}. All rights reserved.
              </p>
              {/* <p className="flex items-center gap-1 text-muted-foreground text-sm">
                Made with <Heart size={14} className="text-red-500" /> using React & TypeScript
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
