"use client";

import Header from "@/components/Header";
import HeroNew from "@/components/HeroNew";
import AboutNew from "@/components/AboutNew";
import Experience from "@/components/Experience";
import ProjectsNew from "@/components/ProjectsNew";
import SkillsNew from "@/components/SkillsNew";
import ContactNew from "@/components/ContactNew";
import Image from "next/image";

export default function PortfolioContent() {
  return (
    <>
      <Header />
      <main className="relative z-[2]">
        <HeroNew />
        <AboutNew />
        <Experience />
        <SkillsNew />
        <ProjectsNew />
        <ContactNew />
      </main>
      <footer className="py-8 sm:py-10 md:py-12 bg-[#F8F9FA]/90 dark:bg-[#121114]/90 border-t border-gray-200 dark:border-gray-800 relative z-[2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <a href="#home" className="transition-transform hover:scale-105">
              <Image
                src="/mylogo1.svg"
                alt="Gerard Bernal Logo"
                width={40}
                height={40}
                className="dark:invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">
              &copy; 2026 Gerard Bernal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
