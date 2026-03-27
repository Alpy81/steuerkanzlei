"use client";
import { useState, useEffect } from "react";

type CookiePrefs = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>({
    necessary: true, // immer true – nicht deaktivierbar
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Kurze Verzögerung – erst nach dem Laden anzeigen
      setTimeout(() => setVisible(true), 1500);
    }
  }, []);

  const save = (p: CookiePrefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    setVisible(false);
  };

  const acceptAll = () =>
    save({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () =>
    save({ necessary: true, analytics: false, marketing: false });
  const saveCustom = () => save(prefs);

  if (!visible) return null;

  const btnBase: React.CSSProperties = {
    padding: ".65rem 1.25rem",
    borderRadius: "2px",
    fontSize: "clamp(.78rem,.9vw,.85rem)",
    fontWeight: 600,
    letterSpacing: ".04em",
    cursor: "pointer",
    fontFamily: "DM Sans, sans-serif",
    transition: "all .2s",
    whiteSpace: "nowrap",
    border: "none",
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "clamp(1rem,2vw,1.5rem)",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        width: "min(680px, calc(100vw - 2rem))",
        background: "rgba(15,22,24,.97)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(92,225,230,.18)",
        borderRadius: "4px",
        boxShadow: "0 8px 48px rgba(0,0,0,.6)",
        overflow: "hidden",
      }}>
      {/* Top accent */}
      <div
        style={{
          height: "2px",
          background: "linear-gradient(90deg,#146574,#5ce1e6,#146574)",
        }}
      />

      <div style={{ padding: "clamp(1.25rem,2.5vw,2rem)" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1rem",
            marginBottom: "1rem",
          }}>
          <div style={{ display: "flex", alignItems: "center", gap: ".6rem" }}>
            <span style={{ fontSize: "1.1rem" }}>🍪</span>
            <h3
              className="font-display"
              style={{
                fontSize: "clamp(1rem,1.4vw,1.15rem)",
                fontWeight: 700,
                color: "#eef1f6",
                letterSpacing: "-0.01em",
              }}>
              Cookie-Einstellungen
            </h3>
          </div>
        </div>

        {/* Text */}
        <p
          style={{
            color: "#8fa3a8",
            fontSize: "clamp(.78rem,.9vw,.85rem)",
            lineHeight: 1.65,
            marginBottom: "1.25rem",
          }}>
          Wir verwenden Cookies, um Ihnen die bestmögliche Nutzererfahrung zu
          bieten. Technisch notwendige Cookies sind immer aktiv. Weitere
          Informationen finden Sie in unserer{" "}
          <a
            href="/datenschutz"
            style={{
              color: "#5ce1e6",
              textDecoration: "none",
              borderBottom: "1px solid rgba(92,225,230,.3)",
            }}>
            Datenschutzerklärung
          </a>
          .
        </p>

        {/* Settings panel */}
        {showSettings && (
          <div
            style={{
              marginBottom: "1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: ".75rem",
            }}>
            {[
              {
                key: "necessary",
                label: "Technisch notwendig",
                desc: "Erforderlich für den Betrieb der Website. Können nicht deaktiviert werden.",
                locked: true,
              },
              {
                key: "analytics",
                label: "Analyse",
                desc: "Helfen uns zu verstehen, wie Besucher die Website nutzen (z.B. Seitenaufrufe).",
                locked: false,
              },
              {
                key: "marketing",
                label: "Marketing",
                desc: "Werden verwendet, um relevante Werbung anzuzeigen.",
                locked: false,
              },
            ].map((item) => (
              <div
                key={item.key}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: ".875rem 1rem",
                  background: "rgba(255,255,255,.03)",
                  border: "1px solid rgba(255,255,255,.06)",
                  borderRadius: "2px",
                }}>
                <div style={{ flexGrow: 1 }}>
                  <div
                    style={{
                      fontWeight: 600,
                      color: "#eef1f6",
                      fontSize: "clamp(.82rem,.95vw,.9rem)",
                      marginBottom: ".2rem",
                    }}>
                    {item.label}
                    {item.locked && (
                      <span
                        className="font-mono"
                        style={{
                          marginLeft: ".5rem",
                          fontSize: ".6rem",
                          color: "rgba(92,225,230,.5)",
                          letterSpacing: ".08em",
                        }}>
                        IMMER AKTIV
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      color: "#8fa3a8",
                      fontSize: "clamp(.74rem,.85vw,.8rem)",
                      lineHeight: 1.55,
                    }}>
                    {item.desc}
                  </div>
                </div>

                {/* Toggle */}
                <button
                  disabled={item.locked}
                  onClick={() =>
                    !item.locked &&
                    setPrefs((p) => ({
                      ...p,
                      [item.key]: !p[item.key as keyof CookiePrefs],
                    }))
                  }
                  style={{
                    flexShrink: 0,
                    width: "40px",
                    height: "22px",
                    borderRadius: "100px",
                    background: prefs[item.key as keyof CookiePrefs]
                      ? "linear-gradient(135deg,#146574,#5ce1e6)"
                      : "rgba(255,255,255,.12)",
                    border: "none",
                    cursor: item.locked ? "not-allowed" : "pointer",
                    position: "relative",
                    transition: "background .25s",
                    opacity: item.locked ? 0.6 : 1,
                  }}>
                  <span
                    style={{
                      position: "absolute",
                      top: "3px",
                      left: prefs[item.key as keyof CookiePrefs]
                        ? "21px"
                        : "3px",
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: "#eef1f6",
                      transition: "left .25s",
                      boxShadow: "0 1px 4px rgba(0,0,0,.3)",
                    }}
                  />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: ".75rem",
            alignItems: "center",
          }}>
          <button
            onClick={acceptAll}
            style={{
              ...btnBase,
              background: "linear-gradient(135deg,#146574,#1a7d90)",
              color: "#eef1f6",
              border: "1px solid rgba(92,225,230,.22)",
              boxShadow: "0 4px 16px rgba(20,101,116,.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(20,101,116,.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow =
                "0 4px 16px rgba(20,101,116,.3)";
            }}>
            Alle akzeptieren
          </button>

          <button
            onClick={rejectAll}
            style={{
              ...btnBase,
              background: "transparent",
              color: "#8fa3a8",
              border: "1px solid rgba(255,255,255,.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(92,225,230,.25)";
              e.currentTarget.style.color = "#eef1f6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,.1)";
              e.currentTarget.style.color = "#8fa3a8";
            }}>
            Nur notwendige
          </button>

          {showSettings ? (
            <button
              onClick={saveCustom}
              style={{
                ...btnBase,
                background: "transparent",
                color: "#5ce1e6",
                border: "1px solid rgba(92,225,230,.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(92,225,230,.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}>
              Auswahl speichern
            </button>
          ) : (
            <button
              onClick={() => setShowSettings(true)}
              style={{
                ...btnBase,
                background: "transparent",
                color: "#8fa3a8",
                border: "1px solid transparent",
                paddingTop: ".65rem",
                paddingBottom: ".65rem",
                paddingLeft: "0",
                paddingRight: "1.25rem",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#5ce1e6")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8fa3a8")}>
              Einstellungen ⚙️
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
