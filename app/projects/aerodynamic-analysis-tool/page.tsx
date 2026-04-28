"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const project = {
  title: "Aerodynamic Analysis Tool",
  tags: ["MATLAB", "Aerodynamics", "GUI"],
  fullDesc: "Interactive tool for analyzing airfoil performance using panel methods and thin airfoil theory. Calculates lift, drag, and moment coefficients across a range of angles of attack with viscous corrections.",
  gallery: [
    "/images/projects/aerodynamic-tool.jpg",
    "/images/projects/aerodynamic-tool-gallery-1.jpg",
    "/images/projects/aerodynamic-tool-gallery-2.jpg",
    "/images/projects/aerodynamic-tool-gallery-3.jpg",
  ],
}

const keyFeatures = [
  "Panel methods for airfoil analysis",
  "Thin airfoil theory calculations",
  "Lift, drag, and moment coefficient computation",
  "Viscous corrections for improved accuracy",
]

export default function AerodynamicToolPage() {
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
                  The Aerodynamic Analysis Tool provides a comprehensive suite of capabilities 
                  for airfoil performance prediction. Developed in MATLAB with a graphical user 
                  interface, it enables rapid evaluation of different airfoil designs without 
                  requiring expertise in computational fluid dynamics.
                </p>

                <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/projects/blog-placeholder-1.jpg"
                    alt="Airfoil pressure distribution"
                    fill
                    className="object-cover"
                  />
                </div>

                <p>
                  The tool addresses a common need in aerospace education where students require 
                  quick aerodynamic analysis capabilities but commercial CFD software is either 
                  unavailable or too complex for basic airfoil studies. This solution bridges 
                  that gap with an accessible yet technically rigorous approach.
                </p>

                <p>
                  Users can input airfoils from the NACA 4-digit and 5-digit series using 
                  parametric definitions, or import custom airfoil coordinates from standard 
                  Selig format files. The extensive UIUC airfoil database compatibility ensures 
                  access to thousands of documented airfoil designs.
                </p>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Panel Method Implementation
                </h3>

                <div className="sm:float-left sm:mr-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/projects/blog-placeholder-2.jpg"
                    alt="Panel discretization"
                    fill
                    className="object-cover"
                  />
                </div>

                <p>
                  At the core of the tool is a constant-strength vortex panel method that 
                  discretizes the airfoil surface into linear panels. Each panel carries a 
                  vorticity distribution that satisfies the flow tangency boundary condition, 
                  ensuring no flow passes through the airfoil surface.
                </p>

                <p>
                  The Kutta condition is enforced at the trailing edge by requiring equal and 
                  opposite vorticity on the upper and lower surface panels, ensuring smooth flow 
                  departure and finite circulation. This condition is essential for obtaining 
                  physically realistic lift predictions.
                </p>

                <p>
                  The resulting linear system is solved using standard matrix methods, yielding 
                  the circulation distribution and hence the pressure coefficient at each panel. 
                  Integration of the pressure distribution gives the lift and pitching moment 
                  coefficients.
                </p>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Viscous Corrections
                </h3>

                <p>
                  While panel methods capture inviscid flow physics accurately, real airfoils 
                  experience viscous effects that significantly impact performance. The tool 
                  incorporates boundary layer calculations using integral methods to predict 
                  skin friction drag and flow separation.
                </p>

                <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/projects/blog-placeholder-3.jpg"
                    alt="Drag polar results"
                    fill
                    className="object-cover"
                  />
                </div>

                <p>
                  Transition prediction uses empirical correlations based on the pressure 
                  gradient and Reynolds number, identifying where the laminar boundary layer 
                  becomes turbulent. This transition location critically affects both drag and 
                  maximum lift capability.
                </p>

                <p>
                  The combination of inviscid panel results with viscous corrections produces 
                  drag polars that show excellent agreement with experimental wind tunnel data 
                  across a wide range of Reynolds numbers and angles of attack.
                </p>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  User Interface and Visualization
                </h3>

                <p>
                  The MATLAB GUI provides an intuitive workflow for airfoil analysis. Users 
                  select or define an airfoil, specify flow conditions (Reynolds number, Mach 
                  number), and execute the analysis with a single button click. Results appear 
                  immediately in integrated plot windows.
                </p>

                <p>
                  Visualization options include pressure distribution plots, velocity vector 
                  fields, and polar diagrams showing lift, drag, and moment coefficients versus 
                  angle of attack. All plots can be exported in publication-quality formats for 
                  use in reports and presentations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
