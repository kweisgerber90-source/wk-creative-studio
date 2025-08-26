export default function HowItWorksPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight">Ablauf</h1>
      <ol className="mt-6 list-decimal pl-6 text-slate-700 space-y-2">
        <li>Brief ausfüllen – Ziele, Produkte, Varianten, gewünschte Leistungen.</li>
        <li>Wareneingang – sicher verpackt an unser Studio in Würzburg senden.</li>
        <li>24h Vorschau – wir schicken eine Auswahl zur Freigabe.</li>
        <li>Produktion – Aufnahme, Retusche, Infografiken, ggf. Video/360°.</li>
        <li>Lieferung – Downloadlink, SLA 3–5 Werktage (Rush 48h optional).</li>
        <li>Rückversand – optional Rückversand oder fachgerechte Entsorgung.</li>
      </ol>
      <h2 className="mt-8 text-2xl font-semibold">Verpackungs‑Checkliste</h2>
      <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-1">
        <li>Stoßsichere Verpackung, Hohlräume füllen, Produkt fixieren.</li>
        <li>Klare Beschriftung je SKU/Variante, Auftragsnummer beilegen.</li>
        <li>Requisiten/Props beilegen, wenn gewünscht (Lifestyle/Infografik).</li>
        <li>Model/Property Releases anfügen, falls erforderlich.</li>
      </ul>
      <p className="mt-6 text-sm text-slate-600">Hinweis: Für Fallstudien und Portfolio können Bilder nach Freigabe genutzt werden. Rechte an gelieferten Endbildern gemäß AGB.</p>
    </main>
  )
}