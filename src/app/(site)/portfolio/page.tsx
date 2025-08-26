"use client"
import cases from '@/data/cases.json'
import Image from 'next/image'
import { useState } from 'react'

function BeforeAfter({ before, after, title }: { before: string; after: string; title: string }) {
  const [pos, setPos] = useState(50)
  return (
    <div className="relative w-full overflow-hidden rounded-lg border">
      <div className="relative aspect-video">
        <Image src={after} alt={`${title} nachher`} fill className="object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={before} alt={`${title} vorher`} fill className="object-cover" />
        </div>
        <input aria-label="Vorher/Nachher" className="absolute inset-x-2 bottom-2" type="range" min={0} max={100} value={pos} onChange={e => setPos(Number(e.target.value))} />
      </div>
    </div>
  )
}

export default function PortfolioPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight">Portfolio</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map(c => (
          <div key={c.id} className="grid gap-2">
            <BeforeAfter before={c.before} after={c.after} title={c.title} />
            <p className="text-sm text-slate-700">{c.title}</p>
          </div>
        ))}
      </div>
    </main>
  )
}