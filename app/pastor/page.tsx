import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prophet S.P. Olabanji | Founder & General Overseer of WOTREM",
  description:
    "Meet Prophet Sunday P. Olabanji, the visionary founder and General Overseer of World Thunder Revival And Evangelical Ministry (WOTREM). Learn about his calling, ministry journey, and impact.",
  keywords:
    "Prophet S.P. Olabanji, WOTREM founder, Sunday Olabanji, World Thunder Revival And Evangelical Ministry, prophet biography, spiritual leader, deliverance ministry, Ondo pastor, Nigerian prophet",
  openGraph: {
    title: "Prophet S.P. Olabanji | Founder & General Overseer of WOTREM",
    description: "Meet the visionary founder of World Thunder Revival And Evangelical Ministry (WOTREM).",
    type: "profile",
    url: "https://www.worldthunderministry.org/pastor",
    images: [
      {
        url: "https://res.cloudinary.com/dmkchjjfa/image/upload/q_auto,f_auto/v1745166513/_DSC0274_c3swes.jpg",
        width: 1200,
        height: 1200,
        alt: "Prophet S.P. Olabanji",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prophet S.P. Olabanji | Founder & General Overseer of WOTREM",
    description: "Meet the visionary founder of World Thunder Revival And Evangelical Ministry (WOTREM).",
    images: ["https://res.cloudinary.com/dmkchjjfa/image/upload/q_auto,f_auto/v1745166513/_DSC0274_c3swes.jpg"],
  },
  alternates: {
    canonical: "https://www.worldthunderministry.org/pastor",
  },
}

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Prophet. Sunday Olabanji</h1>
          <p className="text-xl text-blue-100">
            Founder & General Overseer of World Thunder Revival And Evangelical Ministry
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
                    alt="Prophet. S.P. Olabanji"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-blue-900">Prophet. S.P. Olabanji</h2>
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
                Prophet Sunday Olabanji Aka S.P. Olabanji, hails from Ondo State, Nigeria. He gave his life to Christ at
                the age of 18 and was called into ministry shortly after. Driven by a deep hunger for the Word and
                revival, he enrolled at the CAC Babajide School of Prophets and Evangelists, where his spiritual
                training was shaped. As a district evangelist, he began laying the foundation for a calling far greater
                than he imagined.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                At his early, during a life-changing moment with God, Prophet S.P. Olabanji had a deep spiritual
                encounter that marked the beginning of his divine assignment. He described it as a "WORLD THUNDER
                REVIVAL AND EVANGELICAL MINISTRY" that struck his heart and confirmed his calling into ministry. That
                sacred encounter would later become the foundation and name of the ministry — **World Thunder Revival
                and Evangelical Ministry (WOTREM)**.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Before fully launching into ministry, Prophet S.P. Olabanji pursued spiritual and theological training
                to prepare for the calling upon his life. He enrolled at the **CAC Babajide School of Prophets and
                Evangelists**, a renowned seminary where he was equipped with deep biblical knowledge, prophetic
                discipline, and evangelistic fire. There, he earned his **Diploma in Ministry**, a foundational step
                that strengthened his spiritual roots and sharpened his understanding of God's word — all in preparation
                for the birth of the ministry God had placed in his heart.
              </p>
            </section>

            <div className="p-8 bg-blue-50 border-l-4 border-blue-700 rounded-r-lg relative">
              <Quote className="absolute text-blue-200 h-16 w-16 -top-6 -left-6 opacity-50" />
              <p className="text-blue-900 italic font-medium text-lg relative z-10">
                "Prayer is not just a spiritual discipline; it is the breath of our relationship with God. Through
                holiness and prayer, we experience the fullness of God's power and presence in our lives."
              </p>
              <p className="text-blue-700 font-semibold mt-4 text-right">- Prophet SP. Olabanji</p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Founding of WOTREM</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The vision for World Thunder Revival and Evangelical Ministry (WOTREM) was birthed in the heart of
                Prophet S.P. Olabanji in 1995. It began in a remote village with a small group of devoted believers
                gathering consistently under divine instruction. Despite the humble beginnings, the atmosphere was
                filled with power, prayers, and the prophetic — marking the foundation of what would soon become a
                mighty move of God.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                As the work grew, Prophet Olabanji faced several challenges — especially concerning location and space.
                The growing number of attendees made the early gathering points unsustainable. Yet, with persistence and
                unwavering faith, he continued the assignment, trusting God for divine direction and provision even
                through seasons of hardship and uncertainty.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In 2012, after many trials and years of endurance, God miraculously provided a permanent and expansive
                location — now known as Redemption Mountain in Ondo City. It became the official headquarters and holy
                ground for WOTREM. From that mountain, revival, deliverance, and evangelism have gone forth across
                regions, with countless lives transformed through the prophetic mandate on Prophet Olabanji’s life.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Ministry Philosophy & Impact</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                WOTREM is rooted in a deep, unwavering belief in the power of prayer, deliverance, and uncompromising
                truth of God’s Word. Prophet S.P. Olabanji leads the ministry with a philosophy grounded in spiritual
                sensitivity, prophetic insight, and complete dependence on the Holy Spirit. The goal is to raise a
                generation that fears God, walks in holiness, and lives with kingdom purpose.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Over the years, the ministry has become a haven for the oppressed, afflicted, and spiritually hungry.
                Testimonies of healing, accurate prophecy, breakthroughs, and genuine repentance abound in every
                gathering. Many who came broken have encountered the raw power of God and left completely transformed —
                a proof of the anointing upon the ministry and its divine backing.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                His teachings, characterized by depth, clarity, and practical application, have reached a global
                audience through radio broadcasts, television programs, and more recently, digital platforms. His books
                on prayer, spiritual warfare, and Christian living have been translated into multiple languages and have
                blessed readers worldwide.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through consistent revival meetings, evangelistic outreaches, and sound discipleship, WOTREM has
                expanded its reach locally and internationally. The impact continues to grow through media, missions,
                and training institutions like the Thunder Ministry Institution (OTC). WOTREM is not just a church — it
                is a spiritual movement changing lives, cities, and destinies for God’s glory.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg text-blue-900 mb-3">Published Works</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• "The Thunder of Prayer: Awakening Spiritual Prayer Power" (2005)</li>
                  <li>• "Holiness: A convention Boook" (2010)</li>
                  <li>• "Power Of His Blood: Spiritual Transformation" (2015)</li>
                  <li>• "Prayer Warfare: Prayer Book" (2018)</li>
                  <li>• "Exposing The Secret Of Darkness: Opening Eye Of the Believers" (2022)</li>
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
                Behind the public ministry, Prophet SP. Olabanji is a devoted family man. He has been married to his
                wife, Mary, for over 25 years. She serves alongside him as the ministry's co-pastor and oversees the
                women's department. Together, they have four children who are all actively involved in various aspects
                of the ministry.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Prophet S.P. Olabanji is a devoted husband and father. He is blessed with a loving wife who stands
                faithfully beside him in ministry, and together they are raising four children in the fear and knowledge
                of the Lord. His home is built on prayer, discipline, and godly values — reflecting the same principles
                he teaches publicly.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In rare moments of leisure, Prophet Sunday. enjoys gardening, reading historical biographies, and taking
                long walks with his wife. Those close to him know him for his unexpected sense of humor and his ability
                to find joy in simple pleasures. Despite the demands of full-time ministry, he remains deeply connected
                to his family, leading them with integrity, love, and spiritual authority. His life is a testimony of
                balancing divine calling with family responsibility, showing that ministry truly begins at home.
              </p>
            </section>

            <div className="p-8 bg-gold-50 border border-gold-200 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Vision for the Future</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AAs WOTREM approaches its third decade, Prophet S.P. Olabanji envisions a global move of God — expanding
                WOTREM into a worldwide mission hub, training centers, and media arms that will carry revival fire to
                the ends of the earth
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
                <Button className="bg-blue-700 hover:bg-blue-600">Contact Prophet Sunday Olabanji</Button>
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
