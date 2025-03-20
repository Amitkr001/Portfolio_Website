import React from "react";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface ExperienceSectionProps {
  experiences?: ExperienceItem[];
  title?: string;
}

const ExperienceSection = ({
  experiences = [
    {
      id: "1",
      company: "Tech Innovations Inc.",
      position: "Senior Software Engineer",
      duration: "Jan 2020 - Present",
      location: "San Francisco, CA",
      description: "Leading development of cloud-based enterprise solutions.",
      achievements: [
        "Architected and implemented a microservices infrastructure that improved system reliability by 40%",
        "Led a team of 5 developers to deliver critical features on time and under budget",
        "Reduced API response times by 60% through optimization of database queries",
      ],
      technologies: ["React", "Node.js", "AWS", "MongoDB", "Docker"],
    },
    {
      id: "2",
      company: "Digital Solutions Ltd.",
      position: "Full Stack Developer",
      duration: "Mar 2017 - Dec 2019",
      location: "Boston, MA",
      description:
        "Developed and maintained web applications for financial services clients.",
      achievements: [
        "Built responsive web applications serving 50,000+ daily users",
        "Implemented CI/CD pipeline reducing deployment time by 75%",
        "Collaborated with UX team to improve user satisfaction scores by 35%",
      ],
      technologies: [
        "JavaScript",
        "TypeScript",
        "Angular",
        "Express",
        "PostgreSQL",
      ],
    },
    {
      id: "3",
      company: "StartUp Ventures",
      position: "Junior Developer",
      duration: "Jun 2015 - Feb 2017",
      location: "New York, NY",
      description:
        "Contributed to the development of a SaaS platform for small businesses.",
      achievements: [
        "Developed key features for the company's flagship product",
        "Participated in agile development process with bi-weekly sprints",
        "Reduced bug count by 30% through implementation of comprehensive test suite",
      ],
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Git"],
    },
  ],
  title = "Professional Experience",
}: ExperienceSectionProps) => {
  return (
    <section id="experience" className="py-20 bg-slate-50 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
          {title}
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-slate-200"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white z-10"></div>

                {/* Content */}
                <div className="md:w-1/2 ml-6 md:ml-0 md:px-8 relative">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <h3 className="text-xl font-bold text-slate-900">
                        {exp.position}
                      </h3>
                      <span className="text-sm font-medium text-slate-500">
                        {exp.duration}
                      </span>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-primary">
                        {exp.company}
                      </h4>
                      <p className="text-sm text-slate-500">{exp.location}</p>
                    </div>

                    <p className="mb-4 text-slate-700">{exp.description}</p>

                    <div className="mb-4">
                      <h5 className="text-sm font-semibold mb-2 text-slate-900">
                        Key Achievements:
                      </h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="bg-slate-100"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            Want to know more about my professional journey?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-md shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
