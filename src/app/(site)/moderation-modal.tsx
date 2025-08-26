"use client"
import { useEffect, useState } from 'react'

export default function ModerationModal() {
  const [open, setOpen] = useState(false)
  const [html, setHtml] = useState('')
  useEffect(() => {
    fetch('/garantie.html').then(r => r.text()).then(setHtml).catch(() => setHtml('<p>Nicht verfügbar.</p>'))
  }, [])
  if (!open) return <button className="underline" onClick={() => setOpen(true)}>Moderations‑Garantie</button>
  return (
    <div className="fixed inset-0 z-50 bg-black/50 p-4" role="dialog" aria-modal>
      <div className="mx-auto max-w-3xl rounded bg-white p-4 shadow">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Moderations‑Garantie</h2>
          <button className="rounded bg-slate-900 px-3 py-1 text-white" onClick={() => setOpen(false)}>Schließen</button>
        </div>
        <div className="prose mt-4 max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}