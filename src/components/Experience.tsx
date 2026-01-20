"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { clsx } from "clsx";

const experiences = [
  {
    company: "SignVault.io",
    role: "Full Stack Developer",
    period: "December 2024 - November 2025",
    location: "St. Petersburg, Florida, USA",
    points: [
      "Used ExpressJS to build the backend API, using Drizzle ORM for DB operations.",
      "Developed a responsive frontend web application using NextJS and Tailwind CSS.",
      "Implemented the integral ABAC system to provide dynamic control over resources.",
      "Integrated Stripe for managing user subscriptions and other billing preferences.",
      "Implemented real-time notifications and collaborative features using SocketIO.",
      "Created an interface for users to e-sign PDF documents using Azure KeyVault.",
    ],
    tech: ["NextJS", "ExpressJS", "Tailwind", "Shadcn", "Redis", "TanStack Query", "Drizzle", "Docker", "Turborepo", "PostgreSQL", "Zustand", "Logto", "Stripe", "AWS S3", "Nodemailer", "GraphQL"],
  },
  {
     company: "LawSikho",
     role: "Software Engineer Intern",
     period: "June 2024 - August 2024",
     location: "Remote",
     points: [
         "Contributed to the development of internal tools.",
         "Optimized database queries for better performance."
     ],
     tech: ["React", "Node.js", "MongoDB"]
  },
  {
      company: "Freelance",
      role: "Full Stack Developer",
      period: "2020 - Present",
      location: "Remote",
      points: [
          "Delivered custom web solutions for various clients.",
          "Specialized in React and Next.js applications."
      ],
      tech: ["Next.js", "React", "Tailwind CSS"]
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
        >
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Experience
            </h2>
            <h3 className="text-3xl font-bold text-black dark:text-white">
            Where I've built things.
            </h3>
        </motion.div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Tabs */}
          <div className="flex overflow-x-auto pb-4 lg:flex-col lg:pb-0 lg:min-w-[200px]">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={clsx(
                  "whitespace-nowrap px-4 py-3 text-left text-sm font-medium transition-colors border-b-2 lg:border-b-0 lg:border-l-2",
                  activeTab === index
                    ? "border-black text-black dark:border-white dark:text-white bg-zinc-50 dark:bg-zinc-900"
                    : "border-zinc-200 text-zinc-500 hover:text-black dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-white"
                )}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1"
          >
            <div className="mb-6">
              <h4 className="text-xl font-bold text-black dark:text-white">
                {experiences[activeTab].role} <span className="text-zinc-500">at</span> <span className="text-black dark:text-white">{experiences[activeTab].company}</span>
              </h4>
              <p className="mt-1 text-sm font-medium text-zinc-500">
                {experiences[activeTab].period} • {experiences[activeTab].location}
              </p>
            </div>

            <ul className="mb-8 space-y-4">
              {experiences[activeTab].points.map((point, i) => (
                <li key={i} className="flex items-start text-zinc-600 dark:text-zinc-400">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black dark:bg-white" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
                {experiences[activeTab].tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                        {tech}
                    </span>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
