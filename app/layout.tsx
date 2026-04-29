import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

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
  title: 'Create a Website for Small Businesses on Vancouver Island | Web Solutions',
  description:
    'Create a website for your business without hassle! Our website creation services include modern design, fast loading, SEO optimization, and full support—everything you need to quickly build a website and attract new customers.',
  openGraph: {
    title: 'Create a Website for Small Businesses on Vancouver Island | Web Solutions',
    description:
      'Create a website for your business without hassle! Our website creation services include modern design, fast loading, SEO optimization, and full support—everything you need to quickly build a website and attract new customers.',
    url: 'https://create-website.ca',
    siteName: 'Web Solutions',
    images: [
      {
        url: 'https://create-website.ca/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Create a Website for Small Businesses on Vancouver Island | Web Solutions',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Create a Website for Small Businesses on Vancouver Island | Web Solutions',
    description:
      'Create a website for your business without hassle! Our website creation services include modern design, fast loading, SEO optimization, and full support—everything you need to quickly build a website and attract new customers.',
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
      </body>
    </html>
  )
}
