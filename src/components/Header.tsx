import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">WK Creative Studio</Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/services" className="hover:underline">Leistungen</Link>
          <Link href="/pricing" className="hover:underline">Preise</Link>
          <Link href="/portfolio" className="hover:underline">Portfolio</Link>
          <Link href="/how-it-works" className="hover:underline">Ablauf</Link>
          <Link href="/brief" className="hover:underline">Brief</Link>
        </nav>
      </div>
    </header>
  )
}