export default function DatenschutzPage() {
  return (
    <main className="container py-12 prose max-w-none">
      <h1>Datenschutzerklärung</h1>
      <p>Diese Informationen erläutern nach Art. 13/14 DSGVO, wie wir personenbezogene Daten verarbeiten.</p>
      <h2>Verantwortlicher</h2>
      <p>WK Creative Studio, Würzburg, studio@example.com</p>
      <h2>Zwecke & Rechtsgrundlagen</h2>
      <ul>
        <li>Websitebetrieb (essenzielle Cookies) – Art. 6 Abs. 1 lit. f DSGVO</li>
        <li>Reichweitenmessung/Analytik (optional) – Einwilligung, Art. 6 Abs. 1 lit. a DSGVO</li>
        <li>Marketing (optional) – Einwilligung, Art. 6 Abs. 1 lit. a DSGVO</li>
        <li>Vertragsanbahnung/Kommunikation (Brief) – Art. 6 Abs. 1 lit. b DSGVO</li>
      </ul>
      <h2>Empfänger/ Auftragsverarbeiter</h2>
      <p>Hosting und CDN (Vercel), Analytik (Google Analytics 4 oder Matomo), Formular‑Dienst (Tally/Typeform).</p>
      <p>Mit Auftragsverarbeitern schließen wir Verträge (DPA). Drittlandübermittlungen erfolgen auf Basis geeigneter Garantien (Art. 46 DSGVO).</p>
      <h2>Cookies & Einwilligung</h2>
      <p>Wir unterscheiden: Essenziell (erforderlich), Analytik, Marketing. Sie können Ihre Auswahl über das Cookie‑Banner steuern (TTDSG §25).</p>
      <h2>Google Analytics 4 / Matomo</h2>
      <p>GA4: IP‑Anonymisierung, Nutzer‑IDs deaktiviert; Matomo: selbst gehostet/Cloud – wir nutzen nur aggregierte Daten.</p>
      <h2>Speicherdauer</h2>
      <p>Wir speichern nur solange nötig. Geschäftsbriefe: 6 Jahre (§257 HGB).</p>
      <h2>Betroffenenrechte</h2>
      <p>Auskunft, Berichtigung, Löschung, Einschränkung, Widerruf von Einwilligungen, Beschwerde bei einer Aufsichtsbehörde.</p>
    </main>
  )
}