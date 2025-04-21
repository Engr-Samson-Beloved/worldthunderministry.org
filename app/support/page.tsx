import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Heart, School, Church, Globe, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SupportPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Our Ministry</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Your generous contribution helps us spread the message of holiness and prayer while supporting our community
            outreach programs.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="container px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Ways to Give</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your support enables us to continue our mission of spreading the gospel and serving our community. There
              are several ways you can contribute to our ministry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">One-Time Gift</h3>
              <p className="text-gray-600 mb-6">Support our ministry with a one-time donation of any amount.</p>
              <Button className="w-full bg-blue-700 hover:bg-blue-600">Donate Now</Button>
            </div>

            <div className="bg-blue-50 rounded-lg shadow-md border border-blue-200 p-6 text-center transform scale-105">
              <div className="bg-blue-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-700" />
              </div>
              <span className="bg-blue-700 text-white text-xs px-3 py-1 rounded-full">Recommended</span>
              <h3 className="text-xl font-bold text-blue-900 mb-2 mt-2">Monthly Partner</h3>
              <p className="text-gray-600 mb-6">
                Become a regular supporter with a monthly recurring donation to sustain our work.
              </p>
              <Button className="w-full bg-blue-700 hover:bg-blue-600">Become a Partner</Button>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Project Support</h3>
              <p className="text-gray-600 mb-6">Contribute to specific church initiatives and community projects.</p>
              <Button className="w-full bg-blue-700 hover:bg-blue-600">View Projects</Button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 mb-16">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Where Your Support Goes</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Church className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">Church Operations</h4>
                  <p className="text-gray-600">
                    Maintaining our facilities, supporting staff, and providing resources for worship services and
                    spiritual growth programs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <School className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">WOTREM School</h4>
                  <p className="text-gray-600">
                    Providing quality Christian education, scholarships for underprivileged children, and resources for
                    teachers and students.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">Community Outreach</h4>
                  <p className="text-gray-600">
                    Food distribution programs, health initiatives, counseling services, and support for vulnerable
                    populations in our community.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">Global Missions</h4>
                  <p className="text-gray-600">
                    Supporting missionaries, establishing prayer centers in strategic locations, and providing
                    humanitarian aid in crisis situations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="relative h-48 w-48 mx-auto">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Financial Transparency"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 200px"
                  />
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Commitment to Transparency</h3>
                <p className="text-gray-700 mb-4">
                  At WOTREM, we are committed to financial integrity and transparency. We believe in being good stewards
                  of the resources entrusted to us by our supporters.
                </p>
                <p className="text-gray-700 mb-4">
                  Our financial records are reviewed annually by an independent accounting firm, and we maintain strict
                  internal controls to ensure that all donations are used as intended.
                </p>
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  View Annual Report
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 italic mb-4">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion,
              for God loves a cheerful giver." - 2 Corinthians 9:7
            </p>
            <p className="text-gray-600">
              For other giving options or questions, please contact our office at{" "}
              <span className="text-blue-700">info@wotrem.org</span> or call{" "}
              <span className="text-blue-700">+1 (234) 567-8900</span>.
            </p>
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
