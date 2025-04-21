"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const images = [
  {
    src: "https://res.cloudinary.com/dmkchjjfa/image/upload/v1745148100/20230528_123223-1_n8panz.jpg?height=600&width=800",
    alt: "Sunday worship service",
    caption: "Sunday Worship Service",
  },
  {
    src: "https://res.cloudinary.com/dmkchjjfa/image/upload/q_auto,f_auto/v1745166355/IMG_20230816_140448_969_f1qj00.jpg?height=600&width=800",
    alt: "Prayer meeting",
    caption: "Friday Prayer Meeting",
  },
  {
    src: "https://res.cloudinary.com/dmkchjjfa/image/upload/q_auto,f_auto/v1745166353/IMG_20230816_135858_204_qgcac6.jpg?height=600&width=800",
    alt: "Youth program",
    caption: "Youth Fellowship",
  },
  {
    src: "https://res.cloudinary.com/dmkchjjfa/image/upload/q_auto,f_auto/v1745167371/_DSC0225_llr10k.jpg?height=600&width=800",
    alt: "Choir performance",
    caption: "Church Choir",
  },
  {
    src: "https://res.cloudinary.com/dmkchjjfa/image/upload/q_auto,f_auto/v1745167530/_DSC0197_pvbiyu.jpg?height=600&width=800",
    alt: "Community outreach",
    caption: "Community Outreach Program",
  },
  {
    src: "https://res.cloudinary.com/dmkchjjfa/image/upload/f_auto,q_auto/v1745167855/_DSC0077_kbuevv.jpg?height=600&width=800",
    alt: "Community outreach",
    caption: "Crusade Outing",
  },
  {
    src: "https://res.cloudinary.com/dmkchjjfa/image/upload/f_auto,q_auto/v1745166516/_DSC0214_xq21w6.jpg?height=600&width=800",
    alt: "Community outreach",
    caption: "Mission Fields",
  },
]

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div className="relative flex-[0_0_100%] min-w-0" key={index}>
              <div className="relative h-[300px] md:h-[500px] w-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                  <p className="text-white text-lg md:text-xl font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-blue-900 rounded-full z-10"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-blue-900 rounded-full z-10"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              selectedIndex === index ? "bg-blue-700 w-6" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
