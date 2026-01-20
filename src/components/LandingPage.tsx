"use client";

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
