"use client"

import { useState } from "react";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";
import { TypingText } from "@/components/ui/typing-text";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { AnimatedModal, ModalHeader, ModalTitle, ModalContent } from "@/components/ui/animated-modal";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsContactModalOpen(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution built with Next.js and Stripe integration",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern design and smooth animations",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-40">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-xl">
            <GradientText>JD</GradientText>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <GradientText className="block">
              John Doe
            </GradientText>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-8">
            <TypingText 
              text={[
                "Full Stack Developer",
                "React Enthusiast", 
                "Problem Solver",
                "Code Craftsman"
              ]}
              speed={100}
              delay={2000}
            />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Passionate about creating beautiful, functional web applications that solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setIsContactModalOpen(true)}
              className="px-8 py-3"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button variant="outline" className="px-8 py-3">
              <Github className="mr-2 h-4 w-4" />
              View GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <GradientText>About Me</GradientText>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-lg text-muted-foreground mb-6">
                <TypingText 
                  text="Hello! I'm a passionate full-stack developer with 5+ years of experience building web applications."
                  speed={30}
                  cursor={false}
                />
              </div>
              <p className="text-muted-foreground mb-6">
                I love turning complex problems into simple, beautiful solutions. My expertise spans across modern web technologies including React, Next.js, Node.js, and various databases.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">Frontend</h3>
                <p className="text-sm text-muted-foreground">React, Next.js, TypeScript, Tailwind CSS</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">Backend</h3>
                <p className="text-sm text-muted-foreground">Node.js, Python, PostgreSQL, MongoDB</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">Tools</h3>
                <p className="text-sm text-muted-foreground">Git, Docker, AWS, Vercel</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">Design</h3>
                <p className="text-sm text-muted-foreground">Figma, UI/UX, Responsive Design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <GradientText>Featured Projects</GradientText>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-3 w-3" />
                  View Project
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 John Doe. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>

      {/* Contact Modal */}
      <AnimatedModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)}>
        <ModalHeader>
          <ModalTitle>Get In Touch</ModalTitle>
        </ModalHeader>
        <ModalContent>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">
                Send Message
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsContactModalOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </form>
        </ModalContent>
      </AnimatedModal>
    </div>
  );
}
>>>>>>> 7d9959f4 (Integrate shadcn/ui components for enhanced typography, theming, and interactions in Next.js portfolio site)
