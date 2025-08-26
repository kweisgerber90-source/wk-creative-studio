import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <main>
      <section className="border-b bg-slate-50">
        <div className="container py-16">
          <h1 className="text-4xl font-bold tracking-tight">Produktfotografie, die verkauft.</h1>
          <p className="mt-4 max-w-2xl text-slate-700">WK Creative Studio in Würzburg – Moderations‑Garantie, farbtreue Aufnahmen mit ColorChecker/ICC, 24h Preview, SLA 3–5 Werktage, optional Rush 48h und A/B Hauptbild.</p>
          <div className="mt-6 flex gap-3">
            <Button asChild><Link href="/pricing">Preis berechnen</Link></Button>
            <Button variant="secondary" asChild><Link href="/brief">Zum Brief</Link></Button>
          </div>
          <p className="mt-3 text-xs text-slate-500">Kleinunternehmer (§19 UStG) – Preise verstehen sich ohne Umsatzsteuer.</p>
        </div>
      </section>
      <section className="container py-12">
        <h2 className="text-2xl font-semibold">Warum wir</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-slate-700">
          <li>Moderations‑Garantie (mit Ausschlüssen) – Bildkonformität für Marktplätze</li>
          <li>Farbpräzision: ColorChecker, ICC‑Profil, kalibrierter Workflow</li>
          <li>24h Vorschau, Lieferzeit 3–5 Werktage, Rush 48h verfügbar</li>
          <li>A/B Hauptbild – zwei konforme Varianten für CTR‑Tests</li>
          <li>Optionen: Mini‑Video, 360° Spins, Lifestyle/Infografik</li>
          <li>Klare Prozesse, Checklisten, sichere Verpackung</li>
        </ul>
      </section>
      <section className="border-t bg-white">
        <div className="container py-12">
          <h2 className="text-2xl font-semibold">Pakete & Preise</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6">
              <h3 className="font-semibold">White</h3>
              <p className="mt-1 text-sm text-slate-600">Reines Freisteller‑Setup für Marktplätze.</p>
              <p className="mt-4 text-2xl font-bold">ab €199</p>
              <p className="text-xs text-slate-500">§19 UStG – keine USt. ausgewiesen</p>
              <Button className="mt-4" asChild><Link href="/pricing">Preis berechnen</Link></Button>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="font-semibold">White + Lifestyle</h3>
              <p className="mt-1 text-sm text-slate-600">Kombination aus Freisteller und Ambiente.</p>
              <p className="mt-4 text-2xl font-bold">ab €299</p>
              <p className="text-xs text-slate-500">§19 UStG – keine USt. ausgewiesen</p>
              <Button className="mt-4" asChild><Link href="/pricing">Preis berechnen</Link></Button>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="font-semibold">White + Infografik</h3>
              <p className="mt-1 text-sm text-slate-600">Konvertierende Infografiken mit Vorteilen.</p>
              <p className="mt-4 text-2xl font-bold">ab €349</p>
              <p className="text-xs text-slate-500">§19 UStG – keine USt. ausgewiesen</p>
              <Button className="mt-4" asChild><Link href="/pricing">Preis berechnen</Link></Button>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-12">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <p className="mt-2 text-slate-700">Weitere Details finden Sie unter Leistungen, Ablauf und im Brief.</p>
        <div className="mt-6 flex gap-3">
          <Button asChild><Link href="/services">Leistungen</Link></Button>
          <Button variant="secondary" asChild><Link href="/how-it-works">So funktioniert’s</Link></Button>
        </div>
      </section>
    </main>
  )
}