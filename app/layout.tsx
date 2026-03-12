import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'WashWala — Dirty Kapde In. Saaf Kapde Out.',
  description: 'A doorstep laundry service built like your favourite delivery app — schedule a pickup, choose your wash type, and get fresh clean clothes delivered back.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased scroll-smooth">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
