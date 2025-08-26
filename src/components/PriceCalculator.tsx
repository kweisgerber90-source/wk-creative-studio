"use client"
import { useEffect, useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'

export type CalculatorResult = {
  total: number
}

export default function PriceCalculator({ onChange }: { onChange?: (r: CalculatorResult) => void }) {
  const [skuCount, setSkuCount] = useState(1)
  const [angles, setAngles] = useState(3)
  const [rush, setRush] = useState(false)
  const [abMain, setAbMain] = useState(false)
  const [miniVideo, setMiniVideo] = useState(false)
  const [spin, setSpin] = useState(false)

  const total = useMemo(() => {
    // Base: per SKU 199, angles beyond 3 add 20€ each, A/B +30€, Rush +40%, MiniVideo +89€, 360 +129€
    let base = skuCount * 199
    if (angles > 3) base += (angles - 3) * 20 * skuCount
    if (abMain) base += 30 * skuCount
    if (miniVideo) base += 89 * skuCount
    if (spin) base += 129 * skuCount
    if (rush) base = Math.round(base * 1.4)
    return base
  }, [skuCount, angles, rush, abMain, miniVideo, spin])

  useEffect(() => {
    if (onChange) onChange({ total })
  }, [total, onChange])

  return (
    <div className="rounded-lg border p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex items-center justify-between">
          <span>SKU Anzahl</span>
          <input aria-label="SKU Anzahl" className="w-24 rounded border px-2 py-1" type="number" min={1} value={skuCount} onChange={e => setSkuCount(Math.max(1, Number(e.target.value)))} />
        </label>
        <label className="flex items-center justify-between">
          <span>Winkel pro SKU</span>
          <input aria-label="Winkel pro SKU" className="w-24 rounded border px-2 py-1" type="number" min={1} value={angles} onChange={e => setAngles(Math.max(1, Number(e.target.value)))} />
        </label>
        <label className="flex items-center justify-between">
          <span>Rush 48h</span>
          <input aria-label="Rush 48h" type="checkbox" checked={rush} onChange={e => setRush(e.target.checked)} />
        </label>
        <label className="flex items-center justify-between">
          <span>A/B Hauptbild</span>
          <input aria-label="A/B Hauptbild" type="checkbox" checked={abMain} onChange={e => setAbMain(e.target.checked)} />
        </label>
        <label className="flex items-center justify-between">
          <span>Mini‑Video</span>
          <input aria-label="Mini-Video" type="checkbox" checked={miniVideo} onChange={e => setMiniVideo(e.target.checked)} />
        </label>
        <label className="flex items-center justify-between">
          <span>360°</span>
          <input aria-label="360 Grad" type="checkbox" checked={spin} onChange={e => setSpin(e.target.checked)} />
        </label>
      </div>
      <div className="mt-6 flex items-baseline justify-between">
        <p className="text-2xl font-bold">Gesamt: €{total}</p>
        <p className="text-xs text-slate-500">§19 UStG – keine USt. ausgewiesen</p>
      </div>
      <div className="mt-4"><Button>Zum Brief</Button></div>
    </div>
  )
}