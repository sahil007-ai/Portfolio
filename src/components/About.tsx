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
            I&apos;m a third-year AI engineering student at JDCOEM, Nagpur, focused on large language models and agent-based systems. I&apos;m currently going deep on LangChain and LangGraph — building small projects, breaking them, and writing about what I learn along the way.
          </p>
          <p>
            I picked up technical writing alongside engineering because I noticed something simple: the systems that actually get adopted are the ones whose architecture, value, and usage can be explained clearly. So I practice both — shipping the system and explaining it.
          </p>
          <p>
            Outside of LLM projects, I host workshops for juniors at my college, mentor peers on AI tooling, and occasionally compete in coding events (including one I won with my monitor turned off).
          </p>
          <p className="pt-2 font-medium">
            Based in Nagpur. Looking for my first GenAI internship. Always chewing on the next AI problem worth learning from.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
