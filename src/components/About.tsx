"use client";

import { motion } from "framer-motion";

const manifestoItems = [
  "I believe in 99.9% uptime, but 100% user-centricity.",
  "Clean code is a requirement, not a feature.",
  "Type-safety over everything.",
  "Performance is a design choice.",
  "Accessibility is not an afterthought.",
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-12 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-zinc-500">
              About Me
            </h2>
            <h3 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white">
              Engineering with passion and precision.
            </h3>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
              <p>
                Hey! I'm Harjot, a developer dedicated to building high-quality digital products. I started my coding journey at 15 and have spent over 5 years crafting applications that solve real-world problems.
              </p>
              <p>
                Currently, I'm focusing on building secure document management solutions at SignVault.io and exploring the intersection of AI and Web3.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
             <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-zinc-500">
              The Manifesto
            </h2>
            <ul className="space-y-4">
              {manifestoItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start text-lg font-medium text-black dark:text-zinc-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="mr-3 text-zinc-400">/</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
