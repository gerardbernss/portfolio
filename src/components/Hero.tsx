"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center px-6 pt-24 md:px-12">
      <div className="max-w-4xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-7xl">
            Harjot Singh Rana.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-3xl font-medium tracking-tight text-zinc-500 dark:text-zinc-400 sm:text-5xl">
            Lead Software Engineer <br />
            building secure & scalable software applications.
          </h2>
        </motion.div>

        <motion.p
          className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ex-Full Stack Software Engineer at <span className="text-black dark:text-white font-semibold">SignVault.io</span>. Turning complex ideas into high-performance digital products.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="mailto:me@harjotrana.com"
            className="group flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-black dark:text-white dark:hover:bg-zinc-900"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
