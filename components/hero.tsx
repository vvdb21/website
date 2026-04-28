"use client"

import { motion } from "framer-motion"

export function Hero() {
  return ( 
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/F15.jpg')" }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/70 dark:bg-background/80" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6"
          >
            Aerospace Engineering Student
          </motion.p>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground tracking-tight mb-6 whitespace-nowrap">
            Viktor Van den Berghe
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3 text-lg sm:text-xl text-muted-foreground mb-8"
          >
            <span>Aerospace Engineering</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>TU Delft</span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Building rocket simulators, UAV controllers, and flight dynamics tools.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <motion.button
            onClick={() => {
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
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
