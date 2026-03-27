"use client";
import { useState } from "react";
import NewsletterForm from "@/components/NewsletterForm";

const POSTS = [
  {
    nr: "01",
    datum: "März 2025",
    tag: "Steuertipps",
    title: "Homeoffice-Pauschale 2025: Was sich geändert hat",
    excerpt:
      "Die Homeoffice-Pauschale wurde erhöht und die Voraussetzungen angepasst. Was das konkret für Ihre Steuererklärung bedeutet – und wie Sie das Maximum herausholen.",
    lesezeit: "4 min",
    href: "/blog/homeoffice-pauschale-2025",
  },
  {
    nr: "02",
    datum: "Feb 2025",
    tag: "Selbstständige",
    title: "USt-Voranmeldung: Die 5 häufigsten Fehler vermeiden",
    excerpt:
      "Zu spät, falsch oder gar nicht – die fünf größten Fehler bei der Umsatzsteuer-Voranmeldung und wie Sie sie von Anfang an sicher umgehen.",
    lesezeit: "6 min",
    href: "/blog/ust-voranmeldung-fehler",
  },
  {
    nr: "03",
    datum: "Jan 2025",
    tag: "Unternehmen",
    title: "Holdingstruktur 2025: Wann lohnt sich die GmbH & Co. KG?",
    excerpt:
      "Steueroptimierung durch smarte Gesellschaftsstrukturen – wann eine Holding-Lösung wirklich Sinn ergibt und welche Voraussetzungen Sie erfüllen müssen.",
    lesezeit: "8 min",
    href: "/blog/holdingstruktur-gmbh-co-kg",
  },
];

export default function Blog() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="blog"
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
              — Wissen & Einblicke
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
              Steuer-<em style={{ color: "#5ce1e6" }}>Insights</em>
            </h2>
          </div>
          <a
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: ".45rem",
              color: "#8fa3a8",
              textDecoration: "none",
              fontSize: "clamp(.8rem,.95vw,.9rem)",
              fontWeight: 500,
              transition: "color .2s",
              paddingBottom: "2px",
              borderBottom: "1px solid transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#5ce1e6";
              e.currentTarget.style.borderColor = "rgba(92,225,230,.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#8fa3a8";
              e.currentTarget.style.borderColor = "transparent";
            }}>
            Alle Artikel
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

        {/* ── Cards ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
            gap: "clamp(1rem,2vw,1.5rem)",
          }}>
          {POSTS.map((post, i) => {
            const isHovered = hovered === i;

            return (
              <article
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: `1px solid ${
                    isHovered ? "rgba(92,225,230,.2)" : "rgba(255,255,255,.06)"
                  }`,
                  background: isHovered
                    ? "rgba(20,101,116,.08)"
                    : "transparent",
                  transition: "border-color .3s, background .3s",
                  overflow: "hidden",
                }}>
                {/* Top accent bar */}
                <div
                  style={{
                    height: "2px",
                    background: "linear-gradient(90deg,#146574,#5ce1e6)",
                    transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform .35s ease",
                    flexShrink: 0,
                  }}
                />

                <div
                  style={{
                    padding: "clamp(1.5rem,2.5vw,2.25rem)",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}>
                  {/* Meta row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: ".75rem",
                      marginBottom: "clamp(1rem,1.8vw,1.4rem)",
                      flexWrap: "wrap",
                    }}>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: ".63rem",
                        color: "#5ce1e6",
                        letterSpacing: ".1em",
                        padding: ".22rem .65rem",
                        border: "1px solid rgba(92,225,230,.22)",
                        borderRadius: "100px",
                      }}>
                      {post.tag}
                    </span>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: ".62rem",
                        color: "rgba(143,163,168,.5)",
                        letterSpacing: ".08em",
                      }}>
                      {post.datum}
                    </span>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: ".62rem",
                        color: "rgba(143,163,168,.35)",
                        marginLeft: "auto",
                      }}>
                      {post.lesezeit} Lesezeit
                    </span>
                  </div>

                  {/* Nr + Title */}
                  <div
                    style={{
                      display: "flex",
                      gap: ".75rem",
                      alignItems: "flex-start",
                      marginBottom: ".875rem",
                    }}>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: ".62rem",
                        color: "rgba(92,225,230,.25)",
                        letterSpacing: ".08em",
                        paddingTop: ".3rem",
                        flexShrink: 0,
                      }}>
                      {post.nr}
                    </span>
                    <h3
                      className="font-display"
                      style={{
                        fontSize: "clamp(1.05rem,1.5vw,1.25rem)",
                        fontWeight: 700,
                        color: isHovered ? "#eef1f6" : "#c8d4d7",
                        lineHeight: 1.28,
                        letterSpacing: "-0.01em",
                        transition: "color .25s",
                      }}>
                      {post.title}
                    </h3>
                  </div>

                  {/* Excerpt */}
                  <p
                    style={{
                      color: "#8fa3a8",
                      lineHeight: 1.7,
                      fontSize: "clamp(.8rem,.95vw,.88rem)",
                      flexGrow: 1,
                    }}>
                    {post.excerpt}
                  </p>

                  {/* Read more */}
                  <a
                    href={post.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: ".45rem",
                      marginTop: "clamp(1.25rem,2vw,1.75rem)",
                      color: isHovered ? "#5ce1e6" : "#8fa3a8",
                      textDecoration: "none",
                      fontSize: "clamp(.78rem,.9vw,.86rem)",
                      fontWeight: 500,
                      transition: "color .2s",
                      width: "fit-content",
                    }}>
                    Artikel lesen
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
              </article>
            );
          })}
        </div>

        {/* ── Newsletter teaser ── */}
        <div
          style={{
            marginTop: "clamp(3rem,5vw,5rem)",
            padding: "clamp(2rem,3.5vw,3rem) clamp(1.5rem,3vw,3rem)",
            border: "1px solid rgba(92,225,230,.12)",
            background: "rgba(20,101,116,.07)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}>
          <div>
            <p
              className="font-mono"
              style={{
                fontSize: "clamp(.58rem,.7vw,.65rem)",
                color: "#5ce1e6",
                letterSpacing: ".15em",
                textTransform: "uppercase",
                marginBottom: ".5rem",
              }}>
              Steuer-Newsletter
            </p>
            <p
              style={{
                color: "#eef1f6",
                fontWeight: 600,
                fontSize: "clamp(.9rem,1.2vw,1.05rem)",
              }}>
              Aktuelle Steuer-Tipps direkt in Ihr Postfach – kostenlos und
              monatlich.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
