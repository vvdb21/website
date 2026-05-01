"use client"

import { motion } from "framer-motion"
import { GraduationCap, Code, Wrench, Rocket, Briefcase, BookOpen } from "lucide-react"

const skills = {
  programming: ["Python", "PyTorch", "Sklearn"],
  engineering: ["CAD (CATIA, Fusion 360, Solidworks, Onshape)", "XFLR5", "3D printing", "Wind tunnel testing"],
  /*tools: ["Git", "LaTeX", "Arduino", "Linux"],*/
}

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About
          </h2>
          {/* <p className="text-muted-foreground max-w-xl">
            Passionate about aerospace engineering and building things that fly.
          </p>*/}
        </motion.div>

        {/* Education & Experience Row */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Education</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card backdrop-blur-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">
                      Delft University of Technology
                    </h4>
                    <p className="text-primary font-medium mb-2">
                      BSc Aerospace Engineering <span className="text-muted-foreground font-normal">| Netherlands | 2024 - 2028</span>
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc list-outside ml-4 space-y-1">
                      <li>GPA: 7.0/10.0</li>
                      <li>ACT: 33/36 (98th percentile, 100% in Science)</li>
                      <li>See projects section</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-card backdrop-blur-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-secondary shrink-0">
                    <GraduationCap className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">
                      Harrow School
                    </h4>
                    <p className="text-primary font-medium mb-2">
                      A-Levels and (I)GCSEs <span className="text-muted-foreground font-normal">| London | 2019 - 2024</span>
                    </p>
                    <p className="text-muted-foreground text-sm mb-2">
                      A-Level Maths (A*), Physics (A), Design & Technology (A), Economics (A) | IGCSEs: 9 A*s, 1 A
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc list-outside ml-4 space-y-1">
                      <li>School Ski Team (invited to England training camp), Royal Marines CCF, accepted to UChicago 
                      'Emerging World Leaders' program and Imperial College London STEM program, among others</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Experience</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card backdrop-blur-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">
                      180 Degrees Consulting
                    </h4>
                    <p className="text-primary font-medium mb-2">
                      Consultant <span className="text-muted-foreground font-normal">| Rotterdam | Feb 2026 - present</span>
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc list-outside ml-4 space-y-1">
                      <li>Consulted for a leading European colocation data centre operator, visited Brussels site and Amsterdam office to interview C-suite and deliver final presentation</li>
                      <li>Developed models for capacity forecasting, revenue optimisation and produced ROI scenarios and use-case prioritisation rankings</li>
                      <li>Feedback from client on models: 'methodologically rigorous… immediately actionable, exactly what we needed'</li>
                    </ul>
                  </div>
                </div>
              </div>
            

            
              <div className="p-6 rounded-2xl bg-card backdrop-blur-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">
                      Global Equity Management
                    </h4>
                    <p className="text-primary font-medium mb-2">
                      Analyst <span className="text-muted-foreground font-normal">| Delft | Feb 2026 - present</span>
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc list-outside ml-4 space-y-1">
                      <li>Accepted to program as part of Founders Initiative to start TU Delft chapter</li>
                      <li>Crafted DCF model to value RTX Corp. and produced comprehensive report on investment thesis, presented to leadership with recommendation weak buy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>



                  

        {/* Skills & Courses Row */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Skills</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card backdrop-blur-xl border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-4 h-4 text-primary" />
                  <h4 className="font-medium text-card-foreground">Programming</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-card backdrop-blur-xl border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Rocket className="w-4 h-4 text-primary" />
                  <h4 className="font-medium text-card-foreground">Engineering Tools</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.engineering.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/*<div className="p-6 rounded-2xl bg-card backdrop-blur-xl border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="w-4 h-4 text-primary" />
                  <h4 className="font-medium text-card-foreground">Development Tools</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-muted text-muted-foreground font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div> */}
            </div>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Courses</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card backdrop-blur-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">
                      Investment Banker Course
                    </h4>
                    <p className="text-primary font-medium mb-2">
                      Financial Edge
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc list-outside ml-4 space-y-1">
                      <li>Comprehensive training in financial modeling, valuation techniques, and investment banking fundamentals</li>
                      <li>Joined the AI for Investment Banking webinar series to explore applications of AI to apply to my own modelling work</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
