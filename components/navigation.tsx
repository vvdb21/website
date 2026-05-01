"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

function SoundCloudIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      aria-hidden="true"
    >
      <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.052-.1-.084-.1zm-.899 1.026c-.058 0-.09.037-.097.097l-.148 1.03.148 1.028c.007.057.039.094.097.094.058 0 .091-.037.097-.094l.18-1.028-.18-1.03c-.006-.06-.039-.097-.097-.097zm1.86-.645c-.058 0-.098.045-.105.105l-.203 1.673.203 1.628c.007.062.047.102.105.102.058 0 .097-.04.105-.102l.228-1.628-.228-1.673c-.008-.06-.047-.105-.105-.105zm.929-.239c-.066 0-.113.052-.12.12l-.18 1.867.18 1.82c.007.068.054.116.12.116s.112-.048.12-.116l.202-1.82-.202-1.867c-.008-.068-.054-.12-.12-.12zm.94-.13c-.073 0-.127.058-.134.128l-.157 1.996.157 1.948c.007.073.061.127.134.127s.127-.054.134-.127l.172-1.948-.172-1.996c-.007-.07-.061-.127-.134-.127zm.964-.07c-.08 0-.14.062-.147.142l-.135 2.067.135 2.008c.007.082.067.14.147.14.08 0 .14-.058.148-.14l.15-2.008-.15-2.067c-.008-.08-.068-.142-.148-.142zm.956-.121c-.086 0-.152.07-.159.155l-.113 2.187.113 2.133c.007.086.073.152.159.152.086 0 .152-.066.159-.152l.127-2.133-.127-2.187c-.007-.085-.073-.155-.159-.155zm.97-.01c-.092 0-.165.075-.172.168l-.09 2.198.09 2.178c.007.095.08.168.172.168.093 0 .166-.073.173-.168l.103-2.178-.103-2.198c-.007-.093-.08-.168-.173-.168zm.972-.052c-.1 0-.178.08-.186.182l-.067 2.25.067 2.222c.008.1.086.18.186.18.1 0 .178-.08.186-.18l.075-2.222-.075-2.25c-.008-.102-.086-.182-.186-.182zm1.012.036c-.106 0-.19.088-.197.195l-.044 2.214.044 2.267c.007.11.091.195.197.195.107 0 .19-.085.197-.195l.052-2.267-.052-2.214c-.007-.107-.09-.195-.197-.195zm5.932.107c-.345 0-.678.06-.99.17-.21-2.378-2.19-4.247-4.614-4.247-.6 0-1.18.12-1.704.337-.194.08-.247.162-.25.32v8.348c.003.165.133.3.298.312h7.26c1.637 0 2.964-1.328 2.964-2.966s-1.327-2.974-2.964-2.974z"/>
    </svg>
  )
}

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Tutoring", href: "#tutoring" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const mutedClass = isScrolled
    ? "text-muted-foreground hover:text-foreground hover:bg-muted/50"
    : "text-background/70 hover:text-background hover:bg-background/10"

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection("#home")}
              className={`font-display text-lg font-semibold tracking-tight transition-colors ${
                isScrolled ? "text-foreground" : "text-background"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              VVdB
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${mutedClass}`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Right side: Social + Mobile Toggle */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/viktor-van-den-berghe/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 transition-colors rounded-lg ${mutedClass}`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.github.com/vvdb21"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 transition-colors rounded-lg ${mutedClass}`}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.soundcloud.com/vvdb21"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 transition-colors rounded-lg ${mutedClass}`}
                aria-label="SoundCloud"
              >
                <SoundCloudIcon className="w-5 h-5" />
              </a>

              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden transition-colors ${
                  isScrolled
                    ? "text-foreground hover:text-foreground hover:bg-muted/50"
                    : "text-background hover:text-background hover:bg-background/10"
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}