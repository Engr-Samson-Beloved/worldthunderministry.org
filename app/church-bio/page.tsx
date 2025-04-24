import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function ChurchBioPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Church</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            World Thunder Revival And Evangelical Ministry (WOTREM) - A beacon of holiness and prayer since 1997.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="container px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our History</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  World Thunder Revival and Evangelical Ministry (WOTREM) was founded in 1997 by Prophet S.P. Olabanji
                  and his wife, driven by a divine vision for revival, deliverance, and kingdom advancement. What began
                  as a small gathering has grown into a powerful and vibrant ministry, built on prayer, sound doctrine,
                  and spiritual fire.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The journey was not without challenges—especially with securing a permanent location—but through
                  divine intervention, God provided a lasting and expansive space. Today, WOTREM stands as a beacon of
                  miracles, healing, and transformation, operating as a full-time deliverance ministry and touching
                  lives across nations.
                </p>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="WOTREM early days"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Vision & Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Vision</h3>
                <p className="text-gray-700">
                  To be a global catalyst for spiritual revival, raising up a generation committed to holiness and
                  prayer, and establishing centers of spiritual awakening throughout the nations.
                </p>
              </div>
              <div className="bg-gold-50 p-6 rounded-lg border border-gold-100">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Mission</h3>
                <p className="text-gray-700">
                  To transform lives through the power of the gospel, equip believers for effective ministry, and impact
                  communities with the love of Christ through prayer, teaching, and compassionate outreach.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-lg font-bold text-blue-800 mb-3">Holiness</h3>
                <p className="text-gray-700">
                  We believe in the pursuit of holiness as a lifestyle, reflecting Christ's character in all areas of
                  life.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-lg font-bold text-blue-800 mb-3">Prayer</h3>
                <p className="text-gray-700">
                  We are committed to fervent, persistent prayer as the foundation of our personal lives and ministry.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-lg font-bold text-blue-800 mb-3">Biblical Authority</h3>
                <p className="text-gray-700">
                  We uphold the Bible as the inspired Word of God and the final authority for faith and practice.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-lg font-bold text-blue-800 mb-3">Excellence</h3>
                <p className="text-gray-700">
                  We strive for excellence in all we do, giving our best to honor God and serve others effectively.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-lg font-bold text-blue-800 mb-3">Community</h3>
                <p className="text-gray-700">
                  We foster authentic relationships and create a loving environment where people can grow together.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-lg font-bold text-blue-800 mb-3">Compassion</h3>
                <p className="text-gray-700">
                  We demonstrate Christ's love through practical acts of service and meeting the needs of others.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">What We Believe</h2>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-blue-800 mb-2">The Bible</h3>
                  <p className="text-gray-700">
                    We believe the Bible is the inspired, infallible Word of God and our guide for faith, doctrine, and
                    instruction.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-800 mb-2">God</h3>
                  <p className="text-gray-700">
                    We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-800 mb-2">Jesus Christ</h3>
                  <p className="text-gray-700">
                    We believe in the deity of Jesus Christ, His virgin birth, sinless life, miracles, atoning death,
                    bodily resurrection, and ascension to the right hand of the Father.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-800 mb-2">Salvation</h3>
                  <p className="text-gray-700">
                    We believe salvation comes through faith in Jesus Christ alone, by grace through faith, not by
                    works.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-800 mb-2">Holy Spirit</h3>
                  <p className="text-gray-700">
                    We believe in the present ministry of the Holy Spirit, whose indwelling enables Christians to live
                    godly lives and empowers them for service.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-800 mb-2">The Church</h3>
                  <p className="text-gray-700">
                    We believe the Church is the Body of Christ, comprising all believers, called to worship,
                    fellowship, discipleship, ministry, and evangelism.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="WOTREM community impact"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Over the years, WOTREM has made a significant impact both locally and globally. Our community outreach
                  programs have served thousands of families through food distribution, health initiatives, and
                  educational support.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our school provides quality education to hundreds of students annually, while our mission work has
                  established churches and prayer centers in multiple countries. Through media ministry, our message
                  reaches millions worldwide, bringing hope and transformation.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Join Our Community</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We invite you to become part of our church family. Whether you're exploring faith for the first time or
              looking for a place to grow spiritually, WOTREM welcomes you with open arms.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Service Times</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-700 rounded-full mr-2"></div>
                  <span>Sunday Worship: 9:00 AM - 12:00 PM</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-700 rounded-full mr-2"></div>
                  <span>Sunday Bible Study: 5:00 PM - 7:00 PM</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-700 rounded-full mr-2"></div>
                  <span>Friday Deliverance Meeting: 7:00 PM - 9:00 PM</span>
                </li>
              </ul>
            </div>
          </section>
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
