import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Leadership />
      <Contact />
      
      <footer className="py-8 text-center text-brown-medium dark:text-gray-500 font-light text-sm border-t border-border/10 dark:border-[#333333]/50">
        <p>© {new Date().getFullYear()} Sahil Somyani. All rights reserved.</p>
        <p className="mt-1">Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
