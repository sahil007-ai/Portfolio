"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-peach/80 dark:bg-[#121212]/80 backdrop-blur-md border-b border-border/10 dark:border-[#333333]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-bold tracking-tighter text-accent">
              Sahil.
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brown-medium dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-surface/50 dark:hover:bg-[#1E1E1E] transition-colors text-brown-dark dark:text-gray-200"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
          </div>

          {/* Mobile Nav Button */}
          <div className="md:hidden flex items-center gap-4">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-brown-dark dark:text-gray-200"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brown-dark dark:text-gray-200 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface dark:bg-[#1E1E1E] border-b border-border/20 dark:border-[#333333]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-brown-dark dark:text-gray-200 hover:text-accent dark:hover:text-accent"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
