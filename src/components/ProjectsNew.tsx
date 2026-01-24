/**
 * ProjectsNew Component
 *
 * Showcases portfolio projects in a responsive card grid layout.
 * Each project card displays title, description, tech stack, and links.
 *
 * Key Features:
 * - Project cards with hover border and shadow effects
 * - Technology tags displayed as pills
 * - Links to GitHub repository and live demo
 * - Staggered entrance animations on scroll
 * - Dual ambient glow effects (blue top-left, purple bottom-right)
 *
 * Responsive Behavior:
 * - Mobile: Single column
 * - Tablet/Desktop (sm+): Two column grid
 * - Adaptive padding and gaps across breakpoints
 */
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsNew() {
  // Ref for scroll-triggered animations
  const ref = useRef(null);

  // Trigger animation when section enters viewport
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Project data array - each project has title, description, tags, and links
  const projects = [
    {
      title: "AI-Driven Gamified Learning Web System",
      description:
        "AI-powered gamified learning web application for medical students. An MIT capstone project.",
      tags: ["React", "Tailwind", "Next.js", "Laravel", "mySQL"],
      github: "https://github.com",
      demo: "https://demo.com",
      status: "In Progress",
    },
    {
      title: "Saint Louis University BedS Quick Campus System",
      description:
        "A web application for SLU BedS students at staff to manage student records, course enrollment, and academic performance tracking.",
      tags: ["React", "Tailwind", "SQLite", "Laravel", "Git"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Preventive Maintenance Information System",
      description:
        "A web application designed to streamline and manage preventive maintenance tasks for Saint Louis University's computer equipment and facilities.",
      tags: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL", "MAMP", "Figma"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Cruz Dental Clinic Appointment and Records System",
      description:
        "A web-based system for managing patient appointments and patient dental records for Cruz Dental Clinic.",
      tags: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL", "MAMP", "Figma"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
            Projects
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12">
            Where did I implement my skills?
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="group relative p-4 sm:p-5 md:p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-400 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_0_35px_rgba(96,165,250,0.25)]"
              >
                {project.status && (
                  <div className="flex justify-start mb-2">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800 whitespace-nowrap shadow-[0_0_15px_rgba(59,130,246,0.5)] dark:shadow-[0_0_20px_rgba(96,165,250,0.6)]">
                      {project.status}
                    </span>
                  </div>
                )}

                <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {project.title}
                </h4>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded border border-gray-200 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}