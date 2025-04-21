import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

export default function TestimonyPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Header with background */}
      <div className="relative bg-blue-900 text-white py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-90"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <Link href="/" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Share Your Testimony</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            We'd love to hear how God has worked in your life through our ministry. Your story can inspire others and
            bring glory to God.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="container px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Your Testimony</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <Input id="name" placeholder="John Doe" className="border border-gray-300" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    className="border border-gray-300"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium text-gray-700">
                  Testimony Title <span className="text-red-500">*</span>
                </label>
                <Input
                  id="title"
                  placeholder="E.g., 'How Prayer Changed My Life'"
                  className="border border-gray-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  id="category"
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a category</option>
                  <option value="healing">Healing</option>
                  <option value="salvation">Salvation</option>
                  <option value="deliverance">Deliverance</option>
                  <option value="provision">Divine Provision</option>
                  <option value="guidance">Divine Guidance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="testimony" className="text-sm font-medium text-gray-700">
                  Your Testimony <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="testimony"
                  placeholder="Share your experience in detail..."
                  className="min-h-[200px] border border-gray-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Permission</label>
                <div className="flex items-start space-x-2">
                  <input type="checkbox" id="permission" className="mt-1" />
                  <label htmlFor="permission" className="text-sm text-gray-600">
                    I give permission for WOTREM to share my testimony on their website, social media, and other
                    ministry materials. I understand my name may be used unless I specify otherwise.
                  </label>
                </div>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-600">
                  Submit Testimony
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Why Share Your Testimony?</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">•</span>
                <span>Encourage others who may be going through similar situations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">•</span>
                <span>Glorify God by acknowledging His work in your life</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">•</span>
                <span>Build faith in the community by sharing real-life experiences</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">•</span>
                <span>Create a record of God's faithfulness that can inspire future generations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-8 mt-12">
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
