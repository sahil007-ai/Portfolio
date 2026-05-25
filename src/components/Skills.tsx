"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

interface SkillData {
  name: string;
  description: string;
  status: "expert" | "learning" | "proficient";
  projects: {
    name: string;
    status: "completed" | "in-progress" | "planned";
  }[];
}

const skillsData: SkillData[] = [
  // LLM & GenAI Core (What you know)
  {
    name: "LangChain",
    description: "Framework for building LLM applications with chains, agents, and memory. Used for orchestrating complex AI workflows.",
    status: "proficient",
    projects: [
      { name: "LangGraph Game Generator", status: "in-progress" },
      { name: "Wikipedia Research Assistant", status: "in-progress" },
      { name: "PDF Insight Extractor", status: "planned" }
    ]
  },
  {
    name: "LangGraph",
    description: "State machine framework for building multi-agent systems. Enables complex agent workflows with conditional logic and cycles.",
    status: "proficient",
    projects: [
      { name: "LangGraph Game Generator", status: "in-progress" },
      { name: "Wikipedia Research Assistant", status: "in-progress" },
      { name: "Code Review AI Agent", status: "planned" }
    ]
  },
  {
    name: "Prompt Engineering",
    description: "Crafting effective prompts for LLMs to get optimal outputs. Includes few-shot learning, chain-of-thought, and system prompt design.",
    status: "expert",
    projects: [
      { name: "Plan4U - AI Study Planner", status: "completed" },
      { name: "LangGraph Game Generator", status: "in-progress" }
    ]
  },
  {
    name: "Python",
    description: "Primary language for AI/ML development. Used for backend APIs, data processing, and LLM application development.",
    status: "expert",
    projects: [
      { name: "Wikipedia Research Assistant", status: "in-progress" },
      { name: "LangGraph Game Generator", status: "in-progress" },
      { name: "Focus Guard AI", status: "completed" },
      { name: "Zedge Content Pipeline", status: "completed" }
    ]
  },
  
  // Essential GenAI Skills (Learning)
  {
    name: "OpenAI API",
    description: "Industry-standard API for GPT models. Learning to integrate GPT-4 for production applications with proper error handling.",
    status: "learning",
    projects: [
      { name: "Wikipedia Research Assistant", status: "planned" },
      { name: "PDF Insight Extractor", status: "planned" }
    ]
  },
  {
    name: "RAG Systems",
    description: "Retrieval-Augmented Generation for answering questions using external knowledge. Learning document chunking, embeddings, and retrieval strategies.",
    status: "learning",
    projects: [
      { name: "Wikipedia Research Assistant", status: "planned" },
      { name: "PDF Insight Extractor", status: "planned" }
    ]
  },
  {
    name: "Vector Databases",
    description: "Databases optimized for similarity search using embeddings. Learning Pinecone, ChromaDB for efficient semantic search.",
    status: "learning",
    projects: [
      { name: "Wikipedia Research Assistant", status: "planned" },
      { name: "PDF Insight Extractor", status: "planned" }
    ]
  },
  {
    name: "LlamaIndex",
    description: "Data framework for connecting LLMs with external data sources. Alternative to LangChain for document indexing and retrieval.",
    status: "learning",
    projects: [
      { name: "PDF Insight Extractor", status: "planned" }
    ]
  },
  {
    name: "HuggingFace Transformers",
    description: "Library for working with pre-trained models. Learning model fine-tuning, inference, and deploying custom models.",
    status: "learning",
    projects: []
  },
  
  // Supporting Skills
  {
    name: "Git",
    description: "Version control for code collaboration. Proficient in branching, merging, and GitHub workflows.",
    status: "expert",
    projects: [
      { name: "All Projects", status: "completed" }
    ]
  },
  {
    name: "SQL",
    description: "Database querying for data management. Used for storing application data and user information.",
    status: "proficient",
    projects: [
      { name: "LangGraph Game Generator", status: "in-progress" }
    ]
  },
  {
    name: "C++",
    description: "Systems programming language. Foundation for understanding performance optimization and algorithms.",
    status: "proficient",
    projects: []
  },
  {
    name: "REST APIs",
    description: "Building HTTP APIs for frontend-backend communication. Used with FastAPI for serving AI applications.",
    status: "proficient",
    projects: [
      { name: "Wikipedia Research Assistant", status: "in-progress" },
      { name: "LangGraph Game Generator", status: "in-progress" }
    ]
  }
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<SkillData | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "expert": return "border-green-500 dark:border-green-400";
      case "proficient": return "border-blue-500 dark:border-blue-400";
      case "learning": return "border-yellow-500 dark:border-yellow-400";
      default: return "border-border/30 dark:border-[#333333]";
    }
  };

  const getProjectStatusBadge = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300";
      case "in-progress": return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300";
      case "planned": return "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300";
      default: return "";
    }
  };

  const getProjectStatusText = (status: string) => {
    switch (status) {
      case "completed": return "Completed";
      case "in-progress": return "In Progress";
      case "planned": return "Planned";
      default: return "";
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-brown-dark dark:text-gray-100">My Toolkit</h2>
        <p className="text-brown-medium dark:text-gray-400 mt-4 max-w-2xl mx-auto font-light">
          Technologies and frameworks I use to build GenAI applications, LLM systems, and intelligent automation. Click any skill to see details.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {skillsData.map((skill, index) => (
          <motion.button
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            onClick={() => setSelectedSkill(skill)}
            className={`px-6 py-3 bg-peach dark:bg-[#1A1A1A] text-brown-dark dark:text-gray-200 rounded-full shadow-sm border-2 ${getStatusColor(skill.status)} hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-all font-medium cursor-pointer hover:scale-105 active:scale-95`}
          >
            {skill.name}
          </motion.button>
        ))}
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-8 text-sm text-brown-medium dark:text-gray-400">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500 dark:bg-green-400"></div>
          <span>Expert</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400"></div>
          <span>Proficient</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500 dark:bg-yellow-400"></div>
          <span>Learning</span>
        </div>
      </div>

      {/* Skill Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-2xl z-50 max-h-[80vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white dark:bg-[#1E1E1E] border-b border-border/10 dark:border-[#333333] p-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-brown-dark dark:text-gray-100 mb-2">
                    {selectedSkill.name}
                  </h3>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    selectedSkill.status === "expert" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300" :
                    selectedSkill.status === "proficient" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" :
                    "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300"
                  }`}>
                    {selectedSkill.status === "expert" ? "⭐ Expert" :
                     selectedSkill.status === "proficient" ? "💪 Proficient" :
                     "📚 Learning"}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-[#2A2A2A] rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Description */}
                <p className="text-brown-medium dark:text-gray-300 leading-relaxed mb-6">
                  {selectedSkill.description}
                </p>

                {/* Projects Section */}
                {selectedSkill.projects.length > 0 ? (
                  <div>
                    <h4 className="text-lg font-semibold text-brown-dark dark:text-gray-100 mb-4">
                      {selectedSkill.status === "learning" ? "Will use in:" : "Used in:"}
                    </h4>
                    <div className="space-y-3">
                      {selectedSkill.projects.map((project) => (
                        <div
                          key={project.name}
                          className="flex items-center justify-between p-4 bg-surface dark:bg-[#1A1A1A] rounded-xl border border-border/10 dark:border-[#333333] hover:border-accent dark:hover:border-accent transition-colors"
                        >
                          <span className="font-medium text-brown-dark dark:text-gray-200">
                            {project.name}
                          </span>
                          <span className={`text-xs px-3 py-1 rounded-full ${getProjectStatusBadge(project.status)}`}>
                            {getProjectStatusText(project.status)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                    <p>No projects using this skill yet.</p>
                    <p className="text-sm mt-2">Will be incorporated in upcoming work.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
