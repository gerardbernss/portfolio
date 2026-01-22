"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Floating Pill Navbar */}
      <motion.header
        className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 sm:gap-3"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <nav
          className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-white/90 dark:bg-[#1a1a1a]/90 border-gray-200 dark:border-gray-700 shadow-lg shadow-black/5 dark:shadow-black/20 backdrop-blur-md"
              : "bg-white/80 dark:bg-[#1a1a1a]/80 border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
          }`}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            className="shrink-0 group"
            whileHover={{ scale: 1.08 }}
          >
            <Image
              src={
                !mounted || theme === "light" ? "/mylogo1.svg" : "/mylogo2.svg"
              }
              alt="Your logo"
              width={32}
              height={32}
              priority
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_1px_2px_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.7)] dark:group-hover:drop-shadow-[0_0_18px_rgba(96,165,250,0.8)]"
            />
          </motion.a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="shrink-0 md:hidden p-1.5 sm:p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            )}
          </motion.button>
        </nav>

        {/* Theme Toggle - Outside the pill */}
        <motion.button
          onClick={toggleTheme}
          className={`shrink-0 p-2 sm:p-2.5 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-white/90 dark:bg-[#1a1a1a]/90 border-gray-200 dark:border-gray-700 shadow-lg shadow-black/5 dark:shadow-black/20 backdrop-blur-md"
              : "bg-white/80 dark:bg-[#1a1a1a]/80 border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle theme"
        >
          {!mounted ? (
            <div className="w-4 h-4" />
          ) : theme === "light" ? (
            <Moon className="w-4 h-4 text-gray-700" />
          ) : (
            <Sun className="w-4 h-4 text-yellow-400" />
          )}
        </motion.button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu - Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute top-20 left-4 right-4 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <nav className="flex flex-col p-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={handleNavClick}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="py-3 px-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
