"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const project = {
  title: "Flight Data Logger",
  tags: ["Arduino", "C++", "Python", "Electronics"],
  fullDesc: "Custom flight data logging system with GPS, IMU, and barometric sensors. Features SD card storage, real-time wireless transmission, and post-flight analysis software for reviewing flight performance.",
  gallery: [
    "/images/projects/flight-data-logger.jpg",
    "/images/projects/flight-data-logger-gallery-1.jpg",
    "/images/projects/flight-data-logger-gallery-2.jpg",
    "/images/projects/flight-data-logger-gallery-3.jpg",
  ],
}

const keyFeatures = [
  "GPS, IMU, and barometric sensor integration",
  "SD card storage for flight data logging",
  "Real-time wireless data transmission",
  "Post-flight analysis software",
]

export default function FlightDataLoggerPage() {
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
                  The Flight Data Logger project emerged from a need for reliable, affordable 
                  flight instrumentation for RC aircraft and amateur rockets. Commercial solutions 
                  were either prohibitively expensive or lacked the customization options needed 
                  for experimental vehicles with unique sensor requirements.
                </p>

                <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/projects/blog-placeholder-1.jpg"
                    alt="Logger PCB assembly"
                    fill
                    className="object-cover"
                  />
                </div>

                <p>
                  The system is built around a custom PCB integrating an Arduino-compatible 
                  microcontroller with GPS receiver, nine-axis IMU, barometric pressure sensor, 
                  and SD card interface. The compact design fits within typical RC aircraft 
                  fuselages while maintaining low weight for minimal performance impact.
                </p>

                <p>
                  A key design goal was robustness to the harsh vibration and acceleration 
                  environment experienced during flight. All components use automotive or 
                  industrial grade parts rated for extended temperature ranges and mechanical 
                  stress.
                </p>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Hardware Design
                </h3>

                <div className="sm:float-left sm:mr-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/projects/blog-placeholder-2.jpg"
                    alt="Sensor integration"
                    fill
                    className="object-cover"
                  />
                </div>

                <p>
                  The sensor suite includes a u-blox GPS module providing 10 Hz position updates, 
                  an InvenSense ICM-20948 nine-axis IMU sampling at 200 Hz, and a Bosch BMP388 
                  barometric sensor with 0.1 meter altitude resolution. Power regulation circuitry 
                  accepts battery voltages from 6V to 28V, covering most RC power systems.
                </p>

                <p>
                  Wireless telemetry uses a 915 MHz LoRa radio module, achieving reliable data 
                  transmission over distances exceeding 2 kilometers. The link provides real-time 
                  monitoring of critical parameters during flight, enabling immediate assessment 
                  of vehicle performance.
                </p>

                <p>
                  The PCB was designed using KiCAD and manufactured through a professional PCB 
                  fabrication service. Surface mount components were placed using a stencil and 
                  reflow soldering process for consistent quality.
                </p>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Firmware Development
                </h3>

                <p>
                  The Arduino-based firmware manages sensor polling, data logging, and telemetry 
                  transmission using a priority-based task scheduler. Time-critical operations 
                  like IMU sampling use hardware interrupts to ensure consistent timing regardless 
                  of other processing activities.
                </p>

                <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/projects/blog-placeholder-3.jpg"
                    alt="Ground station software"
                    fill
                    className="object-cover"
                  />
                </div>

                <p>
                  Data is logged to SD card in a binary format optimized for storage efficiency 
                  and fast write speeds. Flight events such as launch detection, apogee, and 
                  landing are automatically identified and marked in the log file.
                </p>

                <p>
                  Sensor fusion algorithms combine accelerometer, gyroscope, and magnetometer 
                  data to compute accurate attitude estimates even during dynamic maneuvers. 
                  GPS data is integrated to provide velocity and position estimates that remain 
                  accurate when GPS signal is temporarily lost.
                </p>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Analysis Software
                </h3>

                <p>
                  A companion Python application provides post-flight analysis capabilities 
                  including 3D trajectory visualization, parameter time histories, and flight 
                  statistics. The software imports binary log files and exports processed data 
                  in common formats for further analysis.
                </p>

                <p>
                  The system has been deployed on numerous flights, providing valuable data for 
                  performance validation and troubleshooting. Future development will add support 
                  for additional sensors and implement in-flight data processing for autonomous 
                  vehicle applications.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
