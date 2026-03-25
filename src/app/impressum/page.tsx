import LegalPage from "@/components/LegalPage";

export default function Impressum() {
  return (
    <LegalPage
      titel="Impressum"
      untertitel="Angaben gemäß § 5 TMG"
      stand="März 2025"
      sections={[
        {
          titel: "Angaben zum Unternehmen",
          inhalt: `Steuer & Partner GmbH\nSteuerberatungsgesellschaft\n\nMusterstraße 12\n60311 Frankfurt am Main\n\nTelefon: +49 69 123 456 789\nTelefax: +49 69 123 456 790\nE-Mail: info@steuerpartner-ffm.de`,
        },
        {
          titel: "Vertreten durch",
          inhalt: `Dr. Michael Weber (Geschäftsführer)\nSandra Hoffmann (Geschäftsführerin)`,
        },
        {
          titel: "Berufsbezeichnung & Berufsrecht",
          inhalt: [
            "Berufsbezeichnung: Steuerberater (verliehen in der Bundesrepublik Deutschland)",
            "Zuständige Kammer: Steuerberaterkammer Hessen, Bleichstraße 1, 60313 Frankfurt am Main",
            "Berufsrechtliche Regelungen: Steuerberatungsgesetz (StBerG), Berufsordnung der Bundessteuerberaterkammer (BOStB), Steuerberatervergütungsverordnung (StBVV)",
            "Die berufsrechtlichen Regelungen sind einsehbar unter: www.bstbk.de",
          ],
        },
        {
          titel: "Handelsregister",
          inhalt: `Registergericht: Amtsgericht Frankfurt am Main\nHandelsregisternummer: HRB 123456\n\nUmsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE123456789`,
        },
        {
          titel: "Berufshaftpflichtversicherung",
          inhalt: `Versicherungsgesellschaft: Muster Versicherung AG\nAnschrift: Versicherungsstraße 1, 60000 Frankfurt am Main\nGeltungsbereich: Bundesrepublik Deutschland`,
        },
        {
          titel: "Redaktionell verantwortlich",
          inhalt: `Dr. Michael Weber\nMusterstraße 12\n60311 Frankfurt am Main`,
        },
        {
          titel: "Streitschlichtung",
          inhalt: `Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr\n\nUnsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.`,
        },
        {
          titel: "Haftung für Inhalte",
          inhalt: `Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.\n\nVerpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.`,
        },
        {
          titel: "Urheberrecht",
          inhalt: `Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.\n\nDownloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.`,
        },
      ]}
    />
  );
}
