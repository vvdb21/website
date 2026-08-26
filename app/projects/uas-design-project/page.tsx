"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Wrench,
  FolderKanban,
  Activity,
  Building2,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const project = {
  title: "Unmanned Aerial System",
  tags: ["XFLR5", "Fusion 360", "3D Printing", "ArduPilot"],
  fullDesc: "Designed, built and tested a fully 3D printed UAS from scratch. The aircraft is a 1.4m wingspan, V-tail pusher configuration. AUW has been reduced from 2.5kg to 1.8kg across design iterations through reduction of printed wall thickness from 2 perimeters to 1. Constructed with 50 custom designed 3D printed parts, the goal was to create an airframe that could be rapidly reproduced and repaired using a simple desktop 3D printer, making it suitable for deployment in resource-limited environments.",
  gallery: [
      "/images/v3 front view.jpeg",
      "/images/UAV assembled snooker.jpeg",
      "/images/XFLR5 1.png",
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

const flightTest3Gallery = [
  "/images/test 3 1.jpeg",
  "/images/test 3 2.jpeg",
  "/images/test 3 3.jpeg",
  "/images/test 3 4.jpeg",
  "/images/test 3 5.jpeg",
]

function PhotoCarousel({
  images,
  altText,
}: {
  images: string[]
  altText: (index: number) => string
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const galleryRef = useRef<HTMLDivElement>(null)

  const scrollToImage = (index: number) => {
    setCurrentIndex(index)
    if (galleryRef.current) {
      const scrollAmount = index * (galleryRef.current.offsetWidth * 0.85 + 16)
      galleryRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const nextImage = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0
    scrollToImage(newIndex)
  }

  const prevImage = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1
    scrollToImage(newIndex)
  }

  return (
    <div className="relative">
      <div
        ref={galleryRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[85%] sm:w-[80%] aspect-video rounded-2xl overflow-hidden snap-center relative bg-muted ring-1 ring-border shadow-md"
          >
            <Image src={image} alt={altText(index)} fill className="object-cover" />
          </div>
        ))}
      </div>

      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-md flex items-center justify-center hover:bg-background hover:scale-105 transition-all"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-md flex items-center justify-center hover:bg-background hover:scale-105 transition-all"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToImage(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground w-2"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function UAVFlyingWingPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border shadow-sm">
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
            <div className="mb-8">
              <PhotoCarousel
                images={project.gallery}
                altText={(index) => `${project.title} - Image ${index + 1}`}
              />
            </div>

            {/* Title & Tags */}
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-sm font-medium rounded-full border border-primary/20 bg-primary/10 text-primary"
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
            <div className="bg-card backdrop-blur-xl border border-border shadow-sm rounded-2xl p-6 sm:p-8 mt-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Project Details
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                    <Wrench className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Technologies</h3>
                    <p className="text-foreground">{project.tags.join(", ")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                    <FolderKanban className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Category</h3>
                    <p className="text-foreground">Aerospace Engineering</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                    <Activity className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Status</h3>
                    <p className="text-foreground">v3 Redesign in Progress — 3 flight tests completed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                    <Building2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Institution</h3>
                    <p className="text-foreground">Independent Project</p>
                  </div>
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
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Blog-style Content - EDIT YOUR CONTENT HERE */}
              <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
                <h3 className="font-display text-xl font-semibold text-foreground border-l-2 border-primary pl-4">
                  Project Overview
                </h3>
                
                <p>
                  The UAV project began as a solo effort to design, build, and flight‑test a fully 3D‑printed 
                  unmanned aerial system from the ground up. The V‑tail pusher configuration was selected to 
                  balance aerodynamic efficiency, structural simplicity, and ease of manufacturing, while 
                  supporting manual and semi‑autonomous operation.  
                </p>

                <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted ring-1 ring-border shadow-sm mb-6">
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

                <h3 className="font-display text-xl font-semibold text-foreground pt-4 border-l-2 border-primary pl-4">
                  Technical Implementation
                </h3>

                <div className="sm:float-left sm:mr-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted ring-1 ring-border shadow-sm mb-6">
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
                  The flight controller supports GPS-assisted stabilisation and return-to-home functionality. Full
                  autonomous waypoint navigation is planned for a future test campaign following completion of
                  stabilised flight validation.
                </p>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4 border-l-2 border-primary pl-4">
                  Stability Analysis (XFLR5 — v3 Airframe)
                </h3>

                <p>
                  Analysis type: Type 7 Stability Analysis, VLM2 (lifting surfaces only). Condition: level flight at α = 0.10°, V = 17.43 m/s. Model mass: 1.386 kg (primary structural components and battery; excludes flight controller, FPV system, and minor hardware). Full AUW is approximately 1.8 kg.
                </p>

                <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted ring-1 ring-border shadow-sm mb-6">
                  <Image
                    src="/images/stability analysis.png"
                    alt="XFLR5 stability analysis chart"
                    fill
                    className="object-cover"
                  />
                </div>

                <h4 className="font-semibold text-foreground mt-4">Static Stability</h4>
                <p>
                  The neutral point (NP) is located at 0.078 m and the centre of pressure (CP) at 0.053 m aft of the reference point, giving a static margin of <strong>11.8% MAC</strong> (MAC = 0.211 m). This confirms the aircraft is statically stable in pitch — the NP lies ahead of the CP, meaning any pitch disturbance generates a restoring moment. An 11.8% margin sits comfortably within the 5–15% range typically targeted for stable fixed-wing UAVs.
                </p>
                <p>
                  This is supported by the pitch stability derivative <strong>Cmα = -0.531</strong>, which is negative as required — indicating the aircraft generates a nose-down pitching moment with increasing angle of attack. Directional stability is confirmed by <strong>Cnβ = +0.042</strong> and roll stability by <strong>Clβ = -0.015</strong>, a small dihedral effect consistent with a flat-wing design.
                </p>

                <h4 className="font-semibold text-foreground mt-4">Longitudinal Dynamic Modes</h4>
                <p>
                  <strong>Short period mode</strong> — Eigenvalue: −6.139 ± 8.412i | Frequency: 1.658 Hz | Damping ratio: 0.590. The short period mode is well-damped and will be largely imperceptible to the pilot in practice.
                </p>
                <p>
                  <strong>Phugoid mode</strong> — Eigenvalue: −0.006 ± 0.690i | Frequency: 0.110 Hz | Damping ratio: 0.008. The phugoid is lightly damped but stable, with a slow cycle that is easily corrected by the pilot or flight controller.
                </p>

                <h4 className="font-semibold text-foreground mt-4">Lateral Dynamic Modes</h4>
                <p>
                  <strong>Roll mode</strong> — Eigenvalue: −23.213 | Time constant: 0.043 s. This indicates responsive, predictable roll behaviour.
                </p>
                <p>
                  <strong>Dutch roll mode</strong> — Eigenvalue: −0.494 ± 5.139i | Frequency: 0.822 Hz | Damping ratio: 0.096. Stable and convergent, with further suppression expected from ArduPlane&apos;s yaw damper.
                </p>
                <p>
                  <strong>Spiral mode</strong> — Eigenvalue: +0.096 | Time to double: 7.2 s. The mild instability is manageable by both pilot and flight controller in stabilised mode.
                </p>

                <h4 className="font-semibold text-foreground mt-4">Summary</h4>
                <p>
                  All critical stability requirements are met. The aircraft is statically stable in pitch, roll and yaw. The short period mode is well-damped and the phugoid is stable with low frequency. Laterally, the roll and Dutch roll modes are stable; the spiral mode shows mild instability consistent with a flat-wing configuration, manageable by both pilot and flight controller. The analysis was conducted on a surfaces-only VLM2 model, so fuselage aerodynamic contributions remain a known limitation.
                </p>

                <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted ring-1 ring-border shadow-sm mb-6">
                  <Image
                    src="/images/uav disassembled.jpeg"
                    alt="Assembling the UAV"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4 border-l-2 border-primary pl-4">
                  Flight Testing Results
                </h3>

                <h4 className="font-semibold text-foreground">Flight Test 1</h4>
                <p>
                  The initial flight test resulted in the loss of the aircraft. Root cause analysis identified two contributing factors: the thrust vector from the motor acting below the centre of gravity, creating a pitch-up moment; and the cambered V-tail aerofoil generating downward lift, compounding the pitch-up tendency. The aircraft was recovered for redesign.
                </p>

                <h4 className="font-semibold text-foreground mt-4">Design Fixes (v2)</h4>
                <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted ring-1 ring-border shadow-sm mb-6">
                  <Image
                    src="/images/motor tilt.jpeg"
                    alt="Motor tilt redesign detail"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Motor mount tilted about 1.5 degrees to align the thrust vector directly through the centre of gravity</li>
                  <li>V-tail airfoil changed from cambered to symmetrical section to eliminate reduce overall downforce and improve handling consistency in yaw</li>
                </ul>

                <div className="clear-both" />

                <h4 className="font-semibold text-foreground mt-4">Flight Test 2</h4>
                <p>
                  The second flight test confirmed the aerodynamic fixes — the aircraft flew wings-level immediately after launch, validating both design changes. The flight ended in a crash attributed to insufficient launch speed and throttle input rather than any airframe issue. This was a launch procedure failure, not a design failure.
                </p>

                <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-64 md:w-80 relative aspect-[4/3] rounded-xl overflow-hidden bg-muted ring-1 ring-border shadow-sm mb-6">
                  <Image
                    src="/images/v3 test.jpeg"
                    alt="V3 flight test image"
                    fill
                    className="object-cover"
                  />
                </div>

                

                <div className="clear-both" />

                <h4 className="font-semibold text-foreground mt-4">Flight Test 3</h4>
                <p>
                  Tested again and lost the aircraft again, this time to a hand-launch at too steep an angle, which led to an unrecoverable stall before impact. The airframe and aerodynamics aren&apos;t suspected: there have been no design changes since the last test, and this crash matched the same profile and cause as the previous one, pointing to launch technique rather than the aircraft itself.
                </p>

                <div className="mt-6">
                  <PhotoCarousel
                    images={flightTest3Gallery}
                    altText={(index) => `Test flight 3 — launch sequence, photo ${index + 1}`}
                  />
                </div>

                <div className="clear-both" />

                <h4 className="font-semibold text-foreground mt-4">Current Status</h4>
                <p>
                  Reprint and relaunch, potentially reaching out to someone with more hand-launching experience for a bit of help. 
                </p>

                <h3 className="font-display text-xl font-semibold text-foreground pt-4 border-l-2 border-primary pl-4">
                  Lessons Learned
                </h3>

                <p>
                  The three flight test campaigns reinforced the importance of systematic root cause analysis during iterative trial and error. The v1 pitch-up failure was initially attributed to pilot error, but closer analysis revealed two independent aerodynamic causes, both of which were resolved in v2. The v2 wings-level flight confirmed this diagnosis, and the matching failure mode in Flight Test 3 reinforced that the airframe itself is sound. Future test campaigns will include onboard data logging and multi-angle video to reduce reliance on visual observation for post-flight analysis.
                </p>

                
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
