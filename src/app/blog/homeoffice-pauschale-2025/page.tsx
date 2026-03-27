import BlogPost from "@/components/BlogPost";

export default function Page() {
  return (
    <BlogPost
      titel="Homeoffice-Pauschale 2025: Was sich geändert hat"
      datum="März 2025"
      tag="Steuertipps"
      lesezeit="4 min"
      intro="Die Homeoffice-Pauschale wurde erhöht und die Voraussetzungen angepasst. Was das konkret für Ihre Steuererklärung bedeutet – und wie Sie das Maximum herausholen."
      autor={{
        name: "Sandra Hoffmann",
        rolle: "Steuerberaterin",
        initials: "SH",
      }}
      inhalt={[
        {
          zwischentitel: "Was ist die Homeoffice-Pauschale?",
          text: "Die Homeoffice-Pauschale ermöglicht es Arbeitnehmern, Kosten für das Arbeiten von zu Hause steuerlich geltend zu machen – ohne ein separates, abgeschlossenes Arbeitszimmer nachweisen zu müssen.\n\nSeit der Einführung 2020 hat sich die Regelung mehrfach verändert – zuletzt mit der Erhöhung der Pauschale und der Vereinfachung der Nachweispflichten.",
        },
        {
          zwischentitel: "Die aktuelle Pauschale: 6 Euro pro Tag",
          text: "Seit dem Veranlagungsjahr 2023 beträgt die Homeoffice-Pauschale 6 Euro pro Homeoffice-Tag, maximal 1.260 Euro im Jahr – das entspricht 210 Tagen. Gegenüber der früheren Regelung (5 Euro, max. 600 Euro) ist das eine deutliche Verbesserung.\n\nWichtig: Die Pauschale wird auf den Arbeitnehmer-Pauschbetrag von 1.230 Euro angerechnet. Nur wenn Ihre gesamten Werbungskosten den Pauschbetrag übersteigen, profitieren Sie tatsächlich von einem steuerlichen Vorteil.",
        },
        {
          zwischentitel: "Wer kann die Pauschale nutzen?",
          text: "Die Homeoffice-Pauschale können alle Arbeitnehmer nutzen, die tatsächlich von zu Hause gearbeitet haben – unabhängig davon, ob der Arbeitgeber das Homeoffice angeordnet hat.\n\nSelbstständige und Freiberufler können die Pauschale ebenfalls nutzen, wenn kein eigenes Arbeitszimmer vorhanden ist.",
        },
        {
          zwischentitel: "So weisen Sie die Homeoffice-Tage nach",
          text: "Einen offiziellen Nachweis verlangt das Finanzamt in der Regel nicht aktiv. Dennoch empfehlen wir, eine eigene Aufzeichnung zu führen – zum Beispiel ein einfaches Kalender-Dokument mit den Tagen, an denen Sie von zu Hause gearbeitet haben.\n\nBei einer eventuellen Rückfrage des Finanzamts sind Sie damit auf der sicheren Seite.",
        },
      ]}
      fazit="Die Homeoffice-Pauschale ist ein einfaches und effektives Instrument zur Steueroptimierung. Wer regelmäßig von zu Hause arbeitet, sollte die Tage konsequent dokumentieren und in der Steuererklärung geltend machen. Bei uns erledigen wir das automatisch für Sie."
    />
  );
}
