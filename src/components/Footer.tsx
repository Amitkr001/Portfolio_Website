import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Separator } from "./ui/separator";

interface FooterProps {
  name?: string;
  email?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  copyrightYear?: number;
}

const Footer = ({
  name = "Amit Kumar",
  email = "amit.kumar@example.com",
  socialLinks = {
    github: "https://github.com/amitkumar",
    linkedin: "https://linkedin.com/in/amitkumar",
    twitter: "https://twitter.com/amitkumar",
  },
  copyrightYear = new Date().getFullYear(),
}: FooterProps) => {
  return (
    <footer className="w-full bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-slate-300 mt-1">Software Engineer</p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter size={20} />
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="hover:text-blue-400 transition-colors"
                aria-label="Email Contact"
              >
                <Mail size={20} />
              </a>
            )}
          </div>
        </div>

        <Separator className="bg-slate-700 my-4" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>
            &copy; {copyrightYear} {name}. All rights reserved.
          </p>
          <div className="mt-2 md:mt-0">
            <a href="#" className="hover:text-white transition-colors mr-4">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
