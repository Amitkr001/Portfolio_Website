import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TerminalSection: React.FC = () => {
  const [commands, setCommands] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const initialCommands = [
    "Welcome to Amit Kumar's terminal.",
    "Type 'help' to see available commands.",
  ];

  useEffect(() => {
    setCommands(initialCommands);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      navigateHistory(-1);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      navigateHistory(1);
    }
  };

  const navigateHistory = (direction: number) => {
    if (commandHistory.length === 0) return;

    const newIndex = historyIndex + direction;
    if (newIndex >= -1 && newIndex < commandHistory.length) {
      setHistoryIndex(newIndex);
      if (newIndex === -1) {
        setCurrentCommand("");
      } else {
        setCurrentCommand(commandHistory[newIndex]);
      }
    }
  };

  const handleCommand = () => {
    if (!currentCommand.trim()) return;

    const newCommands = [...commands, `$ ${currentCommand}`];
    const newCommandHistory = [currentCommand, ...commandHistory];

    // Process command
    const cmd = currentCommand.toLowerCase().trim();
    let response: string | string[] =
      "Command not recognized. Type 'help' for available commands.";

    if (cmd === "help") {
      response = [
        "Available commands:",
        "- about: Learn about me",
        "- skills: List my technical skills",
        "- projects: View my projects",
        "- experience: See my work experience",
        "- contact: How to reach me",
        "- resume: Download my resume",
        "- clear: Clear the terminal",
      ];
    } else if (cmd === "about") {
      response = [
        "Amit Kumar - Software Engineer & Problem Solver",
        "Final-year B.Tech student with strong skills in full-stack web and app development,",
        "proficient in JavaScript, React, Node.js, and Kotlin for Android app development.",
        "Proven problem-solving abilities demonstrated through a 1600+ LeetCode rating (500+ questions solved).",
      ];
    } else if (cmd === "skills") {
      response = [
        "Technical Skills:",
        "- Frontend Frameworks: React.js, Tailwind CSS",
        "- Backend Technologies: Node.js, Express.js, MongoDB",
        "- Programming Languages: JavaScript, C++, Kotlin",
        "- Tools: Git, Postman, Android Studio, VS Code",
        "- Competitive Programming: LeetCode (1600+), GeeksforGeeks, CodeChef (3★)",
      ];
    } else if (cmd === "projects") {
      response = [
        "Featured Projects:",
        "- E-Sport Platform: Led full-cycle development of an E-sport platform including design, implementation, and deployment.",
        "- PayMe: Owned PayMe's development, from architecture to deployment. Boosted user satisfaction by 30% and daily active users by 20%.",
        "- Sports News App: Developed a Sports News App in Kotlin with SlidingPanelLayout, implementing a list-detail pattern for tablets.",
      ];
    } else if (cmd === "experience") {
      response = [
        "Work Experience:",
        "- Full Stack Developer - E-Sport Platform Project (2023)",
        "- Full Stack Developer - PayMe Project (2022)",
        "- Android Developer - Sports News App Project (2021)",
      ];
    } else if (cmd === "contact") {
      response = [
        "Contact Information:",
        "- Email: amitkrr001@gmail.com",
        "- Phone: +91 7499373193",
        "- GitHub: github.com/Amitkr001",
        "- LeetCode: leetcode.com/u/amitoo1/",
        "- GeeksforGeeks: auth.geeksforgeeks.org/user/amitkr001",
        "- CodeChef: codechef.com/users/amitkr001",
        "- LinkedIn: linkedin.com/in/amitkr001",
      ];
    } else if (cmd === "resume") {
      response = "Downloading resume...";
      // In a real implementation, this would trigger the resume download
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = "/resume.pdf"; // This should be the actual path to your resume
        link.download = "Amit_Kumar_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 500);
    } else if (cmd === "clear") {
      setCommands(initialCommands);
      setCurrentCommand("");
      setHistoryIndex(-1);
      return;
    }

    // Add response to commands
    if (Array.isArray(response)) {
      setCommands([...newCommands, ...response]);
    } else {
      setCommands([...newCommands, response]);
    }

    setCurrentCommand("");
    setCommandHistory(newCommandHistory);
    setHistoryIndex(-1);
  };

  return (
    <section id="terminal" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Terminal</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Interact with my portfolio through a command-line interface. Type
            'help' to see available commands.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 shadow-xl">
            <div className="flex items-center px-4 py-2 bg-slate-800/80 border-b border-slate-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center text-sm text-gray-400 font-mono">
                amit@portfolio:~
              </div>
            </div>
            <div
              ref={terminalRef}
              className="p-4 h-80 overflow-y-auto font-mono text-sm text-gray-300 bg-black/70"
            >
              {commands.map((cmd, index) => (
                <div key={index} className="mb-1">
                  {cmd.startsWith("$") ? (
                    <div>
                      <span className="text-green-400">amit@portfolio:~</span>
                      <span className="text-white"> {cmd}</span>
                    </div>
                  ) : (
                    <div className="pl-0">{cmd}</div>
                  )}
                </div>
              ))}
              <div className="flex items-center">
                <span className="text-green-400">amit@portfolio:~</span>
                <span className="text-white"> $ </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={currentCommand}
                  onChange={(e) => setCurrentCommand(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-white ml-1"
                  autoFocus
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalSection;
