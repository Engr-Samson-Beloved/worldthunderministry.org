"use client"

import Image from "next/image"
import { Quote, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Founder() {
  return (
    <section id="founder" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Our Founder</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Meet the visionary leader behind World Thunder Revival And Evangelical Ministry.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://res.cloudinary.com/dmkchjjfa/image/upload/q_auto,f_auto/v1745166513/_DSC0274_c3swes.jpg?height=600&width=600"
              alt="Founder"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white">Prophet S.P. Olabanji</h3>
              <p className="text-blue-100">Founder & General Overseer</p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 leading-relaxed text-lg">
              Prophet S.P. Olabanji is the visionary founder of World Thunder Revival and Evangelical Ministry (WOTREM).
              Known for his deep prophetic insight and unwavering commitment to deliverance and revival, he leads with
              passion, humility, and power. Through the ministry of the Word, prophetic declarations, and impactful
              prayer, he has been instrumental in setting captives free and igniting spiritual fire across cities and
              nations. He also oversees Olabanji Theological College (OTC), raising ministers and training believers in
              sound doctrine and practical ministry.
            </p>

            <div className="p-8 bg-blue-50 border-l-4 border-blue-700 rounded-r-lg relative">
              <Quote className="absolute text-blue-200 h-16 w-16 -top-6 -left-6 opacity-50" />
              <p className="text-blue-900 italic font-medium text-lg relative z-10">
                "No matter how thick the darkness, the thunder of God’s Word is strong enough to shatter it. In every
                storm, God still speaks — and when He does, chains break, destinies rise, and lives are restored.
                Deliverance is not just possible, it is your inheritance!"
              </p>
              <p className="text-blue-700 font-semibold mt-4 text-right">- Prophet. S.P. Olabanji</p>
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/pastor">
                <Button className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-2 rounded-md flex items-center">
                  Read Full Biography
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
