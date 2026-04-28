"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const project = {
  title: "Availability Analysis of an Free Space Optical Communication Link in Delft, Netherlands",
  tags: ["Python", "Research", "Data Analysis"],
  fullDesc: "Contributed to analyzing optical turbulence data for free‑space optical communication (FSOC) link availability, using rooftop measurements of Rytov variance and other parameters from TU Delft's optical ground station. I authored the Atmospheric Turbulence section and introduction for the literature review, synthesizing complex research into concise summaries, and created Python visualizations including seasonal/daily availability graphs and multi‑year Rytov variance comparisons. The work highlighted real‑world applications in satellite and horizontal optical links, strengthening my skills in data analysis, scientific writing, and group collaboration.",
  gallery: [
      "/images/ae tu delft.jpg",
      "/images/scint.jpg",
      "/images/rytov availability.png",
      "/images/rytov distribution.png",
    ],
}

const keyFeatures = [
  "650+GB of data analysed from TU Delft's optical ground station",
  "Data from 1km horizontal link and Polaris vertical link",
  "1000+ lines of Python code for data processing and visualization",
  "Research paper produced, aiming to publish in a peer-reviewed journal",
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
                  <p className="text-foreground">In Progress</p>
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
                  This study addresses the critical challenge of limited radio frequency (RF) spectrum capacity 
                  by evaluating free-space optical communication (FSOC) as a high-bandwidth alternative. While 
                  optical frequencies offer immense potential for high-speed data transfer, their performance is 
                  significantly hindered by atmospheric turbulence—specifically refractive index fluctuations 
                  that cause scintillation and beam wander. The project aims to quantify FSOC link availability 
                  in Delft, the Netherlands, by analyzing turbulence data collected from ground-based sensors on 
                  the TU Delft Aerospace Engineering faculty building.
                </p>

                <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/projects/blog-placeholder-1.jpg"
                    alt="Constraint diagram analysis"
                    fill
                    className="object-cover"
                  />
                </div>

               

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  FSOC Performance and Atmospheric Turbulence
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
                  RF technology is traditionally preferred due to its long wavelengths, which are less 
                  susceptible to atmospheric disturbances than the shorter wavelengths used in optical 
                  systems. In contrast, optical frequencies (0.5–5 µm) are highly sensitive to temperature, 
                  humidity, and density fluctuations, which generate small-scale eddies that severely 
                  distort beam propagation. Overcoming these turbulence-induced outages is essential to 
                  unlocking the 100 THz of bandwidth offered by optical communication for Earth-to-space links.
                </p>


                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Methodology and Measurement Setup
                </h3>

                <p>
                  To establish reliable, region-specific FSOC availability data, the study utilizes two complementary 
                  measurement methods. A horizontal link spanning 1 km to Delftechpark employs a scintillometer to 
                  derive the atmospheric structure constant (Cₙ²) and the Rytov variance (σ<sub>R</sub><sup>2</sup>), 
                  providing a direct measure of scintillation strength. Concurrently, vertical link data is obtained 
                  using infrared cameras to observe Polaris, allowing for the calculation of the Fried parameter (r₀)—a 
                  critical indicator of atmospheric coherence and link stability.
                </p>

                <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/projects/blog-placeholder-3.jpg"
                    alt="Performance charts"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Data Analysis and Link Availability
                </h3>

                <p>
                  The research evaluates the probability and cumulative density functions of 
                  both horizontal and vertical turbulence measurements to establish month-by-month 
                  and time-of-day performance rankings. By correlating these metrics, the study 
                  identifies the optimal operational windows for reliable FSOC transmission in 
                  mid-latitude European environments. Additionally, it investigates the feasibility 
                  of deriving supplementary optical parameters from existing rooftop instrumentation 
                  to further improve the understanding of satellite and horizontal link availability.
                </p>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
