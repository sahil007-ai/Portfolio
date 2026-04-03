"use client";

import { motion } from "framer-motion";
import { ArrowRight, PenTool } from "lucide-react";
import Link from "next/link";

export default function TheBridge() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-accent/10 dark:bg-[#1E1E1E] rounded-3xl p-8 md:p-12 shadow-sm border border-accent/20 dark:border-[#333333]"
      >
        <div className="flex justify-center mb-6">
          <PenTool className="w-10 h-10 text-accent" />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-brown-dark dark:text-gray-100">
          Also a Copywriter
        </h2>
        
        <p className="text-lg text-brown-medium dark:text-gray-300 leading-relaxed font-light mb-8 max-w-2xl mx-auto">
          I write conversion copy for service businesses and tech brands. If you&apos;re a business owner who needs words that actually work — not filler content — I have a dedicated copywriting portfolio.
        </p>

        <Link
          href="/copy"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-accent hover:bg-accent-hover rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          See my copywriting work
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </motion.div>
    </section>
  );
}