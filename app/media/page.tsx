"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Facebook, Youtube, Instagram, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"

// Sample video data - would be replaced with actual church videos
const featuredVideos = [
  {
    id: "video1",
    title: "Welcome to WOTREM",
    description: "An introduction to our church and community",
    thumbnail:
      "https://res.cloudinary.com/dmkchjjfa/image/upload/q_auto,f_auto/v1745166355/IMG_20230816_140448_969_f1qj00.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "3:45",
    category: "welcome",
  },
  {
    id: "video2",
    title: "Sunday Service Highlights",
    description: "Experience the power of our worship services",
    thumbnail: "https://res.cloudinary.com/dmkchjjfa/image/upload/q_auto,f_auto/v1745167371/_DSC0225_llr10k.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "5:20",
    category: "services",
  },
  {
    id: "video3",
    title: "Testimony: Life Transformation",
    description: "Hear how faith changed Sarah's life",
    thumbnail:
      "https://res.cloudinary.com/dmkchjjfa/image/upload/q_auto,f_auto/v1745166353/IMG_20230816_135858_204_qgcac6.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "4:15",
    category: "testimonies",
  },
  {
    id: "video4",
    title: "Youth Ministry Outreach",
    description: "Our youth making a difference in the community",
    thumbnail: "https://res.cloudinary.com/dmkchjjfa/image/upload/f_auto,q_auto/v1745167855/_DSC0077_kbuevv.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "6:30",
    category: "outreach",
  },
  {
    id: "video5",
    title: "Prophet's Message: Power of Prayer",
    description: "A powerful teaching on prayer and spiritual growth",
    thumbnail: "https://res.cloudinary.com/dmkchjjfa/image/upload/f_auto,q_auto/v1745166516/_DSC0214_xq21w6.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "12:45",
    category: "sermons",
  },
  {
    id: "video6",
    title: "Church Anniversary Celebration",
    description: "Highlights from our 25th anniversary service",
    thumbnail: "https://res.cloudinary.com/dmkchjjfa/image/upload/q_auto,f_auto/v1745167530/_DSC0197_pvbiyu.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "8:20",
    category: "events",
  },
]

// Social media platforms
const socialPlatforms = [
  {
    name: "YouTube",
    icon: <Youtube className="h-6 w-6" />,
    url: "https://youtube.com",
    color: "bg-red-600 hover:bg-red-700",
    followers: "5.2K",
  },
  {
    name: "Facebook",
    icon: <Facebook className="h-6 w-6" />,
    url: "https://facebook.com",
    color: "bg-blue-600 hover:bg-blue-700",
    followers: "8.7K",
  },
  {
    name: "Instagram",
    icon: <Instagram className="h-6 w-6" />,
    url: "https://instagram.com",
    color: "bg-pink-600 hover:bg-pink-700",
    followers: "4.3K",
  },
  {
    name: "Twitter",
    icon: <Twitter className="h-6 w-6" />,
    url: "https://twitter.com",
    color: "bg-sky-500 hover:bg-sky-600",
    followers: "3.1K",
  },
]

// Video categories
const videoCategories = [
  { value: "all", label: "All Videos" },
  { value: "sermons", label: "Sermons" },
  { value: "testimonies", label: "Testimonies" },
  { value: "events", label: "Events" },
  { value: "outreach", label: "Outreach" },
  { value: "welcome", label: "Welcome" },
  { value: "services", label: "Services" },
]

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [featuredVideoPlaying, setFeaturedVideoPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(featuredVideos[0])

  // Filter videos based on active category
  const filteredVideos =
    activeTab === "all" ? featuredVideos : featuredVideos.filter((video) => video.category === activeTab)

  // Handle video play/pause
  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (featuredVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setFeaturedVideoPlaying(!featuredVideoPlaying)
    }
  }

  // Handle video mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Load video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        setIsVideoLoaded(true)
      })
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("loadeddata", () => {
          setIsVideoLoaded(true)
        })
      }
    }
  }, [selectedVideo])

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 },
    },
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 bg-blue-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dmkchjjfa/image/upload/w_1200,q_auto,f_auto//v1745148629/_DSC0196_owsssq.jpg"
            alt="Media background"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-900/95"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 py-16 md:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Link href="/" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">WOTREM Media Center</h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Experience powerful sermons, testimonies, and events from our church. Connect with us on social media to
              stay updated.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-2">Featured Video</h2>
            <p className="text-gray-600">Watch our latest and most impactful content</p>
          </motion.div>

          <motion.div
            className="relative aspect-video rounded-xl overflow-hidden shadow-xl bg-gray-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            {/* Video Player */}
            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
              <video
                ref={videoRef}
                src="/placeholder.mp4" // Replace with actual video
                poster={selectedVideo.thumbnail}
                className="w-full h-full object-cover"
                muted={isMuted}
                playsInline
                onEnded={() => setFeaturedVideoPlaying(false)}
              />

              {/* Video Controls Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 flex flex-col justify-between p-6">
                <div className="flex justify-between items-center">
                  <div className="bg-red-600 text-white text-xs px-2 py-1 rounded">LIVE</div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20 rounded-full"
                    onClick={toggleMute}
                  >
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </Button>
                </div>

                <div className="space-y-2">
                  <h3 className="text-white text-xl md:text-2xl font-bold">{selectedVideo.title}</h3>
                  <p className="text-gray-200">{selectedVideo.description}</p>

                  <div className="flex items-center space-x-4 pt-2">
                    <Button
                      className="bg-white text-blue-900 hover:bg-blue-50 flex items-center space-x-2"
                      onClick={toggleVideoPlay}
                    >
                      {featuredVideoPlaying ? (
                        <>
                          <Pause className="h-4 w-4" />
                          <span>Pause</span>
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4" />
                          <span>Play</span>
                        </>
                      )}
                    </Button>
                    <span className="text-gray-300 text-sm">{selectedVideo.duration}</span>
                  </div>
                </div>
              </div>

              {/* Play Button Overlay (only when video is not playing) */}
              {!featuredVideoPlaying && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.button
                    className="bg-white/30 backdrop-blur-sm text-white rounded-full p-6 hover:bg-white/40 transition-colors"
                    onClick={toggleVideoPlay}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="h-12 w-12 fill-current" />
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Library Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-2">Video Library</h2>
            <p className="text-gray-600">Browse our collection of sermons, testimonies, and events</p>
          </motion.div>

          {/* Category Tabs */}
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="mb-8 flex flex-wrap justify-start gap-2">
              {videoCategories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  className="data-[state=active]:bg-blue-700 data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeTab} className="mt-0">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {filteredVideos.map((video) => (
                  <motion.div
                    key={video.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200"
                    variants={cardVariant}
                    whileHover="hover"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <div className="relative h-48">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full bg-white/20 hover:bg-white/40 text-white"
                        >
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-blue-900 mb-1">{video.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{video.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500 capitalize">{video.category}</span>
                        <Button variant="ghost" size="sm" className="text-blue-700 hover:text-blue-800 p-0">
                          Watch Now
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {filteredVideos.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No videos found in this category.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          <div className="text-center mt-10">
            <Button className="bg-blue-700 hover:bg-blue-600">View All Videos</Button>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-blue-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-2">Connect With Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow us on social media to stay updated with our latest sermons, events, and announcements
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {socialPlatforms.map((platform) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                variants={cardVariant}
                whileHover="hover"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 h-full">
                  <div className={`${platform.color} text-white p-6 flex items-center justify-center`}>
                    <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                      {platform.icon}
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-lg text-blue-900 mb-1">{platform.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">Follow us on {platform.name}</p>
                    <div className="bg-gray-100 rounded-full px-4 py-2 inline-block">
                      <span className="font-bold text-blue-900">{platform.followers}</span>
                      <span className="text-gray-600 text-sm ml-1">Followers</span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 bg-white p-8 rounded-lg shadow-md border border-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Subscribe to Our Channel</h3>
                <p className="text-gray-600">
                  Get notified when we post new videos, live streams, and special announcements
                </p>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 min-w-[200px]">
                <Youtube className="mr-2 h-5 w-5" />
                Subscribe Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Stream Schedule */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-2">Upcoming Live Streams</h2>
            <p className="text-gray-600">Join us for these upcoming live broadcasts</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200"
              variants={cardVariant}
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Sunday Service
                  </span>
                  <span className="text-gray-500 text-sm">In 2 days</span>
                </div>
                <h3 className="font-bold text-lg text-blue-900 mb-1">Sunday Worship Service</h3>
                <p className="text-gray-600 text-sm">Join us for praise, worship, and a powerful message</p>
              </div>
              <div className="p-6 bg-gray-50">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-red-600 mr-2 animate-pulse"></div>
                    <span className="text-sm text-gray-500">Sunday, 9:00 AM</span>
                  </div>
                  <Button variant="outline" size="sm" className="text-blue-700 border-blue-700">
                    Set Reminder
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200"
              variants={cardVariant}
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Bible Study
                  </span>
                  <span className="text-gray-500 text-sm">In 5 days</span>
                </div>
                <h3 className="font-bold text-lg text-blue-900 mb-1">Wednesday Bible Study</h3>
                <p className="text-gray-600 text-sm">Deep dive into the Word with Prophet S.P. Olabanji</p>
              </div>
              <div className="p-6 bg-gray-50">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-red-600 mr-2 animate-pulse"></div>
                    <span className="text-sm text-gray-500">Wednesday, 6:00 PM</span>
                  </div>
                  <Button variant="outline" size="sm" className="text-blue-700 border-blue-700">
                    Set Reminder
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200"
              variants={cardVariant}
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-gold-100 text-gold-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Special Event
                  </span>
                  <span className="text-gray-500 text-sm">In 10 days</span>
                </div>
                <h3 className="font-bold text-lg text-blue-900 mb-1">Prayer & Deliverance Service</h3>
                <p className="text-gray-600 text-sm">A special evening of prayer, deliverance, and breakthrough</p>
              </div>
              <div className="p-6 bg-gray-50">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-red-600 mr-2 animate-pulse"></div>
                    <span className="text-sm text-gray-500">Friday, 7:00 PM</span>
                  </div>
                  <Button variant="outline" size="sm" className="text-blue-700 border-blue-700">
                    Set Reminder
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">WOTREM</h2>
              <p className="text-sm text-blue-200">World Thunder Revival And Evangelical Ministry</p>
            </div>
            <div className="text-sm text-blue-200">&copy; {new Date().getFullYear()} WOTREM. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </main>
  )
}
