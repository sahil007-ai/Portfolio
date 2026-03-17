"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    name: "Plan4U",
    description: "A full-stack gamified study planner with local AI integration using Ollama for analyzing syllabi and tasks.",
    tech: ["JavaScript", "HTML", "CSS", "AI/Ollama"],
    link: "https://github.com/sahil007-ai/raisoni",
    demo: "",
    stars: 0
  },
  {
    name: "Zedge Automation",
    description: "A Python bot designed to automatically generate black screen wallpapers with quotes for the Zedge platform.",
    tech: ["Python", "Automation"],
    link: "https://github.com/sahil007-ai/zedge_automation_project",
    demo: "",
    stars: 1
  },
  {
    name: "Image Compressor",
    description: "Bulk image compressor script for JPEG and PNG images to optimize and target specific file sizes efficiently.",
    tech: ["Python", "Pillow"],
    link: "https://github.com/sahil007-ai/Image_compressor",
    demo: "",
    stars: 1
  },
  {
    name: "Focus Guard AI",
    description: "AI-powered Pomodoro timer with focus detection using MediaPipe to keep you productive.",
    tech: ["Python", "MediaPipe", "Computer Vision"],
    link: "https://github.com/sahil007-ai/cv-focus-guard-ai-pomodoro",
    demo: "",
    stars: 0
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-brown-dark dark:text-gray-100">Featured Projects</h2>
        <p className="text-brown-medium dark:text-gray-400 mt-4 max-w-2xl mx-auto font-light">
          A selection of my recent work focusing on AI automation, web development, and productivity tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 border border-border/10 dark:border-[#333333] shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-brown-dark dark:text-gray-100">{project.name}</h3>
              <div className="flex gap-3">
                {project.stars > 0 && (
                  <span className="flex items-center text-sm text-brown-medium dark:text-gray-400">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" /> {project.stars}
                  </span>
                )}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-brown-medium dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-brown-medium dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-brown-medium dark:text-gray-300 font-light mb-auto leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((tech) => (
                <span key={tech} className="text-xs font-medium px-2.5 py-1 bg-peach/50 dark:bg-[#2A2A2A] text-accent rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
