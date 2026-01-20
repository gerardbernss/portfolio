"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "SignVault.io",
    description: "SignVault.io is a multi-tenant SaaS platform for secure document management. It provides sophisticated tools for managing complex organizational structures with key features including a powerful ABAC Engine and data provenance tracking.",
    tags: ["Next.js", "Express.js", "Tailwind CSS", "ShadcnUI", "Redis"],
    link: "#",
    github: "#",
    image: "/next.svg" // Placeholder
  },
  {
    title: "Orchastra",
    description: "A no-code AI automation platform that enables users to build AI agents and workflows like building blocks. Features visual orchestration with drag-and-drop, multi-agent support, and integration with multiple AI providers.",
    tags: ["Next.js", "FastAPI", "Python", "OpenAI", "Claude"],
    link: "#",
    github: "#",
    image: "/next.svg" // Placeholder
  },
  {
    title: "DevSynq",
    description: "A desktop application that synchronizes MCP (Model Context Protocol) server configurations, API keys, and project associations across multiple AI-powered IDEs including Cursor, Windsurf, and VS Code.",
    tags: ["Electron", "React", "Vite", "PostgreSQL", "TypeScript"],
    link: "#",
    github: "#",
    image: "/next.svg" // Placeholder
  },
  {
    title: "Weavestore",
    description: "A TypeScript-based database abstraction layer published on NPM that provides traditional database operations (CRUD) on top of the IPFS/IPNS decentralized storage network.",
    tags: ["TypeScript", "Bun", "IPFS", "IPNS", "Lighthouse"],
    link: "#",
    github: "#",
    image: "/next.svg" // Placeholder
  }
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:px-12 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-6xl">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
        >
             <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Projects
            </h2>
            <h3 className="text-3xl font-bold text-black dark:text-white">
            Some things I've built.
            </h3>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 transition-all hover:border-zinc-300 dark:hover:border-zinc-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="aspect-video w-full bg-zinc-100 dark:bg-zinc-900 relative overflow-hidden flex items-center justify-center p-8">
                  {/* Placeholder for project image */}
                  <Image src={project.image} alt={project.title} width={100} height={100} className="opacity-50 group-hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="text-xl font-bold text-black dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex gap-3 text-zinc-500">
                    <a href={project.github} className="hover:text-black dark:hover:text-white"><Github className="h-5 w-5" /></a>
                    <a href={project.link} className="hover:text-black dark:hover:text-white"><ExternalLink className="h-5 w-5" /></a>
                  </div>
                </div>

                <p className="mb-6 flex-1 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
             <a href="#" className="inline-flex items-center text-sm font-medium text-black dark:text-white hover:underline underline-offset-4">
                 View all projects <ExternalLink className="ml-1 h-3 w-3" />
             </a>
        </div>
      </div>
    </section>
  );
}
