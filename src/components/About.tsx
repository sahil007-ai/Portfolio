"use client";

import { motion } from "framer-motion";
import { MapPin, Code2 } from "lucide-react";

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
            Hello! I&apos;m Sahil, a Data Science and AI Engineering enthusiast currently pursuing my B.Tech in Artificial Intelligence at 
            <span className="font-medium text-brown-dark dark:text-gray-100"> J D College of Engineering &amp; Management</span> (CGPA: 8.5).
          </p>
          <p>
            My journey into tech is driven by a passion for predictive modeling and actionable analytics. 
            I have a strong foundation in <strong className="text-brown-dark dark:text-gray-100">C++</strong> and <strong className="text-brown-dark dark:text-gray-100">Python</strong>,
            with specialized skills in Machine Learning, Deep Learning, and NLP. I thrive on translating complex datasets into strategic insights and communicative solutions.
          </p>
          <div className="pt-4 flex items-center text-accent font-medium">
            <MapPin className="w-5 h-5 mr-2" />
            Nagpur, Maharashtra, India
          </div>
        </div>
      </motion.div>
    </section>
  );
}
