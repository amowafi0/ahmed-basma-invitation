import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost, Pinyon_Script } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const pinyonScript = Pinyon_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-script',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ahmed-basma.3d-micano.com'),
  title: 'Ahmed & Basma — Engagement',
  description: 'You are warmly invited to celebrate the engagement of Ahmed & Basma',
  openGraph: {
    title: 'Ahmed & Basma — Engagement',
    description: 'You are warmly invited to celebrate the engagement of Ahmed & Basma',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed & Basma — Engagement',
    description: 'You are warmly invited to celebrate the engagement of Ahmed & Basma',
    images: ['/opengraph-image'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${pinyonScript.variable} ${jost.variable}`}>
        {children}
      </body>
    </html>
  )
}
