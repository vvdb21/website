"use client"

import { motion } from "framer-motion"
import { Mail, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="py-16 px-4 border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-display text-xl font-semibold text-foreground mb-2">
              Viktor Van den Berghe
            </p>
            <p className="text-muted-foreground">
              Aerospace Engineering Student at TU Delft
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-3 md:text-right"
          >
            <a 
              href="mailto:vvdb2006@gmail.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors md:justify-end"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span>vvdb2006@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 text-muted-foreground md:justify-end">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Delft, Netherlands / London, UK</span>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">
            {currentYear} Viktor Van den Berghe. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
