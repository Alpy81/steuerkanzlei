import LegalPage from "@/components/LegalPage";

export default function AGB() {
  return (
    <LegalPage
      titel="Allgemeine Geschäftsbedingungen"
      untertitel="AGB der Steuer & Partner GmbH – Steuerberatungsgesellschaft"
      stand="März 2025"
      sections={[
        {
          titel: "Geltungsbereich",
          inhalt: `Diese Allgemeinen Geschäftsbedingungen gelten für alle Steuerberatungsverträge zwischen der Steuer & Partner GmbH (nachfolgend „Kanzlei") und ihren Mandanten.\n\nAbweichende Bedingungen des Mandanten haben nur Gültigkeit, wenn sie von der Kanzlei ausdrücklich schriftlich anerkannt wurden. Die jeweils aktuellen AGB sind auf unserer Website einsehbar.`,
        },
        {
          titel: "Vertragsschluss",
          inhalt: `Ein Steuerberatungsvertrag kommt durch schriftliche Auftragsbestätigung oder durch Aufnahme der Tätigkeit zustande. Das unverbindliche Erstgespräch begründet noch kein Mandatsverhältnis.\n\nDer Umfang der zu erbringenden Leistungen ergibt sich aus dem jeweiligen Auftrag. Mündliche Nebenabreden bedürfen der schriftlichen Bestätigung.`,
        },
        {
          titel: "Leistungsumfang",
          inhalt: [
            "Die Kanzlei erbringt die vereinbarten Steuerberatungsleistungen mit der Sorgfalt eines ordentlichen Steuerberaters",
            "Der Mandant ist verpflichtet, alle für die Bearbeitung erforderlichen Unterlagen vollständig und rechtzeitig zur Verfügung zu stellen",
            "Die Kanzlei ist berechtigt, für Teilbereiche qualifizierte Mitarbeiter einzusetzen",
            "Änderungen der Rechtslage nach Abgabe eines Beratungsergebnisses verpflichten die Kanzlei nicht zur unaufgeforderten Aktualisierung",
          ],
        },
        {
          titel: "Mitwirkungspflichten des Mandanten",
          inhalt: `Der Mandant ist verpflichtet, die Kanzlei bei der Ausführung des Auftrags zu unterstützen. Er hat alle für die Bearbeitung notwendigen Unterlagen, Informationen und Erklärungen vollständig, richtig und rechtzeitig zu übergeben.\n\nUnrichtige oder unvollständige Angaben des Mandanten gehen zu dessen Lasten. Der Mandant hat Änderungen seiner persönlichen oder wirtschaftlichen Verhältnisse, die für die steuerliche Beratung relevant sind, unverzüglich mitzuteilen.`,
        },
        {
          titel: "Vergütung",
          inhalt: `Die Vergütung richtet sich nach der Steuerberatervergütungsverordnung (StBVV) sowie individuellen Vereinbarungen. Bei Aufträgen, die nicht durch die StBVV geregelt sind, wird eine Zeitvergütung oder ein Pauschalhonorar vereinbart.\n\nRechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zahlbar. Bei Zahlungsverzug werden Verzugszinsen in gesetzlicher Höhe berechnet. Die Kanzlei ist berechtigt, angemessene Vorschüsse zu verlangen.`,
        },
        {
          titel: "Verschwiegenheit",
          inhalt: `Die Kanzlei und alle ihre Mitarbeiter sind zur Verschwiegenheit über alle ihnen im Rahmen des Mandats bekannt gewordenen Tatsachen und Umstände verpflichtet. Diese Pflicht besteht auch nach Beendigung des Mandatsverhältnisses fort.\n\nVon der Verschwiegenheitspflicht ausgenommen sind gesetzlich vorgeschriebene Mitteilungen sowie Auskünfte, zu denen die Kanzlei durch rechtskräftigen Beschluss eines Gerichts verpflichtet wird.`,
        },
        {
          titel: "Haftung",
          inhalt: `Die Kanzlei haftet für Schäden, die durch fehlerhafte Beratung entstehen, nur bei Vorsatz und grober Fahrlässigkeit. Die Haftung für leichte Fahrlässigkeit ist – soweit gesetzlich zulässig – auf den typischen vorhersehbaren Schaden begrenzt.\n\nDie Haftung ist je Schadensfall auf die Deckungssumme der bestehenden Berufshaftpflichtversicherung begrenzt. Die Kanzlei haftet nicht für Schäden, die durch unrichtige oder unvollständige Angaben des Mandanten verursacht wurden.`,
        },
        {
          titel: "Aufbewahrung von Unterlagen",
          inhalt: [
            "Die Kanzlei bewahrt die ihr übergebenen Unterlagen während der Dauer des Mandats auf",
            "Nach Beendigung des Mandats werden Originalunterlagen zurückgegeben",
            "Arbeitsergebnisse und Handakten werden für die gesetzliche Aufbewahrungsfrist von 10 Jahren aufbewahrt",
            "Digitale Unterlagen werden DSGVO-konform gespeichert und nach Ablauf der Aufbewahrungsfrist gelöscht",
          ],
        },
        {
          titel: "Kündigung",
          inhalt: `Das Mandatsverhältnis kann von beiden Seiten jederzeit ohne Einhaltung einer Kündigungsfrist gekündigt werden. Die Kündigung bedarf der Schriftform.\n\nIm Falle der Kündigung durch die Kanzlei wird diese den Mandanten rechtzeitig informieren und alle notwendigen Maßnahmen ergreifen, um Rechtsnachteile für den Mandanten zu vermeiden. Bereits erbrachte Leistungen sind in jedem Fall zu vergüten.`,
        },
        {
          titel: "Schlussbestimmungen",
          inhalt: `Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand für alle Streitigkeiten aus dem Mandatsverhältnis ist Frankfurt am Main, sofern der Mandant Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.\n\nSollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Anstelle der unwirksamen Bestimmung gilt eine wirksame Regelung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.`,
        },
      ]}
    />
  );
}
