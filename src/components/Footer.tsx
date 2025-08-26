import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-8 text-sm text-slate-600">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} WK Creative Studio, Würzburg. Kleinunternehmer (§19 UStG) – keine Umsatzsteuer ausgewiesen.</p>
          <nav className="flex gap-4">
            <Link href="/impressum" className="hover:underline">Impressum</Link>
            <Link href="/datenschutz" className="hover:underline">Datenschutz</Link>
            <Link href="/agb" className="hover:underline">AGB</Link>
            <Link href="/widerruf" className="hover:underline">Widerruf</Link>
            <Link href="/cookies" className="hover:underline">Cookies</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}