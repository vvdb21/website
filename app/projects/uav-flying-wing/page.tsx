"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const project = {
  title: "UAV Flying Wing",
  tags: ["Python", "ArduPilot", "CAD", "Composites"],
  fullDesc: "Designed and built an autonomous RC flying wing with custom flight controller integration. Features include auto-stabilization, waypoint navigation, and telemetry systems. Built using composite materials for optimal weight-to-strength ratio.",
  gallery: [
    "/images/projects/uav-flying-wing.jpg",
    "/images/projects/uav-flying-wing-gallery-1.jpg",
    "/images/projects/uav-flying-wing-gallery-2.jpg",
    "/images/projects/uav-flying-wing-gallery-3.jpg",
  ],
}

const keyFeatures = [
  "Custom flight controller integration with ArduPilot firmware",
  "Auto-stabilization and waypoint navigation capabilities",
  "Composite materials construction for optimal weight-to-strength ratio",
  "Real-time telemetry systems for flight monitoring",
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
                  The UAV Flying Wing project began as an ambitious effort to design and build a fully 
                  autonomous unmanned aerial vehicle from scratch. The flying wing configuration was 
                  chosen for its aerodynamic efficiency and inherent stability characteristics, making 
                  it ideal for long-endurance surveillance and mapping missions.
                </p>

                <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/projects/blog-placeholder-1.jpg"
                    alt="UAV assembly process"
                    fill
                    className="object-cover"
                  />
                </div>

                <p>
                  The airframe was constructed using carbon fiber composite materials, which provided 
                  an exceptional strength-to-weight ratio. The manufacturing process involved vacuum 
                  bagging and curing techniques to ensure consistent laminate quality throughout the 
                  structure.
                </p>

                <p>
                  Integration of the ArduPilot flight controller was a critical phase of the project. 
                  The open-source firmware allowed for extensive customization of flight parameters 
                  and autonomous behaviors, including automated takeoff and landing sequences.
                </p>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Technical Implementation
                </h3>

                <div className="sm:float-left sm:mr-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/projects/blog-placeholder-2.jpg"
                    alt="Flight controller setup"
                    fill
                    className="object-cover"
                  />
                </div>

                <p>
                  The flight control system utilizes a Pixhawk-based autopilot running ArduPilot 
                  firmware. Sensor fusion algorithms combine data from the IMU, GPS, barometer, and 
                  airspeed sensor to maintain stable flight in various weather conditions.
                </p>

                <p>
                  Custom Python scripts were developed for mission planning and real-time telemetry 
                  analysis. The ground station software displays live video feed, aircraft attitude, 
                  and GPS position on an interactive map interface.
                </p>

                <p>
                  Power management was carefully optimized to extend flight endurance. A 6S LiPo 
                  battery pack provides approximately 45 minutes of flight time under typical 
                  conditions, with the power distribution board monitoring cell voltages and 
                  triggering return-to-home if levels become critical.
                </p>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Flight Testing Results
                </h3>

                <p>
                  Initial flight tests were conducted at a designated RC flying field under controlled 
                  conditions. The aircraft demonstrated excellent stability in both manual and 
                  autonomous flight modes, with smooth transitions between waypoints.
                </p>

                <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/projects/blog-placeholder-3.jpg"
                    alt="Flight test data"
                    fill
                    className="object-cover"
                  />
                </div>

                <p>
                  Telemetry data analysis revealed that the aircraft consistently achieved its target 
                  cruise speed of 18 m/s while maintaining altitude within 2 meters of the commanded 
                  value. Wind gust rejection was particularly impressive, with the autopilot making 
                  rapid corrections to maintain heading and altitude.
                </p>

                <p>
                  The project culminated in a successful 30-minute autonomous mission covering a 
                  pre-planned survey route. All objectives were met, demonstrating the viability of 
                  the platform for aerial photography and mapping applications.
                </p>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Lessons Learned
                </h3>

                <p>
                  This project provided invaluable hands-on experience in aircraft design, composite 
                  manufacturing, and autonomous systems integration. Key takeaways include the 
                  importance of thorough ground testing before flight, the value of modular design 
                  for ease of maintenance, and the critical role of proper center of gravity 
                  positioning in flying wing configurations.
                </p>

                <p>
                  Future iterations will focus on extending range through more efficient propulsion 
                  systems and implementing advanced payload capabilities such as multispectral 
                  imaging sensors for agricultural applications.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
