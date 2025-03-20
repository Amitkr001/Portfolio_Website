import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Code,
  ExternalLink,
  Github,
  Mail,
  Menu,
  X,
  Download,
  Terminal,
} from "lucide-react";
import { Button } from "./ui/button";
import TerminalSection from "./TerminalSection";

const ModernPortfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Project data
  const projects = [
    {
      id: 1,
      title: " E-Sports Platform",
      description:
        "A competitive gaming platform enabling users to participate in tournaments, view leaderboards, and connect with fellow gamers.",
      tags: ["React", "Node.js", "MongoDB", "Redux"],
      image:
        "./",
      link: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 2,
      title: "AI Content Generator",
      description:
        "An AI-powered application that generates content based on user prompts",
      tags: ["React", "OpenAI API", "TypeScript", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1677442135136-760c813a743d?w=800&q=80",
      link: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 3,
      title: "Real-time Analytics Dashboard",
      description:
        "A dashboard for monitoring real-time data with interactive visualizations",
      tags: ["React", "D3.js", "WebSockets", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      link: "https://github.com",
      demo: "https://example.com",
    },
  ];

  // Skills data
  const skills = [
    {
      name: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      name: "Backend",
      items: [
        "Node.js",
        "Express",
        "GraphQL",
        "REST APIs",
        "MongoDB",
        "PostgreSQL",
      ],
    },
    {
      name: "DevOps",
      items: ["Docker", "AWS", "CI/CD", "Kubernetes", "Terraform"],
    },
    {
      name: "Tools",
      items: ["Git", "Figma", "VS Code", "Postman", "Jest", "Cypress"],
    },
  ];

  // Competitive Programming data
  const competitiveProgramming = [
    {
      platform: "LeetCode",
      username: "amitkumar",
      stats: {
        ranking: "Top 5%",
        problemsSolved: 450,
        contestRating: 1850,
      },
      badges: ["Daily Streak 100+", "Weekly Contest Top 10%"],
      profileUrl: "https://leetcode.com/",
      logo: "https://assets.leetcode.com/static_assets/public/icons/favicon-192x192.png",
    },
    {
      platform: "CodeForces",
      username: "amit_kumar",
      stats: {
        ranking: "Specialist",
        problemsSolved: 320,
        contestRating: 1650,
      },
      badges: ["Div 2 Winner"],
      profileUrl: "https://codeforces.com/",
      logo: "https://codeforces.org/s/0/favicon-192x192.png",
    },
    {
      platform: "CodeChef",
      username: "amit_k",
      stats: {
        ranking: "4 Star",
        problemsSolved: 280,
        contestRating: 1780,
      },
      badges: ["Long Challenge Top 100"],
      profileUrl: "https://www.codechef.com/",
      logo: "https://cdn.codechef.com/sites/default/files/uploads/pictures/811b20a47eac52b10c90ab82e0628e21.png",
    },
  ];

  // Experience data
  const experiences = [
    {
      company: "Tech Innovations Inc.",
      role: "Senior Frontend Developer",
      period: "2021 - Present",
      description:
        "Leading the frontend development team, implementing modern UI/UX designs, and optimizing application performance.",
    },
    {
      company: "Digital Solutions Ltd.",
      role: "Full Stack Developer",
      period: "2018 - 2021",
      description:
        "Developed and maintained full-stack applications using React, Node.js, and MongoDB. Implemented CI/CD pipelines.",
    },
    {
      company: "WebCraft Studios",
      role: "Junior Developer",
      period: "2016 - 2018",
      description:
        "Assisted in developing responsive websites and web applications. Collaborated with designers to implement UI components.",
    },
  ];

  // Custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
    }
  }, [mousePosition]);

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  // Handle scroll events to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "skills",
        "competitive",
        "projects",
        "experience",
        "education",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* Fixed Terminal Button */}
      <motion.div
        className="fixed bottom-8 left-8 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <Button
          onClick={() => {
            const terminalSection = document.getElementById("terminal-popup");
            if (terminalSection) {
              terminalSection.style.display = "flex";
            }
          }}
          size="lg"
          className="rounded-full w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 p-0 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Terminal size={24} />
        </Button>
      </motion.div>

      {/* Terminal Popup (Hidden by default) */}
      <div
        id="terminal-popup"
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 items-center justify-center p-4 hidden"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            const terminalSection = document.getElementById("terminal-popup");
            if (terminalSection) {
              terminalSection.style.display = "none";
            }
          }
        }}
      >
        <div
          className="bg-slate-900/90 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 shadow-xl w-full max-w-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center px-4 py-2 bg-slate-800/80 border-b border-slate-700">
            <div className="flex space-x-2">
              <div
                className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-600 transition-colors"
                onClick={() => {
                  const terminalSection =
                    document.getElementById("terminal-popup");
                  if (terminalSection) {
                    terminalSection.style.display = "none";
                  }
                }}
              ></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center text-sm text-gray-400 font-mono">
              amit@portfolio:~
            </div>
            <button
              onClick={() => {
                const terminalSection =
                  document.getElementById("terminal-popup");
                if (terminalSection) {
                  terminalSection.style.display = "none";
                }
              }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          <div
            className="p-4 h-96 overflow-y-auto font-mono text-sm text-gray-300 bg-black/70"
            id="terminal-content"
          >
            <div className="mb-1">Welcome to Amit Kumar's terminal.</div>
            <div className="mb-1">Type 'help' to see available commands.</div>
            <div className="flex items-center">
              <span className="text-green-400">amit@portfolio:~</span>
              <span className="text-white"> $ </span>
              <input
                type="text"
                id="terminal-input"
                className="flex-1 bg-transparent border-none outline-none text-white ml-1"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const input = document.getElementById(
                      "terminal-input",
                    ) as HTMLInputElement;
                    const content = document.getElementById("terminal-content");
                    if (input && content) {
                      const command = input.value.trim();
                      const commandElement = document.createElement("div");
                      commandElement.className = "mb-1";
                      commandElement.innerHTML = `<span class="text-green-400">amit@portfolio:~</span><span class="text-white"> $ ${command}</span>`;
                      content.insertBefore(commandElement, input.parentElement);

                      // Process command
                      let response = "";
                      if (command === "help") {
                        response =
                          "Available commands:\n- about: Learn about me\n- skills: List my technical skills\n- projects: View my projects\n- experience: See my work experience\n- education: View my education\n- contact: How to reach me\n- resume: Download my resume\n- clear: Clear the terminal\n- exit: Close the terminal";
                      } else if (command === "about") {
                        response =
                          "Amit Kumar - Software Engineer & Problem Solver\nI build exceptional digital experiences with modern technologies.\nSpecializing in creating scalable, user-friendly applications that solve real-world problems.";
                      } else if (command === "skills") {
                        response =
                          "Technical Skills:\n- Frontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion\n- Backend: Node.js, Express, GraphQL, REST APIs, MongoDB, PostgreSQL\n- DevOps: Docker, AWS, CI/CD, Kubernetes, Terraform\n- Tools: Git, Figma, VS Code, Postman, Jest, Cypress";
                      } else if (command === "projects") {
                        response =
                          "Featured Projects:\n- E-Commerce Platform: A full-stack e-commerce solution with React, Node.js, and MongoDB\n- AI Content Generator: An AI-powered application that generates content based on user prompts\n- Real-time Analytics Dashboard: A dashboard for monitoring real-time data with interactive visualizations";
                      } else if (command === "experience") {
                        response =
                          "Work Experience:\n- Senior Frontend Developer at Tech Innovations Inc. (2021 - Present)\n- Full Stack Developer at Digital Solutions Ltd. (2018 - 2021)\n- Junior Developer at WebCraft Studios (2016 - 2018)";
                      } else if (command === "education") {
                        response =
                          "Education:\n- Master of Computer Science, Stanford University (2018 - 2020)\n- Bachelor of Science in Computer Engineering, MIT (2014 - 2018)\n- Various Professional Certifications (2018 - Present)";
                      } else if (command === "contact") {
                        response =
                          "Contact Information:\n- Email: contact@amitkumar.dev\n- GitHub: github.com/amitkumar";
                      } else if (command === "resume") {
                        response = "Downloading resume...";
                        setTimeout(() => {
                          const link = document.createElement("a");
                          link.href = "/resume.pdf";
                          link.download = "Amit_Kumar_Resume.pdf";
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }, 500);
                      } else if (command === "clear") {
                        while (content.firstChild) {
                          if (content.lastChild === input.parentElement) {
                            break;
                          }
                          content.removeChild(content.firstChild);
                        }
                        const welcomeElement = document.createElement("div");
                        welcomeElement.className = "mb-1";
                        welcomeElement.textContent =
                          "Welcome to Amit Kumar's terminal.";
                        const helpElement = document.createElement("div");
                        helpElement.className = "mb-1";
                        helpElement.textContent =
                          "Type 'help' to see available commands.";
                        content.insertBefore(helpElement, input.parentElement);
                        content.insertBefore(welcomeElement, helpElement);
                        input.value = "";
                        return;
                      } else if (command === "exit") {
                        const terminalSection =
                          document.getElementById("terminal-popup");
                        if (terminalSection) {
                          terminalSection.style.display = "none";
                        }
                        return;
                      } else if (command !== "") {
                        response = `Command not recognized: ${command}\nType 'help' for available commands`;
                      }

                      if (response) {
                        const lines = response.split("\n");
                        lines.forEach((line) => {
                          const responseElement = document.createElement("div");
                          responseElement.className = "mb-1";
                          responseElement.textContent = line;
                          content.insertBefore(
                            responseElement,
                            input.parentElement,
                          );
                        });
                      }

                      input.value = "";
                      content.scrollTop = content.scrollHeight;
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
          >
            Amit Kumar
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              "hero",
              "skills",
              "competitive",
              "projects",
              "experience",
              "education",
              "contact",
            ].map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm uppercase tracking-wider ${activeSection === section ? "text-primary" : "text-gray-400"} hover:text-primary transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section === "hero"
                  ? "Home"
                  : section === "competitive"
                    ? "Coding"
                    : section === "education"
                      ? "Education"
                      : section}
              </motion.button>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:block"
          >
            <Button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "Amit_Kumar_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </Button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/resume.pdf";
                  link.download = "Amit_Kumar_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
              >
                <Download size={16} />
              </Button>
            </motion.div>
            <motion.button
              className="text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-30 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-6 items-center">
              {[
                "hero",
                "skills",
                "competitive",
                "projects",
                "experience",
                "education",
                "contact",
              ].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-2xl uppercase ${activeSection === section ? "text-primary" : "text-gray-400"}`}
                  whileHover={{ scale: 1.1, color: "#3B82F6" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section === "hero"
                    ? "Home"
                    : section === "competitive"
                      ? "Coding"
                      : section === "education"
                        ? "Education"
                        : section}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent"></div>
        <div className="container mx-auto px-4 z-10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="block">Hi, I'm</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  Amit Kumar
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
                Software Engineer & Problem Solver
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                I build exceptional digital experiences with modern
                technologies. Specializing in creating scalable, user-friendly
                applications that solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3"
                >
                  View My Work
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:text-white px-8 py-3"
                >
                  Contact Me
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[500px]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-500/20 filter blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -translate-x-20 w-64 h-64 rounded-full bg-purple-500/20 filter blur-3xl"></div>

                {/* Code snippets floating */}
                <motion.div
                  className="absolute top-[20%] right-[10%] p-4 bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-700 shadow-xl w-64"
                  animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="text-xs text-blue-400 font-mono">
                    <code>{`function Developer() {
  return (
    <Passionate
      skills={[
        "React",
        "Node.js",
        "TypeScript"
      ]}
    />
  );
}`}</code>
                  </pre>
                </motion.div>

                <motion.div
                  className="absolute bottom-[20%] left-[10%] p-4 bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-700 shadow-xl w-56"
                  animate={{ y: [0, 15, 0], rotate: [0, -2, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="text-xs text-green-400 font-mono">
                    <code>{`// Problem solver
const solveProblems = (
  problem,
  coffee = true
) => {
  return solution;
};`}</code>
                  </pre>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center"
          >
            <p className="text-gray-400 mb-2 text-sm">Scroll to explore</p>
            <ArrowRight className="text-primary h-5 w-5 rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work, showcasing my skills and expertise
              in building modern web applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-800 group hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-slate-800 text-blue-400 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-400 hover:text-primary transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-400 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => window.open("https://github.com", "_blank")}
              variant="outline"
              className="border-gray-700 text-gray-300 hover:text-white"
            >
              View All Projects <Github className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical Skills
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My expertise spans across various technologies and tools, allowing
              me to build complete, scalable solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">
                  {category.name}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Programming Section */}
      <section id="competitive" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Competitive Programming
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My journey in algorithmic problem-solving across various
              competitive coding platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {competitiveProgramming.map((platform, index) => (
              <motion.div
                key={platform.platform}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-800 hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={platform.logo}
                      alt={platform.platform}
                      className="w-10 h-10 mr-3 rounded-md"
                    />
                    <h3 className="text-xl font-bold text-white">
                      {platform.platform}
                    </h3>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-400 mb-1">
                      Username:{" "}
                      <span className="text-primary">{platform.username}</span>
                    </p>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-slate-800/80 p-3 rounded-lg text-center">
                        <p className="text-xs text-gray-400">Ranking</p>
                        <p className="text-lg font-semibold text-white">
                          {platform.stats.ranking}
                        </p>
                      </div>
                      <div className="bg-slate-800/80 p-3 rounded-lg text-center">
                        <p className="text-xs text-gray-400">Problems</p>
                        <p className="text-lg font-semibold text-white">
                          {platform.stats.problemsSolved}
                        </p>
                      </div>
                      <div className="bg-slate-800/80 p-3 rounded-lg text-center">
                        <p className="text-xs text-gray-400">Rating</p>
                        <p className="text-lg font-semibold text-white">
                          {platform.stats.contestRating}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Achievements:</p>
                    <div className="flex flex-wrap gap-2">
                      {platform.badges.map((badge) => (
                        <span
                          key={badge}
                          className="text-xs bg-slate-800 text-blue-400 px-2 py-1 rounded-full"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={platform.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:text-blue-400 transition-colors"
                  >
                    <span>View Profile</span>
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              I regularly participate in coding contests and continuously
              improve my problem-solving skills. My focus areas include dynamic
              programming, graph algorithms, and data structures.
            </p>
            <Button
              onClick={() => window.open("https://leetcode.com/", "_blank")}
              variant="outline"
              className="border-gray-700 text-gray-300 hover:text-white"
            >
              <Code className="mr-2 h-4 w-4" /> View Latest Solutions
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work Experience
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My professional journey and the companies I've had the privilege
              to work with.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-12 relative pl-8 border-l-2 border-slate-800 last:mb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-black"></div>
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800 hover:border-primary/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-primary">{exp.company}</span>
                    <span className="text-gray-500 text-sm">{exp.period}</span>
                  </div>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My academic background and continuous learning journey.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12 relative pl-8 border-l-2 border-slate-800"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-black"></div>
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white">
                  Master of Computer Science
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-primary">Stanford University</span>
                  <span className="text-gray-500 text-sm">2018 - 2020</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Specialized in Artificial Intelligence and Machine Learning
                  with a focus on Natural Language Processing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-slate-800 text-blue-400 px-2 py-1 rounded-full">
                    GPA: 3.9/4.0
                  </span>
                  <span className="text-xs bg-slate-800 text-blue-400 px-2 py-1 rounded-full">
                    Dean's List
                  </span>
                  <span className="text-xs bg-slate-800 text-blue-400 px-2 py-1 rounded-full">
                    Research Assistant
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12 relative pl-8 border-l-2 border-slate-800 last:mb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-black"></div>
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white">
                  Bachelor of Science in Computer Engineering
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-primary">
                    Massachusetts Institute of Technology
                  </span>
                  <span className="text-gray-500 text-sm">2014 - 2018</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Graduated with honors. Completed coursework in Data
                  Structures, Algorithms, Computer Architecture, and Software
                  Engineering.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-slate-800 text-blue-400 px-2 py-1 rounded-full">
                    GPA: 3.8/4.0
                  </span>
                  <span className="text-xs bg-slate-800 text-blue-400 px-2 py-1 rounded-full">
                    Cum Laude
                  </span>
                  <span className="text-xs bg-slate-800 text-blue-400 px-2 py-1 rounded-full">
                    Hackathon Winner
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative pl-8 border-l-2 border-slate-800 last:mb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-black"></div>
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white">
                  Certifications & Continuous Learning
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-primary">Various Platforms</span>
                  <span className="text-gray-500 text-sm">2018 - Present</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Continuously expanding my knowledge through professional
                  certifications and online courses.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-slate-800 text-blue-400 px-2 py-1 rounded-full">
                    AWS Certified Solutions Architect
                  </span>
                  <span className="text-xs bg-slate-800 text-blue-400 px-2 py-1 rounded-full">
                    Google Cloud Professional
                  </span>
                  <span className="text-xs bg-slate-800 text-blue-400 px-2 py-1 rounded-full">
                    TensorFlow Developer
                  </span>
                  <span className="text-xs bg-slate-800 text-blue-400 px-2 py-1 rounded-full">
                    React Advanced Patterns
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Interested in working together? Feel free to reach out for
              collaborations or just a friendly hello.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-800"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">
                Send Me a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-400 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-400 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="What is this regarding?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col justify-between"
            >
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-800 mb-6">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="text-primary mt-1 mr-4" />
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a
                        href="mailto:amitkrr001@gmail.com"
                        className="text-white hover:text-primary transition-colors"
                      >
                       amitkrr001@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Github className="text-primary mt-1 mr-4" />
                    <div>
                      <p className="text-sm text-gray-400">GitHub</p>
                      <a
                        href="https://github.com/Amitkr001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary transition-colors"
                      >
                        https://github.com/Amitkr001
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-800">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Let's Connect
                </h3>
                <p className="text-gray-400 mb-6">
                  Follow me on social media or check out my work on other
                  platforms.
                </p>
                <div className="flex space-x-4">
                  {/* Social media icons */}
                  <a
                    href="https://www.linkedin.com/in/amitkr001"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Amit Kumar. All rights
                reserved.
              </p>
            </div>
            <div>
              <Button
                onClick={() => scrollToSection("hero")}
                variant="ghost"
                className="text-gray-400 hover:text-white"
              >
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Global styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          cursor: none;
        }
        a,
        button {
          cursor: none;
        }
        .bg-gradient-radial {
          background-image: radial-gradient(var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default ModernPortfolio;
