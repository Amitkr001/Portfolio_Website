import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import {
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Send,
  Twitter,
} from "lucide-react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";

interface ContactSectionProps {
  id?: string;
}

const ContactSection = ({ id = "contact" }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      // Reset form after successful submission
      setFormData({ name: "", email: "", message: "" });
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1000);
  };

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      url: "https://github.com/Amitkr001",
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/amitkr001",
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      url: "amitkrr001@gmail.com",
    },
  ];

  return (
    <section id={id} className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="text-primary" />
                <h3 className="text-xl font-semibold">Send Me a Message</h3>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={formStatus !== "idle"}
                  >
                    {formStatus === "idle" ? (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </>
                    ) : formStatus === "success" ? (
                      "Message Sent!"
                    ) : (
                      "Error Sending"
                    )}
                  </Button>

                  {formStatus === "success" && (
                    <p className="text-green-600 text-sm text-center mt-2">
                      Thank you for your message! I'll get back to you soon.
                    </p>
                  )}

                  {formStatus === "error" && (
                    <p className="text-red-600 text-sm text-center mt-2">
                      There was an error sending your message. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="flex flex-col justify-between">
            <Card className="shadow-md mb-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  Feel free to reach out through any of the following channels:
                </p>

                <div className="space-y-3 mt-6">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <a
                      href="mailto:amit@example.com"
                      className="hover:text-primary transition-colors"
                    >
                      amit@example.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                <Separator className="my-4" />

                <div className="flex justify-center gap-6 mt-6">
                  <TooltipProvider>
                    {socialLinks.map((link, index) => (
                      <Tooltip key={index}>
                        <TooltipTrigger asChild>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-slate-100 hover:bg-primary hover:text-white transition-colors dark:bg-slate-800"
                            aria-label={link.label}
                          >
                            {link.icon}
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{link.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </TooltipProvider>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
