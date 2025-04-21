"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react"
import { motion } from "framer-motion"

export default function School() {
  const [expandedSection, setExpandedSection] = useState<string | null>("preschool")

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  return (
    <section id="school" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">WOTREM Institution</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our programs include certificate and diploma courses in Bible study, practical evangelism, leadership, and
          deliverance. Students are exposed to hands-on ministry experiences, revival missions, and prophetic teaching
          under seasoned instructors.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">Excellence in Christian Education</h3>
            <p className="text-gray-700 mb-8">
              World Thunder Ministry Institution – Olabanji Theological College (OTC) is the academic and spiritual
              training arm of WOTREM. Founded under the visionary leadership of Prophet S.P. Olabanji, OTC is committed
              to raising sound, Spirit-filled ministers and kingdom ambassadors. With a strong focus on Bible doctrine,
              practical ministry, and spiritual growth, the college equips men and women for effective service in God’s
              vineyard. Our programs include certificate and diploma courses, taught by seasoned teachers with a passion
              for truth and revival.
            </p>

            <div className="space-y-4 mb-8">
              <div className="border border-blue-100 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection("preschool")}
                  className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-700 flex-shrink-0 mr-3" />
                    <span className="font-medium text-blue-900">Early Bird (6month)</span>
                  </div>
                  {expandedSection === "preschool" ? (
                    <ChevronUp className="h-5 w-5 text-blue-700" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-700" />
                  )}
                </button>
                {expandedSection === "preschool" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 border-t border-blue-100"
                  >
                    <p className="text-gray-600">
                      A fast-track spiritual development program for new believers or young ministers. Focuses on
                      spiritual growth, discipline, and the basics of the faith. Perfect for those who are just starting
                      out or seeking spiritual clarity.
                    </p>
                  </motion.div>
                )}
              </div>

              <div className="border border-blue-100 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection("elementary")}
                  className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-700 flex-shrink-0 mr-3" />
                    <span className="font-medium text-blue-900">Diploma (2yrs)</span>
                  </div>
                  {expandedSection === "elementary" ? (
                    <ChevronUp className="h-5 w-5 text-blue-700" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-700" />
                  )}
                </button>
                {expandedSection === "elementary" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 border-t border-blue-100"
                  >
                    <p className="text-gray-600">
                      A comprehensive training for those pursuing deeper ministry leadership. It covers advanced
                      biblical studies, pastoral care, spiritual warfare, and practical field ministry. Ideal for those
                      called to full-time ministry.
                    </p>
                  </motion.div>
                )}
              </div>

              <div className="border border-blue-100 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection("junior")}
                  className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-700 flex-shrink-0 mr-3" />
                    <span className="font-medium text-blue-900">Certificate Program (1 Year))</span>
                  </div>
                  {expandedSection === "junior" ? (
                    <ChevronUp className="h-5 w-5 text-blue-700" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-700" />
                  )}
                </button>
                {expandedSection === "junior" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 border-t border-blue-100"
                  >
                    <p className="text-gray-600">
                      Designed for believers who want a solid foundation in ministry and doctrine. This program covers
                      core teachings in theology, evangelism, and deliverance, preparing students for effective service
                      in their churches or communities.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-blue-900 mb-4">How to Enroll:</h4>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                <li>Complete the online application form</li>
                <li>Submit required documents (birth certificate, previous school records)</li>
                <li>Schedule an assessment and family interview</li>
                <li>Receive admission decision</li>
                <li>Complete enrollment and fee payment</li>
              </ol>

              <Button className="mt-6 bg-blue-700 hover:bg-blue-600">Enroll Now</Button>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="WOTREM School"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-blue-100">
              <div className="flex items-center space-x-2">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-xl">6</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Years of</p>
                  <p className="font-bold text-blue-900">Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
