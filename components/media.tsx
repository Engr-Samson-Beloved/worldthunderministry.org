"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Download, ExternalLink, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

// Sample sermon data (would be fetched from Telegram in a real implementation)
const sermons = [
  {
    id: 1,
    title: "The Power of Prayer",
    preacher: "Pastor John Thunder",
    date: "April 16, 2024",
    duration: "45:30",
    thumbnail: "/placeholder.svg?height=200&width=350",
    type: "audio",
    tags: ["prayer", "spiritual growth"],
  },
  {
    id: 2,
    title: "Walking in Holiness",
    preacher: "Pastor John Thunder",
    date: "April 9, 2024",
    duration: "52:15",
    thumbnail: "/placeholder.svg?height=200&width=350",
    type: "video",
    tags: ["holiness", "christian living"],
  },
  {
    id: 3,
    title: "Faith That Moves Mountains",
    preacher: "Pastor John Thunder",
    date: "April 2, 2024",
    duration: "48:22",
    thumbnail: "/placeholder.svg?height=200&width=350",
    type: "audio",
    tags: ["faith", "spiritual growth"],
  },
  {
    id: 4,
    title: "The Holy Spirit and You",
    preacher: "Pastor John Thunder",
    date: "March 26, 2024",
    duration: "50:45",
    thumbnail: "/placeholder.svg?height=200&width=350",
    type: "video",
    tags: ["holy spirit", "spiritual gifts"],
  },
]

export default function Media() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredSermons = sermons
    .filter((sermon) => activeTab === "all" || sermon.type === activeTab)
    .filter(
      (sermon) =>
        searchTerm === "" ||
        sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sermon.preacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sermon.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
    )

  return (
    <section id="media" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Media Center</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Stream or download our latest sermons, teachings, and worship sessions directly from our Telegram channel.
        </p>

        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search sermons by title, preacher, or topic..."
            className="pl-10 border-blue-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
                All
              </TabsTrigger>
              <TabsTrigger value="audio" onClick={() => setActiveTab("audio")}>
                Audio
              </TabsTrigger>
              <TabsTrigger value="video" onClick={() => setActiveTab("video")}>
                Video
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            {filteredSermons.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {filteredSermons.map((sermon) => (
                  <div
                    key={sermon.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="relative h-48">
                      <Image
                        src={sermon.thumbnail || "/placeholder.svg"}
                        alt={sermon.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 350px"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full bg-white/20 hover:bg-white/40 text-white"
                        >
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                      <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                        {sermon.type}
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-lg text-blue-900">{sermon.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {sermon.preacher} • {sermon.date}
                      </p>
                      <p className="text-gray-500 text-sm mb-4">Duration: {sermon.duration}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {sermon.tags.map((tag, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button size="sm" className="flex-1 bg-blue-700 hover:bg-blue-600">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Telegram
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No sermons found matching your search.</p>
                <Button variant="outline" className="mt-4" onClick={() => setSearchTerm("")}>
                  Clear Search
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="audio" className="mt-0">
            {filteredSermons.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {filteredSermons.map((sermon) => (
                  <div
                    key={sermon.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="relative h-48">
                      <Image
                        src={sermon.thumbnail || "/placeholder.svg"}
                        alt={sermon.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 350px"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full bg-white/20 hover:bg-white/40 text-white"
                        >
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                      <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                        {sermon.type}
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-lg text-blue-900">{sermon.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {sermon.preacher} • {sermon.date}
                      </p>
                      <p className="text-gray-500 text-sm mb-4">Duration: {sermon.duration}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {sermon.tags.map((tag, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button size="sm" className="flex-1 bg-blue-700 hover:bg-blue-600">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Telegram
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No audio sermons found matching your search.</p>
                <Button variant="outline" className="mt-4" onClick={() => setSearchTerm("")}>
                  Clear Search
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="video" className="mt-0">
            {filteredSermons.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {filteredSermons.map((sermon) => (
                  <div
                    key={sermon.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="relative h-48">
                      <Image
                        src={sermon.thumbnail || "/placeholder.svg"}
                        alt={sermon.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 350px"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full bg-white/20 hover:bg-white/40 text-white"
                        >
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                      <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                        {sermon.type}
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-lg text-blue-900">{sermon.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {sermon.preacher} • {sermon.date}
                      </p>
                      <p className="text-gray-500 text-sm mb-4">Duration: {sermon.duration}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {sermon.tags.map((tag, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button size="sm" className="flex-1 bg-blue-700 hover:bg-blue-600">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Telegram
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No video sermons found matching your search.</p>
                <Button variant="outline" className="mt-4" onClick={() => setSearchTerm("")}>
                  Clear Search
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>

        <div className="text-center mt-10">
          <Button className="bg-blue-700 hover:bg-blue-600">
            <ExternalLink className="h-4 w-4 mr-2" />
            Visit Our Telegram Channel
          </Button>
        </div>
      </div>
    </section>
  )
}
