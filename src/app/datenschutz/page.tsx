import LegalPage from "@/components/LegalPage";

export default function Datenschutz() {
  return (
    <LegalPage
      titel="Datenschutzerklärung"
      untertitel="Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO"
      stand="März 2025"
      sections={[
        {
          titel: "Verantwortlicher",
          inhalt: `Steuer & Partner GmbH\nMusterstraße 12\n60311 Frankfurt am Main\n\nTelefon: +49 69 123 456 789\nE-Mail: datenschutz@steuerpartner-ffm.de`,
        },
        {
          titel: "Grundsätze der Datenverarbeitung",
          inhalt: `Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung unserer Dienstleistungen erforderlich ist oder Sie ausdrücklich eingewilligt haben. Die Verarbeitung erfolgt stets im Einklang mit der Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG).\n\nIhre Daten werden von uns vertraulich behandelt und nicht ohne Ihre Einwilligung an Dritte weitergegeben – es sei denn, wir sind gesetzlich dazu verpflichtet.`,
        },
        {
          titel: "Erhebung und Verarbeitung personenbezogener Daten",
          inhalt: [
            "Kontaktformular: Name, E-Mail-Adresse, Telefonnummer (optional), Nachrichteninhalt – zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO)",
            "Mandantenverhältnis: Steuerlich relevante Daten zur Erfüllung unserer vertraglichen Pflichten als Steuerberater (Art. 6 Abs. 1 lit. b DSGVO)",
            "Website-Nutzung: Server-Logfiles mit IP-Adresse, Browsertyp, Datum/Uhrzeit – zur Sicherstellung des Betriebs (Art. 6 Abs. 1 lit. f DSGVO)",
            "Newsletter: E-Mail-Adresse mit ausdrücklicher Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)",
          ],
        },
        {
          titel: "Speicherdauer",
          inhalt: `Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.\n\nFür steuerrelevante Unterlagen gelten gesetzliche Aufbewahrungsfristen von bis zu 10 Jahren gemäß § 147 AO. Nach Ablauf dieser Fristen werden die Daten routinemäßig gelöscht.`,
        },
        {
          titel: "Weitergabe von Daten",
          inhalt: [
            "Finanzämter und Behörden: soweit gesetzlich vorgeschrieben oder zur Erfüllung unserer Beratungsleistungen erforderlich",
            "IT-Dienstleister: im Rahmen von Auftragsverarbeitungsverträgen gemäß Art. 28 DSGVO",
            "DATEV eG: als unser Softwarepartner für die Buchhaltungs- und Steuerberatungssoftware",
            "Keine Weitergabe zu Werbezwecken oder an Dritte ohne Ihre ausdrückliche Einwilligung",
          ],
        },
        {
          titel: "Cookies",
          inhalt: `Unsere Website verwendet technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Diese Cookies speichern keine personenbezogenen Daten und dienen ausschließlich der Funktionalität der Website.\n\nAnalyse- oder Marketing-Cookies werden nur mit Ihrer ausdrücklichen Einwilligung gesetzt. Sie können Ihre Cookie-Einstellungen jederzeit über unsere Cookie-Einstellungen anpassen.`,
        },
        {
          titel: "Ihre Rechte",
          inhalt: [
            "Auskunftsrecht: Sie haben das Recht, Auskunft über die von uns gespeicherten Daten zu erhalten (Art. 15 DSGVO)",
            "Berichtigungsrecht: Sie können die Berichtigung unrichtiger Daten verlangen (Art. 16 DSGVO)",
            "Löschungsrecht: Sie können die Löschung Ihrer Daten verlangen, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen (Art. 17 DSGVO)",
            "Einschränkung: Sie können die Einschränkung der Verarbeitung Ihrer Daten verlangen (Art. 18 DSGVO)",
            "Datenübertragbarkeit: Sie haben das Recht auf Übertragung Ihrer Daten in einem gängigen Format (Art. 20 DSGVO)",
            "Widerspruchsrecht: Sie können der Verarbeitung Ihrer Daten jederzeit widersprechen (Art. 21 DSGVO)",
            "Beschwerderecht: Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren",
          ],
        },
        {
          titel: "Aufsichtsbehörde",
          inhalt: `Hessischer Beauftragter für Datenschutz und Informationsfreiheit\nPostfach 3163\n65021 Wiesbaden\n\nTelefon: +49 611 1408-0\nE-Mail: poststelle@datenschutz.hessen.de`,
        },
        {
          titel: "Datensicherheit",
          inhalt: `Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder den Zugriff unberechtigter Personen zu schützen.\n\nDie Datenübertragung auf unserer Website erfolgt verschlüsselt über das HTTPS-Protokoll. Unser Mandantenportal verwendet Ende-zu-Ende-Verschlüsselung für alle übermittelten Dokumente.`,
        },
        {
          titel: "Kontakt Datenschutz",
          inhalt: `Bei Fragen zum Datenschutz wenden Sie sich bitte an:\n\ndatenschutz@steuerpartner-ffm.de\n\nWir beantworten Ihre Anfragen innerhalb von 30 Tagen.`,
        },
      ]}
    />
  );
}
