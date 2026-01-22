"use client";

import Header from "@/components/Header";
import HeroNew from "@/components/HeroNew";
import AboutNew from "@/components/AboutNew";
import Experience from "@/components/Experience";
import ProjectsNew from "@/components/ProjectsNew";
import SkillsNew from "@/components/SkillsNew";
import ContactNew from "@/components/ContactNew";

export default function PortfolioContent() {
  return (
    <>
      <Header />
      <HeroNew />
      <AboutNew />
      <Experience />
      <ProjectsNew />
      <SkillsNew />
      <ContactNew />
      <footer className="py-8 sm:py-10 md:py-12 bg-[#F8F9FA] dark:bg-[#121114] border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
              &copy; 2026 Gerard Bernal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
