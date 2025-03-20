import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Button } from "./ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: string;
}

interface ProjectsSectionProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
}

const ProjectsSection = ({
  title = "My Projects",
  subtitle = "Here are some of my recent projects that showcase my skills and experience.",
  projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "https://example.com/ecommerce",
      githubUrl: "https://github.com/amitkumar/ecommerce",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity application for managing tasks, projects, and team collaboration with real-time updates.",
      image:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=600&q=80",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      demoUrl: "https://example.com/taskmanager",
      githubUrl: "https://github.com/amitkumar/taskmanager",
      category: "Web Development",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A weather application that provides current conditions and forecasts using data from multiple weather APIs.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&q=80",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
      demoUrl: "https://example.com/weather",
      githubUrl: "https://github.com/amitkumar/weather",
      category: "API Integration",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with modern web technologies to showcase projects and skills.",
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&q=80",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      demoUrl: "https://example.com/portfolio",
      githubUrl: "https://github.com/amitkumar/portfolio",
      category: "Web Development",
    },
    {
      id: 5,
      title: "Data Visualization Tool",
      description:
        "An interactive dashboard for visualizing complex datasets with customizable charts and filters.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      technologies: ["D3.js", "React", "TypeScript"],
      demoUrl: "https://example.com/datavis",
      githubUrl: "https://github.com/amitkumar/datavis",
      category: "Data Visualization",
    },
    {
      id: 6,
      title: "Mobile Fitness App",
      description:
        "A cross-platform mobile application for tracking workouts, nutrition, and fitness goals.",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
      technologies: ["React Native", "Redux", "Firebase"],
      demoUrl: "https://example.com/fitness",
      githubUrl: "https://github.com/amitkumar/fitness",
      category: "Mobile Development",
    },
  ],
}) => {
  const [filter, setFilter] = useState<string>("All");

  // Extract unique categories from projects
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Filter projects based on selected category
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
              />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
