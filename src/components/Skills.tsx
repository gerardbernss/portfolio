"use client";

import { motion } from "framer-motion";

const skills = {
  Languages: ["TypeScript", "JavaScript", "Python", "Rust", "Go Lang", "C", "C++", "Java", "Move"],
  Frameworks: ["Express", "React", "Node.js", "Next.js", "Svelte", "Vite", "Flask", "Astro", "Turborepo", "Hono"],
  Databases: ["MongoDB", "MySQL", "PostgreSQL", "Cloudflare D1", "Supabase", "Neon", "Xata", "Turso", "Redis", "Prisma", "Drizzle"],
  "Cloud Services": ["AWS", "Google Cloud", "Netlify", "Vercel", "Cloudflare", "DigitalOcean", "Koyeb", "AWS EC2", "AWS S3", "AWS SES", "Azure KeyVault"],
  Tools: ["Git", "Docker", "VS Code", "PowerShell", "Bash", "After Effects", "Photoshop", "Blender", "Obsidian", "npm", "pnpm", "Bun", "BeeKeeper", "Datagrip", "Postman", "Socket.IO", "PM2", "Contentlayer", "MDX", "Framer Motion"],
  "Other Technologies": ["HTML5", "CSS3", "Tailwind CSS", "Shadcn UI", "Material UI", "Bootstrap", "DaisyUI", "NextUI", "Tanstack Query", "i18next", "Zustand", "Multithreading", "WebSockets"]
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
        >
             <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Tech Stack
            </h2>
            <h3 className="text-3xl font-bold text-black dark:text-white">
            Tools I use to build.
            </h3>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h4 className="mb-4 text-lg font-semibold text-black dark:text-white">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-600 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-black dark:text-zinc-400 dark:hover:border-zinc-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
