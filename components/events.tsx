"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const events = [
  {
    name: "40 days Annual Fasting & Vigil",
    date: "June 1 - July 10, 2025",
    time: "12:00 AM - 2:00 AM",
    location: "Main Sanctuary",
    description:
      "40 days of intensive prayer, worship, and spiritual impartation with guest ministers from around the world.",
    highlight: true,
  },
  {
    name: "Youth Revival Week",
    date: "July 22-23, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Ayditorium",
    description:
      "A special weekend dedicated to empowering the youth through worship, teachings, and fellowship activities.",
    highlight: false,
  },
  {
    name: "Prayer For Protection",
    date: "May 5, 2025",
    time: "5:00 PM - 8:00 PM",
    location: "Main Sanctuary",
    description: "A powerful evening service focused on divine healing, deliverance, and spiritual breakthrough.",
    highlight: false,
  },
  {
    name: "Community Outreach Day",
    date: "Third Week of Every Month",
    time: "10:00 AM - 2:00 PM",
    location: "Community Center",
    description: "Serving our community through food distribution, free health screenings, and children's activities.",
    highlight: true,
  },
  {
    name: "Christmas Celebration",
    date: "December 25, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Main Sanctuary",
    description: "A special Christmas Eve service with carols, drama presentation, and a message of hope.",
    highlight: false,
  },
]

export default function Events() {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null)

  return (
    <section id="events" className="py-16 bg-blue-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Upcoming Events</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Join us for these special gatherings and be part of what God is doing in our community.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredEvent(index)}
              onMouseLeave={() => setHoveredEvent(null)}
              className={`bg-white rounded-lg shadow-md overflow-hidden border transition-all duration-300 ${
                hoveredEvent === index ? "shadow-xl transform -translate-y-1" : ""
              } ${event.highlight ? "border-gold-300" : "border-blue-100"}`}
            >
              <div className={`p-1 ${event.highlight ? "bg-gold-500" : "bg-blue-700"} text-white`}>
                {event.highlight && <div className="text-center text-xs font-medium">FEATURED EVENT</div>}
              </div>
              <div className={`${event.highlight ? "bg-gold-50" : "bg-white"} p-6 space-y-4`}>
                <h3 className={`font-bold text-xl ${event.highlight ? "text-gold-800" : "text-blue-900"}`}>
                  {event.name}
                </h3>

                <div className="flex items-start space-x-3">
                  <Calendar
                    className={`h-5 w-5 ${event.highlight ? "text-gold-600" : "text-blue-700"} flex-shrink-0 mt-0.5`}
                  />
                  <div>
                    <p className="font-medium">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock
                    className={`h-5 w-5 ${event.highlight ? "text-gold-600" : "text-blue-700"} flex-shrink-0 mt-0.5`}
                  />
                  <div>
                    <p className="text-gray-600">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin
                    className={`h-5 w-5 ${event.highlight ? "text-gold-600" : "text-blue-700"} flex-shrink-0 mt-0.5`}
                  />
                  <div>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                </div>

                <p className="text-gray-700">{event.description}</p>

                <Button
                  className={`w-full ${
                    event.highlight ? "bg-gold-600 hover:bg-gold-700" : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
            View All Events Calendar
          </Button>
        </div>
      </div>
    </section>
  )
}
