"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const project = {
  title: "ISA Atmosphere Calculator",
  tags: ["Python", "Atmospheric Science"],
  fullDesc: "International Standard Atmosphere calculator implementing the full ISA model including troposphere, stratosphere, and mesosphere layers. Computes temperature, pressure, and density at any altitude up to 80km.",
  gallery: [
    "/images/projects/isa-calculator.jpg",
    "/images/projects/isa-calculator-gallery-1.jpg",
    "/images/projects/isa-calculator-gallery-2.jpg",
    "/images/projects/isa-calculator-gallery-3.jpg",
  ],
}

const keyFeatures = [
  "Full ISA model implementation up to 80km altitude",
  "Troposphere, stratosphere, and mesosphere calculations",
  "Temperature, pressure, and density computations",
  "Interactive parameter input and output display",
]

export default function ISACalculatorPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const galleryRef = useRef<HTMLDivElement>(null)

  const scrollToImage = (index: number) => {
    setCurrentImageIndex(index)
    if (galleryRef.current) {
      const scrollAmount = index * (galleryRef.current.offsetWidth * 0.85 + 16)
      galleryRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const nextImage = () => {
    const newIndex = currentImageIndex < project.gallery.length - 1 ? currentImageIndex + 1 : 0
    scrollToImage(newIndex)
  }

  const prevImage = () => {
    const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : project.gallery.length - 1
    scrollToImage(newIndex)
  }

  return (
    <main className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center">
          <Link href="/#projects">
            <Button variant="ghost" className="gap-2 bg-transparent">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </header>

      <div className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Photo Gallery */}
            <div className="relative mb-8">
              <div 
                ref={galleryRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {project.gallery.map((image, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-[85%] sm:w-[80%] aspect-video rounded-2xl overflow-hidden snap-center relative bg-muted"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>

              <div className="flex justify-center gap-2 mt-4">
                {project.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToImage(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? "bg-primary" : "bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Title & Tags */}
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {project.fullDesc}
            </p>

            {/* Project Details */}
            <div className="bg-card backdrop-blur-xl border border-border rounded-2xl p-6 sm:p-8 mt-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Project Details
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Technologies</h3>
                  <p className="text-foreground">{project.tags.join(", ")}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Category</h3>
                  <p className="text-foreground">Aerospace Engineering</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Status</h3>
                  <p className="text-foreground">Completed</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Institution</h3>
                  <p className="text-foreground">TU Delft</p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="mt-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Key Features
              </h2>
              <ul className="space-y-3 text-muted-foreground mb-8">
                {keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Blog-style Content - EDIT YOUR CONTENT HERE */}
              <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Project Overview
                </h3>
                
                <p>
                  The International Standard Atmosphere (ISA) Calculator was developed as a 
                  fundamental tool for aerospace calculations requiring accurate atmospheric 
                  properties. The ISA model provides a standardized reference for temperature, 
                  pressure, and density as functions of altitude, essential for aircraft 
                  performance analysis and flight planning.
                </p>

                <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/projects/blog-placeholder-1.jpg"
                    alt="Atmospheric layers diagram"
                    fill
                    className="object-cover"
                  />
                </div>

                <p>
                  While simple ISA calculators are readily available, this implementation extends 
                  beyond the troposphere to include accurate modeling through the stratosphere 
                  and into the mesosphere, covering altitudes up to 80 kilometers. This extended 
                  range is crucial for high-altitude balloon and sounding rocket applications.
                </p>

                <p>
                  The calculator also supports non-standard atmospheric conditions through 
                  temperature offset parameters, allowing users to model hot day or cold day 
                  conditions that significantly impact aircraft takeoff performance.
                </p>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Mathematical Model
                </h3>

                <div className="sm:float-left sm:mr-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/projects/blog-placeholder-2.jpg"
                    alt="Temperature profile"
                    fill
                    className="object-cover"
                  />
                </div>

                <p>
                  The ISA divides the atmosphere into layers, each characterized by a linear 
                  temperature gradient (lapse rate). In the troposphere, temperature decreases 
                  at 6.5 degrees per kilometer. The tropopause marks a transition to the 
                  stratosphere, where temperature remains constant before increasing in the 
                  upper stratosphere due to ozone absorption of solar radiation.
                </p>

                <p>
                  Pressure variation follows from the hydrostatic equation, with different 
                  analytical solutions depending on whether the layer has a constant temperature 
                  or a linear temperature gradient. Density is then computed from the ideal gas 
                  law using the local temperature and pressure values.
                </p>

                <p>
                  The implementation carefully handles layer boundaries, ensuring continuous 
                  property values across transitions. All constants and reference values follow 
                  the ICAO standard atmosphere definition.
                </p>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Implementation Details
                </h3>

                <p>
                  The Python implementation uses a class-based design with methods for computing 
                  each atmospheric property. Input validation ensures altitude values are within 
                  the valid range, and meaningful error messages guide users when inputs are 
                  out of bounds.
                </p>

                <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/projects/blog-placeholder-3.jpg"
                    alt="Calculator interface"
                    fill
                    className="object-cover"
                  />
                </div>

                <p>
                  A command-line interface allows quick calculations for single altitudes, while 
                  batch processing mode generates tables of atmospheric properties over specified 
                  altitude ranges. Output can be formatted as CSV for import into spreadsheets 
                  or other analysis tools.
                </p>

                <p>
                  Visualization capabilities using Matplotlib generate plots of temperature, 
                  pressure, and density profiles, clearly showing the different atmospheric 
                  layers and their characteristics.
                </p>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Applications and Usage
                </h3>

                <p>
                  This calculator has become a foundational tool used across multiple projects, 
                  providing atmospheric data for trajectory simulations, aircraft performance 
                  calculations, and aerodynamic analysis. Its accuracy has been verified against 
                  published standard atmosphere tables with agreement to at least six significant 
                  figures.
                </p>

                <p>
                  The modular design allows easy integration into larger simulation frameworks, 
                  and the well-documented API enables other students to quickly incorporate 
                  atmospheric modeling into their own projects.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
