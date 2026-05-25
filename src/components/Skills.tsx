"use client";

import { motion } from "framer-motion";

const skills = [
  // LLM & GenAI Core
  "LangChain", "LlamaIndex", "OpenAI API", "Anthropic Claude", 
  "HuggingFace Transformers", "Prompt Engineering", 
  
  // RAG & Vector Systems
  "RAG Systems", "Pinecone", "ChromaDB", "Vector Databases",
  "Semantic Search", "Embeddings",
  
  // ML & AI Foundations
  "Python", "TensorFlow", "PyTorch", "Fine-tuning LLMs",
  "NLP", "Computer Vision", "MediaPipe",
  
  // Development & Tools
  "FastAPI", "Streamlit", "Git", "Docker",
  "REST APIs", "SQL", "C++"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-brown-dark dark:text-gray-100">My Toolkit</h2>
        <p className="text-brown-medium dark:text-gray-400 mt-4 max-w-2xl mx-auto font-light">
          Technologies and frameworks I use to build GenAI applications, LLM systems, and intelligent automation.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="px-6 py-3 bg-peach dark:bg-[#1A1A1A] text-brown-dark dark:text-gray-200 rounded-full shadow-sm border border-border/30 dark:border-[#333333] hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-colors font-medium cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
