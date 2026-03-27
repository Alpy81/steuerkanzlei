"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Branchen", href: "#branchen" },
  { label: "Team", href: "#team" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: scrolled ? "64px" : "80px",
          transition:
            "height .35s ease, background .35s ease, border-color .35s ease, backdrop-filter .35s ease",
          background: scrolled ? "rgba(8,12,14,.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          borderBottom: `1px solid ${
            scrolled ? "rgba(92,225,230,.1)" : "transparent"
          }`,
        }}>
        <div
          className="container"
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "clamp(1rem,2vw,2rem)",
          }}>
          {/* ── Logo ── */}
          <a
            href="#"
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: "3px",
              flexShrink: 0,
            }}>
            <span
              className="font-display"
              style={{
                fontSize: "clamp(1.1rem,1.6vw,1.4rem)",
                fontWeight: 700,
                color: "#eef1f6",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}>
              Weber<span style={{ color: "#5ce1e6" }}>&</span>Partner
            </span>
            <span
              className="font-mono"
              style={{
                fontSize: "clamp(.55rem,.65vw,.65rem)",
                color: "#8fa3a8",
                letterSpacing: ".18em",
                textTransform: "uppercase",
              }}>
              Steuerberatung · Frankfurt
            </span>
          </a>

          {/* ── Desktop Links ── */}
          <div
            className="desktop-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(1.25rem,2vw,2.5rem)",
              flexGrow: 1,
              justifyContent: "center",
            }}>
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  textDecoration: "none",
                  fontSize: "clamp(.78rem,.9vw,.9rem)",
                  fontWeight: 500,
                  letterSpacing: ".04em",
                  color: hoveredIdx === i ? "#5ce1e6" : "#8fa3a8",
                  transition: "color .2s",
                  position: "relative",
                  paddingBottom: "2px",
                  whiteSpace: "nowrap",
                }}>
                {link.label}
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "1px",
                    width: hoveredIdx === i ? "100%" : "0%",
                    background: "#5ce1e6",
                    transition: "width .25s ease",
                  }}
                />
              </a>
            ))}
          </div>

          {/* ── CTA ── */}
          <a
            href="/termin"
            className="desktop-links"
            style={{
              textDecoration: "none",
              background: "linear-gradient(135deg,#146574,#1a7d90)",
              color: "#eef1f6",
              padding: "clamp(.5rem,.8vw,.7rem) clamp(1rem,1.2vw,1.5rem)",
              borderRadius: "3px",
              fontSize: "clamp(.75rem,.85vw,.875rem)",
              fontWeight: 600,
              letterSpacing: ".04em",
              border: "1px solid rgba(92,225,230,.22)",
              transition: "box-shadow .25s, transform .25s",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 6px 28px rgba(20,101,116,.55)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "none";
            }}>
            Termin buchen
          </a>

          {/* ── Burger (mobile) ── */}
          <button
            className="burger-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menü öffnen"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              flexDirection: "column",
              gap: "5px",
            }}>
            {[0, 1, 2].map((line) => (
              <span
                key={line}
                style={{
                  display: "block",
                  width: "24px",
                  height: "2px",
                  background: "#eef1f6",
                  borderRadius: "2px",
                  transition: "transform .3s, opacity .3s",
                  transform:
                    menuOpen && line === 0
                      ? "rotate(45deg) translate(5px,5px)"
                      : menuOpen && line === 2
                      ? "rotate(-45deg) translate(5px,-5px)"
                      : "none",
                  opacity: menuOpen && line === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 190,
          background: "rgba(8,12,14,.97)",
          backdropFilter: "blur(16px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "6rem 2rem 3rem",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform .4s cubic-bezier(.4,0,.2,1)",
        }}>
        <nav style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: "none",
                color: "#eef1f6",
                fontSize: "clamp(1.6rem,6vw,2.2rem)",
                fontFamily: "Playfair Display, serif",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                padding: ".75rem 0",
                borderBottom: "1px solid rgba(255,255,255,.06)",
                transition: "color .2s",
                animationDelay: `${i * 0.06}s`,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#5ce1e6")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#eef1f6")}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/termin"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: "2.5rem",
            display: "block",
            textAlign: "center",
            background: "linear-gradient(135deg,#146574,#1a7d90)",
            color: "#eef1f6",
            textDecoration: "none",
            padding: "1rem",
            borderRadius: "3px",
            fontSize: "1rem",
            fontWeight: 600,
            border: "1px solid rgba(92,225,230,.2)",
          }}>
          Termin buchen →
        </a>

        <p
          className="font-mono"
          style={{
            marginTop: "3rem",
            fontSize: ".65rem",
            color: "#8fa3a8",
            letterSpacing: ".12em",
          }}>
          Weber & Partner · Frankfurt am Main
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-links { display: none !important; }
          .burger-btn    { display: flex !important; }
        }
      `}</style>
    </>
  );
}
