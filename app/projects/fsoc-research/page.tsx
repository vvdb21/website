"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const project = {
  title: "Availability Analysis of a Free Space Optical Communication Link in Delft, Netherlands",
  tags: ["Python", "Research", "Data Analysis"],
}

const stats = [
  "16.6 million data points analysed",
  "650+ GB of raw data",
  "1,500+ lines of Python",
]

export default function FsocResearchPage() {
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
            className="space-y-10"
          >
            <section className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
                {project.title}
              </h1>

              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-primary"
                  >
                    {tag}
                  </span>
                ))}
                <span className="rounded-full bg-amber-500/10 px-3 py-1.5 text-amber-700 dark:text-amber-300">
                  Under Review
                </span>
              </div>
            </section>

            <section className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="font-display text-2xl font-semibold text-foreground">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                The radio-frequency (RF) spectrum is becoming increasingly congested, with most bands requiring licensing and capacity approaching its limits. Free Space Optical Communication (FSOC) offers a compelling alternative — using focused laser beams to transmit data at high bandwidths with no spectrum licensing requirement. However, FSOC performance is highly sensitive to atmospheric turbulence, which varies significantly by geographic location and remains under-researched for mid-latitude European environments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This project, carried out as a group research effort at TU Delft, analyses seasonal and daily variations in FSOC link availability in Delft, the Netherlands, using measurement data collected directly from the rooftop of the Aerospace Engineering faculty building. The study evaluates both a horizontal ground-to-ground link and a vertical ground-to-satellite link, producing month-by-month availability rankings and validating a theoretical atmospheric model against observed data.
              </p>
            </section>

            <section className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="font-display text-2xl font-semibold text-foreground">Dataset &amp; Measurement Setup</h2>
              <p className="text-muted-foreground leading-relaxed">
                Two complementary measurement setups were used. For the horizontal link, a scintillometer measured the refractive index structure constant (C²ₙ) along a 950 m path between the Aerospace Engineering faculty building and Delftechpark, with readings taken every 10 minutes from November 2022 to November 2025. The C²ₙ values were converted to Rytov variance (σ<sub>R</sub><sup>2</sup>) to quantify scintillation strength.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For the vertical link, infrared and visible-light cameras on the same rooftop observed Polaris at night and the sun during the day throughout 2025, measuring the Fried parameter (r₀) — a key indicator of atmospheric coherence. Data was recorded every minute.
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                {stats.map((item) => (
                  <article
                    key={item}
                    className="rounded-2xl border border-border bg-background p-4 text-center shadow-sm"
                  >
                    <p className="text-2xl font-semibold text-foreground">{item}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="space-y-6 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Horizontal Link Results</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The horizontal link was evaluated using Rytov variance, with turbulence classified as very weak (σ<sub>R</sub><sup>2</sup> &lt; 0.3), weak (0.3–1.0), or strong (&gt; 1.0). The analysis revealed a clear seasonal pattern: winter and late autumn consistently outperform spring and summer in terms of availability. This is driven primarily by daytime conditions — solar heating creates temperature fluctuations near the ground, forming turbulent “hot pockets” that increase scintillation. At night, availability is almost entirely independent of season, with roughly 80–85% of readings falling below σ<sub>R</sub><sup>2</sup> = 0.3 regardless of time of year.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                {[
                  { src: "/images/fig2_rytov_boxplot.png.png", alt: "Figure 2 — Rytov variance box plot for the horizontal link with seasonal variation.", caption: "Figure 2 — Yearly variation in Rytov variance for the horizontal link, with seasons indicated. The blue line shows the median per month." },
                  { src: "/images/fig5_daily_variation.png.png", alt: "Figure 5 — Daily variation in Rytov variance across the four seasons.", caption: "Figure 5 — Daily variation in Rytov variance across all four seasons, showing the sharp degradation in availability during daytime hours in spring and summer." },
                  { src: "/images/fig4_rytov_histogram.png.png", alt: "Figure 4 — Histogram of monthly Rytov variance threshold fractions.", caption: "Figure 4 — Fraction of monthly readings within each Rytov variance threshold, confirming the winter dominance in availability." },
                ].map((item) => (
                  <figure key={item.src} className="space-y-3 rounded-2xl border border-border bg-background p-4 shadow-sm">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain"
                      />
                    </div>
                    <figcaption className="text-sm text-muted-foreground">{item.caption}</figcaption>
                  </figure>
                ))}
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-xl font-semibold text-foreground">Monthly Availability Ranking (Horizontal Link)</h3>
                <p className="text-muted-foreground">Ranked by percentage of time with σ<sub>R</sub><sup>2</sup> ≤ 0.3 (very weak turbulence):</p>
                <div className="overflow-x-auto rounded-2xl border border-border bg-background">
                  <table className="min-w-full text-sm">
                    <thead className="bg-muted/70 text-left text-muted-foreground">
                      <tr>
                        <th className="px-4 py-3 font-medium">Rank</th>
                        <th className="px-4 py-3 font-medium">Month</th>
                        <th className="px-4 py-3 font-medium">% Time σ<sub>R</sub><sup>2</sup> ≤ 0.3</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [1, "December", "92.92%"],
                        [2, "February", "91.40%"],
                        [3, "January", "90.98%"],
                        [4, "November", "89.73%"],
                        [5, "October", "88.40%"],
                        [6, "March", "73.29%"],
                        [7, "September", "73.23%"],
                        [8, "August", "69.12%"],
                        [9, "July", "68.85%"],
                        [10, "April", "68.54%"],
                        [11, "May", "65.72%"],
                        [12, "June", "62.60%"],
                      ].map(([rank, month, value]) => (
                        <tr key={month} className="border-t border-border/70 text-foreground">
                          <td className="px-4 py-3">{rank}</td>
                          <td className="px-4 py-3">{month}</td>
                          <td className="px-4 py-3">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="space-y-6 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Vertical Link Results</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The vertical link was evaluated using the Fried parameter (r₀), with turbulence classified by the ratio D/r₀ (where D = 10 cm, the aperture of the Reuniwatt Sky InSight sensor). Unlike the horizontal link, the vertical link shows better availability during the day and in spring and summer months. This is because longer daylight hours provide more observation windows, and the vertical path through the full atmosphere is less affected by near-ground thermal convection. A significant portion of readings returned null values due to clouds, rain, or fog — these were treated as periods of unavailability in the main analysis, as they represent genuine link outages.
                </p>
              </div>

              <figure className="space-y-3 rounded-2xl border border-border bg-background p-4 shadow-sm">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted">
                  <Image
                    src="/images/fig8_dr0_vertical.png.png"
                    alt="Figure 8 — D/r₀ turbulence classification histogram for the vertical link by month."
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
                <figcaption className="text-sm text-muted-foreground">
                  Figure 8 — D/r₀ turbulence classification for the vertical link by month. The high proportion of strong turbulence reflects null readings (link unavailability due to weather) included in the dataset.
                </figcaption>
              </figure>

              <div className="space-y-3">
                <h3 className="font-display text-xl font-semibold text-foreground">Monthly Availability Ranking (Vertical Link)</h3>
                <p className="text-muted-foreground">Ranked by percentage of time with D/r₀ ≤ 1 (weak turbulence, full availability):</p>
                <div className="overflow-x-auto rounded-2xl border border-border bg-background">
                  <table className="min-w-full text-sm">
                    <thead className="bg-muted/70 text-left text-muted-foreground">
                      <tr>
                        <th className="px-4 py-3 font-medium">Rank</th>
                        <th className="px-4 py-3 font-medium">Month</th>
                        <th className="px-4 py-3 font-medium">% Time D/r₀ ≤ 1</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [1, "March", "8.07%"],
                        [2, "April", "7.18%"],
                        [3, "May", "6.94%"],
                        [4, "August", "5.82%"],
                        [5, "February", "5.78%"],
                        [6, "June", "4.63%"],
                        [7, "January", "4.06%"],
                        [8, "July", "3.37%"],
                        [9, "September", "2.52%"],
                        [10, "October", "1.54%"],
                        [11, "November", "0.40%"],
                        [12, "December", "0.24%"],
                      ].map(([rank, month, value]) => (
                        <tr key={month} className="border-t border-border/70 text-foreground">
                          <td className="px-4 py-3">{rank}</td>
                          <td className="px-4 py-3">{month}</td>
                          <td className="px-4 py-3">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="space-y-5 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="font-display text-2xl font-semibold text-foreground">Atmospheric Modelling</h2>
              <p className="text-muted-foreground leading-relaxed">
                To validate whether ground-based horizontal measurements can predict vertical link performance, the Hufnagel-Valley (HV) atmospheric model was applied. Using the ground-level C²ₙ values from the horizontal scintillometer, the model estimates the variation of atmospheric turbulence with altitude and from this derives a predicted Fried parameter for the vertical link. Two versions were used: a standard daytime model (wind speed 27 m/s) and an adjusted nighttime model (wind speed 10 m/s).
              </p>

              <figure className="space-y-3 rounded-2xl border border-border bg-background p-4 shadow-sm">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted">
                  <Image
                    src="/images/fig12_hv_model.png.png"
                    alt="Figure 12 — Hufnagel-Valley model predictions versus observed Fried parameter for both daytime and nighttime conditions."
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
                <figcaption className="text-sm text-muted-foreground">
                  Figure 12 — Comparison of the Hufnagel-Valley model predictions against observed Fried parameter values for the vertical link throughout 2025, for both daytime (top) and nighttime (bottom).
                </figcaption>
              </figure>

              <p className="text-muted-foreground leading-relaxed">
                The daytime model performed well, particularly during spring and summer, with a mean normalised error of μ = 0.009. The nighttime model was more consistent (lower error variance, σ = 0.022) but systematically overestimated the Fried parameter, suggesting a correctable bias. Overall, the model is a useful tool for predicting vertical availability from horizontal measurements, though its accuracy degrades during winter months when data is sparser and near-ground conditions are less stable.
              </p>
            </section>

            <section className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="font-display text-2xl font-semibold text-foreground">Key Findings</h2>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                <li><strong className="text-foreground">Horizontal link:</strong> Winter months dominate availability. December ranks first (92.9% of time in very weak turbulence), with performance dropping significantly from March onwards. Nighttime availability is near-constant across all seasons.</li>
                <li><strong className="text-foreground">Vertical link:</strong> Spring months offer the best availability, with March ranking first. Unlike the horizontal link, vertical performance correlates more strongly with daylight duration than season, and is better during the day than at night.</li>
                <li><strong className="text-foreground">Day vs. night:</strong> The two links behave oppositely — the horizontal link performs best at night (less thermal convection), while the vertical link performs best during the day (more observation windows, less near-ground turbulence).</li>
                <li><strong className="text-foreground">Modelling:</strong> The Hufnagel-Valley model successfully approximates vertical link availability from ground measurements, with the daytime version proving more accurate overall. A machine-learning extension incorporating weather data (cloud cover, humidity, temperature) is recommended for further improvement.</li>
              </ul>
            </section>

            <section className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="font-display text-2xl font-semibold text-foreground">Publication Status</h2>
              <p className="text-muted-foreground leading-relaxed">
                Research paper produced, currently under review by our university project supervisor.
              </p>
            </section>

            <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">Project Details</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Technologies</h3>
                  <p className="text-foreground">Python, Research, Data Analysis</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Category</h3>
                  <p className="text-foreground">Aerospace Engineering</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Status</h3>
                  <p className="text-foreground">Under Review</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Institution</h3>
                  <p className="text-foreground">TU Delft</p>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
