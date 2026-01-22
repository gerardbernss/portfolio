"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SkillsNew() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Javascript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Django", "Express.js", "Laravel"],
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "Oracle SQL", "MySQL"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "AWS", "Git", "Linux", "Vercel"],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 bg-[#F8F9FA] dark:bg-[#121114] relative overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 md:w-150 h-80 sm:h-96 md:h-150 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[150px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
            Skills
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12">
            Technologies I work with
          </h3>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="p-4 sm:p-5 md:p-6 bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_0_30px_rgba(96,165,250,0.2)] transition-shadow"
              >
                <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_12px_rgba(96,165,250,0.4)] transition-shadow cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
