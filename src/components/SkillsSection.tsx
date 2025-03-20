import React from "react";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface SkillProps {
  name: string;
  proficiency: number;
  category: string;
  description?: string;
}

interface SkillsSectionProps {
  title?: string;
  description?: string;
  skills?: SkillProps[];
}

const SkillBar = ({ name, proficiency, description = "" }: SkillProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="mb-4 w-full">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{name}</span>
              <span className="text-sm text-gray-500">{proficiency}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-primary h-2.5 rounded-full"
                style={{ width: `${proficiency}%` }}
              ></div>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs">
            {description || `${name} - ${proficiency}% proficiency`}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const SkillsSection = ({
  title = "Skills & Expertise",
  description = "Here are some of the technologies and tools I specialize in:",
  skills = [
    {
      name: "JavaScript",
      proficiency: 90,
      category: "Languages",
      description: "Expert in modern JavaScript including ES6+ features",
    },
    {
      name: "TypeScript",
      proficiency: 85,
      category: "Languages",
      description:
        "Strong typing skills with TypeScript for scalable applications",
    },
    {
      name: "React",
      proficiency: 92,
      category: "Frameworks",
      description:
        "Advanced React development with hooks, context, and state management",
    },
    {
      name: "Node.js",
      proficiency: 80,
      category: "Frameworks",
      description: "Building robust backend services with Node.js",
    },
    {
      name: "HTML/CSS",
      proficiency: 95,
      category: "Languages",
      description: "Semantic HTML and modern CSS including Flexbox and Grid",
    },
    {
      name: "Tailwind CSS",
      proficiency: 88,
      category: "Frameworks",
      description: "Rapid UI development with Tailwind utility classes",
    },
    {
      name: "Git",
      proficiency: 85,
      category: "Tools",
      description: "Version control and collaborative development with Git",
    },
    {
      name: "Docker",
      proficiency: 75,
      category: "Tools",
      description: "Containerization for consistent development and deployment",
    },
    {
      name: "AWS",
      proficiency: 70,
      category: "Tools",
      description: "Cloud infrastructure and deployment with AWS services",
    },
    {
      name: "GraphQL",
      proficiency: 78,
      category: "Languages",
      description: "API development with GraphQL for efficient data fetching",
    },
    {
      name: "MongoDB",
      proficiency: 82,
      category: "Tools",
      description: "NoSQL database design and optimization",
    },
    {
      name: "PostgreSQL",
      proficiency: 75,
      category: "Tools",
      description: "Relational database management and query optimization",
    },
  ],
}: SkillsSectionProps) => {
  // Group skills by category
  const skillsByCategory: Record<string, SkillProps[]> = {};

  skills.forEach((skill) => {
    if (!skillsByCategory[skill.category]) {
      skillsByCategory[skill.category] = [];
    }
    skillsByCategory[skill.category].push(skill);
  });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skillsByCategory).map(
            ([category, categorySkills]) => (
              <div
                key={category}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                  {category}
                </h3>
                <div className="space-y-2">
                  {categorySkills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      proficiency={skill.proficiency}
                      category={skill.category}
                      description={skill.description}
                    />
                  ))}
                </div>
              </div>
            ),
          )}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Redux",
              "Next.js",
              "Express",
              "Jest",
              "Cypress",
              "Webpack",
              "Sass",
              "Firebase",
              "Figma",
              "CI/CD",
            ].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-sm py-1 px-3"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
