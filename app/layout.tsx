import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'

import Toasts from '@/components/Toasts'
import { Phone } from '@/components/Phone'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Web Solutions | Nanaimo & Vancouver Island',
  description:
    'Websites, web applications, and e‑commerce for small businesses in Nanaimo and across Vancouver Island. Modern design, fast performance, local SEO, and ongoing support.',
  openGraph: {
    title: 'Web Solutions | Nanaimo & Vancouver Island',
    description:
      'Modern websites and web apps for small businesses on Vancouver Island—fast, mobile‑friendly, SEO‑ready, and built to convert.',
    url: 'https://create-website.ca',
    siteName: 'Web Solutions',
    images: [
      {
        url: 'https://create-website.ca/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Solutions — Websites & Web Apps for Vancouver Island small businesses',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Solutions | Nanaimo & Vancouver Island',
    description:
      'Websites, web apps, and e‑commerce for small businesses on Vancouver Island. Fast, modern, SEO‑ready.',
    images: ['https://create-website.ca/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}

        <Toasts />

        <Phone />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17852461067"
          strategy="afterInteractive"
        />

        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17852461067');
          `}
        </Script>
      </body>
    </html>
  )
}
