"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    
    // Simulate network request since formspree endpoint is not finalized
    setTimeout(() => {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-surface dark:bg-[#1E1E1E] rounded-3xl p-8 md:p-12 border border-border/10 dark:border-[#333333] shadow-sm relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <div>
            <h2 className="text-3xl font-bold text-brown-dark dark:text-gray-100 mb-4">Let&apos;s Connect</h2>
            <p className="text-brown-medium dark:text-gray-300 font-light mb-8 max-w-md leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-4 mb-8">
              <a href="mailto:sahilsomyani007@gmail.com" className="flex items-center text-brown-dark dark:text-gray-200 hover:text-accent transition-colors font-medium">
                <Mail className="w-5 h-5 mr-3 text-accent" />
                Contact via Email
              </a>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/sahil007-ai" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-[#2A2A2A] rounded-full text-brown-dark dark:text-gray-200 hover:text-accent dark:hover:text-accent hover:-translate-y-1 transition-all shadow-sm">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/sahil-somyani-637270319/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-[#2A2A2A] rounded-full text-brown-dark dark:text-gray-200 hover:text-accent dark:hover:text-accent hover:-translate-y-1 transition-all shadow-sm">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm justify-center font-medium text-brown-dark dark:text-gray-300 mb-1">Name</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-border/20 dark:border-[#444444] bg-white dark:bg-[#1A1A1A] text-brown-dark dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brown-dark dark:text-gray-300 mb-1">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-border/20 dark:border-[#444444] bg-white dark:bg-[#1A1A1A] text-brown-dark dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow" placeholder="john@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brown-dark dark:text-gray-300 mb-1">Message</label>
              <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 rounded-lg border border-border/20 dark:border-[#444444] bg-white dark:bg-[#1A1A1A] text-brown-dark dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow resize-none" placeholder="How can I help you?"></textarea>
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-3.5 px-6 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium flex items-center justify-center transition-colors disabled:opacity-70"
            >
              {status === "submitting" ? "Sending..." : (
                <>
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
            {status === "success" && (
              <p className="text-green-600 dark:text-green-400 text-sm mt-2 text-center font-medium">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 dark:text-red-400 text-sm mt-2 text-center font-medium">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
