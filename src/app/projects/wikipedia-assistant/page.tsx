"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, BookOpen, Users, Brain, Github, ArrowLeft, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

interface Analyst {
  name: string;
  role: string;
  affiliation: string;
}

interface ResearchResponse {
  final_report: string;
  analysts: Analyst[];
  status: string;
}

export default function WikipediaAssistant() {
  const [topic, setTopic] = useState("");
  const [maxAnalysts, setMaxAnalysts] = useState(3);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResearchResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!topic.trim() || topic.length < 5) {
      setError("Please enter a topic (at least 5 characters)");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("https://web-production-f63a5.up.railway.app/api/research", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic: topic.trim(),
          max_analysts: maxAnalysts,
          human_analyst_feedback: "approve"
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Research failed");
      }

      const data: ResearchResponse = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-beige dark:bg-[#0A0A0A] transition-colors">
      {/* Header */}
      <header className="border-b border-border/10 dark:border-[#333333]/50 bg-white/50 dark:bg-[#1A1A1A]/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="flex items-center gap-2 text-brown-medium dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <a
              href="https://github.com/sahil007-ai/quick-wiki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brown-medium dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium hidden sm:inline">View Source</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="w-12 h-12 text-accent" />
            <h1 className="text-4xl sm:text-5xl font-bold text-brown-dark dark:text-gray-100">
              Quick Wiki
            </h1>
          </div>
          <p className="text-lg text-brown-medium dark:text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Multi-agent research assistant powered by <span className="font-semibold text-accent">LangGraph</span>. 
            AI analysts collaborate to explore topics using Wikipedia and web search, then synthesize comprehensive reports with citations.
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {["LangGraph", "LangChain", "FastAPI", "Python", "Multi-Agent Systems"].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 text-sm bg-peach/50 dark:bg-[#2A2A2A] text-accent rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-20">
        {/* Input Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-border/10 dark:border-[#333333] shadow-lg p-6 sm:p-8 mb-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="topic" className="block text-sm font-medium text-brown-dark dark:text-gray-200 mb-2">
                Research Topic
              </label>
              <input
                type="text"
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., How does quantum computing work?"
                className="w-full px-4 py-3 rounded-lg border border-border/20 dark:border-[#333333] bg-white dark:bg-[#0A0A0A] text-brown-dark dark:text-gray-100 placeholder-brown-medium/50 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="analysts" className="block text-sm font-medium text-brown-dark dark:text-gray-200 mb-2">
                Number of Analyst Perspectives: {maxAnalysts}
              </label>
              <input
                type="range"
                id="analysts"
                min="2"
                max="5"
                value={maxAnalysts}
                onChange={(e) => setMaxAnalysts(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-[#2A2A2A] rounded-lg appearance-none cursor-pointer accent-accent"
                disabled={loading}
              />
              <p className="text-xs text-brown-medium dark:text-gray-400 mt-2 font-light">
                More analysts provide deeper insights but take longer to generate
              </p>
            </div>

            <button
              type="submit"
              disabled={loading || !topic.trim() || topic.length < 5}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Researching... (1-3 minutes)</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Start Research</span>
                </>
              )}
            </button>
          </form>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
            >
              <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
            </motion.div>
          )}
        </motion.div>

        {/* Results Section */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Analysts Info */}
              <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-border/10 dark:border-[#333333] shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-accent" />
                  <h2 className="text-xl font-bold text-brown-dark dark:text-gray-100">
                    Analysts Who Contributed
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {result.analysts.map((analyst, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-peach/30 dark:bg-[#0A0A0A] rounded-lg border border-border/10 dark:border-[#333333]/50"
                    >
                      <h3 className="font-semibold text-brown-dark dark:text-gray-100 mb-1">
                        {analyst.name}
                      </h3>
                      <p className="text-sm text-accent font-medium mb-1">{analyst.role}</p>
                      <p className="text-xs text-brown-medium dark:text-gray-400">
                        {analyst.affiliation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research Report */}
              <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-border/10 dark:border-[#333333] shadow-lg p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Brain className="w-5 h-5 text-accent" />
                  <h2 className="text-xl font-bold text-brown-dark dark:text-gray-100">
                    Research Report
                  </h2>
                </div>
                <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none prose-headings:text-brown-dark dark:prose-headings:text-gray-100 prose-p:text-brown-medium dark:prose-p:text-gray-300 prose-a:text-accent prose-strong:text-brown-dark dark:prose-strong:text-gray-100 prose-ul:text-brown-medium dark:prose-ul:text-gray-300 prose-ol:text-brown-medium dark:prose-ol:text-gray-300">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {result.final_report}
                  </ReactMarkdown>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* How It Works Section */}
        {!result && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-border/10 dark:border-[#333333] shadow-lg p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-accent" />
              <h2 className="text-xl font-bold text-brown-dark dark:text-gray-100">
                How It Works
              </h2>
            </div>
            <div className="space-y-4 text-brown-medium dark:text-gray-300 font-light leading-relaxed">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-brown-dark dark:text-gray-100 mb-1">
                    Create AI Analysts
                  </h3>
                  <p className="text-sm">
                    LangGraph generates multiple AI analyst personas with diverse expertise relevant to your topic
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-brown-dark dark:text-gray-100 mb-1">
                    Conduct Research
                  </h3>
                  <p className="text-sm">
                    Each analyst interviews expert sub-agents, gathering information from Wikipedia and web search
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-brown-dark dark:text-gray-100 mb-1">
                    Synthesize Report
                  </h3>
                  <p className="text-sm">
                    All insights are compiled into a comprehensive report with introduction, analysis, conclusions, and citations
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
}
