import './globals.css'
import type { Metadata } from 'next'
import { NextSeo } from 'next-seo'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'WK Creative Studio – Produktfotografie Würzburg',
  description: 'Studio für E‑Commerce Produktfotografie in Würzburg. Moderations‑Garantie, ColorChecker/ICC, 24h Preview, SLA 3–5 Werktage, Rush 48h, A/B Hauptbild.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={inter.className}>
        <NextSeo
          title="WK Creative Studio – Produktfotografie Würzburg"
          description="Studio für E‑Commerce Produktfotografie in Würzburg. Moderations‑Garantie, ColorChecker/ICC, 24h Preview, SLA 3–5 Werktage, Rush 48h, A/B Hauptbild."
          openGraph={{
            type: 'website',
            locale: 'de_DE',
            url: process.env.NEXT_PUBLIC_SITE_URL,
            siteName: 'WK Creative Studio',
          }}
          twitter={{ cardType: 'summary_large_image' }}
        />
        {children}
      </body>
    </html>
  )
}