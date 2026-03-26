"use client";
import { useState } from "react";

const ITEMS = [
  {
    nr: "01",
    titel: "Einkommensteuererklärung",
    desc: "Präzise, fristgerecht und maximal optimiert. Wir holen für Sie das Beste heraus – vollständig digital und papierlos. Sie sparen dabei kostbare Zeit.",
    tag: "Privatpersonen",
    href: "/leistungen/einkommensteuer",
  },
  {
    nr: "02",
    titel: "Unternehmensbesteuerung",
    desc: "Von der GmbH bis zur GbR: Wir gestalten Ihre Steuerstruktur strategisch – für nachhaltiges Wachstum, nicht nur Compliance.",
    tag: "Unternehmen",
    href: "/leistungen/unternehmen",
  },
  {
    nr: "03",
    titel: "Buchhaltung & Jahresabschluss",
    desc: "Saubere Bücher, klare Zahlen. Monatliche Buchhaltung und Jahresabschlüsse, die echte Entscheidungen ermöglichen.",
    tag: "KMU",
    href: "/leistungen/buchhaltung",
  },
  {
    nr: "04",
    titel: "Lohnbuchhaltung",
    desc: "Pünktliche Gehaltsabrechnungen, korrekte Abgaben, sichere Meldungen – vollständig von uns übernommen.",
    tag: "Unternehmen",
    href: "/leistungen/lohn",
  },
  {
    nr: "05",
    titel: "Steuergestaltung & Beratung",
    desc: "Proaktive Gestaltungsberatung statt reaktiver Erklärung. Wir denken Ihre Steuersituation strategisch und langfristig.",
    tag: "Premium",
    href: "/leistungen/gestaltung",
  },
  {
    nr: "06",
    titel: "Existenzgründung",
    desc: "Rechtsformwahl, Finanzplanung, steuerliche Optimierung von Tag 1. Weil der richtige Start alles entscheidet.",
    tag: "Freelancer",
    href: "/leistungen/gruendung",
  },
  {
    nr: "07",
    titel: "Erbschaft & Schenkung",
    desc: "Vermögensübertragungen steuerlich optimal gestalten. Wir minimieren Erbschaft- und Schenkungsteuer durch vorausschauende Planung und nutzen alle Freibeträge konsequent aus.",
    tag: "Privatpersonen",
    href: "/leistungen/erbschaft",
  },
  {
    nr: "08",
    titel: "Internationales Steuerrecht",
    desc: "Grenzüberschreitende Tätigkeiten, Doppelbesteuerungsabkommen, Expatriates – wir navigieren Sie sicher durch die Komplexität des internationalen Steuerrechts.",
    tag: "Unternehmen",
    href: "/leistungen/international",
  },
  {
    nr: "09",
    titel: "Digitale Buchhaltung & DATEV",
    desc: "Papierlose Buchhaltung, automatisierter Belegimport und direkte DATEV-Anbindung – wir modernisieren Ihre Finanzprozesse und sparen Ihnen wertvolle Zeit.",
    tag: "KMU",
    href: "/leistungen/digital",
  },
];

export default function Leistungen() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="leistungen"
      style={{
        background: "var(--black-soft)",
        paddingBlock: "var(--section-py)",
      }}>
      <div className="container">
        {/* ── Header ── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "clamp(3rem,6vw,5rem)",
          }}>
          <div>
            <p
              className="font-mono"
              style={{
                fontSize: "clamp(.6rem,.75vw,.7rem)",
                color: "#5ce1e6",
                letterSpacing: ".2em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}>
              — Was wir tun
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.9rem,4.5vw,3.6rem)",
                fontWeight: 700,
                color: "#eef1f6",
                letterSpacing: "-0.02em",
                lineHeight: 1.08,
              }}>
              Unsere
              <br />
              <em style={{ color: "#5ce1e6" }}>Leistungen</em>
            </h2>
          </div>
          <p
            style={{
              maxWidth: "400px",
              color: "#8fa3a8",
              lineHeight: 1.72,
              fontSize: "clamp(.85rem,1.1vw,.95rem)",
            }}>
            Maßgeschneiderte Steuerberatung – keine Pauschalangebote, sondern
            individuelle Lösungen für jede Lebenssituation.
          </p>
        </div>

        {/* ── Grid ── */}
        <div
          className="leistungen-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,.04)",
            border: "1px solid rgba(255,255,255,.04)",
          }}>
          {ITEMS.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                padding: "clamp(1.75rem,3vw,2.75rem)",
                background:
                  hovered === i ? "rgba(20,101,116,.13)" : "var(--black-soft)",
                transition: "background .3s",
                overflow: "hidden",
                cursor: "default",
                display: "flex",
                flexDirection: "column",
              }}>
              {/* top accent bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg,#5ce1e6,#146574)",
                  transform: hovered === i ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform .35s ease",
                }}
              />

              {/* number + tag */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "clamp(1rem,2vw,1.6rem)",
                }}>
                <span
                  className="font-mono"
                  style={{
                    fontSize: "clamp(.65rem,.85vw,.78rem)",
                    color: "rgba(92,225,230,.35)",
                    letterSpacing: ".1em",
                  }}>
                  {item.nr}
                </span>
                <span
                  className="font-mono"
                  style={{
                    fontSize: ".63rem",
                    color: "#8fa3a8",
                    letterSpacing: ".1em",
                    padding: ".22rem .65rem",
                    border: "1px solid rgba(255,255,255,.08)",
                    borderRadius: "100px",
                  }}>
                  {item.tag}
                </span>
              </div>

              {/* titel */}
              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(1.1rem,1.6vw,1.35rem)",
                  fontWeight: 700,
                  color: "#eef1f6",
                  marginBottom: "clamp(.75rem,1.2vw,1rem)",
                  lineHeight: 1.22,
                  letterSpacing: "-0.01em",
                }}>
                {item.titel}
              </h3>

              {/* desc */}
              <p
                style={{
                  color: "#8fa3a8",
                  lineHeight: 1.68,
                  fontSize: "clamp(.82rem,1vw,.9rem)",
                  flexGrow: 1,
                }}>
                {item.desc}
              </p>

              {/* link */}
              <a
                href={item.href}
                style={{
                  marginTop: "clamp(1.25rem,2vw,2rem)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: ".45rem",
                  color: hovered === i ? "#5ce1e6" : "#8fa3a8",
                  textDecoration: "none",
                  fontSize: "clamp(.78rem,.95vw,.88rem)",
                  fontWeight: 500,
                  transition: "color .2s",
                }}>
                Mehr erfahren
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  aria-hidden>
                  <path
                    d="M2.5 6.5h8M6.5 2.5l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          style={{ textAlign: "center", marginTop: "clamp(2.5rem,4vw,4rem)" }}>
          <a
            href="#kontakt"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: ".5rem",
              color: "#8fa3a8",
              textDecoration: "none",
              fontSize: "clamp(.82rem,.95vw,.9rem)",
              fontWeight: 500,
              borderBottom: "1px solid rgba(143,163,168,.25)",
              paddingBottom: "2px",
              transition: "color .2s, border-color .2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#5ce1e6";
              e.currentTarget.style.borderColor = "rgba(92,225,230,.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#8fa3a8";
              e.currentTarget.style.borderColor = "rgba(143,163,168,.25)";
            }}>
            Alle Leistungen – individuelle Beratung anfragen →
          </a>
        </div>
      </div>

      {/* ── Responsive Grid ── */}
      <style>{`
  @media (max-width: 768px) {
    .leistungen-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
    .leistungen-grid > div:last-child {
      grid-column: 1 / -1;
      max-width: 50%;
      margin-inline: auto;
      width: 100%;
    }
  }
  @media (max-width: 560px) {
    .leistungen-grid {
      grid-template-columns: 1fr !important;
    }
    .leistungen-grid > div:last-child {
      grid-column: unset !important;
      max-width: 100% !important;
    }
  }
`}</style>
    </section>
  );
}
