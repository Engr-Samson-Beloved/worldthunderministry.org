import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WOTREM - World Thunder Revival And Evangelical Ministry",
  description:
    "Join us at World Thunder Revival And Evangelical Ministry for powerful worship, community and spiritual growth.",
  keywords: "church, worship, ministry, faith, community, WOTREM, holiness, prayer",
  openGraph: {
    title: "WOTREM - World Thunder Revival And Evangelical Ministry",
    description: "Join our community for worship and spiritual growth.",
    type: "website",
    url: "https://www.worldthunderministry.org",
    images: [
      {
        url: "https://res.cloudinary.com/dmkchjjfa/image/upload/v1745149325/logo_jweqah.png",
        width: 1200,
        height: 1200,
        alt: "WOTREM Church Logo",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
