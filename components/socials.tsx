"use client"

import Link from "next/link"
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function Socials() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-10 w-10 mb-3" />,
      url: "https://facebook.com",
      color: "bg-[#1877F2] hover:bg-[#0e6eeb]",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-10 w-10 mb-3" />,
      url: "https://instagram.com",
      color:
        "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:from-[#7834a8] hover:via-[#f01b1b] hover:to-[#f5a73e]",
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-10 w-10 mb-3" />,
      url: "https://youtube.com",
      color: "bg-[#FF0000] hover:bg-[#e50000]",
    },
    {
      name: "TikTok",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 mb-3"
        >
          <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
          <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
          <path d="M15 8v8a4 4 0 0 1-4 4" />
          <line x1="15" y1="4" x2="15" y2="12" />
        </svg>
      ),
      url: "https://tiktok.com",
      color: "bg-[#000000] hover:bg-[#1a1a1a]",
    },
    {
      name: "Telegram",
      icon: <MessageCircle className="h-10 w-10 mb-3" />,
      url: "https://t.me",
      color: "bg-[#0088cc] hover:bg-[#007ab8]",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <section id="socials" className="py-16 bg-blue-900 text-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Connect With Us</h2>
        <p className="text-center text-blue-100 mb-12 max-w-2xl mx-auto">
          Follow us on social media to stay updated with our latest sermons, events, and announcements.
        </p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.div key={index} variants={item}>
              <Link
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center justify-center p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
              >
                {social.icon}
                <span className="font-medium">{social.name}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center mt-10 text-blue-200 max-w-2xl mx-auto">
          Join our online community and be part of our ministry's global outreach. Share our content with your friends
          and family to spread the message of hope and faith.
        </p>
      </div>
    </section>
  )
}
