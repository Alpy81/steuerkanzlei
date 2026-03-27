"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Termin() {
  useEffect(() => {
    // Calendly Widget Script laden
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
          paddingTop: "clamp(7rem,12vw,10rem)",
          paddingBottom: "clamp(2rem,3vw,3rem)",
          background: "var(--black-soft)",
          borderBottom: "1px solid rgba(255,255,255,.05)",
        }}>
        <div className="container">
          <div style={{ maxWidth: "min(680px,100%)" }}>
            <p
              className="font-mono"
              style={{
                fontSize: "clamp(.58rem,.72vw,.68rem)",
                color: "#5ce1e6",
                letterSpacing: ".2em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}>
              — Terminbuchung
            </p>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(2rem,5vw,3.8rem)",
                fontWeight: 900,
                color: "#eef1f6",
                letterSpacing: "-0.03em",
                lineHeight: 1.06,
                marginBottom: "1rem",
              }}>
              Kostenloses
              <br />
              <em style={{ color: "#5ce1e6" }}>Erstgespräch</em> buchen
            </h1>
            <p
              style={{
                color: "#8fa3a8",
                lineHeight: 1.72,
                fontSize: "clamp(.85rem,1.05vw,.95rem)",
              }}>
              Wählen Sie einen Termin, der für Sie passt. Das Gespräch dauert 30
              Minuten, ist vollständig kostenlos und unverbindlich.
            </p>

            {/* Trust signals */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "clamp(1rem,2vw,2rem)",
                marginTop: "1.5rem",
              }}>
              {[
                "✓  30 Minuten · kostenlos",
                "✓  Per Telefon oder Video",
                "✓  Keine Verpflichtung",
              ].map((t) => (
                <span
                  key={t}
                  className="font-mono"
                  style={{
                    fontSize: "clamp(.6rem,.72vw,.68rem)",
                    color: "#8fa3a8",
                    letterSpacing: ".08em",
                  }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Calendly Widget ── */}
      <section style={{ paddingBlock: "clamp(2rem,4vw,4rem)" }}>
        <div className="container">
          {/* Calendly inline widget */}
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/aertas90/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0f1618&text_color=eef1f6&primary_color=5ce1e6&locale=de"
            style={{
              minWidth: "320px",
              height: "clamp(600px, 80vh, 900px)",
              border: "1px solid rgba(92,225,230,.12)",
              borderRadius: "2px",
            }}
          />
        </div>
      </section>

      {/* ── Bottom note ── */}
      <section style={{ paddingBottom: "clamp(3rem,5vw,5rem)" }}>
        <div className="container">
          <div
            style={{
              padding: "clamp(1.5rem,2.5vw,2.5rem)",
              border: "1px solid rgba(255,255,255,.06)",
              background: "rgba(15,22,24,.6)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}>
            <div>
              <p
                style={{
                  fontWeight: 600,
                  color: "#eef1f6",
                  fontSize: "clamp(.88rem,1.1vw,1rem)",
                  marginBottom: ".35rem",
                }}>
                Lieber direkt anrufen?
              </p>
              <p
                style={{
                  color: "#8fa3a8",
                  fontSize: "clamp(.8rem,.95vw,.9rem)",
                }}>
                Wir sind Mo–Fr von 09:00–17:00 Uhr erreichbar.
              </p>
            </div>
            <a
              href="tel:+496912345678"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: ".55rem",
                background: "linear-gradient(135deg,#146574,#1a7d90)",
                color: "#eef1f6",
                textDecoration: "none",
                padding: "clamp(.75rem,1vw,.95rem) clamp(1.25rem,2vw,1.75rem)",
                borderRadius: "3px",
                fontSize: "clamp(.82rem,.95vw,.9rem)",
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
              📞 +49 69 123 456 789
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
