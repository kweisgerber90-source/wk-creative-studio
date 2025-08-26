export default function ServicesPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight">Leistungen</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="font-semibold">White</h2>
          <p className="mt-2 text-slate-700">Saubere Freisteller auf reinweißem Hintergrund, konform mit Marktplatz‑Richtlinien.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="font-semibold">Lifestyle</h2>
          <p className="mt-2 text-slate-700">Ambiente‑ und Anwendungsszenen, die Nutzung und Größe vermitteln.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="font-semibold">Infografik</h2>
          <p className="mt-2 text-slate-700">Mehrwert, Maße, Features – klar visualisiert für bessere Conversion.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="font-semibold">Mini‑Video</h2>
          <p className="mt-2 text-slate-700">Kurze Produktclips (5–15s) für PDP, Amazon oder Social.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="font-semibold">360°</h2>
          <p className="mt-2 text-slate-700">Drehbare Ansicht mit 24–72 Frames für interaktive Darstellung.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="font-semibold">Rush 48h</h2>
          <p className="mt-2 text-slate-700">Beschleunigte Lieferung innerhalb von 48 Stunden (nach Wareneingang).</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="font-semibold">A/B Hauptbild</h2>
          <p className="mt-2 text-slate-700">Zwei regelkonforme Hauptbild‑Varianten für CTR‑Tests – datengetrieben entscheiden.</p>
        </div>
      </div>
    </main>
  )
}