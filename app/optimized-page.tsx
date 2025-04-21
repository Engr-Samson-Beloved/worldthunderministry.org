"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import EnhancedGallery from "@/components/enhanced-gallery"
import Founder from "@/components/founder"
import Events from "@/components/events"
import School from "@/components/school"
import Media from "@/components/media"
import Socials from "@/components/socials"
import Contact from "@/components/contact"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OptimizedPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <section id="gallery-section" className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Gallery</h2>
          <EnhancedGallery />
        </div>
      </section>
      <Founder />
      <Events />
      <School />
      <Media />
      <Socials />
      <Contact />

      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          className="fixed bottom-6 right-6 bg-blue-800 hover:bg-blue-700 rounded-full p-3 shadow-lg z-40"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </main>
  )
}
