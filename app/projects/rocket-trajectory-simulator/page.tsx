"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const project = {
  title: "Internship Scanner",
  tags: ["Python", "Google Cloud Functions", "Telegram API", "Perplexity API"],
  fullDesc: "An automated pipeline that continuously scans the web for finance and consulting internship opportunities across Europe, with a focus on lesser-known boutique firms where competition is lower. Built on Google Cloud Functions with a Perplexity AI search integration, the system delivers real-time alerts via Telegram, allowing subscribers to track and manage opportunities directly from their phones. Features include automated opening date reminders, two-way subscriber management, and a custom admin interface for targeted firm scanning — all running at near-zero cost.",
  gallery: [
    "/images/Internship bot.jpeg",
  ],
}

const keyFeatures = [
  "Perplexity AI integration for dynamic web scraping and opportunity discovery",
  "Hosted on Google Cloud Functions for scalable, serverless execution with minimal maintenance",
  "Real-time Telegram alerts for new internship postings, with interactive subscriber management",
  "Google Sheets database for tracking and managing internship applications and deadlines",
  "Code on my GitHub",
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
                  <p className="text-foreground">Coding</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Status</h3>
                  <p className="text-foreground">Completed</p>
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
                  The Internship Discovery & Management Bot is a fully automated, cloud-native 
                  pipeline designed to solve the inefficiency of manual job hunting in competitive 
                  finance and consulting markets. By replacing tedious, repetitive web searches with 
                  an intelligent monitoring system, the project ensures that users stay ahead of 
                  application windows—specifically targeting high-value opportunities at boutique 
                  firms that are often overlooked in mass-market searches. The system functions as 
                  a continuous intelligence layer, proactively identifying and filtering relevant 
                  roles from across the European market to deliver high-quality, actionable leads 
                  directly to the user.
                </p>

                <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-80 md:w-96 lg:w-[32rem] relative aspect-[16/10] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/database.jpeg"
                    alt="Google Sheets Database"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  System Architecture
                </h3>

                <div className="sm:float-left sm:mr-6 sm:mb-4 w-56 sm:w-64 md:w-72 relative aspect-[9/19.5] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/telegram.jpeg"
                    alt="Telegram bot user interface"
                    fill
                    className="object-contain"
                  />
                </div>

                <p>
                  The architecture follows a modular, serverless design centered on Google Cloud Functions, which 
                  execute discrete logic for scanning, notification, and data management. The research engine leverages 
                  the Perplexity AI API to perform automated web scraping and data extraction, with results processed 
                  through a deduplication layer to ensure only unique opportunities are recorded. This data is 
                  synchronized with a Google Sheets backend, which serves as both a database and an administrative 
                  dashboard for the pipeline. Inter-service communication is facilitated via Telegram 
                  API, providing a bidirectional interface that allows for immediate status updates and interaction. 
                  The entire infrastructure is orchestrated by Cloud Scheduler, which triggers periodic, low-cost scans 
                  while maintaining minimal overhead by remaining idle between operations.
                </p>


                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Deduplication
                </h3>

                <p>
                  A significant technical challenge in the project was designing a robust deduplication 
                  logic to handle redundant job postings across multiple search iterations. Because the 
                  system performs automated scans every three days, it frequently encounters the same 
                  internship listings that have not yet been removed from company career portals. 
                </p>


                <div className="sm:float-right sm:ml-6 sm:mb-4 sm:w-80 md:w-96 lg:w-[32rem] relative aspect-[16/10] rounded-xl overflow-hidden bg-muted mb-6">
                  <Image
                    src="/images/internship prompt.png"
                    alt="Internship Prompt"
                    fill
                    className="object-contain"
                  />
                </div>

                <p>I 
                  addressed this by implementing a custom hashing algorithm that evaluates a combination 
                  of unique identifiers—specifically the firm name and role title—against a persistent 
                  history of previously recorded entries in the Google Sheets database. This ensures 
                  that the system only alerts the user to fresh, unique opportunities, effectively
                  filtering out thousands of redundant signals and maintaining the integrity of the 
                  application pipeline.
                </p>



                <div className="clear-both" />

                <h3 className="font-display text-xl font-semibold text-foreground pt-4">
                  Future Improvements
                </h3>

                <p>
                  While the current system provides a robust framework for internship discovery, several potential 
                  enhancements could further refine its utility and scalability. These are ideas currently under 
                  consideration for future development:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Intelligent Filtering:</strong> Integrating advanced natural language processing to perform "fit" 
                    analysis on job descriptions, allowing for more granular filtering based on specific organizational 
                    culture or technical skill requirements.
                  </li>
                  <li>
                    <strong>Dedicated Dashboard:</strong> Transitioning from the current spreadsheet-based interface to a 
                    custom web dashboard, which would provide interactive application funnel analytics and advanced 
                    performance visualization.
                  </li>
                  <li>
                    <strong>Expanded Scope:</strong> Scaling the search parameters to track full-time graduate programs 
                    and entry-level career opportunities, extending the system's value beyond the student internship lifecycle.
                  </li>
                  <li>
                    <strong>Enhanced Reliability:</strong> Implementing a more sophisticated logging and error-handling suite 
                    to provide proactive monitoring, ensuring immediate recovery from failed API calls or synchronization 
                    interruptions.
                  </li>
                </ul>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
