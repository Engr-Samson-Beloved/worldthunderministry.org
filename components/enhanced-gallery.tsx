"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Sunday worship service",
    caption: "Sunday Worship Service",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Prayer meeting",
    caption: "Friday Prayer Meeting",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Youth program",
    caption: "Youth Fellowship",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Choir performance",
    caption: "Church Choir",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Community outreach",
    caption: "Community Outreach Program",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Bible study",
    caption: "Weekly Bible Study",
  },
]

export default function EnhancedGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        goToNext()
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying, currentIndex])

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? galleryImages.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === galleryImages.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  const openModal = (index) => {
    setCurrentIndex(index)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left
      goToNext()
    }
    if (touchStart - touchEnd < -100) {
      // Swipe right
      goToPrevious()
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
      if (e.key === "Escape") closeModal()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isModalOpen, currentIndex])

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Our Gallery</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Take a glimpse into our vibrant church community and the various activities we engage in.
        </p>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-48 md:h-64 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => openModal(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <div
              className="relative w-full h-full flex items-center justify-center"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                aria-label="Close gallery"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Main image */}
              <div className="relative w-full max-w-4xl h-[70vh] px-4">
                <Image
                  src={galleryImages[currentIndex].src || "/placeholder.svg"}
                  alt={galleryImages[currentIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-center">
                  <p className="text-white text-lg">{galleryImages[currentIndex].caption}</p>
                </div>
              </div>

              {/* Navigation arrows */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 text-white hover:bg-white/20 rounded-full"
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevious()
                }}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 text-white hover:bg-white/20 rounded-full"
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Thumbnails */}
              <div className="absolute bottom-4 left-0 right-0">
                <div className="flex justify-center space-x-2 px-4">
                  {galleryImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation()
                        goToSlide(idx)
                      }}
                      className={`w-3 h-3 rounded-full ${currentIndex === idx ? "bg-white" : "bg-white/40"}`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Autoplay button */}
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsAutoPlaying(!isAutoPlaying)
                }}
                className="absolute top-4 left-4 text-white border-white hover:bg-white/20"
              >
                {isAutoPlaying ? "Pause" : "Slideshow"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
