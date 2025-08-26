import dynamic from 'next/dynamic'
import Link from 'next/link'

const PriceCalculator = dynamic(() => import('@/components/PriceCalculator'), { ssr: false })

export default function PricingPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight">Preise</h1>
      <p className="mt-2 text-slate-700">Schätzen Sie Ihren Projektpreis. Exakte Angebote erhalten Sie nach dem Brief.</p>
      <div className="mt-6">
        <PriceCalculator />
      </div>
      <p className="mt-4 text-sm">Bereit? <Link href="/brief" className="underline">Zum Brief</Link></p>
    </main>
  )
}