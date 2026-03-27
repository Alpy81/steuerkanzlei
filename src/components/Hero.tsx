"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

/* ── Particle canvas ───────────────────────────────────────── */
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    type P = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number;
    };
    const count = Math.min(70, Math.floor(window.innerWidth / 20));
    const pts: P[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.4 + 0.4,
      a: Math.random() * 0.35 + 0.08,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const W = canvas.width,
        H = canvas.height;

      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(92,225,230,${p.a})`;
        ctx.fill();
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(20,101,116,${0.18 * (1 - d / 130)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        opacity: 0.45,
        pointerEvents: "none",
      }}
      aria-hidden
    />
  );
}

/* ── Hero ──────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="hero"
      className="mesh-bg"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}>
      <ParticleCanvas />

      {/* vertical accent lines */}
      {[15, 30].map((pct) => (
        <div
          key={pct}
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            right: `${pct}%`,
            width: "1px",
            height: "100%",
            background: `linear-gradient(to bottom,transparent,rgba(${
              pct === 15 ? "92,225,230" : "20,101,116"
            },.12),transparent)`,
            zIndex: 1,
          }}
        />
      ))}

      {/* ── Content ── */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "clamp(7rem,14vw,11rem)",
          paddingBottom: "clamp(4rem,6vw,7rem)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(2rem,4vw,5rem)",
          alignItems: "center",
        }}>
        {/* ── Left: Text ── */}
        <div style={{ maxWidth: "min(620px,100%)" }}>
          {/* Pill tag */}
          <div
            className="animate-fade-up"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: ".5rem",
              marginBottom: "clamp(1.5rem,3vw,2.5rem)",
              padding: ".4rem 1.1rem",
              border: "1px solid rgba(92,225,230,.22)",
              borderRadius: "100px",
              background: "rgba(20,101,116,.14)",
            }}>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#5ce1e6",
                boxShadow: "0 0 8px #5ce1e6",
                flexShrink: 0,
              }}
            />
            <span
              className="font-mono"
              style={{
                fontSize: "clamp(.6rem,.75vw,.7rem)",
                color: "#5ce1e6",
                letterSpacing: ".15em",
                textTransform: "uppercase",
              }}>
              Steuerberatung · Frankfurt am Main
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display animate-fade-up delay-100"
            style={{
              fontSize: "clamp(2.6rem,5.5vw,5.2rem)",
              fontWeight: 900,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              marginBottom: "clamp(1.25rem,2.5vw,2rem)",
              color: "#eef1f6",
            }}>
            Steuern
            <br />
            <em style={{ color: "#5ce1e6", fontStyle: "italic" }}>
              mit Klarheit.
            </em>
            <br />
            Mit Vertrauen.
          </h1>

          {/* Sub */}
          <p
            className="animate-fade-up delay-200"
            style={{
              fontSize: "clamp(.95rem,1.2vw,1.1rem)",
              color: "#8fa3a8",
              lineHeight: 1.75,
              fontWeight: 300,
              maxWidth: "500px",
              marginBottom: "clamp(2rem,4vw,3.5rem)",
            }}>
            Wir machen Steuerrecht verständlich – für Privatpersonen,
            Selbstständige und Unternehmen, die mehr wollen als nur einen
            Berater.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up delay-300"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "clamp(.75rem,1.5vw,1.25rem)",
              alignItems: "center",
            }}>
            <a
              href="/termin"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: ".55rem",
                background: "linear-gradient(135deg,#146574,#1a7d90)",
                color: "#eef1f6",
                textDecoration: "none",
                padding:
                  "clamp(.8rem,1.2vw,1.05rem) clamp(1.5rem,2.5vw,2.2rem)",
                borderRadius: "3px",
                fontSize: "clamp(.85rem,1.1vw,1rem)",
                fontWeight: 600,
                letterSpacing: ".04em",
                border: "1px solid rgba(92,225,230,.28)",
                boxShadow: "0 8px 32px rgba(20,101,116,.38)",
                transition: "transform .25s, box-shadow .25s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 14px 40px rgba(20,101,116,.55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(20,101,116,.38)";
              }}>
              Kostenloses Erstgespräch
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                aria-hidden>
                <path
                  d="M3 7.5h9M8 3.5l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="#leistungen"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: ".45rem",
                color: "#8fa3a8",
                textDecoration: "none",
                fontSize: "clamp(.82rem,1vw,.95rem)",
                fontWeight: 500,
                transition: "color .2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#5ce1e6")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8fa3a8")}>
              Leistungen entdecken
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

          {/* Stats bar */}
          <div
            className="animate-fade-up delay-400"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "clamp(2rem,4vw,3.5rem)",
              marginTop: "clamp(3rem,6vw,5rem)",
              paddingTop: "clamp(1.75rem,2.5vw,2.25rem)",
              borderTop: "1px solid rgba(255,255,255,.06)",
            }}>
            {[
              ["20+", "Jahre Erfahrung"],
              ["1.200+", "Zufriedene Mandanten"],
              ["98 %", "Weiterempfehlungsrate"],
            ].map(([num, label]) => (
              <div key={label}>
                <div
                  className="font-display"
                  style={{
                    fontSize: "clamp(1.6rem,3vw,2.4rem)",
                    fontWeight: 700,
                    color: "#5ce1e6",
                    lineHeight: 1,
                  }}>
                  {num}
                </div>
                <div
                  className="font-mono"
                  style={{
                    fontSize: "clamp(.58rem,.72vw,.68rem)",
                    color: "#8fa3a8",
                    marginTop: ".3rem",
                    letterSpacing: ".08em",
                  }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Image ── */}
        <div
          className="animate-fade-up delay-200 hero-image-wrapper"
          style={{
            position: "relative",
            width: "100%",
            height: "clamp(380px,50vw,640px)",
            flexShrink: 0,
          }}>
          {/* Cyan border frame – decorative */}
          <div
            style={{
              position: "absolute",
              top: "1.5rem",
              left: "1.5rem",
              right: "-1.5rem",
              bottom: "-1.5rem",
              border: "2px solid rgba(92,225,230,.35)",
              zIndex: 0,
              borderRadius: "2px",
            }}
          />

          {/* Image container */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              borderRadius: "2px",
              zIndex: 1,
              border: "1px solid rgba(92,225,230,.2)",
            }}>
            <Image
              src="/images/hero-image3.jpg"
              alt="Team von Steuer & Partner in der Beratung"
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              sizes="(max-width: 768px) 0vw, 50vw"
            />
            {/* subtle dark overlay bottom */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "40%",
                background:
                  "linear-gradient(to top, rgba(8,12,14,.5), transparent)",
              }}
            />
          </div>

          {/* Cyan glow dot top-left */}
          <div
            style={{
              position: "absolute",
              top: "-.5rem",
              left: "-.5rem",
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#5ce1e6",
              boxShadow: "0 0 20px rgba(92,225,230,.8)",
              zIndex: 2,
            }}
          />
          {/* Cyan glow dot bottom-right */}
          <div
            style={{
              position: "absolute",
              bottom: "-2rem",
              right: "-2rem",
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "rgba(92,225,230,.5)",
              boxShadow: "0 0 14px rgba(92,225,230,.5)",
              zIndex: 2,
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "clamp(1.5rem,3vw,2.5rem)",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: ".4rem",
          zIndex: 2,
        }}>
        <span
          className="font-mono"
          style={{
            fontSize: ".58rem",
            color: "#8fa3a8",
            letterSpacing: ".15em",
            textTransform: "uppercase",
          }}>
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "38px",
            background: "linear-gradient(to bottom,#5ce1e6,transparent)",
            animation: "pulse-line 2.2s ease-in-out infinite",
          }}
        />
      </div>

      {/* Responsive: Bild auf Mobile ausblenden */}
      <style>{`
        @media (max-width: 768px) {
          .hero-image-wrapper { display: none !important; }
          #hero .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
