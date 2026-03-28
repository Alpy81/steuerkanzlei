export type Leistung = {
  slug: string;
  titel: string;
  untertitel: string;
  intro: string;
  beschreibung: string;
  vorteile: { titel: string; text: string }[];
  prozess: { nr: string; titel: string; text: string }[];
  testimonials: {
    name: string;
    rolle: string;
    text: string;
    initials: string;
  }[];
};

export const LEISTUNGEN: Record<string, Leistung> = {
  einkommensteuer: {
    slug: "einkommensteuer",
    titel: "Einkommensteuererklärung",
    untertitel: "Maximal optimiert. Fristgerecht. Digital.",
    intro:
      "Ihre Einkommensteuererklärung ist mehr als ein Pflichtformular – sie ist eine jährliche Chance, Geld zurückzuholen, das Ihnen zusteht. Wir sorgen dafür, dass Sie diese Chance nutzen.",
    beschreibung: `Ob Arbeitnehmer, Rentner oder Vermieter – jede Lebenssituation bringt eigene steuerliche Möglichkeiten mit sich. Wir analysieren Ihre persönliche Situation ganzheitlich und ermitteln alle legalen Optimierungspotenziale: Werbungskosten, Sonderausgaben, außergewöhnliche Belastungen, haushaltsnahe Dienstleistungen und vieles mehr.

Unsere vollständig digitale Arbeitsweise bedeutet für Sie: keine langen Wartezeiten, kein Papierchaos – Sie laden Ihre Unterlagen bequem über unser verschlüsseltes Mandantenportal hoch, und wir erledigen den Rest. Pünktlich, präzise und maximal zu Ihrem Vorteil.`,
    vorteile: [
      {
        titel: "Maximale Steuererstattung",
        text: "Wir kennen alle legalen Abzugsmöglichkeiten und nutzen sie konsequent für Sie aus.",
      },
      {
        titel: "Vollständig digital",
        text: "Dokumente sicher hochladen, fertige Erklärung digital freigeben – von überall.",
      },
      {
        titel: "Fristensicherheit",
        text: "Wir behalten alle Fristen im Blick. Verlängerungen beantragen wir automatisch.",
      },
      {
        titel: "Persönlicher Ansprechpartner",
        text: "Sie haben immer dieselbe Person als Kontakt – kein anonymes Ticketsystem.",
      },
    ],
    prozess: [
      {
        nr: "01",
        titel: "Unterlagen einreichen",
        text: "Sie laden alle relevanten Dokumente über unser Mandantenportal hoch – wir senden Ihnen vorab eine Checkliste.",
      },
      {
        nr: "02",
        titel: "Analyse & Optimierung",
        text: "Wir prüfen Ihre Unterlagen, identifizieren alle Abzugsmöglichkeiten und erstellen Ihre Erklärung.",
      },
      {
        nr: "03",
        titel: "Prüfung & Freigabe",
        text: "Sie erhalten die fertige Erklärung zur Durchsicht und geben digital frei.",
      },
      {
        nr: "04",
        titel: "Einreichung & Bescheid",
        text: "Wir reichen elektronisch beim Finanzamt ein und begleiten Sie bis zum Steuerbescheid.",
      },
    ],
    testimonials: [
      {
        name: "Markus T.",
        rolle: "Angestellter, Frankfurt",
        text: "Ich hätte nie gedacht, dass ich so viel zurückbekomme. Das Team hat Abzüge gefunden, die ich nie auf dem Schirm hatte.",
        initials: "MT",
      },
      {
        name: "Julia K.",
        rolle: "Lehrerin, Offenbach",
        text: "Endlich jemand, der die Steuererklärung wirklich verständlich erklärt. Schnell, digital und sehr kompetent.",
        initials: "JK",
      },
      {
        name: "Andreas M.",
        rolle: "Rentner, Frankfurt",
        text: "Als Rentner hatte ich Angst vor der Steuerpflicht. Das Team hat mich von Anfang an beruhigt und alles perfekt geregelt.",
        initials: "AM",
      },
    ],
  },

  unternehmen: {
    slug: "unternehmen",
    titel: "Unternehmensbesteuerung",
    untertitel: "Strategisch. Vorausschauend. Wachstumsorientiert.",
    intro:
      "Unternehmensbesteuerung ist keine lästige Pflicht – sie ist ein strategisches Instrument. Wir nutzen es konsequent für Sie.",
    beschreibung: `Von der GmbH über die UG bis zur GbR: Jede Rechtsform bringt eigene steuerliche Chancen und Risiken. Wir analysieren Ihre aktuelle Struktur, identifizieren Optimierungspotenziale und entwickeln eine Steuerstrategie, die zu Ihrem Wachstum passt.

Unser Ansatz ist proaktiv – wir warten nicht auf das Jahresende, sondern begleiten Sie das ganze Jahr über. Quartalsweise Auswertungen, strategische Beratung vor wichtigen Entscheidungen und ein offenes Ohr für alle unternehmerischen Fragen sind bei uns selbstverständlich.`,
    vorteile: [
      {
        titel: "Ganzjährige Begleitung",
        text: "Keine Jahresend-Hektik – wir sind das ganze Jahr Ihr strategischer Steuerpartner.",
      },
      {
        titel: "Rechtsformoptimierung",
        text: "Wir prüfen regelmäßig, ob Ihre Rechtsform noch die steuerlich optimale ist.",
      },
      {
        titel: "Investitionsplanung",
        text: "Vor jeder größeren Investition analysieren wir die steuerlichen Auswirkungen.",
      },
      {
        titel: "Betriebsprüfungs-Sicherheit",
        text: "Saubere Dokumentation und revisionssichere Buchhaltung – wir bereiten Sie vor.",
      },
    ],
    prozess: [
      {
        nr: "01",
        titel: "Struktur-Analyse",
        text: "Wir analysieren Ihre aktuelle Unternehmensstruktur und identifizieren Optimierungspotenziale.",
      },
      {
        nr: "02",
        titel: "Strategie-Entwicklung",
        text: "Gemeinsam entwickeln wir eine Steuerstrategie, die zu Ihren Unternehmenszielen passt.",
      },
      {
        nr: "03",
        titel: "Laufende Betreuung",
        text: "Quartalsberichte, Steuervorauszahlungen, Jahresabschluss – alles aus einer Hand.",
      },
      {
        nr: "04",
        titel: "Jahresoptimierung",
        text: "Vor Jahresende prüfen wir aktiv alle Gestaltungsmöglichkeiten für das laufende Jahr.",
      },
    ],
    testimonials: [
      {
        name: "Stefan R.",
        rolle: "GmbH-Geschäftsführer, Frankfurt",
        text: "Seit wir mit Steuer & Partner arbeiten, habe ich das Gefühl, wirklich einen strategischen Partner zu haben – nicht nur jemanden, der Formulare ausfüllt.",
        initials: "SR",
      },
      {
        name: "Petra W.",
        rolle: "Inhaberin, Einzelhandel",
        text: "Die proaktive Beratung vor wichtigen Entscheidungen ist Gold wert. Wir haben durch die richtige Struktur erheblich gespart.",
        initials: "PW",
      },
      {
        name: "Thomas B.",
        rolle: "Geschäftsführer, IT-Dienstleister",
        text: "Kompetent, schnell und immer erreichbar. Genau das, was ein wachsendes Unternehmen braucht.",
        initials: "TB",
      },
    ],
  },

  buchhaltung: {
    slug: "buchhaltung",
    titel: "Buchhaltung & Jahresabschluss",
    untertitel: "Saubere Bücher. Klare Zahlen. Bessere Entscheidungen.",
    intro:
      "Gute Buchhaltung ist die Grundlage jeder unternehmerischen Entscheidung. Wir liefern Ihnen Zahlen, auf die Sie sich verlassen können.",
    beschreibung: `Ob laufende Finanzbuchhaltung oder Jahresabschluss: Wir übernehmen Ihre Buchführung vollständig und digital – mit DATEV als Basis und nahtloser Integration in Ihre bestehenden Prozesse.

Monatliche betriebswirtschaftliche Auswertungen geben Ihnen jederzeit einen klaren Überblick über die wirtschaftliche Lage Ihres Unternehmens. Der Jahresabschluss wird nicht nur korrekt erstellt, sondern auch verständlich kommentiert – damit Sie wissen, was die Zahlen bedeuten.`,
    vorteile: [
      {
        titel: "DATEV-basiert & digital",
        text: "Nahtlose Integration mit Ihrer Buchhaltungssoftware – Belege digital einreichen.",
      },
      {
        titel: "Monatliche BWA",
        text: "Betriebswirtschaftliche Auswertungen für klare Entscheidungsgrundlagen.",
      },
      {
        titel: "Fristensicherheit",
        text: "Alle gesetzlichen Fristen werden zuverlässig eingehalten.",
      },
      {
        titel: "Verständliche Berichte",
        text: "Zahlen, die Sie verstehen – mit Kommentar und Handlungsempfehlung.",
      },
    ],
    prozess: [
      {
        nr: "01",
        titel: "Belege einreichen",
        text: "Sie laden Ihre Belege digital hoch oder verbinden Ihre Buchhaltungssoftware direkt.",
      },
      {
        nr: "02",
        titel: "Monatliche Buchung",
        text: "Wir buchen alle Geschäftsvorfälle und erstellen die monatliche BWA.",
      },
      {
        nr: "03",
        titel: "Jahresabschluss",
        text: "Zum Jahresende erstellen wir Bilanz oder EÜR, Gewinn- und Verlustrechnung.",
      },
      {
        nr: "04",
        titel: "Einreichung",
        text: "Elektronische Übermittlung an Finanzamt und Bundesanzeiger – vollständig von uns.",
      },
    ],
    testimonials: [
      {
        name: "Claudia N.",
        rolle: "Geschäftsführerin, Dienstleistung",
        text: "Endlich habe ich monatlich aktuelle Zahlen. Die BWA hilft mir enorm bei der Planung.",
        initials: "CN",
      },
      {
        name: "Bernd S.",
        rolle: "Handwerksmeister, Frankfurt",
        text: "Ich muss mich um gar nichts kümmern – alles läuft digital und reibungslos.",
        initials: "BS",
      },
      {
        name: "Marie L.",
        rolle: "Freelancerin, Grafikdesign",
        text: "Der Jahresabschluss war immer ein Stressfaktor. Jetzt läuft alles entspannt und pünktlich.",
        initials: "ML",
      },
    ],
  },

  lohn: {
    slug: "lohn",
    titel: "Lohnbuchhaltung",
    untertitel: "Pünktlich. Korrekt. Vollständig übernommen.",
    intro:
      "Lohnabrechnung ist komplex und fehleranfällig. Wir nehmen Ihnen diese Last vollständig ab – zuverlässig, rechtssicher und pünktlich.",
    beschreibung: `Von der monatlichen Gehaltsabrechnung über Lohnsteueranmeldungen bis zu Sozialversicherungsmeldungen: Wir übernehmen Ihre gesamte Lohnbuchhaltung – für einen Mitarbeiter oder für hundert.

Gesetzliche Änderungen bei Lohnsteuer, Sozialversicherung oder Mindestlohn werden von uns automatisch berücksichtigt. Ihre Mitarbeiter erhalten ihre Abrechnungen pünktlich, Sie erhalten volle Rechtssicherheit.`,
    vorteile: [
      {
        titel: "Immer aktuell",
        text: "Alle gesetzlichen Änderungen werden automatisch und sofort berücksichtigt.",
      },
      {
        titel: "Vollständige Abwicklung",
        text: "Lohnsteuer, Sozialversicherung, Meldewesen – alles aus einer Hand.",
      },
      {
        titel: "Digitale Abrechnungen",
        text: "Mitarbeiter erhalten ihre Gehaltsabrechnungen digital und sicher.",
      },
      {
        titel: "Rechtssicherheit",
        text: "Korrekte Abrechnung schützt Sie vor teuren Nachzahlungen und Bußgeldern.",
      },
    ],
    prozess: [
      {
        nr: "01",
        titel: "Stammdaten anlegen",
        text: "Einmalige Erfassung aller Mitarbeiterstammdaten und Vertragsdetails in unserem System.",
      },
      {
        nr: "02",
        titel: "Monatliche Abrechnung",
        text: "Pünktliche Erstellung aller Lohnabrechnungen nach Ihren Vorgaben.",
      },
      {
        nr: "03",
        titel: "Meldungen & Zahlungen",
        text: "Lohnsteueranmeldung, Sozialversicherungsmeldungen und Überweisungsträger – alles automatisch.",
      },
      {
        nr: "04",
        titel: "Jahresabschluss Lohn",
        text: "Lohnsteuerbescheinigungen, Jahresmeldungen und alle gesetzlichen Jahresauswertungen.",
      },
    ],
    testimonials: [
      {
        name: "Frank D.",
        rolle: "Inhaber, 12 Mitarbeiter",
        text: "Seit wir die Lohnbuchhaltung abgegeben haben, habe ich monatlich mindestens 3 Stunden mehr für mein Kerngeschäft.",
        initials: "FD",
      },
      {
        name: "Sabine K.",
        rolle: "Praxisinhaberin, Physiotherapie",
        text: "Fehlerfreie Abrechnungen, immer pünktlich. Meine Mitarbeiter sind zufrieden – und ich auch.",
        initials: "SK",
      },
      {
        name: "Georg P.",
        rolle: "Restaurantbesitzer, Frankfurt",
        text: "Gerade in der Gastronomie mit Trinkgeld und Minijobs ist Lohnbuchhaltung kompliziert. Das Team hat das perfekt im Griff.",
        initials: "GP",
      },
    ],
  },

  gestaltung: {
    slug: "gestaltung",
    titel: "Steuergestaltung & Beratung",
    untertitel: "Proaktiv. Strategisch. Langfristig wirksam.",
    intro:
      "Die beste Steuergestaltung beginnt nicht am 31. Dezember – sie beginnt heute. Wir denken Ihre Steuersituation langfristig und vorausschauend.",
    beschreibung: `Steuergestaltung ist die Königsdisziplin der Steuerberatung. Es geht darum, die bestehenden gesetzlichen Möglichkeiten konsequent zu nutzen – legal, nachhaltig und auf Ihre individuelle Situation zugeschnitten.

Wir analysieren Ihre gesamte steuerliche Situation: Unternehmensstruktur, Gesellschafterverträge, Vergütungsmodelle, Investitionspläne und private Vermögenssituation. Das Ergebnis ist eine maßgeschneiderte Steuerstrategie, die Sie nicht nur dieses Jahr entlastet, sondern dauerhaft.`,
    vorteile: [
      {
        titel: "Ganzheitliche Analyse",
        text: "Wir betrachten privat und geschäftlich gemeinsam – denn beides hängt zusammen.",
      },
      {
        titel: "Legale Optimierung",
        text: "Nur anerkannte, rechtssichere Gestaltungsmodelle – keine Graubereiche.",
      },
      {
        titel: "Langfristige Perspektive",
        text: "Wir planen nicht für dieses Jahr, sondern für die nächsten 10.",
      },
      {
        titel: "Regelmäßige Überprüfung",
        text: "Gesetzliche Änderungen werden sofort auf Ihre Strategie angewendet.",
      },
    ],
    prozess: [
      {
        nr: "01",
        titel: "Ist-Analyse",
        text: "Vollständige Aufnahme Ihrer aktuellen steuerlichen Situation – privat und geschäftlich.",
      },
      {
        nr: "02",
        titel: "Potenzial-Ermittlung",
        text: "Identifikation aller legalen Gestaltungsmöglichkeiten in Ihrer Situation.",
      },
      {
        nr: "03",
        titel: "Strategie-Präsentation",
        text: "Wir präsentieren Ihnen konkrete Maßnahmen mit bezifferten Auswirkungen.",
      },
      {
        nr: "04",
        titel: "Umsetzung & Monitoring",
        text: "Begleitung bei der Umsetzung und laufende Überprüfung der Strategie.",
      },
    ],
    testimonials: [
      {
        name: "Dr. Klaus F.",
        rolle: "Unternehmer, Frankfurt",
        text: "Die Holding-Struktur, die das Team entwickelt hat, spart uns jährlich einen erheblichen Betrag. Das war eine der besten unternehmerischen Entscheidungen.",
        initials: "KF",
      },
      {
        name: "Nina S.",
        rolle: "Ärztin, eigene Praxis",
        text: "Ich wusste nicht, wie viele Möglichkeiten es gibt. Die Beratung hat meinen Blick auf meine eigene Situation komplett verändert.",
        initials: "NS",
      },
      {
        name: "Ralf H.",
        rolle: "Immobilieninvestor, Frankfurt",
        text: "Durch die richtige Struktur meines Portfolios spare ich jedes Jahr erheblich. Die Beratung hat sich innerhalb eines Jahres mehrfach refinanziert.",
        initials: "RH",
      },
    ],
  },

  gruendung: {
    slug: "gruendung",
    titel: "Existenzgründung",
    untertitel: "Der richtige Start entscheidet alles.",
    intro:
      "Wer beim Gründen die steuerlichen Weichen richtig stellt, spart über die gesamte Unternehmensgeschichte. Wir sorgen dafür, dass Sie von Anfang an richtig aufgestellt sind.",
    beschreibung: `Die Gründungsphase ist der wichtigste Moment für steuerliche Weichenstellungen. Rechtsformwahl, Gesellschafterstruktur, Vergütungsmodell, Vorsteuerabzug – Entscheidungen, die jetzt getroffen werden, wirken jahrelang.

Wir begleiten Sie von der ersten Idee bis zur laufenden Betreuung: Businessplan-Unterstützung, Anmeldung beim Finanzamt, Antrag auf Dauerfristverlängerung, Beantragung der USt-ID – und danach als verlässlicher Partner für alle steuerlichen Fragen Ihres wachsenden Unternehmens.`,
    vorteile: [
      {
        titel: "Rechtsformberatung",
        text: "GmbH, UG, GbR oder Einzelunternehmen – wir finden die optimale Form für Ihr Vorhaben.",
      },
      {
        titel: "Finanzamt-Anmeldung",
        text: "Wir übernehmen alle Anmeldungen und Formalitäten – Sie können sich aufs Gründen konzentrieren.",
      },
      {
        titel: "Sofortige Steueroptimierung",
        text: "Von Tag 1 an steuerlich optimal aufgestellt – keine nachträglichen Korrekturen.",
      },
      {
        titel: "Wachstumsbegleitung",
        text: "Wir wachsen mit Ihnen – von der Gründung bis zum erfolgreichen Unternehmen.",
      },
    ],
    prozess: [
      {
        nr: "01",
        titel: "Erstgespräch & Analyse",
        text: "Wir verstehen Ihre Gründungsidee, Ziele und persönliche Situation vollständig.",
      },
      {
        nr: "02",
        titel: "Rechtsform & Struktur",
        text: "Empfehlung der optimalen Rechtsform und Gesellschaftsstruktur mit Begründung.",
      },
      {
        nr: "03",
        titel: "Anmeldungen",
        text: "Finanzamt, Gewerbeamt, Sozialversicherung – wir erledigen alle Formalitäten.",
      },
      {
        nr: "04",
        titel: "Laufende Betreuung",
        text: "Als Ihr langfristiger Steuerpartner begleiten wir Ihr Wachstum von Anfang an.",
      },
    ],
    testimonials: [
      {
        name: "Lisa M.",
        rolle: "Gründerin, E-Commerce",
        text: "Ohne die Beratung hätte ich die falsche Rechtsform gewählt. Rückblickend hat das die richtige Entscheidung mich viel Geld gespart.",
        initials: "LM",
      },
      {
        name: "Oliver K.",
        rolle: "Gründer, SaaS-Startup",
        text: "Das Team hat uns von Tag 1 professionell begleitet. Gerade in der Anfangsphase ist das unschätzbar wertvoll.",
        initials: "OK",
      },
      {
        name: "Fatima A.",
        rolle: "Freelancerin, Marketing",
        text: "Ich dachte, als Freelancerin brauche ich keine Steuerberatung. Falsch gedacht – die Beratung hat sich sofort gelohnt.",
        initials: "FA",
      },
    ],
  },
};

// Nachträglich hinzugefügte Leistungen
const EXTRA: Record<string, Leistung> = {
  erbschaft: {
    slug: "erbschaft",
    titel: "Erbschaft & Schenkung",
    untertitel: "Vermögen klug übertragen. Steuern legal minimieren.",
    intro:
      "Vermögensübertragungen sind steuerlich komplex – aber mit der richtigen Planung können Sie Erbschaft- und Schenkungsteuer erheblich reduzieren. Wir gestalten Ihre Nachfolge optimal.",
    beschreibung: `Ob Immobilien, Unternehmensbeteiligungen oder Geldvermögen: Jede Übertragung unterliegt eigenen steuerlichen Regeln. Die Freibeträge im deutschen Erbschaft- und Schenkungsteuerrecht sind erheblich – aber nur wer sie kennt und strategisch nutzt, profitiert wirklich davon.

Wir analysieren Ihre Vermögenssituation, identifizieren alle nutzbaren Freibeträge und entwickeln eine Übertragungsstrategie, die Ihre Familie langfristig absichert. Dabei berücksichtigen wir sowohl die steuerliche als auch die zivilrechtliche Dimension – für eine umfassende und rechtssichere Lösung.`,
    vorteile: [
      {
        titel: "Freibeträge optimal nutzen",
        text: "Ehepartner, Kinder und Enkel haben erhebliche Freibeträge – wir nutzen sie konsequent und planen Schenkungen strategisch über mehrere Jahre.",
      },
      {
        titel: "Immobilien steueroptimiert",
        text: "Besondere Bewertungsregeln für Immobilien bieten erhebliche Gestaltungsspielräume – wir kennen sie alle.",
      },
      {
        titel: "Unternehmensübertragung",
        text: "Betriebsvermögen kann unter bestimmten Voraussetzungen weitgehend steuerfrei übertragen werden – wir prüfen Ihre Situation.",
      },
      {
        titel: "Vorausschauende Planung",
        text: "Die beste Erbschaftsteuerplanung beginnt Jahre vor dem Erbfall. Wir entwickeln Ihre langfristige Strategie.",
      },
    ],
    prozess: [
      {
        nr: "01",
        titel: "Vermögensanalyse",
        text: "Vollständige Erfassung Ihres Vermögens – Immobilien, Geldvermögen, Beteiligungen, Lebensversicherungen.",
      },
      {
        nr: "02",
        titel: "Steuerberechnung",
        text: "Ermittlung der aktuellen Steuerlast und Identifikation aller Optimierungsmöglichkeiten.",
      },
      {
        nr: "03",
        titel: "Strategieentwicklung",
        text: "Maßgeschneiderter Plan für die steueroptimale Übertragung Ihres Vermögens.",
      },
      {
        nr: "04",
        titel: "Umsetzung & Begleitung",
        text: "Begleitung bei der Umsetzung – von der Schenkung bis zur Nachlassabwicklung.",
      },
    ],
    testimonials: [
      {
        name: "Familie M.",
        rolle: "Immobilienbesitzer, Frankfurt",
        text: "Dank der vorausschauenden Planung konnten wir unsere Immobilien an die Kinder übertragen und dabei erheblich Steuern sparen.",
        initials: "FM",
      },
      {
        name: "Dr. Klaus R.",
        rolle: "Unternehmer, Frankfurt",
        text: "Die Übertragung meines Unternehmens auf meinen Sohn lief dank der exzellenten Beratung reibungslos und steueroptimiert.",
        initials: "KR",
      },
      {
        name: "Ingrid S.",
        rolle: "Rentnerin, Bad Homburg",
        text: "Ich hatte keine Ahnung wie viel man beim Vererben sparen kann. Die Beratung hat meiner Familie viel Geld gespart.",
        initials: "IS",
      },
    ],
  },

  international: {
    slug: "international",
    titel: "Internationales Steuerrecht",
    untertitel: "Grenzenlos tätig. Steuerlich sicher aufgestellt.",
    intro:
      "Grenzüberschreitende Tätigkeiten bringen komplexe steuerliche Fragen mit sich. Wir navigieren Sie sicher durch Doppelbesteuerungsabkommen, Expatriate-Regelungen und internationale Steuerstrukturen.",
    beschreibung: `Wer international tätig ist – als Unternehmen mit Auslandsaktivitäten oder als Privatperson mit Auslandseinkünften – bewegt sich in einem komplexen steuerlichen Umfeld. Deutschland hat mit über 90 Ländern Doppelbesteuerungsabkommen abgeschlossen, die präzise Anwendung erfordert jedoch tiefes Fachwissen.

Wir begleiten Unternehmen bei der steuerlichen Strukturierung internationaler Aktivitäten, beraten Expatriates bei Ein- und Auswanderung und unterstützen bei grenzüberschreitenden Transaktionen. Unser Ziel: rechtssichere Strukturen, die Doppelbesteuerung vermeiden und Steuervorteile optimal nutzen.`,
    vorteile: [
      {
        titel: "Doppelbesteuerung vermeiden",
        text: "Wir kennen die relevanten Abkommen und stellen sicher, dass Sie nicht zweimal für dasselbe Einkommen besteuert werden.",
      },
      {
        titel: "Expatriate-Beratung",
        text: "Ein- und Auswanderung, Wohnsitzwechsel, Auslandseinkünfte – wir begleiten Sie durch alle steuerlichen Aspekte.",
      },
      {
        titel: "Internationale Strukturen",
        text: "Holdingstrukturen, Betriebsstätten, Transfer Pricing – wir gestalten Ihre internationale Steuerstruktur rechtssicher.",
      },
      {
        titel: "Compliance & Reporting",
        text: "Ausländische Konten, Beteiligungen und Einkünfte müssen korrekt deklariert werden – wir sorgen für vollständige Compliance.",
      },
    ],
    prozess: [
      {
        nr: "01",
        titel: "Situationsanalyse",
        text: "Erfassung aller internationalen Bezüge – Einkünfte, Beteiligungen, Wohnsitze, Tätigkeitsstaaten.",
      },
      {
        nr: "02",
        titel: "DBA-Prüfung",
        text: "Analyse der anwendbaren Doppelbesteuerungsabkommen und deren steuerliche Konsequenzen.",
      },
      {
        nr: "03",
        titel: "Strukturempfehlung",
        text: "Entwicklung einer rechtssicheren und steueroptimierten internationalen Struktur.",
      },
      {
        nr: "04",
        titel: "Laufende Betreuung",
        text: "Erstellung aller erforderlichen Erklärungen und Meldungen in Deutschland und Koordination mit ausländischen Beratern.",
      },
    ],
    testimonials: [
      {
        name: "Marc L.",
        rolle: "Expatriate, vormals Singapur",
        text: "Der Wohnsitzwechsel zurück nach Deutschland war steuerlich komplizierter als gedacht. Das Team hat alles perfekt abgewickelt.",
        initials: "ML",
      },
      {
        name: "TechVenture GmbH",
        rolle: "Software-Unternehmen, Frankfurt",
        text: "Unsere EU-Expansion war steuerlich eine Herausforderung. Die Beratung hat uns vor teuren Fehlern bewahrt.",
        initials: "TV",
      },
      {
        name: "Sarah K.",
        rolle: "Freelancerin mit EU-Kunden",
        text: "Das Reverse-Charge-Verfahren und die Meldepflichten haben mich überfordert. Jetzt läuft alles automatisch.",
        initials: "SK",
      },
    ],
  },

  digital: {
    slug: "digital",
    titel: "Digitale Buchhaltung & DATEV",
    untertitel: "Papierlos. Automatisiert. Immer aktuell.",
    intro:
      "Papierlose Buchhaltung, automatisierter Belegimport und direkte DATEV-Anbindung – wir modernisieren Ihre Finanzprozesse und sparen Ihnen wertvolle Zeit.",
    beschreibung: `Die Digitalisierung der Buchhaltung ist keine Zukunftsmusik mehr – sie ist Gegenwart. Unternehmen, die ihre Buchhaltungsprozesse digitalisieren, sparen Zeit, reduzieren Fehler und haben jederzeit einen aktuellen Überblick über ihre finanzielle Lage.

Wir begleiten Sie bei der vollständigen Digitalisierung Ihrer Buchhaltung: von der Auswahl der richtigen Software über die DATEV-Anbindung bis hin zur automatisierten Belegverarbeitung. Das Ergebnis: weniger Aufwand, mehr Transparenz und eine Buchhaltung, die wirklich für Sie arbeitet.`,
    vorteile: [
      {
        titel: "DATEV-Anbindung",
        text: "Direkte Schnittstelle zu DATEV – Daten fließen automatisch, ohne manuelle Übertragung und ohne Fehlerquellen.",
      },
      {
        titel: "Automatischer Belegimport",
        text: "Rechnungen per E-Mail oder App hochladen – die Verbuchung erfolgt automatisch oder mit minimalem Aufwand.",
      },
      {
        titel: "Kompatibel mit Ihrer Software",
        text: "Lexware, sevDesk, lexoffice, Fastbill – wir verbinden uns mit Ihrer bestehenden Software nahtlos.",
      },
      {
        titel: "Echtzeit-Überblick",
        text: "Jederzeit aktuelle Zahlen statt veralteter Monatsauswertungen – für bessere und schnellere Entscheidungen.",
      },
    ],
    prozess: [
      {
        nr: "01",
        titel: "Software-Analyse",
        text: "Wir prüfen Ihre aktuelle Software-Landschaft und empfehlen die optimale digitale Lösung für Ihre Situation.",
      },
      {
        nr: "02",
        titel: "Einrichtung & Migration",
        text: "Aufsetzen der digitalen Buchhaltung, DATEV-Anbindung und Migration bestehender Daten.",
      },
      {
        nr: "03",
        titel: "Schulung",
        text: "Kurze Einführung in die neuen Prozesse – danach läuft alles weitgehend automatisch.",
      },
      {
        nr: "04",
        titel: "Laufender Betrieb",
        text: "Wir übernehmen die laufende Buchhaltung digital – Sie laden Belege hoch, wir erledigen den Rest.",
      },
    ],
    testimonials: [
      {
        name: "Tobias H.",
        rolle: "Geschäftsführer, E-Commerce",
        text: "Seit wir auf digitale Buchhaltung umgestellt haben, spare ich monatlich Stunden. Die DATEV-Anbindung funktioniert reibungslos.",
        initials: "TH",
      },
      {
        name: "Julia M.",
        rolle: "Freelancerin, Grafikdesign",
        text: "Ich fotografiere meine Belege mit dem Handy und alles ist verbucht. So einfach hätte ich mir das nicht vorgestellt.",
        initials: "JM",
      },
      {
        name: "Peter S.",
        rolle: "Handwerksmeister, Frankfurt",
        text: "Als Handwerker hatte ich immer Angst vor der Buchhaltung. Jetzt läuft alles digital und ich habe endlich den Überblick.",
        initials: "PS",
      },
    ],
  },
};

// In LEISTUNGEN einmergen
Object.assign(LEISTUNGEN, EXTRA);
