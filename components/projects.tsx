"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const projects = [
  {
    id: 1,
    slug: "uav-flying-wing",
    title: "Unmanned Aerial System",
    shortDesc: "Design, build and test of autonomous RC aircraft",
    fullDesc: "Designed, built and tested a fully 3D printed UAS from scratch. The aircraft is 1.4m wingspan, V-tail pusher configuration with an AUW of ~2.5kg. Constructed 50 custom designed 3D printed parts, the goal was to create an airframe that could be rapidly reproduced and repaired using a simple desktop 3D printer, making it suitable for deployment in resource-limited environments.",
    tags: ["XFLR5", "Fusion 360", "3D Printing", "ArduPilot"],
    color: "from-blue-500/20 to-cyan-500/20",
    image: "/images/UAV assembled snooker.jpeg",
    startDate: "2026-01",
    gallery: [
      "/images/UAV assembled snooker.jpeg",
      "/images/UAV test living.jpeg",
      "/images/UAV CAD Iso.jpeg",
      "/images/UAV CAD top.jpeg",
    ],
  },
  {
    id: 2,
    slug: "aircraft-design-project",
    title: "FSOC Link Analysis",
    shortDesc: "Free Space Optical Communication Research",
    fullDesc: "Contributed to analyzing optical turbulence data for free‑space optical communication (FSOC) link availability, using rooftop measurements of Rytov variance and other parameters from TU Delft's optical ground station. I authored the Atmospheric Turbulence section and introduction for the literature review, synthesizing complex research into concise summaries, and created Python visualizations including seasonal/daily availability graphs and multi‑year Rytov variance comparisons. The work highlighted real‑world applications in satellite and horizontal optical links, strengthening my skills in data analysis, scientific writing, and group collaboration.",
    tags: ["Python", "Research", "Data Analysis"],
    color: "from-indigo-500/20 to-purple-500/20",
    image: "/images/ae tu delft.jpg",
    startDate: "2026-02",
    gallery: [
      "/images/ae tu delft.jpg",
      "/images/scint.jpg",
      "/images/rytov availability.png",
      "/images/rytov distribution.png",
    ],
  },
  {
    id: 3,
    slug: "rocket-trajectory-simulator",
    title: "Internship Scanner",
    shortDesc: "Automated internship opportunity finder and tracker",
    fullDesc: "An automated pipeline that continuously scans the web for finance and consulting internship opportunities across Europe, with a focus on lesser-known boutique firms where competition is lower. Built on Google Cloud Functions with a Perplexity AI search integration, the system delivers real-time alerts via Telegram, allowing subscribers to track and manage opportunities directly from their phones. Features include automated opening date reminders, two-way subscriber management, and a custom admin interface for targeted firm scanning — all running at near-zero cost.",
    tags: ["Python", "Google Cloud Functions", "Telegram API", "Perplexity API"],
    color: "from-orange-500/20 to-red-500/20",
    image: "/images/Internship bot.jpeg",
    startDate: "2026-03",
    gallery: [
      "/images/Internship bot.jpeg",
    ],
  },
  
  {
    id: 4,
    slug: "isa-atmosphere-calculator",
    title: "ISA Atmosphere Calculator",
    shortDesc: "Multi-layer atmosphere model",
    fullDesc: "International Standard Atmosphere calculator implementing the full ISA model including troposphere, stratosphere, and mesosphere layers. Computes temperature, pressure, and density at any altitude up to 80km.",
    tags: ["Python", "Atmospheric Science"],
    color: "from-emerald-500/20 to-teal-500/20",
    image: "/images/projects/isa-calculator.jpg",
    startDate: "2024-11",
    gallery: [
      "/images/projects/isa-calculator.jpg",
      "/images/projects/isa-calculator-gallery-1.jpg",
      "/images/projects/isa-calculator-gallery-2.jpg",
      "/images/projects/isa-calculator-gallery-3.jpg",
    ],
  },
  {
    id: 5,
    slug: "aerodynamic-analysis-tool",
    title: "Aerodynamic Analysis Tool",
    shortDesc: "Airfoil calculator",
    fullDesc: "Interactive tool for analyzing airfoil performance using panel methods and thin airfoil theory. Calculates lift, drag, and moment coefficients across a range of angles of attack with viscous corrections.",
    tags: ["MATLAB", "Aerodynamics", "GUI"],
    color: "from-violet-500/20 to-pink-500/20",
    image: "/images/projects/aerodynamic-tool.jpg",
    startDate: "2024-08",
    gallery: [
      "/images/projects/aerodynamic-tool.jpg",
      "/images/projects/aerodynamic-tool-gallery-1.jpg",
      "/images/projects/aerodynamic-tool-gallery-2.jpg",
      "/images/projects/aerodynamic-tool-gallery-3.jpg",
    ],
  },
  
  {
    id: 6,
    slug: "flight-data-logger",
    title: "Flight Data Logger",
    shortDesc: "Real-time telemetry system",
    fullDesc: "Custom flight data logging system with GPS, IMU, and barometric sensors. Features SD card storage, real-time wireless transmission, and post-flight analysis software for reviewing flight performance.",
    tags: ["Arduino", "C++", "Python", "Electronics"],
    color: "from-sky-500/20 to-blue-500/20",
    image: "/images/projects/flight-data-logger.jpg",
    startDate: "2024-05",
    gallery: [
      "/images/projects/flight-data-logger.jpg",
      "/images/projects/flight-data-logger-gallery-1.jpg",
      "/images/projects/flight-data-logger-gallery-2.jpg",
      "/images/projects/flight-data-logger-gallery-3.jpg",
    ],
  },
  /*
  {
    id: 7,
    slug: "project-placeholder-7",
    title: "Project Placeholder 7",
    shortDesc: "Description coming soon",
    fullDesc: "Full project description will be added here.",
    tags: ["TBD"],
    color: "from-slate-500/20 to-gray-500/20",
    image: "/images/projects/placeholder.jpg",
    startDate: "2024-04",
    gallery: [],
  },
  {
    id: 8,
    slug: "project-placeholder-8",
    title: "Project Placeholder 8",
    shortDesc: "Description coming soon",
    fullDesc: "Full project description will be added here.",
    tags: ["TBD"],
    color: "from-slate-500/20 to-gray-500/20",
    image: "/images/projects/placeholder.jpg",
    startDate: "2024-02",
    gallery: [],
  },
  {
    id: 9,
    slug: "project-placeholder-9",
    title: "Project Placeholder 9",
    shortDesc: "Description coming soon",
    fullDesc: "Full project description will be added here.",
    tags: ["TBD"],
    color: "from-slate-500/20 to-gray-500/20",
    image: "/images/projects/placeholder.jpg",
    startDate: "2023-12",
    gallery: [],
  },
  {
    id: 10,
    slug: "project-placeholder-10",
    title: "Project Placeholder 10",
    shortDesc: "Description coming soon",
    fullDesc: "Full project description will be added here.",
    tags: ["TBD"],
    color: "from-slate-500/20 to-gray-500/20",
    image: "/images/projects/placeholder.jpg",
    startDate: "2023-10",
    gallery: [],
  },
  {
    id: 11,
    slug: "project-placeholder-11",
    title: "Project Placeholder 11",
    shortDesc: "Description coming soon",
    fullDesc: "Full project description will be added here.",
    tags: ["TBD"],
    color: "from-slate-500/20 to-gray-500/20",
    image: "/images/projects/placeholder.jpg",
    startDate: "2023-08",
    gallery: [],
  },
  {
    id: 12,
    slug: "project-placeholder-12",
    title: "Project Placeholder 12",
    shortDesc: "Description coming soon",
    fullDesc: "Full project description will be added here.",
    tags: ["TBD"],
    color: "from-slate-500/20 to-gray-500/20",
    image: "/images/projects/placeholder.jpg",
    startDate: "2023-06",
    gallery: [],
  },
  */
]

// Featured projects shown on homepage (first 3)
export const featuredProjects = projects.slice(0, 3)

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-xl">
            {/* A collection of aerospace engineering projects spanning flight simulation, 
            aircraft design, and autonomous systems. */}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`}>
                <motion.div
                  className="group relative w-full text-left p-6 rounded-2xl bg-card backdrop-blur-xl border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="aspect-video rounded-lg bg-muted/50 mb-4 overflow-hidden relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    <h3 className="font-display text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.shortDesc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Link href="/projects">
            <Button variant="outline" size="lg" className="gap-2 bg-transparent">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
