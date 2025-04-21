"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const navCategories = [
  {
    name: "Ministries",
    children: [
      { name: "Home", href: "#hero" },
      { name: "School", href: "#school" },
      { name: "Church Bio", href: "/church-bio" },
    ],
  },
  {
    name: "Resources",
    children: [
      { name: "Media", href: "/media" },
      { name: "Events", href: "#events" },
      { name: "Gallery", href: "#gallery" },
    ],
  },
  {
    name: "Contact",
    children: [
      { name: "Socials", href: "#socials" },
      { name: "Founder", href: "#founder" },
      { name: "Contact Us", href: "#contact" },
    ],
  },
  {
    name: "Give",
    children: [
      { name: "Share a testimony", href: "/testimony" },
      { name: "Support", href: "/support" },
    ],
  },
]

const NavDropdown = ({ category, isScrolled, isLastItem }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center font-medium transition-colors ${isScrolled ? "text-blue-900" : "text-white"}`}
      >
        {category.name}
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute z-50 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 ${
              isLastItem ? "right-0" : "left-0"
            }`}
          >
            <div className="py-1">
              {category.children.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const MobileNavDropdown = ({ category, handleClick }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 font-medium text-blue-900"
      >
        {category.name}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pl-4 mt-1 space-y-1"
          >
            {category.children.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm text-gray-600 hover:text-blue-700"
                onClick={() => {
                  if (item.href.startsWith("#")) handleClick(item.href)
                }}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleClick = (href) => {
    setIsMenuOpen(false)
    if (href.startsWith("#")) {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="w-full px-4 md:px-8 max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-12 w-12">
              <Image
                src="https://res.cloudinary.com/dmkchjjfa/image/upload/v1745149325/logo_jweqah.png"
                alt="WOTREM Logo"
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>
            <span className={`font-bold text-xl ${scrolled ? "text-blue-900" : "text-white"}`}>WOTREM</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navCategories.map((cat, index) => (
              <NavDropdown
                key={cat.name}
                category={cat}
                isScrolled={scrolled}
                isLastItem={index === navCategories.length - 1}
              />
            ))}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={scrolled ? "text-blue-900" : "text-white"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white w-full shadow-md"
          >
            <div className="w-full px-4 py-4 space-y-4">
              {navCategories.map((cat) => (
                <MobileNavDropdown key={cat.name} category={cat} handleClick={handleClick} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
