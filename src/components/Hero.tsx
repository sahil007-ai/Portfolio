"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-accent shadow-xl">
            <Image
              src="https://avatars.githubusercontent.com/u/175409713?v=4"
              alt="Sahil Somyani"
              width={160}
              height={160}
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
        >
          Building <span className="text-accent">GenAI projects</span>.<br/> Writing about them in <span className="text-accent">plain English</span>.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg md:text-xl text-brown-medium dark:text-gray-300 mb-10 max-w-3xl font-light leading-relaxed"
        >
          I&apos;m Sahil — a third-year AI engineering student in Nagpur learning LLMs, RAG, and agent workflows by shipping small projects with LangChain and LangGraph. I ship, I write about what I break, and I&apos;m looking for my first GenAI internship to go deeper.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-accent hover:bg-accent-hover rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            View GenAI Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a
            href="/Sahil_Somyani_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-brown-dark dark:text-gray-100 bg-surface dark:bg-[#1E1E1E] border border-border dark:border-[#333333] hover:bg-opacity-80 dark:hover:bg-[#2A2A2A] rounded-full transition-all shadow-md hover:-translate-y-0.5"
          >
            Download Resume
            <Download className="ml-2 w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-brown-dark dark:text-gray-100 bg-surface dark:bg-[#1E1E1E] border border-border dark:border-[#333333] hover:bg-opacity-80 dark:hover:bg-[#2A2A2A] rounded-full transition-all shadow-md hover:-translate-y-0.5"
          >
            Let&apos;s Talk AI
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
