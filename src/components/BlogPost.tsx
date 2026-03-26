"use client";
import Link from "next/link";

type BlogPostProps = {
  datum: string;
  tag: string;
  titel: string;
  intro: string;
  lesezeit: string;
  inhalt: { zwischentitel?: string; text: string }[];
  fazit: string;
  autor: { name: string; rolle: string; initials: string };
};

export default function BlogPost({
  datum,
  tag,
  titel,
  intro,
  lesezeit,
  inhalt,
  fazit,
  autor,
}: BlogPostProps) {
  return (
    <main style={{ background: "var(--black)", minHeight: "100vh" }}>
      {/* ── Navbar ── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "64px",
          background: "rgba(8,12,14,.92)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(92,225,230,.1)",
          display: "flex",
          alignItems: "center",
        }}>
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <span
              className="font-display"
              style={{
                fontSize: "clamp(1rem,1.6vw,1.25rem)",
                fontWeight: 700,
                color: "#eef1f6",
                letterSpacing: "-0.02em",
              }}>
              Steuer<span style={{ color: "#5ce1e6" }}>&</span>Partner
            </span>
          </Link>
          <Link
            href="/#blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: ".45rem",
              color: "#8fa3a8",
              textDecoration: "none",
              fontSize: "clamp(.78rem,.9vw,.875rem)",
              fontWeight: 500,
              transition: "color .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#5ce1e6")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8fa3a8")}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden>
              <path
                d="M11 7H3M7 3L3 7l4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Alle Artikel
          </Link>
        </div>
      </div>

      {/* ── Hero ── */}
      <section
        style={{
          paddingTop: "clamp(8rem,14vw,12rem)",
          paddingBottom: "clamp(3rem,5vw,5rem)",
          background: "var(--black-soft)",
          borderBottom: "1px solid rgba(255,255,255,.05)",
          position: "relative",
          overflow: "hidden",
        }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            right: "20%",
            width: "1px",
            height: "100%",
            background:
              "linear-gradient(to bottom,transparent,rgba(92,225,230,.1),transparent)",
          }}
        />
        <div className="container">
          <div style={{ maxWidth: "min(760px,100%)" }}>
            {/* Meta */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: ".75rem",
                marginBottom: "clamp(1.25rem,2vw,1.75rem)",
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
                {tag}
              </span>
              <span
                className="font-mono"
                style={{
                  fontSize: ".62rem",
                  color: "rgba(143,163,168,.5)",
                  letterSpacing: ".08em",
                }}>
                {datum}
              </span>
              <span
                className="font-mono"
                style={{
                  fontSize: ".62rem",
                  color: "rgba(143,163,168,.4)",
                  letterSpacing: ".08em",
                }}>
                {lesezeit} Lesezeit
              </span>
            </div>

            {/* Titel */}
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem,4.5vw,3.8rem)",
                fontWeight: 900,
                color: "#eef1f6",
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                marginBottom: "clamp(1.25rem,2vw,1.75rem)",
              }}>
              {titel}
            </h1>

            {/* Intro */}
            <p
              style={{
                color: "#8fa3a8",
                lineHeight: 1.75,
                fontSize: "clamp(.95rem,1.2vw,1.1rem)",
                fontWeight: 300,
              }}>
              {intro}
            </p>
          </div>
        </div>
      </section>

      {/* ── Artikel-Inhalt ── */}
      <section style={{ paddingBlock: "clamp(3rem,6vw,6rem)" }}>
        <div className="container">
          <div style={{ maxWidth: "min(720px,100%)", marginInline: "auto" }}>
            {inhalt.map((block, i) => (
              <div key={i} style={{ marginBottom: "clamp(2rem,3.5vw,3rem)" }}>
                {block.zwischentitel && (
                  <h2
                    className="font-display"
                    style={{
                      fontSize: "clamp(1.2rem,2vw,1.6rem)",
                      fontWeight: 700,
                      color: "#eef1f6",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                      marginBottom: "clamp(.875rem,1.5vw,1.25rem)",
                    }}>
                    {block.zwischentitel}
                  </h2>
                )}
                {block.text.split("\n\n").map((para, j) => (
                  <p
                    key={j}
                    style={{
                      color: "#8fa3a8",
                      lineHeight: 1.8,
                      fontSize: "clamp(.85rem,1.05vw,.97rem)",
                      marginBottom: "1rem",
                    }}>
                    {para}
                  </p>
                ))}
              </div>
            ))}

            {/* Fazit-Box */}
            <div
              style={{
                margin: "clamp(2.5rem,4vw,4rem) 0",
                padding: "clamp(1.5rem,2.5vw,2.5rem)",
                border: "1px solid rgba(92,225,230,.18)",
                background: "rgba(20,101,116,.08)",
                position: "relative",
              }}>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "3px",
                  height: "100%",
                  background: "linear-gradient(to bottom,#5ce1e6,#146574)",
                }}
              />
              <p
                className="font-mono"
                style={{
                  fontSize: "clamp(.58rem,.7vw,.65rem)",
                  color: "#5ce1e6",
                  letterSpacing: ".15em",
                  textTransform: "uppercase",
                  marginBottom: ".75rem",
                }}>
                Fazit
              </p>
              <p
                style={{
                  color: "#eef1f6",
                  lineHeight: 1.75,
                  fontSize: "clamp(.85rem,1.05vw,.97rem)",
                }}>
                {fazit}
              </p>
            </div>

            {/* Autor */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(1rem,2vw,1.5rem)",
                padding: "clamp(1.25rem,2vw,1.75rem)",
                border: "1px solid rgba(255,255,255,.06)",
                background: "rgba(15,22,24,.6)",
                marginBottom: "clamp(2.5rem,4vw,4rem)",
              }}>
              <div
                style={{
                  width: "clamp(44px,5vw,56px)",
                  height: "clamp(44px,5vw,56px)",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#146574,#5ce1e6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                <span
                  className="font-display"
                  style={{
                    fontSize: "clamp(.85rem,1.2vw,1rem)",
                    fontWeight: 700,
                    color: "#eef1f6",
                  }}>
                  {autor.initials}
                </span>
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    color: "#eef1f6",
                    fontSize: "clamp(.85rem,1vw,.95rem)",
                  }}>
                  {autor.name}
                </div>
                <div
                  className="font-mono"
                  style={{
                    fontSize: "clamp(.58rem,.68vw,.65rem)",
                    color: "#8fa3a8",
                    letterSpacing: ".08em",
                    marginTop: "2px",
                  }}>
                  {autor.rolle}
                </div>
              </div>
            </div>

            {/* Back + CTA */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(255,255,255,.05)",
              }}>
              <Link
                href="/#blog"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: ".5rem",
                  color: "#8fa3a8",
                  textDecoration: "none",
                  fontSize: "clamp(.8rem,.95vw,.9rem)",
                  fontWeight: 500,
                  transition: "color .2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#5ce1e6")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8fa3a8")}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden>
                  <path
                    d="M11 7H3M7 3L3 7l4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Zurück zum Blog
              </Link>
              <Link
                href="/#kontakt"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: ".5rem",
                  background: "linear-gradient(135deg,#146574,#1a7d90)",
                  color: "#eef1f6",
                  textDecoration: "none",
                  padding:
                    "clamp(.7rem,1vw,.875rem) clamp(1.25rem,2vw,1.75rem)",
                  borderRadius: "3px",
                  fontSize: "clamp(.8rem,.95vw,.9rem)",
                  fontWeight: 600,
                  letterSpacing: ".04em",
                  border: "1px solid rgba(92,225,230,.2)",
                  transition: "transform .25s, box-shadow .25s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 28px rgba(20,101,116,.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}>
                Kostenlos beraten lassen →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
