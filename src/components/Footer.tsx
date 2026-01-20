"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-black px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
                 <h2 className="text-3xl font-bold text-black dark:text-white">
                    What's Next?
                </h2>
                <h3 className="text-5xl font-bold text-black dark:text-white">
                    Let's build something <br /> together.
                </h3>
                 <p className="max-w-md text-zinc-600 dark:text-zinc-400">
                    I'm always looking for new opportunities and interesting projects. Whether you have a question or just want to say hi, my inbox is always open.
                 </p>
                 <a
                    href="mailto:me@harjotrana.com"
                    className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                >
                    Say Hello
                    <Mail className="h-4 w-4" />
                </a>
            </div>

            <div className="flex flex-col justify-between">
                <div>
                     <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                        Find me on
                    </h4>
                     <div className="flex gap-4">
                        <a href="#" className="p-2 text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white">
                            <Github className="h-6 w-6" />
                        </a>
                        <a href="#" className="p-2 text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white">
                            <Linkedin className="h-6 w-6" />
                        </a>
                         <a href="#" className="p-2 text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white">
                            <Twitter className="h-6 w-6" />
                        </a>
                    </div>
                </div>

                <div className="mt-12 flex flex-col justify-end text-sm text-zinc-500 lg:mt-0">
                    <p>© 2026 Harjot Singh Rana. All rights reserved.</p>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
