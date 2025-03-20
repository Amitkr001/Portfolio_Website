import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

const ThreeDimensionalSkills: React.FC = () => {
  const [skills] = useState<Skill[]>([
    { name: "React", level: 90, category: "Frontend", color: "#61DAFB" },
    { name: "TypeScript", level: 85, category: "Languages", color: "#3178C6" },
    { name: "Node.js", level: 80, category: "Backend", color: "#339933" },
    { name: "GraphQL", level: 75, category: "API", color: "#E10098" },
    { name: "AWS", level: 70, category: "Cloud", color: "#FF9900" },
    { name: "Docker", level: 65, category: "DevOps", color: "#2496ED" },
    { name: "MongoDB", level: 75, category: "Database", color: "#47A248" },
    { name: "Redux", level: 80, category: "Frontend", color: "#764ABC" },
    { name: "Next.js", level: 85, category: "Frontend", color: "#000000" },
    { name: "Tailwind", level: 90, category: "Frontend", color: "#06B6D4" },
    { name: "Jest", level: 70, category: "Testing", color: "#C21325" },
    { name: "Git", level: 85, category: "Tools", color: "#F05032" },
  ]);

  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 25;
      const y = (window.innerHeight / 2 - e.clientY) / 25;
      setRotationX(y);
      setRotationY(x);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-hidden">
      <h2 className="text-4xl font-bold mb-16 text-white text-center">
        Technical Expertise
      </h2>

      <div className="relative w-full max-w-3xl h-[500px] perspective-1000">
        <motion.div
          className="w-full h-full relative transform-style-3d"
          style={{
            rotateX: rotationX,
            rotateY: rotationY,
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateX: rotationX,
            rotateY: rotationY,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * Math.PI * 2;
            const radius = 200;
            const x = Math.sin(angle) * radius;
            const z = Math.cos(angle) * radius;
            const y = Math.sin(index * 0.5) * 50;

            return (
              <motion.div
                key={skill.name}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                style={{
                  x,
                  y,
                  z,
                  transformStyle: "preserve-3d",
                }}
                whileHover={{ scale: 1.2, z: z + 50 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 ${hoveredSkill === skill.name ? "scale-125" : ""}`}
                  style={{
                    backgroundColor: skill.color,
                    boxShadow: `0 0 20px ${skill.color}80`,
                  }}
                >
                  <span className="text-xs">{skill.name}</span>
                </div>
                {hoveredSkill === skill.name && (
                  <div
                    className="absolute top-24 bg-slate-900 text-white p-2 rounded whitespace-nowrap z-10"
                    style={{ transform: "translateZ(50px)" }}
                  >
                    <p className="font-bold">{skill.name}</p>
                    <div className="w-full bg-slate-700 h-2 rounded-full mt-1">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: skill.color,
                        }}
                      ></div>
                    </div>
                    <p className="text-xs mt-1">
                      {skill.category} • {skill.level}%
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}

          {/* Center sphere */}
          <div
            className="absolute left-1/2 top-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)",
            }}
          ></div>
        </motion.div>
      </div>

      <p className="text-slate-400 mt-16 text-center max-w-md">
        Move your mouse to rotate the skill sphere. Hover over skills for
        details.
      </p>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default ThreeDimensionalSkills;
