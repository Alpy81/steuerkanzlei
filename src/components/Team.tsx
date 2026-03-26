"use client";
import { useState } from "react";
import Image from "next/image";

const TEAM = [
  {
    initials: "MW",
    name: "Dr. Michael Weber",
    role: "Steuerberater & Gründer",
    exp: "22 Jahre Erfahrung",
    spec: "Unternehmensbesteuerung, M&A, Holdingstrukturen",
    bio: "Dr. Weber gründete die Kanzlei nach 10 Jahren in einer internationalen Wirtschaftsprüfungsgesellschaft. Sein Fokus liegt auf strategischer Steuergestaltung für wachsende Unternehmen.",
    farbe: ["#146574", "#1a7d90"],
    foto: "/images/portrait-mw.jpg",
  },
  {
    initials: "SH",
    name: "Sandra Hoffmann",
    role: "Steuerberaterin",
    exp: "14 Jahre Erfahrung",
    spec: "Einkommensteuer, Immobilien, Freiberufler",
    bio: "Sandra Hoffmann ist Ansprechpartnerin für Privatpersonen und Selbstständige. Sie ist bekannt für ihre klare Kommunikation und dafür, komplexes Steuerrecht verständlich zu machen.",
    farbe: ["#1a7d90", "#5ce1e6"],
    foto: "/images/portrait-sh.jpg",
  },
  {
    initials: "JB",
    name: "Jonas Becker",
    role: "Dipl.-Kaufmann",
    exp: "9 Jahre Erfahrung",
    spec: "Buchhaltung, Jahresabschluss, Lohnsteuer",
    bio: "Jonas Becker verantwortet die Finanzbuchhaltung und Jahresabschlüsse unserer Mandanten. Seine strukturierte Arbeitsweise sorgt für Genauigkeit und Zuverlässigkeit.",
    farbe: ["#0d4a56", "#146574"],
    foto: "/images/portrait-jb.jpg",
  },
  {
    initials: "LR",
    name: "Lena Richter",
    role: "Steuerfachangestellte",
    exp: "6 Jahre Erfahrung",
    spec: "Mandantenbetreuung, Finanzbuchhaltung",
    bio: "Lena Richter ist das erste Gesicht, das unsere Mandanten kennenlernen. Ihre freundliche, präzise Art macht die Zusammenarbeit unkompliziert und angenehm.",
    farbe: ["#146574", "#45e7ff"],
    foto: "/images/portrait-lr.jpg",
  },
  {
    initials: "TK",
    name: "Tanja König",
    role: "Steuerberaterin",
    exp: "11 Jahre Erfahrung",
    spec: "Internationales Steuerrecht, Expatriates, Doppelbesteuerung",
    bio: "Tanja König ist spezialisiert auf grenzüberschreitende Steuerfragen. Sie berät Unternehmen mit internationalen Aktivitäten sowie Privatpersonen, die im Ausland tätig sind oder aus dem Ausland nach Deutschland kommen.",
    farbe: ["#1a7d90", "#45e7ff"],
    foto: "/images/portrait-tk.jpg",
  },
];

export default function Team() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [flipped, setFlipped] = useState<number | null>(null);

  const toggle = (i: number) => setFlipped(flipped === i ? null : i);

  const CARD_H = "clamp(360px,34vw,460px)";

  return (
    <section
      id="team"
      style={{
        background: "var(--black-soft)",
        paddingBlock: "var(--section-py)",
      }}>
      <div className="container">
        {/* ── Header ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%,300px),1fr))",
            gap: "clamp(2rem,5vw,5rem)",
            alignItems: "end",
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
              — Wer wir sind
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
              Menschen,
              <br />
              <em style={{ color: "#5ce1e6" }}>keine Nummern.</em>
            </h2>
          </div>
          <p
            style={{
              color: "#8fa3a8",
              lineHeight: 1.75,
              fontSize: "clamp(.85rem,1.05vw,.95rem)",
              maxWidth: "480px",
            }}>
            Bei uns haben Sie immer denselben Ansprechpartner. Kein Call-Center,
            keine wechselnden Sachbearbeiter – sondern ein Team, das Ihre
            Geschichte kennt und Ihre Ziele versteht.
          </p>
        </div>

        {/* ── Cards ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(1rem,2vw,1.5rem)",
          }}>
          {TEAM.map((m, i) => {
            const isFlipped = flipped === i;
            const isHovered = hovered === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => toggle(i)}
                style={{
                  perspective: "1200px",
                  cursor: "pointer",
                  height: CARD_H,
                }}
                role="button"
                aria-label={`${m.name} – mehr erfahren`}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && toggle(i)}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    transformStyle: "preserve-3d",
                    transition: "transform .55s cubic-bezier(.4,0,.2,1)",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}>
                  {/* ── Front ── */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backfaceVisibility: "hidden",
                      border: `1px solid ${
                        isHovered && !isFlipped
                          ? "rgba(92,225,230,.22)"
                          : "rgba(255,255,255,.06)"
                      }`,
                      background:
                        isHovered && !isFlipped
                          ? "rgba(20,101,116,.1)"
                          : "rgba(15,22,24,.8)",
                      transition: "border-color .3s, background .3s",
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden",
                    }}>
                    {/* ── Foto ── */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "clamp(160px,18vw,220px)",
                        flexShrink: 0,
                        overflow: "hidden",
                      }}>
                      <Image
                        src={m.foto}
                        alt={m.name}
                        fill
                        style={{
                          objectFit: "cover",
                          objectPosition: "center top",
                          filter:
                            isHovered && !isFlipped
                              ? "brightness(1.05)"
                              : "brightness(0.9)",
                          transition: "filter .3s",
                        }}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      {/* Cyan overlay gradient unten */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "60px",
                          background:
                            "linear-gradient(to bottom, transparent, rgba(15,22,24,.95))",
                        }}
                      />
                    </div>

                    {/* ── Text ── */}
                    <div
                      style={{
                        padding: "clamp(1rem,1.8vw,1.5rem)",
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                      }}>
                      <h3
                        className="font-display"
                        style={{
                          fontSize: "clamp(.95rem,1.4vw,1.15rem)",
                          fontWeight: 700,
                          color: "#eef1f6",
                          marginBottom: ".25rem",
                          lineHeight: 1.25,
                        }}>
                        {m.name}
                      </h3>
                      <p
                        className="font-mono"
                        style={{
                          fontSize: "clamp(.58rem,.7vw,.66rem)",
                          color: "#5ce1e6",
                          letterSpacing: ".08em",
                          marginBottom: "clamp(.6rem,1vw,.9rem)",
                        }}>
                        {m.role}
                      </p>
                      <p
                        style={{
                          color: "#8fa3a8",
                          fontSize: "clamp(.78rem,.92vw,.875rem)",
                          lineHeight: 1.6,
                          flexGrow: 1,
                        }}>
                        {m.spec}
                      </p>
                      <div
                        style={{
                          marginTop: "clamp(.75rem,1.2vw,1rem)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          flexShrink: 0,
                        }}>
                        <span
                          className="font-mono"
                          style={{
                            fontSize: "clamp(.55rem,.65vw,.62rem)",
                            color: "rgba(92,225,230,.45)",
                            letterSpacing: ".1em",
                          }}>
                          {m.exp}
                        </span>
                        <span
                          style={{
                            fontSize: ".7rem",
                            color: "rgba(143,163,168,.45)",
                          }}>
                          Umdrehen →
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ── Back ── */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      padding: "clamp(1.5rem,2.5vw,2.25rem)",
                      border: "1px solid rgba(92,225,230,.2)",
                      background: "rgba(20,101,116,.12)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      overflow: "hidden",
                    }}>
                    {/* kleines Foto oben rechts */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "1rem",
                        marginBottom: "1.25rem",
                      }}>
                      <div
                        style={{
                          position: "relative",
                          width: 56,
                          height: 56,
                          borderRadius: "50%",
                          overflow: "hidden",
                          flexShrink: 0,
                          border: "2px solid rgba(92,225,230,.3)",
                        }}>
                        <Image
                          src={m.foto}
                          alt={m.name}
                          fill
                          style={{
                            objectFit: "cover",
                            objectPosition: "center top",
                          }}
                          sizes="56px"
                        />
                      </div>
                      <div>
                        <p
                          className="font-mono"
                          style={{
                            fontSize: "clamp(.56rem,.66vw,.63rem)",
                            color: "#5ce1e6",
                            letterSpacing: ".12em",
                            textTransform: "uppercase",
                            marginBottom: ".25rem",
                          }}>
                          Über {m.name.split(" ")[0]}
                        </p>
                        <p
                          style={{
                            color: "#eef1f6",
                            fontSize: "clamp(.72rem,.82vw,.8rem)",
                            fontWeight: 600,
                          }}>
                          {m.role}
                        </p>
                      </div>
                    </div>

                    <p
                      style={{
                        color: "#eef1f6",
                        lineHeight: 1.72,
                        fontSize: "clamp(.8rem,.98vw,.9rem)",
                        flexGrow: 1,
                      }}>
                      {m.bio}
                    </p>

                    <a
                      href="#kontakt"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: ".45rem",
                        color: "#5ce1e6",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "clamp(.76rem,.88vw,.86rem)",
                        borderBottom: "1px solid rgba(92,225,230,.3)",
                        paddingBottom: "2px",
                        width: "fit-content",
                        marginTop: "1.25rem",
                      }}>
                      Kontakt aufnehmen →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Teamfoto ── */}
        <div
          style={{
            marginTop: "clamp(3rem,5vw,5rem)",
            position: "relative",
            width: "100%",
            height: "clamp(280px,35vw,520px)",
            overflow: "hidden",
            border: "1px solid rgba(92,225,230,.1)",
          }}>
          <Image
            src="/images/team-image.jpg"
            alt="Das Team von Steuer & Partner"
            fill
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
            sizes="100vw"
          />
          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(8,12,14,.7), rgba(8,12,14,.1), rgba(8,12,14,.4))",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "clamp(1.5rem,3vw,3rem)",
              left: "clamp(1.5rem,4vw,4rem)",
            }}>
            <p
              className="font-mono"
              style={{
                fontSize: "clamp(.6rem,.75vw,.7rem)",
                color: "#5ce1e6",
                letterSpacing: ".2em",
                textTransform: "uppercase",
                marginBottom: ".5rem",
              }}>
              Unser Team
            </p>
            <p
              className="font-display"
              style={{
                fontSize: "clamp(1.2rem,2.5vw,2rem)",
                fontWeight: 700,
                color: "#eef1f6",
                letterSpacing: "-0.02em",
              }}>
              Steuer & Partner · Frankfurt am Main
            </p>
          </div>
        </div>

        {/* ── Bottom note ── */}
        <p
          style={{
            textAlign: "center",
            marginTop: "clamp(2rem,3vw,3rem)",
            color: "rgba(143,163,168,.4)",
            fontSize: "clamp(.68rem,.8vw,.75rem)",
            fontFamily: "DM Mono, monospace",
            letterSpacing: ".1em",
          }}>
          Klicken Sie auf eine Karte, um mehr über das Teammitglied zu erfahren.
        </p>
      </div>
    </section>
  );
}
