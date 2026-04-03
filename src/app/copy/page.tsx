"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function CopywritingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-surface dark:bg-[#121212]">
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-accent/10 text-accent ring-1 ring-inset ring-accent/20"
          >
            Freelance Copywriter
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-brown-dark dark:text-gray-100 leading-tight"
          >
            Copy Written By Someone Who <span className="text-accent">Actually Gets Tech</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg md:text-2xl text-brown-medium dark:text-gray-300 mb-12 font-light leading-relaxed max-w-3xl"
          >
            I&apos;m Sahil — an AI engineer turned copywriter. I write for service businesses, SaaS brands, and anyone whose writer keeps getting the product wrong. Clear, human, conversion-focused copy. No jargon. No fluff. Just words that work.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#my-work"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-accent hover:bg-accent-hover rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              See My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="mailto:sahilsomyani007@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brown-dark dark:text-gray-100 bg-white dark:bg-[#1E1E1E] border border-border dark:border-[#333333] hover:bg-gray-50 dark:hover:bg-[#2A2A2A] rounded-full transition-all shadow-md hover:-translate-y-0.5"
            >
              Let&apos;s Talk
              <Mail className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* The Angle */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-[#1A1A1A] rounded-3xl p-8 md:p-16 shadow-lg border border-border/10 dark:border-[#333333]"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brown-dark dark:text-gray-100 text-center">
            Why hire an engineer to write your copy?
          </h2>
          <div className="space-y-6 text-xl text-brown-medium dark:text-gray-300 font-light leading-relaxed">
            <p>Most copywriters are great with words and fuzzy on your product.</p>
            <p>Most engineers understand your product but can&apos;t write for humans.</p>
            <p className="font-medium text-brown-dark dark:text-white">
              I&apos;ve spent years in both rooms. I know what your customer needs to hear — and I know enough about how you built it to say it accurately.
            </p>
            <p>That&apos;s a combination most businesses never find in one person.</p>
          </div>
        </motion.div>
      </section>

      {/* What I Write */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface dark:bg-[#151515]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-brown-dark dark:text-gray-100">
            What I Write
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Note: I couldn't fetch the real services from your Notion, so these are placeholders. Replace them with the actual services from your Notion! */}
            {[
              {
                title: "Landing Pages",
                desc: "Homepages that hold attention and drive action. Clear value propositions without the corporate waffle."
              },
              {
                title: "Email Sequences",
                desc: "Onboarding, nurture, and sales sequences that people actually want to read (and reply to)."
              },
              {
                title: "Website Copy",
                desc: "About pages, service pages, and case studies that build trust and position you as the definitive choice."
              }
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white dark:bg-[#1E1E1E] border border-border/10 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-4 text-brown-dark dark:text-white">{service.title}</h3>
                <p className="text-brown-medium dark:text-gray-400 font-light">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Work */}
      <section id="my-work" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-brown-dark dark:text-gray-100">
          My Work
        </h2>
        <div className="space-y-16">
          <div className="bg-white dark:bg-[#1A1A1A] p-8 md:p-12 rounded-3xl border border-border/10 dark:border-[#333333] shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-brown-dark dark:text-white">Sample Project #1</h3>
            <div className="space-y-6 text-lg text-brown-medium dark:text-gray-300 font-light">
              <div>
                <strong className="text-accent block mb-1">Brief</strong>
                <p>Add your brief from Notion here. What was the goal?</p>
              </div>
              <div>
                <strong className="text-accent block mb-1">Approach</strong>
                <p>Explain your approach from Notion here. How did you engineering-think your way to the solution?</p>
              </div>
              <div>
                <strong className="text-accent block mb-1">Result</strong>
                <p>Detail the result from Notion here. What were the outcomes and metrics?</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1A1A1A] p-8 md:p-12 rounded-3xl border border-border/10 dark:border-[#333333] shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-brown-dark dark:text-white">Sample Project #2</h3>
            <div className="space-y-6 text-lg text-brown-medium dark:text-gray-300 font-light">
              <div>
                <strong className="text-accent block mb-1">Brief</strong>
                <p>Add your brief from Notion here.</p>
              </div>
              <div>
                <strong className="text-accent block mb-1">Approach</strong>
                <p>Explain your approach from Notion here.</p>
              </div>
              <div>
                <strong className="text-accent block mb-1">Result</strong>
                <p>Detail the result from Notion here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Tech Advantage */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-l-4 border-accent pl-8 text-left py-4"
        >
          <h2 className="text-3xl font-bold mb-6 text-brown-dark dark:text-gray-100">
            The Tech Advantage
          </h2>
          <p className="text-xl text-brown-medium dark:text-gray-300 font-light leading-relaxed">
            I approach copy like an engineer approaches a problem. Before I write a word, I study your customer&apos;s language, their objections, and the gap between what you offer and what they think they need. Copy isn&apos;t creative guesswork. It&apos;s systematic persuasion — and systematic thinking is what I do.
          </p>
        </motion.div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface dark:bg-[#121212]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-brown-dark dark:text-gray-100">
            My Process
          </h2>
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Discovery & Deep Dive",
                desc: "We talk about your business, your ideal customer, and the exact metric you want the copy to improve. I audit your current materials and competition."
              },
              {
                step: "02",
                title: "The Core Messaging",
                desc: "I map out the angles, the objections, and the journey your customer needs to go on before they say yes."
              },
              {
                step: "03",
                title: "Drafting & Refinement",
                desc: "I write the copy. You review it. We polish it until it sounds perfectly like you, but engineered for conversions."
              },
              {
                step: "04",
                title: "Launch & Measure",
                desc: "The copy goes live. If it needs tweaking based on real-world data, we adjust."
              }
            ].map((phase) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 md:gap-10"
              >
                <div className="text-4xl font-black text-accent/30 dark:text-accent/20 pt-1">
                  {phase.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-brown-dark dark:text-white">{phase.title}</h3>
                  <p className="text-lg text-brown-medium dark:text-gray-400 font-light">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 text-center px-4">
        <h2 className="text-4xl font-bold mb-8 text-brown-dark dark:text-white">Ready for words that work?</h2>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:sahilsomyani007@gmail.com"
            className="px-8 py-4 text-lg font-bold text-white bg-accent hover:bg-accent-hover rounded-full transition-all shadow-lg hover:-translate-y-0.5 inline-block"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/sahil-somyani"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-lg font-bold text-brown-dark dark:text-gray-100 bg-surface dark:bg-[#1E1E1E] border border-border dark:border-[#333333] hover:bg-gray-50 dark:hover:bg-[#2A2A2A] rounded-full transition-all shadow-md hover:-translate-y-0.5 inline-block"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="py-8 text-center text-brown-medium dark:text-gray-500 font-light text-sm border-t border-border/10 dark:border-[#333333]/50">
        <p>© {new Date().getFullYear()} Sahil Somyani. All rights reserved.</p>
        <p className="mt-1">Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}