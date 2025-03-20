import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Code, Layers, Rocket, Terminal, X } from "lucide-react";
import Navbar from "./Navbar";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const InteractivePortfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);
  const [terminalText, setTerminalText] = useState<string>("");
  const [cursorPosition, setCursorPosition] = useState<number>(0);
  const terminalRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: "intro", icon: <Terminal size={24} />, label: "Terminal" },
    { id: "skills", icon: <Code size={24} />, label: "Skills" },
    { id: "projects", icon: <Layers size={24} />, label: "Projects" },
    { id: "experience", icon: <Rocket size={24} />, label: "Experience" },
    { id: "contact", icon: <ArrowRight size={24} />, label: "Contact" },
  ];

  const introText = `
> Hello, I'm Amit Kumar
> Software Engineer specializing in modern web technologies

> Type 'help' to see available commands
> Or click on the navigation icons to explore
`;

  const helpText = `
Available commands:
  - skills     : View my technical skills
  - projects   : Browse my portfolio projects
  - experience : Check my work experience
  - contact    : Get in touch with me
  - clear      : Clear the terminal
  - about      : Learn more about me
`;

  const aboutText = `
About Me:
  I'm a passionate software engineer with expertise in building
  scalable web applications. I specialize in React, Node.js,
  and cloud technologies to create efficient and user-friendly solutions.

  When I'm not coding, you can find me exploring new technologies,
  contributing to open-source projects, or hiking in nature.
`;

  useEffect(() => {
    if (activeSection === "intro" && !terminalText) {
      typeText(introText);
    }
  }, [activeSection]);

  const typeText = (text: string) => {
    setTerminalText("");
    setCursorPosition(0);

    const typing = setInterval(() => {
      setCursorPosition((prev) => {
        if (prev >= text.length) {
          clearInterval(typing);
          return prev;
        }
        setTerminalText(text.substring(0, prev + 1));
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(typing);
  };

  const handleTerminalCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const command = e.currentTarget.value.trim().toLowerCase();
      e.currentTarget.value = "";

      const newText = `${terminalText}\n> ${command}\n`;
      setTerminalText(newText);

      switch (command) {
        case "help":
          setTerminalText(newText + helpText);
          break;
        case "skills":
          setActiveSection("skills");
          setTerminalOpen(false);
          break;
        case "projects":
          setActiveSection("projects");
          setTerminalOpen(false);
          break;
        case "experience":
          setActiveSection("experience");
          setTerminalOpen(false);
          break;
        case "contact":
          setActiveSection("contact");
          setTerminalOpen(false);
          break;
        case "clear":
          setTerminalText("");
          break;
        case "about":
          setTerminalText(newText + aboutText);
          break;
        default:
          setTerminalText(
            newText +
              `\nCommand not found: ${command}\nType 'help' to see available commands\n`,
          );
      }

      // Scroll to bottom of terminal
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-slate-900/90 backdrop-blur-sm rounded-full p-2 shadow-glow">
          <div className="flex items-center space-x-2">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  if (section.id === "intro") {
                    setTerminalOpen(true);
                  } else {
                    setTerminalOpen(false);
                  }
                }}
                className={`p-3 rounded-full transition-all ${activeSection === section.id ? "bg-primary text-white" : "bg-slate-800 text-slate-400 hover:bg-slate-700"}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.icon}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {terminalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-3xl bg-slate-900 rounded-lg shadow-glow overflow-hidden"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="flex items-center justify-between bg-slate-800 px-4 py-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm font-mono text-slate-400">
                  amit@portfolio ~{" "}
                </div>
                <button
                  onClick={() => setTerminalOpen(false)}
                  className="text-slate-400 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              <div
                ref={terminalRef}
                className="p-4 h-96 overflow-y-auto font-mono text-green-400 bg-slate-950"
              >
                <div className="whitespace-pre-wrap">{terminalText}</div>
                <div className="flex items-center mt-2">
                  <span className="text-green-500 mr-2">$</span>
                  <input
                    type="text"
                    className="flex-1 bg-transparent border-none outline-none text-green-400"
                    autoFocus
                    onKeyDown={handleTerminalCommand}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        <AnimatePresence mode="wait">
          {activeSection === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <SkillsSection />
            </motion.div>
          )}

          {activeSection === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectsSection />
            </motion.div>
          )}

          {activeSection === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ExperienceSection />
            </motion.div>
          )}

          {activeSection === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ContactSection />
            </motion.div>
          )}

          {activeSection === "intro" && !terminalOpen && (
            <motion.div
              className="min-h-[80vh] flex flex-col items-center justify-center text-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Amit Kumar
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-8">
                Software Engineer & Problem Solver
              </p>
              <Button
                size="lg"
                onClick={() => setTerminalOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                Open Terminal
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />

      <style jsx global>{`
        .shadow-glow {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </div>
  );
};

export default InteractivePortfolio;
