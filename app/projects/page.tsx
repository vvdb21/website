"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/components/projects"

// Sort projects by start date (newest first)
const sortedProjects = [...projects].sort((a, b) => {
  return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
})

// Group projects by year-month for display
function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" })
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative pt-24 pb-12 px-4 border-b border-border overflow-hidden">
        {/* Decorative background glow */}
        <div className="pointer-events-none absolute -top-32 right-0 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -top-16 -left-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          <Link href="/#projects">
            <Button variant="ghost" size="sm" className="mb-6 gap-2 bg-transparent">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary to-accent mb-5" />
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              All Projects
            </h1>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              A comprehensive collection of my aerospace engineering projects,
              ordered by start date. Click on any project to learn more about
              the technical details and development process.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/projects/${project.slug}`}>
                  <motion.div
                    className="group relative w-full text-left p-6 rounded-2xl bg-card backdrop-blur-xl border border-border shadow-sm hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden cursor-pointer h-full"
                    whileHover={{ scale: 1.02, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="aspect-video rounded-xl ring-1 ring-border/60 bg-muted/50 mb-4 overflow-hidden relative">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/90 backdrop-blur-sm border border-border/60 flex items-center justify-center opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4 text-foreground" />
                        </div>
                      </div>

                      {/* Date Badge */}
                      <div className="inline-flex w-fit items-center gap-1.5 text-xs text-muted-foreground mb-3 px-2.5 py-1 rounded-full bg-muted/60 border border-border/50">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(project.startDate)}</span>
                      </div>

                      <h3 className="font-display text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                        {project.shortDesc}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-xs rounded-full border border-border/60 bg-muted/50 text-muted-foreground group-hover:border-primary/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
