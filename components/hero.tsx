"use client"

import { motion } from "framer-motion"

export function Hero() {
  return ( 
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden text-background"
    >
      {/* Background Image */}
      <img
        src="/images/F15 2.jpg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "80% center", transform: "scale(1.15)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div className="-translate-y-[3cm]">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-inherit tracking-tight mb-6 whitespace-nowrap">
              Viktor Van den Berghe
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-inherit max-w-2xl mx-auto leading-relaxed"
            >
              Second Year Aerospace Engineering Student at TU Delft
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 translate-y-[4cm]"
        >
          <motion.button
            onClick={() => {
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="group inline-flex items-center gap-2 text-sm text-inherit hover:opacity-80 transition-opacity"
            whileHover={{ y: 2 }}
          >
            <span>View Projects</span>
            <svg
              className="w-4 h-4 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}