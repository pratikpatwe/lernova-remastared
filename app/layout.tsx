import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const momo = {
  variable: "--font-momo",
}

export const metadata: Metadata = {
  title: "Lernova - Modern Learning Management System",
  description: "Transform learning with Lernova. Effortlessly manage learning progress and enhance student engagement.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Momo+Signature&family=Open+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
        <style>{`
          .font-momo {
            font-family: 'Momo Signature', sans-serif;
          }
          body {
            font-family: 'Open Sans', sans-serif;
          }
        `}</style>
      </head>
      <body className={`${momo.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
