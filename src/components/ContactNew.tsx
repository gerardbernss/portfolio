/**
 * ContactNew Component
 *
 * The contact section with multiple contact methods and a CTA button.
 * Features contact cards for email, phone, and location.
 *
 * Key Features:
 * - Three contact method cards: Email, Phone, Location
 * - Clickable email and phone cards (links to mailto: and tel:)
 * - Hover effects with border highlight and shadow glow
 * - Primary "Send me a message" CTA button
 * - Staggered entrance animations for cards
 * - Dual ambient glow effects
 *
 * Responsive Behavior:
 * - Mobile (<480px): Single column, full-width cards
 * - Tablet (480px+): Two columns, location spans both
 * - Desktop (lg+): Three equal columns
 * - Full-width CTA button on mobile, auto-width on larger screens
 */
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { SiGithub, SiLinkedin, SiMessenger } from "react-icons/si";

export default function ContactNew() {
  // Ref for scroll-triggered animations
  const ref = useRef(null);

  // Trigger animation when section enters viewport
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 bg-white/90 dark:bg-[#0a0a0a]/90 relative overflow-hidden"
    >
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
            Contact
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Let's work together
          </h3>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl">
            I'm currently available for new projects and opportunities. If you
            have a project in mind or just want to chat, feel free to reach out!
          </p>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-12">
            <motion.a
              href="mailto:gerardbernss@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-400 transition-all group hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_0_30px_rgba(96,165,250,0.25)]"
            >
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                Email
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                gerardbernss@gmail.com
              </p>
            </motion.a>

            <motion.a
              href="tel:+15551234567"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-400 transition-all group hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_0_30px_rgba(96,165,250,0.25)]"
            >
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                Phone
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                +639 (524) 816-545
              </p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.03)] dark:shadow-[0_0_20px_rgba(96,165,250,0.1)] min-[480px]:col-span-2 lg:col-span-1"
            >
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                Location
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Baguio City, Philippines
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-6 mt-8"
            >
              <a
                href="https://github.com/gerardbernss"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <SiGithub
                  className="w-7 h-7 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-all duration-300 group-hover:scale-110"
                  style={{ filter: "drop-shadow(0 0 0px transparent)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "drop-shadow(0 0 8px #333)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter =
                      "drop-shadow(0 0 0px transparent)";
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/gerardsbernal/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <SiLinkedin
                  className="w-7 h-7 text-gray-600 dark:text-gray-400 group-hover:text-[#0A66C2] transition-all duration-300 group-hover:scale-110"
                  style={{ filter: "drop-shadow(0 0 0px transparent)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter =
                      "drop-shadow(0 0 8px #0A66C2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter =
                      "drop-shadow(0 0 0px transparent)";
                  }}
                />
              </a>
              <a
                href="https://m.me/gerardbernss"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <SiMessenger
                  className="w-7 h-7 text-gray-600 dark:text-gray-400 group-hover:text-[#0099FF] transition-all duration-300 group-hover:scale-110"
                  style={{ filter: "drop-shadow(0 0 0px transparent)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter =
                      "drop-shadow(0 0 8px #0099FF)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter =
                      "drop-shadow(0 0 0px transparent)";
                  }}
                />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
