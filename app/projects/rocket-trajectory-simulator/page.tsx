"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const project = {
  title: "Rocket Trajectory Simulator",
  tags: ["Python", "NumPy", "Matplotlib", "Physics"],
  fullDesc: "Six degrees-of-freedom rocket trajectory simulator with realistic thrust curves, atmospheric modeling, and Monte Carlo analysis for landing dispersion. Includes visualization of flight path and real-time parameter tracking.",
  gallery: [
    "/images/projects/rocket-simulator.jpg",
    "/images/projects/rocket-simulator-gallery-1.jpg",
    "/images/projects/rocket-simulator-gallery-2.jpg",
    "/images/projects/rocket-simulator-gallery-3.jpg",
  ],
}

const keyFeatures = [
  "Six degrees-of-freedom physics simulation",
  "Realistic thrust curves and atmospheric modeling",
  "Monte Carlo analysis for landing dispersion prediction",
  "Real-time flight path visualization",
]

export default function RocketSimulatorPage() {
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
                  The Rocket Trajectory Simulator was developed to predict the flight path and landing 
                  location of sounding rockets and high-power amateur rockets. The simulation incorporates 
                  a full six degrees-of-freedom dynamics model, accounting for both translational and 
                  rotational motion throughout the flight.
                </p>

                <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/projects/blog-placeholder-1.jpg"
                    alt="Trajectory visualization"
                    fill
                    className="object-cover"
                  />
                </div>

                <p>
                  The motivation for this project came from participation in a student rocketry team, 
                  where accurate trajectory prediction is essential for safety planning and recovery 
                  operations. Commercial software options were either too expensive or lacked the 
                  flexibility needed for custom motor configurations.
                </p>

                <p>
                  Built entirely in Python using NumPy for numerical computations and Matplotlib for 
                  visualization, the simulator provides an accessible yet powerful tool for trajectory 
                  analysis and mission planning.
                </p>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Physics Engine
                </h3>

                <div className="sm:float-left sm:mr-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/projects/blog-placeholder-2.jpg"
                    alt="6DOF model diagram"
                    fill
                    className="object-cover"
                  />
                </div>

                <p>
                  The core physics engine solves the equations of motion using a fourth-order 
                  Runge-Kutta integration scheme. The state vector includes position, velocity, 
                  orientation (quaternions), and angular velocity, giving 13 state variables that 
                  are propagated at each time step.
                </p>

                <p>
                  Aerodynamic forces are computed using coefficient-based models with dependencies 
                  on Mach number and angle of attack. The atmospheric model implements the full 
                  International Standard Atmosphere with extensions for winds aloft based on 
                  historical weather data.
                </p>

                <p>
                  Thrust curves are imported from standard RASP engine files, with interpolation 
                  providing smooth thrust variation over time. Mass properties are updated 
                  dynamically as propellant is consumed, including shifts in center of gravity 
                  that affect stability.
                </p>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Monte Carlo Analysis
                </h3>

                <p>
                  One of the most valuable features is the Monte Carlo capability, which runs 
                  thousands of simulations with randomized input parameters to generate statistical 
                  landing dispersion ellipses. Parameters varied include wind speed and direction, 
                  motor performance, aerodynamic coefficients, and launch rail angle.
                </p>

                <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/projects/blog-placeholder-3.jpg"
                    alt="Monte Carlo results"
                    fill
                    className="object-cover"
                  />
                </div>

                <p>
                  Results are presented as confidence ellipses overlaid on a map, showing the 
                  probability of landing within certain distances from the nominal impact point. 
                  This information is critical for establishing safe recovery zones and obtaining 
                  launch permits from aviation authorities.
                </p>

                <p>
                  Parallel processing using Python multiprocessing library enables rapid execution 
                  of large Monte Carlo sets, typically completing 10,000 runs in under five minutes 
                  on a standard laptop computer.
                </p>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Validation and Results
                </h3>

                <p>
                  The simulator has been validated against flight data from several rocket launches, 
                  showing excellent agreement in apogee altitude (within 3%) and landing location 
                  (within the predicted 95% confidence ellipse in all cases).
                </p>

                <p>
                  The tool has been adopted by our student rocketry team for all mission planning 
                  activities and has contributed to successful launches reaching altitudes exceeding 
                  3 kilometers. Future development will focus on adding active guidance simulation 
                  for thrust vector controlled vehicles.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
