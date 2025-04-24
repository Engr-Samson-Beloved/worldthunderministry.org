import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.worldthunderministry.org"),
  title: {
    default: "WOTREM - World Thunder Revival And Evangelical Ministry",
    template: "%s | WOTREM",
  },
  description:
    "World Thunder Revival And Evangelical Ministry (WOTREM) - A beacon of holiness and prayer. Join us for powerful worship, community and spiritual growth.",
  keywords:
    "church, worship, ministry, faith, community, WOTREM, holiness, prayer, Prophet S.P. Olabanji, Ondo, Nigeria",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.worldthunderministry.org",
    siteName: "World Thunder Revival And Evangelical Ministry",
    images: [
      {
        url: "https://res.cloudinary.com/dmkchjjfa/image/upload/v1745149325/logo_jweqah.png",
        width: 1200,
        height: 1200,
        alt: "WOTREM Church Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@wotrem",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
