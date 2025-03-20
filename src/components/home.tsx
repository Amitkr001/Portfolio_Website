import React, { useRef } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const Home: React.FC = () => {
  // Create refs for each section for smooth scrolling
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Scroll to section functions
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <HeroSection
          onScrollToProjects={() => scrollToSection(projectsRef)}
          onScrollToContact={() => scrollToSection(contactRef)}
        />

        <div ref={skillsRef}>
          <SkillsSection />
        </div>

        <div ref={projectsRef}>
          <ProjectsSection />
        </div>

        <div ref={experienceRef}>
          <ExperienceSection />
        </div>

        <div ref={contactRef}>
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
