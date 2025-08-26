"use client"
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

const STORAGE_KEY = 'wk-consent-v1'

type Consent = {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

const defaultConsent: Consent = { essential: true, analytics: false, marketing: false }

export function CookieConsent() {
  const [open, setOpen] = useState(false)
  const [consent, setConsent] = useState<Consent>(defaultConsent)

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
    if (!saved) setOpen(true)
    else setConsent(JSON.parse(saved))
  }, [])

  function save(next: Consent) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setConsent(next)
    setOpen(false)
    // Dispatch event for analytics loader
    window.dispatchEvent(new CustomEvent('consentchange', { detail: next }))
  }

  if (!open) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="container mb-4">
        <div className="rounded-lg border bg-white p-4 shadow">
          <p className="font-medium">Cookies & Dienste</p>
          <p className="mt-1 text-sm text-slate-600">Wir verwenden essenzielle Cookies (erforderlich), optional Analytik (Matomo/GA4) und Marketing. Sie können Ihre Auswahl jederzeit anpassen.</p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1 text-sm">
              <label className="flex items-center gap-2"><input type="checkbox" checked readOnly /> Essenziell</label>
              <label className="flex items-center gap-2"><input type="checkbox" checked={consent.analytics} onChange={e => setConsent({ ...consent, analytics: e.target.checked })} /> Analytik</label>
              <label className="flex items-center gap-2"><input type="checkbox" checked={consent.marketing} onChange={e => setConsent({ ...consent, marketing: e.target.checked })} /> Marketing</label>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" onClick={() => save(defaultConsent)}>Nur essenziell</Button>
              <Button onClick={() => save({ essential: true, analytics: true, marketing: true })}>Alle akzeptieren</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}