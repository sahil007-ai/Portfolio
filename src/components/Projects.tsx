"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star, ChevronDown, Loader2, Sparkles } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const genAIProjects = [
  {
    name: "LangGraph Game Generator",
    description: "Interactive web application where users describe a game idea and LangGraph agents generate playable mini-games (Tic-Tac-Toe, Snake, Memory Match). Features multi-agent orchestration for game logic generation, theme customization, and difficulty scaling. Includes public game library showcasing community creations with creator attribution. Built with LangGraph for agent workflows, FastAPI backend, and Next.js frontend.",
    tech: ["LangGraph", "LangChain", "Python", "FastAPI", "Next.js", "Multi-Agent Systems"],
    link: "#",
    demo: "",
    stars: 0,
    status: "In Development"
  },
  {
    name: "Wikipedia Research Assistant",
    description: "RAG-powered research tool that answers complex questions by retrieving and synthesizing information from Wikipedia articles. Implements semantic search with vector embeddings, context-aware response generation, and citation tracking. Uses LangChain for orchestration, vector database for efficient retrieval, and streaming responses for real-time user feedback.",
    tech: ["LangChain", "RAG", "Vector Databases", "OpenAI API", "Semantic Search"],
    link: "#",
    demo: "",
    stars: 0,
    status: "Planned"
  },
  {
    name: "PDF Insight Extractor",
    description: "Upload any PDF and ask questions about its content. Uses advanced RAG architecture with document chunking, embedding generation, and conversational memory. Handles complex multi-page documents, maintains context across questions, and provides page-specific citations. Built with LangChain document loaders and vector store integration.",
    tech: ["LangChain", "RAG", "OpenAI API", "Vector Databases", "Document Processing"],
    link: "#",
    demo: "",
    stars: 0,
    status: "Planned"
  },
  {
    name: "Code Review AI Agent",
    description: "Intelligent code reviewer that analyzes code submissions for bugs, security vulnerabilities, and best practices. Uses LangGraph for multi-step analysis workflow: syntax checking → logic review → security audit → suggestions generation. Provides actionable feedback with line-specific comments and refactoring recommendations.",
    tech: ["LangGraph", "LangChain", "Python", "Code Analysis", "Multi-Agent Systems"],
    link: "#",
    demo: "",
    stars: 0,
    status: "Planned"
  }
];

const vibeCodedProjects = [
  {
    name: "Plan4U - AI Study Planner",
    description: "A gamified AI-powered course planner that uses local LLM inference (Ollama) to analyze academic syllabi and generate personalized study schedules. Implements privacy-first AI architecture where all processing happens on-device using open-source models. Features intelligent prompt engineering to extract course metadata and deadlines from unstructured text.",
    tech: ["JavaScript", "Ollama", "Local LLM", "Prompt Engineering", "Privacy-First AI"],
    link: "https://github.com/sahil007-ai/raisoni",
    demo: "",
    stars: 0
  },
  {
    name: "Focus Guard AI",
    description: "AI-powered Pomodoro timer that uses computer vision to detect user attention during productivity sessions. Implements continuous focus monitoring to verify actual engagement—solving the core problem traditional timers can't address. Built with Python and real-time processing to track attention drift and pause automatically when focus is lost.",
    tech: ["Python", "Computer Vision", "Real-time Processing"],
    link: "https://github.com/sahil007-ai/cv-focus-guard-ai-pomodoro",
    demo: "",
    stars: 0
  },
  {
    name: "Zedge Content Pipeline",
    description: "Automated content generation system for creating quote wallpapers at scale. Uses programmatic image generation with Python to transform text inputs into formatted visuals. Demonstrates understanding of batch processing, automation architecture, and content pipelines — core skills for GenAI workflows where you need to process thousands of prompts efficiently.",
    tech: ["Python", "PIL/Pillow", "Automation", "Batch Processing"],
    link: "https://github.com/sahil007-ai/zedge_automation_project",
    demo: "",
    stars: 1
  },
  {
    name: "Image Compression Pipeline",
    description: "Intelligent image optimization tool that automatically compresses images while maintaining quality thresholds. Implements adaptive compression algorithms to hit target file sizes. Built with production considerations: handles edge cases, batch operations, and format compatibility. Relevant for GenAI systems that need to optimize data pipelines and manage storage for training datasets.",
    tech: ["Python", "Pillow", "Image Processing", "Optimization"],
    link: "https://github.com/sahil007-ai/Image_compressor",
    demo: "",
    stars: 1
  }
];

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const [readmes, setReadmes] = useState<Record<string, { content: string; repoString: string } | null>>({});
  const [errorStates, setErrorStates] = useState<Record<string, boolean>>({});

  const toggleExpand = async (id: string, repoLink: string) => {
    if (expandedIndex === id) {
      setExpandedIndex(null);
      return;
    }

    setExpandedIndex(id);

    if (readmes[id] !== undefined || errorStates[id] || repoLink === "#") return;

    const match = repoLink.match(/github\.com\/([^/]+\/[^/]+)/);
    if (!match) {
      setErrorStates((prev) => ({ ...prev, [id]: true }));
      return;
    }

    const repoString = match[1].replace(/\/$/, "");
    
    setLoading((prev) => ({ ...prev, [id]: true }));
    try {
      const res = await fetch(`https://api.github.com/repos/${repoString}/readme`);
      if (!res.ok) throw new Error("Failed to fetch README");

      const data = await res.json();
      const content = decodeURIComponent(
        atob(data.content)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );

      setReadmes((prev) => ({ ...prev, [id]: { content, repoString } }));
    } catch (err) {
      console.error(err);
      setErrorStates((prev) => ({ ...prev, [id]: true }));
    } finally {
      setLoading((prev) => ({ ...prev, [id]: false }));
    }
  };

  const renderProjectCard = (project: any, index: number, sectionPrefix: string) => {
    const projectId = `${sectionPrefix}-${index}`;
    const isExpanded = expandedIndex === projectId;
    const isLoading = loading[projectId];
    const hasError = errorStates[projectId];
    const readmeData = readmes[projectId];

    return (
      <motion.div
        layout
        key={projectId}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`bg-white dark:bg-[#1A1A1A] rounded-2xl border border-border/10 dark:border-[#333333] shadow-sm hover:shadow-md transition-shadow flex flex-col h-full overflow-hidden ${
          isExpanded ? "md:col-span-2" : ""
        }`}
      >
        <div 
          className="p-6 cursor-pointer flex flex-col h-full"
          onClick={() => toggleExpand(projectId, project.link)}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-brown-dark dark:text-gray-100">{project.name}</h3>
              {project.status && (
                <span className={`text-xs px-2 py-1 rounded-full ${
                  project.status === "In Development" 
                    ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300"
                    : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                }`}>
                  {project.status}
                </span>
              )}
            </div>
            <div className="flex gap-3 items-center" onClick={(e) => e.stopPropagation()}>
              {project.stars > 0 && (
                <span className="flex items-center text-sm text-brown-medium dark:text-gray-400">
                  <Star className="w-4 h-4 mr-1 text-yellow-500" /> {project.stars}
                </span>
              )}
              {project.link !== "#" && (
                <>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-brown-medium dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-brown-medium dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
          
          <p className="text-brown-medium dark:text-gray-300 font-light mb-auto leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-6 justify-between items-center">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech: string) => (
                <span key={tech} className="text-xs font-medium px-2.5 py-1 bg-peach/50 dark:bg-[#2A2A2A] text-accent rounded-md">
                  {tech}
                </span>
              ))}
            </div>
            {project.link !== "#" && (
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </motion.div>
            )}
          </div>
        </div>

        {/* Accordion Content */}
        <AnimatePresence>
          {isExpanded && project.link !== "#" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="border-t border-border/10 dark:border-[#333333]"
            >
              <div className="px-6 py-4 bg-gray-50 dark:bg-[#151515] max-h-[500px] overflow-y-auto custom-scrollbar">
                {isLoading ? (
                  <div className="flex justify-center items-center py-8">
                    <Loader2 className="w-6 h-6 animate-spin text-accent" />
                    <span className="ml-2 text-sm text-gray-500">Loading README...</span>
                  </div>
                ) : hasError || !readmeData ? (
                  <div className="py-8 text-center text-gray-500 text-sm">
                    <p>README not available at the moment.</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline mt-2 inline-block">
                      View directly on GitHub
                    </a>
                  </div>
                ) : (
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                      components={{
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        img: ({ node, ...props }) => {
                          let finalSrc = props.src;
                          if (props.src && !props.src.startsWith("http") && !props.src.startsWith("data:")) {
                            const cleanPath = props.src.replace(/^(\.\/|\/)/, '');
                            finalSrc = `https://raw.githubusercontent.com/${readmeData.repoString}/main/${cleanPath}`;
                          }
                          return (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img 
                              {...props}
                              src={finalSrc} 
                              className="max-w-full rounded-md inline-block my-2"
                              alt=""
                            />
                          );
                        }
                      }}
                    >
                      {readmeData.content}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* GenAI Projects Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-accent" />
            <h2 className="text-3xl font-bold text-brown-dark dark:text-gray-100">GenAI Projects</h2>
          </div>
          <p className="text-brown-medium dark:text-gray-400 mt-4 max-w-2xl mx-auto font-light">
            Production-ready LLM applications showcasing LangChain, LangGraph, RAG systems, and multi-agent orchestration. Built from scratch with deep understanding of GenAI architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {genAIProjects.map((project, index) => renderProjectCard(project, index, "genai"))}
        </div>
      </div>

      {/* Vibe-Coded Projects Section */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brown-dark dark:text-gray-100">Vibe-Coded Projects</h2>
          <p className="text-brown-medium dark:text-gray-400 mt-4 max-w-2xl mx-auto font-light">
            Experimental projects built rapidly using AI coding assistants. These showcase problem-solving ability and product thinking, demonstrating how I leverage AI tools to prototype ideas quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vibeCodedProjects.map((project, index) => renderProjectCard(project, index, "vibe"))}
        </div>
      </div>
    </section>
  );
}
