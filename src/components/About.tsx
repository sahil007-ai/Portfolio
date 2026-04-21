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
            I&apos;m a 3rd-year AI engineering student focused on building intelligent systems. I believe that the most powerful machine learning model in the world requires clean architecture and practical applications to truly make an impact.
          </p>
          <p>
            When I&apos;m not training models, I&apos;m hosting workshops, anchoring stages, and apparently solving algorithmic problems with my monitor turned off. Make of that what you will.
          </p>
          <p className="pt-2 font-medium">
            Based in Nagpur. Working globally. Always thinking about the next problem worth solving.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
