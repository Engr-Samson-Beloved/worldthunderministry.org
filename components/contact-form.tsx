"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, AlertCircle, Info, Send, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type FormData = {
  name: string
  email: string
  phone: string
  subject: string
  messageType: string
  message: string
}

type FormErrors = {
  [key in keyof FormData]?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    messageType: "general",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<{ [key in keyof FormData]?: boolean }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [charCount, setCharCount] = useState(0)

  const messageTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "prayer", label: "Prayer Request" },
    { value: "testimony", label: "Share a Testimony" },
    { value: "volunteer", label: "Volunteer Interest" },
    { value: "counseling", label: "Counseling Request" },
  ]

  useEffect(() => {
    setCharCount(formData.message.length)
  }, [formData.message])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))

    // Validate field on change if it's been touched
    if (touched[id as keyof FormData]) {
      validateField(id as keyof FormData, value)
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setTouched((prev) => ({ ...prev, [id]: true }))
    validateField(id as keyof FormData, value)
  }

  const validateField = (field: keyof FormData, value: string) => {
    const newErrors = { ...errors }

    switch (field) {
      case "name":
        if (!value.trim()) {
          newErrors.name = "Name is required"
        } else if (value.trim().length < 2) {
          newErrors.name = "Name must be at least 2 characters"
        } else {
          delete newErrors.name
        }
        break

      case "email":
        if (!value.trim()) {
          newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = "Email address is invalid"
        } else {
          delete newErrors.email
        }
        break

      case "phone":
        if (value.trim() && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(value)) {
          newErrors.phone = "Phone number is invalid"
        } else {
          delete newErrors.phone
        }
        break

      case "subject":
        if (!value.trim()) {
          newErrors.subject = "Subject is required"
        } else {
          delete newErrors.subject
        }
        break

      case "message":
        if (!value.trim()) {
          newErrors.message = "Message is required"
        } else if (value.trim().length < 10) {
          newErrors.message = "Message must be at least 10 characters"
        } else {
          delete newErrors.message
        }
        break

      default:
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateForm = () => {
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => {
        acc[key as keyof FormData] = true
        return acc
      },
      {} as { [key in keyof FormData]: boolean },
    )

    setTouched(allTouched)

    // Validate all fields
    let isValid = true
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid"
      isValid = false
    }

    if (formData.phone.trim() && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid"
      isValid = false
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
      isValid = false
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
      }, 1500)
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      messageType: "general",
      message: "",
    })
    setErrors({})
    setTouched({})
    setIsSubmitted(false)
    setCharCount(0)
  }

  if (isSubmitted) {
    return (
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>

          <h3 className="text-2xl font-bold text-blue-900 mb-4">Message Sent Successfully!</h3>

          <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-6">
            <p className="text-green-800">
              Thank you for reaching out to us. We've received your message and will get back to you soon.
            </p>
          </div>

          <div className="space-y-2 text-left bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-gray-700">
              <span className="font-medium">Name:</span> {formData.name}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email:</span> {formData.email}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Subject:</span> {formData.subject}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Message Type:</span>{" "}
              {messageTypes.find((type) => type.value === formData.messageType)?.label}
            </p>
          </div>

          <Button onClick={resetForm} className="bg-blue-700 hover:bg-blue-600 transition-colors">
            Send Another Message
          </Button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="font-semibold text-xl mb-6 text-blue-900 flex items-center">
        <Send className="mr-2 h-5 w-5" />
        Send us a Message
      </h3>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6 flex items-start">
          <Info className="text-blue-600 h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-blue-700">
            Fields marked with <span className="text-red-500">*</span> are required. We'll respond to your message as
            soon as possible.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium text-gray-700 border-b pb-2">Personal Information</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center">
                Name <span className="text-red-500 ml-1">*</span>
              </label>
              <Input
                id="name"
                placeholder="Your full name"
                className={`border ${errors.name ? "border-red-300 bg-red-50" : "border-gray-300"} focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50`}
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <AnimatePresence>
                {touched.name && errors.name && (
                  <motion.p
                    className="text-red-500 text-xs flex items-center mt-1"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center">
                Email <span className="text-red-500 ml-1">*</span>
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className={`border ${errors.email ? "border-red-300 bg-red-50" : "border-gray-300"} focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50`}
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <AnimatePresence>
                {touched.email && errors.email && (
                  <motion.p
                    className="text-red-500 text-xs flex items-center mt-1"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone Number <span className="text-gray-400 text-xs">(Optional)</span>
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (234) 567-8900"
              className={`border ${errors.phone ? "border-red-300 bg-red-50" : "border-gray-300"} focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50`}
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <AnimatePresence>
              {touched.phone && errors.phone && (
                <motion.p
                  className="text-red-500 text-xs flex items-center mt-1"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.phone}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium text-gray-700 border-b pb-2">Message Details</h4>

          <div className="space-y-2">
            <label htmlFor="messageType" className="text-sm font-medium text-gray-700">
              Message Type
            </label>
            <select
              id="messageType"
              className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={formData.messageType}
              onChange={handleChange}
            >
              {messageTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-gray-700 flex items-center">
              Subject <span className="text-red-500 ml-1">*</span>
            </label>
            <Input
              id="subject"
              placeholder="What is your message about?"
              className={`border ${errors.subject ? "border-red-300 bg-red-50" : "border-gray-300"} focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50`}
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <AnimatePresence>
              {touched.subject && errors.subject && (
                <motion.p
                  className="text-red-500 text-xs flex items-center mt-1"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.subject}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700 flex items-center justify-between">
              <span className="flex items-center">
                Message <span className="text-red-500 ml-1">*</span>
              </span>
              <span className={`text-xs ${charCount > 500 ? "text-red-500" : "text-gray-400"}`}>
                {charCount}/500 characters
              </span>
            </label>
            <Textarea
              id="message"
              placeholder="Please provide details about your inquiry, prayer request, or message..."
              className={`border ${errors.message ? "border-red-300 bg-red-50" : "border-gray-300"} focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 min-h-[120px]`}
              value={formData.message}
              onChange={(e) => {
                if (e.target.value.length <= 500) {
                  handleChange(e)
                }
              }}
              onBlur={handleBlur}
            />
            <AnimatePresence>
              {touched.message && errors.message && (
                <motion.p
                  className="text-red-500 text-xs flex items-center mt-1"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-600 transition-colors flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin h-5 w-5 mr-2" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </div>
      </form>
    </motion.div>
  )
}
