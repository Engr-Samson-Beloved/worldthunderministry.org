import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PastorPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Header with background */}
      <div className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-90"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <Link href="/" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pastor John Thunder</h1>
          <p className="text-xl text-blue-100">
            Founder & Senior Pastor of World Thunder Revival And Evangelical Ministry
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="container px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Sidebar with image and quick info */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 mb-6">
                <div className="relative h-80 w-full">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Pastor John Thunder"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-blue-900">Pastor John Thunder</h2>
                  <div className="space-y-2">
                    <p className="text-gray-700 flex items-center">
                      <span className="font-medium mr-2">Ministry:</span> 30+ years
                    </p>
                    <p className="text-gray-700 flex items-center">
                      <span className="font-medium mr-2">Founded WOTREM:</span> 1995
                    </p>
                    <p className="text-gray-700 flex items-center">
                      <span className="font-medium mr-2">Education:</span> Theological Seminary
                    </p>
                    <p className="text-gray-700 flex items-center">
                      <span className="font-medium mr-2">Family:</span> Married with children
                    </p>
                  </div>
                  <Button className="w-full bg-blue-700 hover:bg-blue-600">Contact Pastor</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Main biography content */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Early Life & Calling</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pastor John Thunder was born in a small rural community where faith was the cornerstone of daily life.
                From an early age, he demonstrated an unusual passion for spiritual matters, often gathering his peers
                for prayer and Bible study. His parents, devout Christians themselves, nurtured this calling and
                encouraged his spiritual growth.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                At the age of 16, during a powerful revival meeting, John experienced a profound encounter with God that
                would forever change the trajectory of his life. He described it as "a thunder from heaven" that
                resonated in his spirit—a divine appointment that confirmed his calling to ministry. This experience
                would later inspire the name of his ministry.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Following this divine encounter, John pursued theological education, earning degrees in Biblical Studies
                and Pastoral Ministry. During his studies, he was known for his dedication to prayer and his ability to
                expound on scripture with remarkable insight and clarity.
              </p>
            </section>

            <div className="p-8 bg-blue-50 border-l-4 border-blue-700 rounded-r-lg relative">
              <Quote className="absolute text-blue-200 h-16 w-16 -top-6 -left-6 opacity-50" />
              <p className="text-blue-900 italic font-medium text-lg relative z-10">
                "Prayer is not just a spiritual discipline; it is the breath of our relationship with God. Through
                holiness and prayer, we experience the fullness of God's power and presence in our lives."
              </p>
              <p className="text-blue-700 font-semibold mt-4 text-right">- Pastor John Thunder</p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Founding of WOTREM</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In 1995, after serving as an associate pastor for several years, Pastor John received a clear vision to
                establish a ministry focused on revival, prayer, and holiness. With just a handful of dedicated
                believers, he founded World Thunder Revival And Evangelical Ministry (WOTREM) in a small rented hall.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The early years were marked by intense prayer meetings, often lasting through the night. These
                gatherings became known for powerful manifestations of God's presence, with many reporting miraculous
                healings and life-transforming encounters. Word spread quickly, and the small congregation grew as
                people were drawn to the authentic spiritual atmosphere.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By the year 2000, WOTREM had grown significantly, necessitating a move to a larger facility. Through the
                sacrificial giving of members and divine provision, the ministry acquired land and constructed its first
                permanent sanctuary, which remains the headquarters of the ministry today.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Ministry Philosophy & Impact</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pastor John's ministry is built on the twin pillars of holiness and prayer. He teaches that genuine
                spiritual power flows from a life of consecration and communion with God. This emphasis has shaped
                WOTREM's identity and has been the driving force behind its growth and impact.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Beyond the local congregation, Pastor Thunder's influence extends through various outreach initiatives.
                The ministry operates a school that provides quality education rooted in Christian values, a community
                food bank that serves thousands annually, and regular mission trips to underserved regions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                His teachings, characterized by depth, clarity, and practical application, have reached a global
                audience through radio broadcasts, television programs, and more recently, digital platforms. His books
                on prayer, spiritual warfare, and Christian living have been translated into multiple languages and have
                blessed readers worldwide.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Pastor John is known for his prophetic insight and has been invited to speak at conferences and churches
                across continents. Despite his growing international profile, he remains deeply committed to his local
                congregation, personally mentoring leaders and maintaining an open-door policy for members seeking
                counsel.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg text-blue-900 mb-3">Published Works</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• "The Thunder of Prayer: Awakening Spiritual Power" (2005)</li>
                  <li>• "Holiness: The Forgotten Virtue" (2010)</li>
                  <li>• "Revival Starts with Me: Personal Transformation" (2015)</li>
                  <li>• "Spiritual Warfare: Standing Against the Enemy" (2018)</li>
                  <li>• "The Family Altar: Raising Godly Children" (2022)</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg text-blue-900 mb-3">Speaking Engagements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Global Prayer Summit (Annual)</li>
                  <li>• International Pastors Conference</li>
                  <li>• University Campus Revivals</li>
                  <li>• National Day of Prayer Events</li>
                  <li>• Television and Radio Programs</li>
                </ul>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Personal Life & Family</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Behind the public ministry, Pastor John is a devoted family man. He has been married to his wife, Sarah,
                for over 25 years. She serves alongside him as the ministry's co-pastor and oversees the women's
                department. Together, they have three children who are all actively involved in various aspects of the
                ministry.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Despite his busy schedule, Pastor John prioritizes family time and is known to cancel engagements that
                would require extended separation from his loved ones. He often shares that his first ministry is to his
                family, and the strength of his public ministry flows from the integrity of his private life.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In rare moments of leisure, Pastor John enjoys gardening, reading historical biographies, and taking
                long walks with his wife. Those close to him know him for his unexpected sense of humor and his ability
                to find joy in simple pleasures.
              </p>
            </section>

            <div className="p-8 bg-gold-50 border border-gold-200 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Vision for the Future</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As WOTREM approaches its third decade, Pastor John's vision continues to expand. He sees the ministry
                establishing prayer centers in strategic locations around the world, training a new generation of
                revival-minded leaders, and leveraging technology to make discipleship resources accessible to believers
                in restricted nations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                "The work is far from complete," he often says. "As long as there are hearts that haven't experienced
                God's transforming power, as long as there are communities without access to the gospel, our mission
                continues. The thunder of revival must roll across the nations until every knee bows and every tongue
                confesses that Jesus Christ is Lord."
              </p>
            </div>

            <div className="flex justify-center mt-10">
              <Link href="/#contact">
                <Button className="bg-blue-700 hover:bg-blue-600">Contact Pastor John</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-8 mt-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <div className="h-10 w-10 relative mr-2">
                <Image
                  src="https://sjc.microlink.io/IhM6I3Y_iOgqNAtVpJG8ICAEIMgzn62YGUMbl5lD6wrhLWTqBY-NUjfAMWJfFqo83FboEVXPqHobYT7G6naREg.jpeg"
                  alt="WOTREM Logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">WOTREM</h2>
                <p className="text-sm text-blue-200">World Thunder Revival And Evangelical Ministry</p>
              </div>
            </div>
            <div className="text-sm text-blue-200">&copy; {new Date().getFullYear()} WOTREM. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </main>
  )
}
