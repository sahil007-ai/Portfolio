"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-surface dark:bg-[#1E1E1E] rounded-3xl p-8 md:p-12 shadow-sm border border-border/20 dark:border-[#333333]"
      >
        <h2 className="text-3xl font-bold mb-6 text-brown-dark dark:text-gray-100 flex items-center gap-3">
          <Code2 className="text-accent" />
          About Me
        </h2>
        
        <div className="space-y-6 text-lg text-brown-medium dark:text-gray-300 leading-relaxed font-light">
          <p>
            I&apos;m a final-year AI engineering student specializing in large language models and generative AI. While most engineers are still learning prompt engineering, I&apos;ve been building production-ready LLM applications with RAG architectures, fine-tuning pipelines, and multi-agent orchestration.
          </p>
          <p>
            I chose to master technical writing alongside engineering — not as a backup, but because I realised that the most sophisticated AI system is worthless if engineers can&apos;t understand the architecture, stakeholders can&apos;t grasp the value, and users can&apos;t figure out how to use it.
          </p>
          <p>
            When I&apos;m not training models or architecting LLM systems, I&apos;m teaching others how to build them. I&apos;ve hosted technical workshops, mentored peers on AI engineering, and apparently can solve algorithmic problems with my monitor turned off (blind coding competition winner).
          </p>
          <p className="pt-2 font-medium">
            Based in Nagpur. Building GenAI solutions. Always thinking about the next AI problem worth solving.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
