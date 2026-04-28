"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const project = {
  title: "Aircraft Design Project",
  tags: ["MATLAB", "XFLR5", "Aerodynamics"],
  fullDesc: "Comprehensive aircraft design project involving aerodynamic analysis, structural sizing, and performance optimization. Used XFLR5 for stability analysis and developed custom MATLAB scripts for constraint diagrams and mission analysis.",
  gallery: [
    "/images/projects/aircraft-design.jpg",
    "/images/projects/aircraft-design-gallery-1.jpg",
    "/images/projects/aircraft-design-gallery-2.jpg",
    "/images/projects/aircraft-design-gallery-3.jpg",
  ],
}

const keyFeatures = [
  "Comprehensive aerodynamic analysis and structural sizing",
  "XFLR5 stability analysis for flight characteristics",
  "Custom MATLAB scripts for constraint diagrams",
  "Mission analysis and performance optimization",
]

export default function AircraftDesignPage() {
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
                  This comprehensive aircraft design project was undertaken as part of the aerospace 
                  engineering curriculum at TU Delft. The objective was to design a regional turboprop 
                  aircraft capable of carrying 50 passengers over a range of 1,500 kilometers while 
                  meeting stringent efficiency and environmental targets.
                </p>

                <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/projects/blog-placeholder-1.jpg"
                    alt="Constraint diagram analysis"
                    fill
                    className="object-cover"
                  />
                </div>

                <p>
                  The design process followed a systematic approach, beginning with market analysis 
                  and requirements definition, progressing through conceptual design, and culminating 
                  in detailed preliminary design with validated performance predictions.
                </p>

                <p>
                  A key innovation in this project was the development of custom MATLAB tools for 
                  automated constraint diagram generation and sensitivity analysis. These tools 
                  significantly accelerated the design iteration process and enabled rapid 
                  exploration of the design space.
                </p>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Aerodynamic Analysis
                </h3>

                <div className="sm:float-left sm:mr-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/projects/blog-placeholder-2.jpg"
                    alt="XFLR5 analysis results"
                    fill
                    className="object-cover"
                  />
                </div>

                <p>
                  XFLR5 was employed extensively for wing design optimization and stability analysis. 
                  The software enabled rapid evaluation of different planform configurations, twist 
                  distributions, and airfoil selections to maximize aerodynamic efficiency.
                </p>

                <p>
                  The final wing design features a moderate aspect ratio of 11 with a supercritical 
                  airfoil section optimized for the cruise Mach number. Winglets were incorporated 
                  to reduce induced drag, providing an estimated 4% improvement in cruise efficiency.
                </p>

                <p>
                  Stability derivatives were calculated using XFLR5 panel method analysis and 
                  validated against historical data from similar aircraft configurations. The 
                  results confirmed adequate static margins and acceptable dynamic characteristics 
                  across the flight envelope.
                </p>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Performance Optimization
                </h3>

                <p>
                  Mission analysis was conducted using custom MATLAB scripts that model the complete 
                  flight profile including taxi, takeoff, climb, cruise, descent, and landing phases. 
                  The code accounts for fuel burn, atmospheric variations, and aircraft weight changes 
                  throughout the mission.
                </p>

                <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/projects/blog-placeholder-3.jpg"
                    alt="Performance charts"
                    fill
                    className="object-cover"
                  />
                </div>

                <p>
                  Trade studies were performed to optimize the balance between structural weight, 
                  fuel efficiency, and passenger capacity. Sensitivity analysis revealed that wing 
                  loading and engine sizing were the most critical parameters affecting overall 
                  aircraft economics.
                </p>

                <p>
                  The final configuration achieves a block fuel consumption of 1.8 liters per 
                  100 passenger-kilometers, representing a 15% improvement over comparable 
                  aircraft currently in service.
                </p>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Lessons Learned
                </h3>

                <p>
                  This project reinforced the importance of systematic design methodology and the 
                  value of computational tools in modern aircraft design. The iterative nature of 
                  the process highlighted how early design decisions propagate through all subsequent 
                  phases, emphasizing the need for careful consideration during conceptual design.
                </p>

                <p>
                  Collaboration with team members from different specializations provided insight 
                  into the multidisciplinary nature of aircraft design and the importance of 
                  effective communication across engineering domains.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
