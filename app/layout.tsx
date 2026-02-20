import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import LocalFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const diatype = LocalFont({
  src: [
    {
      path: '../public/fonts/diatype-regular.ttf.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-diatype',
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: 'Neko - Fully Decentralized Memecoin | No Owner, Just Community',
  description: 'Join Neko, a fully decentralized memecoin movement. No owner, just community. Cats are the future of crypto. 0% buy and sell taxes.',
  keywords: ['Neko', 'memecoin', 'decentralized', 'crypto', 'blockchain', 'cat', 'DeFi', 'Web3'],
  authors: [{ name: 'Neko Community' }],
  creator: 'Neko Community',
  publisher: 'Neko',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: 'Next.js',
  applicationName: 'Neko Memecoin',
  referrer: 'strict-origin-when-cross-origin',
  icons: {
    icon: [
      {
        url: '/logo.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/logo.png',
        sizes: '64x64',
        type: 'image/png',
      },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
    other: {
      rel: 'icon',
      url: '/logo.png',
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  openGraph: {
    type: 'website',
    url: 'https://neko.com',
    title: 'Neko - Fully Decentralized Memecoin',
    description: 'Join the decentralized memecoin revolution. No owner, just community. Cats are the future of crypto.',
    siteName: 'Neko Memecoin',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 1200,
        alt: 'Neko Memecoin Logo',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neko - Fully Decentralized Memecoin',
    description: 'No owner. Just community. Join the cat revolution.',
    images: ['/logo.png'],
    creator: '@NekoMemecoin',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
    bing: 'bing-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        
        {/* Bing Webmaster Tools Verification */}
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <meta property="og:locale" content="en_US" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://neko.com" />
        
        {/* Alternate Links */}
        <link rel="alternate" hrefLang="en" href="https://neko.com" />
      </head>
      <body className={`${diatype.variable} font-diatype antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
