/**
 * HeroNew Component
 *
 * The main hero section of the portfolio landing page.
 * Features a split layout with different arrangements for mobile and desktop.
 *
 * Key Features:
 * - Typewriter animation effect for the role title
 * - Blinking cursor effect synchronized with typing
 * - Theme-aware hero images (light/dark variants)
 * - Availability status badge with pulsing animation
 * - Social media links with hover glow effects
 * - Resume download and contact CTA buttons
 * - Ambient glow background effects
 *
 * Responsive Behavior:
 * - Mobile (<lg): Stacked vertical layout, centered content
 * - Desktop (lg+): Absolute positioning with name left, text right, image center-bottom
 *
 * Layout Structure:
 * - Mobile: Status badge → Name → Social icons → View My Work → Typing text → Buttons → Hero image
 * - Desktop: Left side (name, socials, view work) | Center (hero image) | Right side (typing, description, buttons)
 */
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, SendHorizontal } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

export default function HeroNew() {
  // State for typewriter effect - stores currently displayed text
  const [displayedText, setDisplayedText] = useState("");

  // Controls blinking cursor visibility
  const [showCursor, setShowCursor] = useState(true);

  // Prevents hydration mismatch for theme-dependent images
  const [mounted, setMounted] = useState(false);

  // Theme context for switching hero images
  const { theme } = useTheme();

  // The text to display with typewriter effect
  const fullText = "Full-stack Web Developer";

  // Mark component as mounted after initial render
  useEffect(() => {
    setMounted(true);
  }, []);

  // Typewriter effect: progressively reveal text character by character
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // 100ms per character

    return () => clearInterval(typingInterval);
  }, []);

  // Blinking cursor effect: toggles visibility every 530ms
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col pt-20 relative overflow-hidden"
    >
      {/*
        Ambient Glow Effects
        - Two blurred gradient circles create a soft background glow
        - Blue glow positioned top-left, purple glow bottom-right
        - Opacity differs between light and dark themes
      */}
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 lg:w-125 h-64 sm:h-80 md:h-96 lg:h-125 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-80 lg:w-100 h-48 sm:h-64 md:h-80 lg:h-100 bg-purple-500/15 dark:bg-purple-500/10 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] pointer-events-none" />

      {/* Mobile Layout (stacked) */}
      <div className="flex flex-col lg:hidden px-4 sm:px-6 pt-8 pb-4 relative z-10 flex-1">
        {/* Name and status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 bg-green-200 dark:bg-green-900/30 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.3)] dark:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600 dark:bg-green-400"></span>
            </span>
            <span className="text-xs font-mono text-green-700 dark:text-green-400">
              Available for new projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl text-gray-900 dark:text-white"
          >
            <span className="text-blue-700 dark:text-blue-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)] dark:drop-shadow-[0_0_35px_rgba(96,165,250,0.6)]">
              Gerard
            </span>
            <br />
            Berns
          </motion.h1>

          {/* View My Work Button */}
          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="group inline-flex items-center gap-2 px-4 py-2 mt-4 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] dark:hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.7)]"
            whileHover={{ x: 3 }}
          >
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Typing text and description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-6 space-y-3"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-700 dark:text-gray-300"
          >
            <span
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
              }}
            >
              {displayedText}
              <span
                className={`inline-block w-[2px] h-[1em] ml-1 bg-current align-middle ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              />
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 leading-tight"
          >
            Building{" "}
            <span className="text-blue-700 dark:text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.4)] dark:drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">
              secure
            </span>{" "}
            &{" "}
            <span className="text-blue-700 dark:text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.4)] dark:drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">
              user-centered
            </span>{" "}
            web applications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-md mx-auto"
          >
            Passionate about creating elegant solutions to complex problems.
            Specializing in full-stack development with a focus on performance
            and user experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-col min-[400px]:flex-row flex-wrap items-center justify-center gap-3 pt-2 w-full"
          >
            <motion.a
              href="/resume.pdf"
              download
              className="group flex items-center justify-center gap-2 w-full min-[400px]:w-auto min-[400px]:min-w-40 sm:min-w-44 py-2.5 sm:py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4" />
              Check My Resume
            </motion.a>

            <motion.a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full min-[400px]:w-auto min-[400px]:min-w-40 sm:min-w-44 py-2.5 sm:py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg text-sm sm:text-base font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <SendHorizontal className="w-4 h-4" />
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Hero Image - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="relative w-full h-[50vh] sm:h-[55vh] mt-4 group"
          title="Replaced once I have a decent picture of myself. :>>"
        >
          {/* Custom Tooltip */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 whitespace-nowrap shadow-lg">
            Replaced once I have a decent picture of myself. :&gt;&gt;
          </div>
          <Image
            src="/hero-lightv3.png"
            alt="Gerard Bernal"
            fill
            className={`object-contain object-bottom transition-opacity duration-300 ${
              mounted && theme === "dark" ? "opacity-0" : "opacity-100"
            }`}
            priority
          />
          <Image
            src="/hero-darkv3.png"
            alt="Gerard Bernal"
            fill
            className={`object-contain object-bottom transition-opacity duration-300 ${
              mounted && theme === "dark" ? "opacity-100" : "opacity-0"
            }`}
            priority
          />
        </motion.div>
      </div>

      {/* Desktop Layout (absolute positioning) */}
      {/* Left Side - Name */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:block absolute left-[8%] xl:left-[15%] 2xl:left-[20%] top-[30%] z-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-2 inline-flex items-center gap-2 px-3 py-1.5 bg-green-200 dark:bg-green-900/30 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.3)] dark:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600 dark:bg-green-400"></span>
          </span>
          <span className="text-xs font-mono text-green-700 dark:text-green-400">
            Available for new projects
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white"
        >
          <span className="text-blue-700 dark:text-blue-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)] dark:drop-shadow-[0_0_35px_rgba(96,165,250,0.6)]">
            Gerard
          </span>
          <br />
          Bernal
        </motion.h1>
        {/* View My Work Button */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="group inline-flex items-center gap-2 mt-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] dark:hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.7)]"
          whileHover={{ x: 3 }}
        >
          View My Work
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </motion.div>

      {/* Right Side - Text and Buttons (Desktop) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden lg:flex absolute right-[8%] xl:right-[12%] 2xl:right-[15%] top-[30%] z-10 flex-col items-end text-right space-y-4 max-w-sm xl:max-w-md"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl xl:text-3xl text-gray-700 dark:text-gray-300"
        >
          <span
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
            }}
          >
            {displayedText}
            <span
              className={`inline-block w-[2px] h-[1em] ml-1 bg-current align-middle ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            />
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-lg lg:text-xl font-medium text-gray-700 dark:text-gray-300 leading-tight"
        >
          Building{" "}
          <span className="text-blue-700 dark:text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.4)] dark:drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">
            clean
          </span>{" "}
          &{" "}
          <span className="text-blue-700 dark:text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.4)] dark:drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">
            user-centered
          </span>{" "}
          web applications
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-base xl:text-lg text-gray-600 dark:text-gray-400"
        >
          Creating applications that are efficient and user-friendly. Driven to
          turn challenging problems into simple, well-designed solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex flex-wrap items-center justify-end gap-3 pt-2"
        >
          <motion.a
            href="/resume-gsbernal.pdf"
            download
            className="group flex items-center justify-center gap-2 w-44 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-base font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-4 h-4" />
            My Resume
          </motion.a>

          <motion.a
            href="#contact"
            className="flex items-center justify-center gap-2 w-44 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg text-base font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <SendHorizontal className="w-4 h-4" />
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Hero Image - Desktop (Bottom Center) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] xl:w-[1000px] xl:h-[1000px] 2xl:w-[1100px] 2xl:h-[1100px]"
      >
        <Image
          src="/hero-lightv3.png"
          alt="Gerard Bernal"
          fill
          className={`object-contain object-bottom transition-opacity duration-300 ${
            mounted && theme === "dark" ? "opacity-0" : "opacity-100"
          }`}
          priority
        />
        <Image
          src="/hero-darkv3.png"
          alt="Gerard Bernal"
          fill
          className={`object-contain object-bottom transition-opacity duration-300 ${
            mounted && theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
          priority
        />
      </motion.div>
    </section>
  );
}
