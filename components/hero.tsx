"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const staggerChildren = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.2,
      },
    },
  }

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <Image
          src="https://res.cloudinary.com/dmkchjjfa/image/upload/w_1200,q_auto,f_auto//v1745148629/_DSC0196_owsssq.jpg"
          alt="Worship service"
          fill
          priority
          className="object-cover brightness-50"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay with subtle pattern */}
      <motion.div
        className="absolute inset-0 bg-blue-900/30 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Subtle light rays */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-70"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="container px-4 md:px-6 relative z-20 text-center"
        variants={staggerChildren}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 drop-shadow-sm"
          variants={fadeInUp}
        >
          World Thunder Revival And Evangelical Ministry
        </motion.h1>

        <motion.div
          className="h-1 w-24 bg-gold-500 mx-auto mb-6"
          variants={fadeIn}
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1, delay: 0.5 }}
        ></motion.div>

        <motion.p className="text-xl md:text-3xl text-white font-medium mb-8" variants={fadeInUp}>
          "Holiness And Prayer"
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-6 text-lg relative overflow-hidden group"
              onClick={() => {
                const element = document.querySelector("#contact")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              <span className="relative z-10">Join Us</span>
              <span className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg relative overflow-hidden group"
              onClick={() => {
                const element = document.querySelector("#events")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              <span className="relative z-10">Upcoming Events</span>
              <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Decorative scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 z-20 flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="bg-white/30 p-2 w-10 h-10 ring-1 ring-white/20 shadow-lg rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => {
            const element = document.querySelector("#gallery")
            if (element) {
              element.scrollIntoView({ behavior: "smooth" })
            }
          }}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
