import React from 'react'

import './globals.css'

export const metadata = {
  title: 'Digital Nanaimo',
  description:
    'Our company is engaged in the creation of websites, mobile applications and web applications of any complexity using the most modern technology stack. We are ready to cooperate with both companies and individuals.',
  keywords: 'mobile applications, web applications, website',
  openGraph: {
    title: 'Digital Nanaimo',
    description:
      'Our company is engaged in the creation of websites, mobile applications and web applications of any complexity using the most modern technology stack. We are ready to cooperate with both companies and individuals.',
    url: 'https://digital-nanaimo.ca',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
