"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Junior Web Developer",
      company: "Saint Louis University Inc.",
      period: "October 2025 - Present",
      description:
        "Lead developer for the current project, the Saint Louis University BedS Quick Campus System. Responsible for designing, coding, and testing the application to ensure optimal performance and user experience.",
      technologies: [
        "React",
        "Tailwind",
        "TypeScript",
        "Node.js",
        "Laravel",
        "Oracle SQL",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Saint Louis University Inc.",
      period: "January 2023 - June 2023",
      description:
        "Lead developer—built the Preventive Maintenance Information System for SLU IT department. Responsible for designing and coding the web application.",
      technologies: ["HTML", "CSS", "Bootstrap", "mySQL", "PHP", "MAMP Server"],
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 bg-[#F8F9FA] dark:bg-[#121114] relative overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
            Experience
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12">
            Where I've worked
          </h3>

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.title}-${exp.period}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="relative pl-6 sm:pl-8 border-l-2 border-gray-200 dark:border-gray-800"
              >
                <div className="absolute -left-2.5 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)] dark:shadow-[0_0_15px_rgba(96,165,250,0.7)]"></div>

                <div className="pb-6 sm:pb-8">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h4>
                    <span className="text-blue-600 dark:text-blue-400">@</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {exp.company}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-800 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_12px_rgba(96,165,250,0.4)] transition-shadow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
