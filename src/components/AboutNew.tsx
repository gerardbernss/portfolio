"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiOracle,
  SiDocker,
  SiGit,
  SiFigma,
} from "react-icons/si";

const photos = [
  { src: "/pic1.jpg", alt: "Photo 1" },
  { src: "/pic2.jpg", alt: "Photo 2" },
  { src: "/pic3.jpg", alt: "Photo 3" },
];

export default function AboutNew() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextPhoto = () => {
    setDirection(1);
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setDirection(-1);
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 bg-white dark:bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
            About Me
          </h2>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Left Side - Photo Slideshow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square sm:aspect-4/5 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentPhoto}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={photos[currentPhoto].src}
                      alt={photos[currentPhoto].alt}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                  onClick={prevPhoto}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-black/70 transition-all shadow-lg z-10"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-black/70 transition-all shadow-lg z-10"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentPhoto ? 1 : -1);
                        setCurrentPhoto(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentPhoto
                          ? "bg-white w-6 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                      aria-label={`Go to photo ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
                Developing with focus, designing with love.
              </h3>

              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                <p>
                  I'm an aspiring full-stack web developer with a passion in
                  building modern web applications. I also love creating UI/UX
                  designs that are not only visually appealing but also
                  user-centered and accessible. To further expand my skill set,
                  I watch tutorials on platforms like YouTube and enroll in
                  online courses on Coursera. I am currently pursuing a Master’s
                  degree in Information Technology at Saint Louis University,
                  Philippines.
                </p>
                <p>
                  My approach to development focuses on identifying user needs
                  in order to create a user-centered web design. I believe in
                  continuous learning and staying up-to-date with the latest
                  technologies and best practices.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new trends and
                  technologies that push the boundaries of what's possible on
                  the web.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="mt-8 p-4 sm:p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {[
                    { name: "React", icon: SiReact, color: "#61DAFB" },
                    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
                    {
                      name: "Next.js",
                      icon: SiNextdotjs,
                      color: "#000000",
                      darkColor: "#FFFFFF",
                    },
                    {
                      name: "Javascript",
                      icon: SiJavascript,
                      color: "#F7DF1E",
                    },
                    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
                    { name: "Python", icon: SiPython, color: "#3776AB" },
                    {
                      name: "PostgreSQL",
                      icon: SiPostgresql,
                      color: "#4169E1",
                    },
                    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
                    { name: "Oracle SQL", icon: SiOracle, color: "#F80000" },
                    { name: "Docker", icon: SiDocker, color: "#2496ED" },
                    { name: "Git", icon: SiGit, color: "#F05032" },
                    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
                  ].map((tech) => (
                    <motion.div
                      key={tech.name}
                      className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_18px_rgba(96,165,250,0.4)] transition-all cursor-default group"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <tech.icon
                        className="w-4 h-4 sm:w-5 sm:h-5 transition-all group-hover:drop-shadow-[0_0_8px_var(--icon-glow)]"
                        style={{
                          color: tech.darkColor ? undefined : tech.color,
                          ["--icon-glow" as string]: tech.color,
                        }}
                      />
                      <span className="text-xs sm:text-sm font-medium">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
