"use client"
import { useEffect } from 'react'

type Consent = { essential: boolean; analytics: boolean; marketing: boolean }

export default function Analytics() {
  useEffect(() => {
    function load(consent: Consent) {
      if (!consent.analytics) return
      const gaId = process.env.NEXT_PUBLIC_GA4_ID
      const matomoUrl = process.env.NEXT_PUBLIC_MATOMO_URL
      const matomoSiteId = process.env.NEXT_PUBLIC_MATOMO_SITE_ID

      if (gaId) {
        const s = document.createElement('script')
        s.async = true
        s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
        document.head.appendChild(s)
        const inline = document.createElement('script')
        inline.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${gaId}',{anonymize_ip:true});`
        document.head.appendChild(inline)
      }

      if (matomoUrl && matomoSiteId) {
        const _paq = (window as any)._paq = (window as any)._paq || []
        _paq.push(['trackPageView'])
        _paq.push(['enableLinkTracking'])
        const u = matomoUrl.endsWith('/') ? matomoUrl : matomoUrl + '/'
        _paq.push(['setTrackerUrl', u + 'matomo.php'])
        _paq.push(['setSiteId', matomoSiteId])
        const d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0]
        g.async = true; g.src = u + 'matomo.js'; s.parentNode?.insertBefore(g, s)
      }
    }

    const saved = typeof window !== 'undefined' ? localStorage.getItem('wk-consent-v1') : null
    if (saved) load(JSON.parse(saved))

    const handler = (e: any) => load(e.detail)
    window.addEventListener('consentchange', handler)
    return () => window.removeEventListener('consentchange', handler)
  }, [])
  return null
}