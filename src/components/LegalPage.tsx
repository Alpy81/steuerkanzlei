"use client";
import Link from "next/link";

type Section = {
  titel: string;
  inhalt: string | string[];
};

type LegalPageProps = {
  titel: string;
  untertitel: string;
  stand: string;
  sections: Section[];
};

export default function LegalPage({
  titel,
  untertitel,
  stand,
  sections,
}: LegalPageProps) {
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
            href="/"
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
            Zurück zur Startseite
          </Link>
        </div>
      </div>

      {/* ── Hero ── */}
      <section
        style={{
          paddingTop: "clamp(8rem,14vw,12rem)",
          paddingBottom: "clamp(3rem,5vw,5rem)",
          borderBottom: "1px solid rgba(255,255,255,.05)",
          background: "var(--black-soft)",
        }}>
        <div className="container">
          <p
            className="font-mono"
            style={{
              fontSize: "clamp(.58rem,.72vw,.68rem)",
              color: "#5ce1e6",
              letterSpacing: ".2em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>
            — Rechtliches
          </p>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(2rem,5vw,4rem)",
              fontWeight: 900,
              color: "#eef1f6",
              letterSpacing: "-0.03em",
              lineHeight: 1.06,
              marginBottom: ".75rem",
            }}>
            {titel}
          </h1>
          <p
            style={{
              color: "#8fa3a8",
              fontSize: "clamp(.85rem,1.05vw,.95rem)",
              marginBottom: ".5rem",
            }}>
            {untertitel}
          </p>
          <p
            className="font-mono"
            style={{
              fontSize: "clamp(.58rem,.7vw,.65rem)",
              color: "rgba(143,163,168,.4)",
              letterSpacing: ".1em",
            }}>
            Stand: {stand}
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section style={{ paddingBlock: "clamp(3rem,6vw,6rem)" }}>
        <div className="container">
          <div style={{ maxWidth: "min(780px,100%)", marginInline: "auto" }}>
            {sections.map((sec, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "clamp(2.5rem,4vw,3.5rem)",
                  paddingBottom: "clamp(2.5rem,4vw,3.5rem)",
                  borderBottom:
                    i < sections.length - 1
                      ? "1px solid rgba(255,255,255,.05)"
                      : "none",
                }}>
                {/* Section header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: ".875rem",
                    marginBottom: "clamp(1rem,1.5vw,1.25rem)",
                  }}>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "clamp(.55rem,.65vw,.62rem)",
                      color: "rgba(92,225,230,.35)",
                      letterSpacing: ".1em",
                      flexShrink: 0,
                    }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2
                    className="font-display"
                    style={{
                      fontSize: "clamp(1.1rem,1.8vw,1.4rem)",
                      fontWeight: 700,
                      color: "#eef1f6",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                    }}>
                    {sec.titel}
                  </h2>
                </div>

                {/* Content */}
                {Array.isArray(sec.inhalt) ? (
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: ".65rem",
                    }}>
                    {sec.inhalt.map((item, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: ".75rem",
                          color: "#8fa3a8",
                          fontSize: "clamp(.82rem,1vw,.92rem)",
                          lineHeight: 1.7,
                        }}>
                        <span
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: "rgba(92,225,230,.4)",
                            flexShrink: 0,
                            marginTop: ".55rem",
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  sec.inhalt.split("\n\n").map((para, j) => (
                    <p
                      key={j}
                      style={{
                        color: "#8fa3a8",
                        lineHeight: 1.78,
                        fontSize: "clamp(.82rem,1vw,.92rem)",
                        marginBottom: "1rem",
                      }}>
                      {para}
                    </p>
                  ))
                )}
              </div>
            ))}

            {/* Back link */}
            <div
              style={{
                marginTop: "clamp(3rem,5vw,5rem)",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(255,255,255,.05)",
              }}>
              <Link
                href="/"
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
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
