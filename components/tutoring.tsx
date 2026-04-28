"use client"

import { motion } from "framer-motion"
import { BookOpen, Calculator, Atom, CheckCircle } from "lucide-react"

const subjects = [
  {
    icon: Atom,
    name: "IGCSE Physics",
    topics: ["Mechanics", "Waves", "Electricity", "Nuclear Physics"],
  },
  {
    icon: Calculator,
    name: "IGCSE Mathematics",
    topics: ["Algebra", "Geometry", "Trigonometry", "Statistics"],
  },
]

const benefits = [
  "Personalized one-on-one sessions",
  "Exam-focused preparation",
  "Clear explanations with real-world examples",
  "Flexible scheduling",
  "Practice problems and past papers",
]

export function Tutoring() {
  return (
    <section id="tutoring" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Tutoring Services
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            IGCSE Physics & Maths Tutoring
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Helping students build a strong foundation in physics and mathematics 
            with personalized tutoring sessions tailored to IGCSE curriculum.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Subjects */}
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card backdrop-blur-xl border border-border"
            >
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                <subject.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-card-foreground mb-3">
                {subject.name}
              </h3>
              <ul className="space-y-2">
                {subject.topics.map((topic) => (
                  <li key={topic} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              What You Get
            </h3>
            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        
      </div>
    </section>
  )
}
