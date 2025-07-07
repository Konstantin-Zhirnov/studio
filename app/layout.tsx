import React from 'react'

import './globals.css'

export const metadata = {
  title: 'Create a Website',
  description: 'Create websites that stand out with our expert team of designers and developers.',
  keywords: 'create website, mobile applications, web applications, website',
  openGraph: {
    title: 'Create a Website',
    description: 'Create websites that stand out with our expert team of designers and developers.',
    url: 'https://create-website.ca',
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
      <body suppressHydrationWarning={true}>
        {children}
        <div id="modal-root" />
      </body>
    </html>
  )
}
