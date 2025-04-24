import { Mail, MapPin, Phone } from "lucide-react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Gallery from "@/components/gallery"
import Founder from "@/components/founder"
import Events from "@/components/events"
import School from "@/components/school"
import Socials from "@/components/socials"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      <section id="gallery" className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Our Gallery</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Experience the vibrant moments of worship, fellowship, and community outreach at WOTREM.
          </p>
          <Gallery />
        </div>
      </section>

      <Founder />

      <Events />

      <School />

      <Socials />

      <section id="contact" className="py-16 bg-blue-900 text-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Contact & Location</h2>
          <p className="text-center text-blue-100 mb-12 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out with any questions or visit us for our services.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Our Address</h3>
                  <p className="text-blue-100">Redemption Mountain, Oladayo Close, Ayeyemi, Ondo, Ondo State</p>
                  <p className="text-blue-100">Ondo, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Phone</h3>
                  <p className="text-blue-100">+234 (806) 788-8456</p>
                  <p className="text-blue-100">+234 (904) 053-7645</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Email</h3>
                  <p className="text-blue-100">worldthunderministry@gmail.com</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-2">Service Times</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>Sunday Worship: 9:00 AM - 12:00 PM</li>
                  <li>Wednesday Bible Study: 5:00 PM - 7:00 PM</li>
                  <li>Friday Prayer Meeting: 9:00 AM - 12:00 PM</li>
                </ul>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

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
