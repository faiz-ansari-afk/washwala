import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  weight: ['700', '900']
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono'
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2a9d8f' },
    { media: '(prefers-color-scheme: dark)', color: '#52b5a9' },
  ],
}

export const metadata: Metadata = {
  title: 'WashWala — Dirty Kapde In. Saaf Kapde Out. | Doorstep Laundry Service',
  description: 'WashWala is a doorstep laundry service built like your favourite delivery app. Schedule pickups, choose wash types, and get fresh clean clothes delivered back. Per-item transparent pricing, live tracking, garment safety guarantee.',
  generator: 'v0.app',
  keywords: [
    'laundry service',
    'doorstep laundry',
    'online laundry',
    'Mumbai laundry',
    'dry cleaning',
    'clothes delivery',
    'laundry app',
    'wash service',
    'garment care'
  ],
  authors: [{ name: 'WashWala Team' }],
  creator: 'WashWala',
  publisher: 'WashWala',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL('https://washwala.app'),
  alternates: {
    canonical: 'https://washwala.app',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://washwala.app',
    siteName: 'WashWala',
    title: 'WashWala — Doorstep Laundry Service',
    description: 'Schedule laundry pickups, choose wash types, and get fresh clean clothes delivered. Per-item pricing, live tracking, garment safety guarantee.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WashWala - Dirty kapde in. Saaf kapde out.',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WashWala — Doorstep Laundry Service',
    description: 'Laundry like ordering food. Schedule pickups, choose wash types, get fresh clothes delivered.',
    images: ['/og-image.jpg'],
    creator: '@washwala',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'WashWala',
    description: 'Doorstep laundry service with per-item transparent pricing and live tracking',
    url: 'https://washwala.app',
    logo: 'https://washwala.app/favicon.png',
    image: 'https://washwala.app/og-image.jpg',
    areaServed: {
      '@type': 'City',
      name: 'Mumbai',
      addressCountry: 'IN',
    },
    priceRange: '₹30-₹150',
    telephone: '+91-XXXXXXXXXX',
    sameAs: [
      'https://twitter.com/washwala',
      'https://instagram.com/washwala',
      'https://facebook.com/washwala',
    ],
    serviceType: 'Laundry Service',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '3',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="WashWala" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased scroll-smooth">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
