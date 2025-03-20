import React from "react";
import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  name?: string;
  title?: string;
  introduction?: string;
  photoUrl?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  onScrollToProjects?: () => void;
  onScrollToContact?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name = "Amit Kumar",
  title = "Software Engineer",
  introduction = "I'm a passionate software engineer with expertise in building scalable web applications. I specialize in React, Node.js, and cloud technologies to create efficient and user-friendly solutions.",
  photoUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  socialLinks = {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:amit@example.com",
  },
  onScrollToProjects = () => console.log("Scroll to projects"),
  onScrollToContact = () => console.log("Scroll to contact"),
}) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4 py-20 md:py-0 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-2">{name}</h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
            {title}
          </h2>
          <p className="text-lg mb-8 max-w-xl">{introduction}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              onClick={onScrollToProjects}
              className="flex items-center gap-2"
            >
              View My Work
              <ArrowDown size={18} />
            </Button>
            <Button size="lg" variant="outline" onClick={onScrollToContact}>
              Contact Me
            </Button>
          </div>

          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter size={24} />
              </a>
            )}
            {socialLinks.email && (
              <a
                href={socialLinks.email}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Email Contact"
              >
                <Mail size={24} />
              </a>
            )}
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary/20">
            <img
              src={photoUrl}
              alt={`${name} - ${title}`}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
