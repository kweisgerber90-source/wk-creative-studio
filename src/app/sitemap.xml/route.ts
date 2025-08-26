import { NextResponse } from 'next/server'

const routes = ['/', '/services', '/pricing', '/brief', '/portfolio', '/how-it-works', '/login', '/impressum', '/datenschutz', '/agb', '/widerruf', '/cookies']

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const urls = routes.map(r => `<url><loc>${base}${r}</loc></url>`).join('')
  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
  return new NextResponse(body, { headers: { 'Content-Type': 'application/xml' } })
}