"use client"

import { useState, useRef } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/components/projects"
import { notFound } from "next/navigation"

// Main projects (1-6) have dedicated pages, this handles placeholder projects only
const mainProjectSlugs = [
  "uav-flying-wing",
  "aircraft-design-project", 
  "rocket-trajectory-simulator",
  "isa-atmosphere-calculator",
  "aerodynamic-analysis-tool",
  "flight-data-logger"
]

export default function ProjectPage() {
  const params = useParams()
  const slug = params.slug as string
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const galleryRef = useRef<HTMLDivElement>(null)
  
  // Redirect main projects to their dedicated pages (they won't hit this route)
  if (mainProjectSlugs.includes(slug)) {
    notFound()
  }
  
  const project = projects.find((p) => p.slug === slug)
  
  if (!project) {
    notFound()
  }

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
      {/* Header */}
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

      {/* Content */}
      <div className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Photo Gallery */}
            <div className="relative mb-8">
              {/* Gallery Container */}
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

              {/* Navigation Arrows */}
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

              {/* Dots Indicator */}
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
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {project.fullDesc}
              </p>

              {/* Project Details Section */}
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
                  {project.id === 1 && (
                    <>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Custom flight controller integration with ArduPilot firmware
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Auto-stabilization and waypoint navigation capabilities
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Composite materials construction for optimal weight-to-strength ratio
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Real-time telemetry systems for flight monitoring
                      </li>
                    </>
                  )}
                  {project.id === 2 && (
                    <>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Comprehensive aerodynamic analysis and structural sizing
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        XFLR5 stability analysis for flight characteristics
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Custom MATLAB scripts for constraint diagrams
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Mission analysis and performance optimization
                      </li>
                    </>
                  )}
                  {project.id === 3 && (
                    <>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Six degrees-of-freedom physics simulation
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Realistic thrust curves and atmospheric modeling
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Monte Carlo analysis for landing dispersion prediction
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Real-time flight path visualization
                      </li>
                    </>
                  )}
                  {project.id === 4 && (
                    <>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Full ISA model implementation up to 80km altitude
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Troposphere, stratosphere, and mesosphere calculations
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Temperature, pressure, and density computations
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Interactive parameter input and output display
                      </li>
                    </>
                  )}
                  {project.id === 5 && (
                    <>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Panel methods for airfoil analysis
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Thin airfoil theory calculations
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Lift, drag, and moment coefficient computation
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Viscous corrections for improved accuracy
                      </li>
                    </>
                  )}
                  {project.id === 6 && (
                    <>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        GPS, IMU, and barometric sensor integration
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        SD card storage for flight data logging
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Real-time wireless data transmission
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        Post-flight analysis software
                      </li>
                    </>
                  )}
                </ul>

                {/* Blog-style Content */}
                <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Project Overview
                  </h3>
                  
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur.
                  </p>

                  {/* Image floated right */}
                  <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                    <Image
                      src="/images/projects/blog-placeholder-1.jpg"
                      alt="Project detail"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit 
                    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
                    ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>

                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed 
                    quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
                    porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
                    velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam 
                    aliquam quaerat voluptatem.
                  </p>

                  <div className="clear-both" />

                  <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                    Technical Approach
                  </h3>

                  {/* Image floated left */}
                  <div className="sm:float-left sm:mr-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                    <Image
                      src="/images/projects/blog-placeholder-2.jpg"
                      alt="Technical diagram"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit 
                    laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure 
                    reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                  </p>

                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
                    excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui 
                    officia deserunt mollitia animi, id est laborum et dolorum fuga.
                  </p>

                  <p>
                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
                    cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod 
                    maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor 
                    repellendus.
                  </p>

                  <div className="clear-both" />

                  <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                    Results and Findings
                  </h3>

                  <p>
                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
                    saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. 
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
                    voluptatibus maiores alias consequatur aut perferendis doloribus asperiores 
                    repellat.
                  </p>

                  {/* Image floated right */}
                  <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                    <Image
                      src="/images/projects/blog-placeholder-3.jpg"
                      alt="Results visualization"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>

                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                    in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis 
                    unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                  </p>

                  <div className="clear-both" />

                  <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                    Lessons Learned
                  </h3>

                  <p>
                    Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia 
                    voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores 
                    eos qui ratione voluptatem sequi nesciunt.
                  </p>

                  <p>
                    HELLO
                  </p>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-12 pt-8 border-t border-border">
              <Link href="/#projects">
                <Button variant="outline" className="gap-2 bg-transparent">
                  <ArrowLeft className="w-4 h-4" />
                  Back to All Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
