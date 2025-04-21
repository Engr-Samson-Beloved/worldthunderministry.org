import { Mail, MapPin, Phone } from "lucide-react"
import ContactForm from "./contact-form"

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Contact Us</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We'd love to hear from you! Reach out with any questions, prayer requests, or to learn more about our
          ministry.
        </p>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-900">Our Address</h3>
                  <p className="text-gray-600">Redemption Mountain, Oladayo Close, Ayeyemi, Ondo, Ondo State</p>
                  <p className="text-gray-600">Ondo State, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-900">Phone</h3>
                  <p className="text-gray-600">+234 (806) 788-8456</p>
                  <p className="text-gray-600">+234 (904) 053-7645</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-900">prophetspolabanji@gmail.com</h3>
                  <p className="text-gray-600">worldthunderministry.org</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-3 text-blue-900">Service Time</h3>
              <ul className="space-y-2 text-gray-600">
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
                  <span>Wednesday Deliverance Meeting: 9:00 AM - 12:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
