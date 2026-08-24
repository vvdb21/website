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
  Github,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const project = {
  title: "Internship Scanner",
  tags: ["Python", "Google Cloud Functions", "Telegram API", "Perplexity API"],
  fullDesc:
    "A fully automated, cloud-native pipeline that continuously scans the web for finance, consulting, and aerospace engineering internship opportunities across eight European countries — with a deliberate focus on boutique and lesser-known firms where competition is lower. Built on Google Cloud Functions with Perplexity AI search and a Telegram bot interface, the system has surfaced over 200 opportunities since launch at a total infrastructure cost of $0.82.",
  gallery: ["/images/Internship bot.jpeg"],
}

const stats = [
  { value: "200+", label: "internships found" },
  { value: "8", label: "countries covered" },
  { value: "$0.82", label: "total cost since March 2026" },
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
            <div className="relative mb-8">
              <div 
                ref={galleryRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[85%] sm:w-[80%] aspect-video rounded-2xl overflow-hidden snap-center relative bg-muted ring-1 ring-border shadow-md"
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
                {project.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToImage(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground w-2"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
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

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {project.fullDesc}
            </p>

            <div className="grid gap-4 md:grid-cols-3 mb-8">
              {stats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-card p-5 shadow-sm"
                >
                  <p className="text-3xl font-semibold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </article>
              ))}
            </div>

            <div className="bg-card backdrop-blur-xl border border-border shadow-sm rounded-2xl p-6 sm:p-8 mt-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">Project Details</h2>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                    <Wrench className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Technologies</h3>
                    <p className="text-foreground">Python, Google Cloud Functions, Telegram API, Perplexity API</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                    <FolderKanban className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Category</h3>
                    <p className="text-foreground">Coding</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                    <Activity className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Status</h3>
                    <p className="text-foreground">Active</p>
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
                <div className="flex items-start gap-3 sm:col-span-2">
                  <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                    <Github className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">GitHub</h3>
                    <a
                      href="https://github.com/vvdb21"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      https://github.com/vvdb21
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-8 text-muted-foreground leading-relaxed">
              <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Project Overview</h2>
                <p>
                  Manual internship hunting is slow, repetitive, and biased towards well-known firms - because those are the ones that show up in generic searches. This project replaces that process with an intelligent monitoring system that runs continuously in the background, proactively identifying and delivering relevant opportunities without any manual effort.
                </p>
                <p className="mt-4">
                  The bot covers management consulting, strategy consulting, investment banking, asset management, private equity, venture capital, hedge funds, and aerospace engineering roles across the UK, Belgium, Netherlands, France, Germany, Spain, Switzerland, and Italy. It targets penultimate-year undergraduate positions specifically, and deliberately prioritises boutique and SME firms alongside household names — the ones that are often overlooked but are significantly less competitive to apply to.
                </p>
              </section>

              <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">System Architecture</h2>
                <figure className="mb-4 rounded-2xl border border-border bg-background p-4 shadow-sm">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-muted sm:aspect-[3/4] md:aspect-[4/5]">
                    <Image
                      src="/images/telegram.jpeg"
                      alt="The Telegram bot interface — users receive alerts and interact with the system entirely from their phones."
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-muted-foreground">The Telegram bot interface — users receive alerts and interact with the system entirely from their phones.</figcaption>
                </figure>
                <p>
                  The system follows a modular, serverless design built on Google Cloud Functions. Five discrete endpoints handle different parts of the pipeline:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li><strong>/scan</strong> — the core scheduled function, triggered every three days by Cloud Scheduler. It queries the Perplexity AI API to search for new internship opportunities across the target sectors and geographies, processes the results, deduplicates against the existing database, and pushes alerts to all subscribers via Telegram.</li>
                  <li><strong>/scan_firms</strong> — an admin-triggered endpoint used at the start of each internship cycle to seed the database with opportunities from specific named firms. This bulk-seeds well-known large firms upfront, so that subsequent scheduled scans can focus on surfacing boutique and lesser-known opportunities not already in the system.</li>
                  <li><strong>/reply</strong> — handles all inbound Telegram messages. Users reply YES or NO to each alert to save or dismiss an opportunity, type APPLIED to retrieve their full saved list, and LEAVE or JOIN to manage their subscription.</li>
                  <li><strong>/remind</strong> — checks the database daily and sends personalised opening date reminders to relevant subscribers, both one week before and on the day an application window opens.</li>
                  <li><strong>/broadcast</strong> — an admin endpoint for sending a manual message to all subscribers.</li>
                </ul>
                <p className="mt-4">
                  All endpoints are secured with environment variables. The entire system runs idle between scheduled triggers, keeping infrastructure costs near zero.
                </p>
              </section>

              <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Scanning Engine</h2>
                <figure className="mb-4 rounded-2xl border border-border bg-background p-2 shadow-sm sm:p-3">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted sm:aspect-[16/9]">
                    <Image
                      src="/images/internship prompt.png"
                      alt="The structured prompt sent to Perplexity AI on each scan cycle, requesting a strict JSON response with all required opportunity fields."
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-muted-foreground">The structured prompt sent to Perplexity AI on each scan cycle, requesting a strict JSON response with all required opportunity fields.</figcaption>
                </figure>
                <p>
                  Each scan queries Perplexity AI&apos;s sonar-pro model with a structured prompt that requests a strict JSON response — no markdown, no preamble. The prompt specifies the target sectors, geographies, firm sizes, degree level, and year group, and instructs the model to source directly from company career pages, LinkedIn, Glassdoor, and Indeed. The system prompt enforces JSON-only output, and the response is parsed and validated before any data is written.
                </p>
                <p className="mt-4">
                  Each opportunity is returned with: firm name, role title, CV and cover letter requirements, application open and close dates, a direct URL to the application page, location, and firm size classification (large / boutique / SME).
                </p>
              </section>

              <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Deduplication &amp; Data Storage</h2>
                <figure className="mb-4 rounded-2xl border border-border bg-background p-2 shadow-sm sm:p-3">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted">
                    <Image
                      src="/images/database.jpeg"
                      alt="The Google Sheets backend, which serves as both the opportunity database and the admin dashboard."
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-muted-foreground">The Google Sheets backend, which serves as both the opportunity database and the admin dashboard.</figcaption>
                </figure>
                <p>
                  Because the system scans every three days, it frequently encounters listings that were already found in a previous cycle. A deduplication layer checks every incoming result against the full history of recorded entries in the Google Sheets database, matching on firm name and role title. Only genuinely new opportunities trigger a Telegram alert and a new database row.
                </p>
                <p className="mt-4">
                  Google Sheets serves as the persistent backend — storing opportunity IDs, firm and role details, application requirements, dates, URLs, firm size, status, and a per-opportunity record of which subscribers have saved it. This doubles as a lightweight admin dashboard, giving a live view of everything the system has found.
                </p>
              </section>

              <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Future Improvements</h2>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  <li><strong className="text-foreground">Intelligent fit filtering:</strong> Integrating NLP to score job descriptions against a target profile, allowing the system to rank and filter opportunities by cultural or technical fit before sending alerts.</li>
                  <li><strong className="text-foreground">Custom web dashboard:</strong> Replacing the Google Sheets interface with a purpose-built dashboard offering application funnel analytics and deadline visualisation.</li>
                  <li><strong className="text-foreground">Expanded scope:</strong> Extending the search parameters to cover graduate schemes and entry-level full-time roles, making the system useful beyond the internship lifecycle.</li>
                  <li><strong className="text-foreground">Improved reliability:</strong> Adding structured logging and error handling to provide proactive monitoring and automatic recovery from failed API calls or sync interruptions.</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
