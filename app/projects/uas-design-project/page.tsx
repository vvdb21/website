"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const project = {
  title: "Unmanned Aerial System",
  tags: ["XFLR5", "Fusion 360", "3D Printing", "ArduPilot"],
  fullDesc: "Designed, built and tested a fully 3D printed UAS from scratch. The aircraft is 1.4m wingspan, V-tail pusher configuration with an AUW of ~2.5kg. Constructed with 50 custom designed 3D printed parts, the goal was to create an airframe that could be rapidly reproduced and repaired using a simple desktop 3D printer, making it suitable for deployment in resource-limited environments.",
  gallery: [
      "/images/UAV assembled snooker.jpeg",
      "/images/UAV test living.jpeg",
      "/images/UAV CAD Iso.jpeg",
      "/images/UAV CAD top.jpeg",
    ],
}

const keyFeatures = [
  "Material: pre-foamed LW-PLA + carbon fiber wing and tail spars",
  "5000mAh 4S LiPo battery for ~45 minutes flight time",
  "SpeedyBee F405 Wing flight controller with ArduPilot firmware",
  "On board FPV camera with 5.8GHz video transmitter for real-time telemetry and video feed",
]

export default function UAVFlyingWingPage() {
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
                  <p className="text-foreground">Redesign in Progress</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Institution</h3>
                  <p className="text-foreground">Independent Project</p>
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
                  The UAV project began as a solo effort to design, build, and flight‑test a fully 3D‑printed 
                  unmanned aerial system from the ground up. The V‑tail pusher configuration was selected to 
                  balance aerodynamic efficiency, structural simplicity, and ease of manufacturing, while 
                  supporting manual and semi‑autonomous operation.  
                </p>

                <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/living table.jpeg"
                    alt="UAV assembly process"
                    fill
                    className="object-cover"
                  />
                </div>

                <p>
                  The airframe was constructed entirely from 50 custom 3D‑printed parts, optimized for additive 
                  manufacturing constraints and rapid assembly. Each component was designed to snap or bolt 
                  together, enabling quick repairs and straightforward replacement of damaged sections in the 
                  field.  
                </p>

                <p>
                  Integration of the flight controller, receiver, and telemetry electronics formed a core phase 
                  of the project. The system was laid out to minimize wiring length, reduce interference, and 
                  keep the center of gravity within the required envelope, while allowing for future upgrades 
                  and sensor additions.
                </p>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Technical Implementation
                </h3>

                <div className="sm:float-left sm:mr-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/uav tail.jpeg"
                    alt="V-tail design"
                    fill
                    className="object-cover"
                  />
                </div>

                <p>
                  The flight control system utilizes a SpeedyBee F405 Wing APP board running ArduPilot 
                  firmware. Sensor fusion algorithms combine data from the IMU, GPS and barometer to maintain 
                  stable flight in various weather conditions.
                </p>

                <p>
                  Ground station displays real-time telemetry data, including altitude, airspeed, battery voltage, 
                  GPS coordinates and more on a laptop screen. The same data is also overlayed on the pilot's FPV 
                  video feed, providing critical situational awareness during flight operations.
                </p>

                <p>
                  The onboard GPS allows fully autonomous waypoint navigation, enabling the aircraft to execute pre‑planned 
                  missions without manual input. It also allows for return‑to‑home functionality in case of signal loss or 
                  low battery, enhancing safety and reliability.
                </p>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Flight Testing Results
                </h3>

                <p>
                  The intial flight test resulted in the loss of the aircraft, most likely due to a combination of pilot error
                  and suboptimal center of gravity placement. The aircraft was recovered and underwent a redesign to address these 
                  issues, namely by reducing wall thickness of printed parts to increase the contribution of the battery to the 
                  overall center of gravity. Second flight test is planned for May 2026.
                  
                </p>

                <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/uav disassembled.jpeg"
                    alt="Assembling the UAV"
                    fill
                    className="object-cover"
                  />
                </div>

                <p>
                  Improvements will be made to the flight test setup to allow for better data collection and analysis. This includes the 
                  addition of an SD card on the flight controller to log detailed flight data for post‑flight analysis, as well as the 
                  addition of several cameras to capture different angles of the flight for visual inspection and performance evaluation.
                </p>


                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Lessons Learned
                </h3>

                <p>
                  The project is still a work in progress.
                </p>

                
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
