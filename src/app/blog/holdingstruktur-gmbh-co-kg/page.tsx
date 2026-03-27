import BlogPost from "@/components/BlogPost";

export default function Page() {
  return (
    <BlogPost
      titel="Holdingstruktur 2025: Wann lohnt sich die GmbH & Co. KG?"
      datum="Jan 2025"
      tag="Unternehmen"
      lesezeit="8 min"
      intro="Steueroptimierung durch smarte Gesellschaftsstrukturen – wann eine Holding-Lösung wirklich Sinn ergibt und welche Voraussetzungen Sie erfüllen müssen."
      autor={{
        name: "Dr. Michael Weber",
        rolle: "Steuerberater & Gründer",
        initials: "MW",
      }}
      inhalt={[
        {
          zwischentitel: "Was ist eine Holdingstruktur?",
          text: "Eine Holdingstruktur besteht aus mindestens zwei Gesellschaften: einer Muttergesellschaft (Holding) und einer oder mehreren Tochtergesellschaften. Die Holding hält die Anteile an den operativen Gesellschaften und kann Gewinne steuerbegünstigt thesaurieren.\n\nDas Ziel: Gewinne aus der operativen Gesellschaft werden an die Holding ausgeschüttet und dort zu einem deutlich niedrigeren Steuersatz einbehalten.",
        },
        {
          zwischentitel: "Der steuerliche Vorteil: Das Schachtelprivileg",
          text: "Der entscheidende Vorteil einer Holdingstruktur ist das sogenannte Schachtelprivileg: Dividenden, die eine GmbH von einer anderen GmbH erhält, an der sie zu mindestens 10 % beteiligt ist, sind zu 95 % körperschaftsteuerfrei.\n\nDas bedeutet: Statt 30 % Steuerlast (KSt + GewSt) auf ausgeschüttete Gewinne zahlt die Holding auf Dividenden effektiv nur ca. 1,5 %. Das einbehaltene Kapital kann innerhalb der Holding reinvestiert werden.",
        },
        {
          zwischentitel: "GmbH & Co. KG als Holdingvariante",
          text: "Die GmbH & Co. KG verbindet die Haftungsbeschränkung einer GmbH mit der steuerlichen Flexibilität einer Personengesellschaft. Als Komplementärin (Vollhafterin) fungiert eine GmbH, als Kommanditist der Unternehmer selbst oder weitere Gesellschafter.\n\nVorteil: Gewinne werden direkt bei den Gesellschaftern versteuert – ohne vorherige Körperschaftsteuer auf Ebene der Gesellschaft. Das macht diese Struktur besonders attraktiv, wenn Gewinne regelmäßig entnommen werden sollen.",
        },
        {
          zwischentitel: "Wann lohnt sich eine Holdingstruktur?",
          text: "Eine Holdingstruktur lohnt sich in der Regel ab einem jährlichen Gewinn von ca. 100.000–150.000 Euro, wenn ein Teil davon nicht für den privaten Lebensunterhalt benötigt wird und reinvestiert werden soll.\n\nAuch bei geplanten Unternehmensverkäufen ist eine Holding attraktiv: Veräußerungsgewinne auf GmbH-Anteile sind auf Holdingébene zu 95 % steuerfrei – ein enormer Vorteil gegenüber der Versteuerung im Privatvermögen.",
        },
        {
          zwischentitel: "Die Kosten einer Holdingstruktur",
          text: "Eine Holdingstruktur ist mit laufenden Kosten verbunden: zwei separate Jahresabschlüsse, zwei Körperschaftsteuererklärungen, ggf. ein Konzernabschluss. Die laufenden Mehrkosten belaufen sich je nach Kanzlei auf 2.000–5.000 Euro pro Jahr.\n\nDiese Kosten amortisieren sich bei entsprechenden Gewinnen sehr schnell – oft schon im ersten Jahr der Nutzung.",
        },
      ]}
      fazit="Eine Holdingstruktur ist ein mächtiges steuerliches Gestaltungsinstrument – aber kein Selbstläufer. Ob und welche Struktur für Sie sinnvoll ist, hängt von Ihrer individuellen Situation ab. Wir analysieren Ihre Ausgangslage und entwickeln die optimale Lösung."
    />
  );
}
