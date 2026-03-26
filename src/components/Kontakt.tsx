"use client";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  telefon: string;
  betreff: string;
  nachricht: string;
  datenschutz: boolean;
};

const INIT: FormState = {
  name: "",
  email: "",
  telefon: "",
  betreff: "",
  nachricht: "",
  datenschutz: false,
};

const BETREFF_OPT = [
  "Kostenloses Erstgespräch",
  "Einkommensteuererklärung",
  "Buchhaltung & Jahresabschluss",
  "Unternehmensbesteuerung",
  "Existenzgründung",
  "Sonstiges",
];

const KONTAKT_INFOS = [
  {
    icon: "📍",
    label: "Adresse",
    value: "Musterstraße 12\n60311 Frankfurt am Main",
  },
  { icon: "📞", label: "Telefon", value: "+49 69 123 456 789" },
  { icon: "✉️", label: "E-Mail", value: "info@steuerpartner-ffm.de" },
  { icon: "🕐", label: "Öffnungszeiten", value: "Mo–Fr: 09:00–17:00 Uhr" },
];

const inp = (focused: boolean): React.CSSProperties => ({
  width: "100%",
  background: focused ? "rgba(20,101,116,.08)" : "rgba(255,255,255,.03)",
  border: `1px solid ${focused ? "#5ce1e6" : "rgba(255,255,255,.09)"}`,
  borderRadius: "2px",
  padding: "clamp(.7rem,1.2vw,.9rem) clamp(.85rem,1.2vw,1rem)",
  color: "#eef1f6",
  fontFamily: "DM Sans, sans-serif",
  fontSize: "clamp(.82rem,1vw,.92rem)",
  outline: "none",
  transition: "border-color .2s, background .2s",
  lineHeight: 1.5,
});

export default function Kontakt() {
  const [form, setForm] = useState<FormState>(INIT);
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof FormState, v: string | boolean) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.datenschutz) {
      setError("Bitte stimmen Sie der Datenschutzerklärung zu.");
      return;
    }
    setError("");
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError(
          "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
        );
      }
    } catch {
      setError("Verbindungsfehler. Bitte versuchen Sie es erneut.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="kontakt"
      className="mesh-bg"
      style={{ paddingBlock: "var(--section-py)" }}>
      <div
        style={{
          width: "100%",
          maxWidth: "1800px",
          marginInline: "auto",
          paddingInline: "var(--section-px)",
        }}>
        {/* ── Header ── */}
        <div style={{ marginBottom: "clamp(3rem,6vw,5rem)" }}>
          <p
            className="font-mono"
            style={{
              fontSize: "clamp(.6rem,.75vw,.7rem)",
              color: "#5ce1e6",
              letterSpacing: ".2em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>
            — Kontakt
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
            Sprechen wir
            <br />
            <em style={{ color: "#5ce1e6" }}>miteinander.</em>
          </h2>
        </div>

        {/* ── Two-column ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: "clamp(3rem,6vw,7rem)",
            alignItems: "start",
            maxWidth: "1400px",
            marginInline: "auto",
            width: "100%",
          }}>
          {/* ── Left: info ── */}
          <div>
            <p
              style={{
                color: "#8fa3a8",
                lineHeight: 1.75,
                fontSize: "clamp(.85rem,1.05vw,.95rem)",
                marginBottom: "clamp(2.5rem,4vw,3.5rem)",
              }}>
              Das erste Gespräch ist kostenlos und unverbindlich. Schreiben Sie
              uns oder rufen Sie einfach an – wir antworten innerhalb von 24
              Stunden.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(1.25rem,2vw,1.75rem)",
                marginBottom: "clamp(2.5rem,4vw,3.5rem)",
              }}>
              {KONTAKT_INFOS.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: "clamp(.875rem,1.5vw,1.25rem)",
                    alignItems: "flex-start",
                  }}>
                  <div
                    style={{
                      width: "clamp(36px,4vw,44px)",
                      height: "clamp(36px,4vw,44px)",
                      flexShrink: 0,
                      border: "1px solid rgba(92,225,230,.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "clamp(.9rem,1.2vw,1rem)",
                      background: "rgba(20,101,116,.08)",
                    }}>
                    {item.icon}
                  </div>
                  <div>
                    <div
                      className="font-mono"
                      style={{
                        fontSize: "clamp(.58rem,.68vw,.64rem)",
                        color: "#5ce1e6",
                        letterSpacing: ".12em",
                        textTransform: "uppercase",
                        marginBottom: ".25rem",
                      }}>
                      {item.label}
                    </div>
                    <div
                      style={{
                        color: "#eef1f6",
                        fontSize: "clamp(.82rem,1vw,.9rem)",
                        lineHeight: 1.55,
                        whiteSpace: "pre-line",
                      }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                height: "1px",
                background:
                  "linear-gradient(90deg,rgba(92,225,230,.2),transparent)",
                marginBottom: "clamp(2rem,3vw,2.5rem)",
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".75rem",
              }}>
              {[
                "✓  Kostenlose Erstberatung – unverbindlich",
                "✓  Antwort innerhalb von 24 Stunden",
                "✓  DSGVO-konform & verschlüsselt",
                "✓  Deutschlandweit & digital",
              ].map((t) => (
                <p
                  key={t}
                  className="font-mono"
                  style={{
                    fontSize: "clamp(.62rem,.75vw,.7rem)",
                    color: "#8fa3a8",
                    letterSpacing: ".06em",
                  }}>
                  {t}
                </p>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <div
            style={{
              padding: "clamp(1.75rem,3.5vw,3.5rem)",
              border: "1px solid rgba(92,225,230,.13)",
              background: "rgba(15,22,24,.7)",
              width: "100%",
            }}>
            {sent ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "clamp(2rem,4vw,4rem) 1rem",
                }}>
                <div
                  style={{
                    width: "clamp(56px,6vw,72px)",
                    height: "clamp(56px,6vw,72px)",
                    borderRadius: "50%",
                    background: "rgba(92,225,230,.12)",
                    border: "1px solid rgba(92,225,230,.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto clamp(1.25rem,2vw,1.75rem)",
                    fontSize: "clamp(1.3rem,2.5vw,1.8rem)",
                  }}>
                  ✓
                </div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "clamp(1.3rem,2.5vw,1.6rem)",
                    color: "#5ce1e6",
                    marginBottom: ".875rem",
                  }}>
                  Nachricht erhalten!
                </h3>
                <p
                  style={{
                    color: "#8fa3a8",
                    lineHeight: 1.7,
                    fontSize: "clamp(.83rem,1vw,.92rem)",
                  }}>
                  Vielen Dank für Ihre Nachricht. Wir melden uns innerhalb von
                  24 Stunden bei Ihnen.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "clamp(1rem,1.5vw,1.25rem)",
                }}>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "clamp(1.15rem,1.8vw,1.35rem)",
                    color: "#eef1f6",
                    marginBottom: ".25rem",
                  }}>
                  Nachricht senden
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(min(100%,180px),1fr))",
                    gap: "clamp(.75rem,1.2vw,1rem)",
                  }}>
                  {(["name", "email"] as const).map((k) => (
                    <div key={k}>
                      <label
                        className="font-mono"
                        style={{
                          display: "block",
                          fontSize: ".62rem",
                          color: "#8fa3a8",
                          letterSpacing: ".12em",
                          textTransform: "uppercase",
                          marginBottom: ".45rem",
                        }}>
                        {k === "name" ? "Name *" : "E-Mail *"}
                      </label>
                      <input
                        type={k === "email" ? "email" : "text"}
                        required
                        value={form[k]}
                        onChange={(e) => set(k, e.target.value)}
                        onFocus={() => setFocused(k)}
                        onBlur={() => setFocused(null)}
                        style={inp(focused === k)}
                        placeholder={
                          k === "name" ? "Max Mustermann" : "max@beispiel.de"
                        }
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label
                    className="font-mono"
                    style={{
                      display: "block",
                      fontSize: ".62rem",
                      color: "#8fa3a8",
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      marginBottom: ".45rem",
                    }}>
                    Telefon (optional)
                  </label>
                  <input
                    type="tel"
                    value={form.telefon}
                    onChange={(e) => set("telefon", e.target.value)}
                    onFocus={() => setFocused("telefon")}
                    onBlur={() => setFocused(null)}
                    style={inp(focused === "telefon")}
                    placeholder="+49 69 ..."
                  />
                </div>

                <div>
                  <label
                    className="font-mono"
                    style={{
                      display: "block",
                      fontSize: ".62rem",
                      color: "#8fa3a8",
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      marginBottom: ".45rem",
                    }}>
                    Betreff *
                  </label>
                  <select
                    required
                    value={form.betreff}
                    onChange={(e) => set("betreff", e.target.value)}
                    onFocus={() => setFocused("betreff")}
                    onBlur={() => setFocused(null)}
                    style={{
                      ...inp(focused === "betreff"),
                      cursor: "pointer",
                    }}>
                    <option value="" disabled>
                      Bitte wählen …
                    </option>
                    {BETREFF_OPT.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="font-mono"
                    style={{
                      display: "block",
                      fontSize: ".62rem",
                      color: "#8fa3a8",
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      marginBottom: ".45rem",
                    }}>
                    Nachricht *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.nachricht}
                    onChange={(e) => set("nachricht", e.target.value)}
                    onFocus={() => setFocused("nachricht")}
                    onBlur={() => setFocused(null)}
                    style={{
                      ...inp(focused === "nachricht"),
                      resize: "vertical",
                      minHeight: "120px",
                    }}
                    placeholder="Wie können wir Ihnen helfen?"
                  />
                </div>

                <label
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: ".75rem",
                    cursor: "pointer",
                  }}>
                  <div
                    style={{
                      position: "relative",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}>
                    <input
                      type="checkbox"
                      required
                      checked={form.datenschutz}
                      onChange={(e) => set("datenschutz", e.target.checked)}
                      style={{
                        opacity: 0,
                        position: "absolute",
                        inset: 0,
                        cursor: "pointer",
                        margin: 0,
                      }}
                    />
                    <div
                      style={{
                        width: "18px",
                        height: "18px",
                        border: `1px solid ${
                          form.datenschutz ? "#5ce1e6" : "rgba(255,255,255,.2)"
                        }`,
                        background: form.datenschutz
                          ? "rgba(92,225,230,.15)"
                          : "transparent",
                        borderRadius: "2px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all .2s",
                        pointerEvents: "none",
                      }}>
                      {form.datenschutz && (
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          aria-hidden>
                          <path
                            d="M1.5 5l2.5 2.5L8.5 2"
                            stroke="#5ce1e6"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: "clamp(.75rem,.88vw,.82rem)",
                      color: "#8fa3a8",
                      lineHeight: 1.55,
                    }}>
                    Ich habe die{" "}
                    <a
                      href="/datenschutz"
                      style={{
                        color: "#5ce1e6",
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(92,225,230,.3)",
                      }}>
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen und stimme der Verarbeitung meiner Daten zu. *
                  </span>
                </label>

                {error && (
                  <p
                    style={{
                      color: "#ff6b6b",
                      fontSize: "clamp(.78rem,.9vw,.85rem)",
                      background: "rgba(255,107,107,.08)",
                      border: "1px solid rgba(255,107,107,.2)",
                      padding: ".75rem 1rem",
                      borderRadius: "2px",
                    }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    marginTop: ".25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: ".55rem",
                    background: sending
                      ? "rgba(20,101,116,.5)"
                      : "linear-gradient(135deg,#146574,#1a7d90)",
                    color: "#eef1f6",
                    border: "1px solid rgba(92,225,230,.22)",
                    borderRadius: "3px",
                    padding: "clamp(.85rem,1.2vw,1.05rem)",
                    fontSize: "clamp(.85rem,1vw,.95rem)",
                    fontWeight: 600,
                    letterSpacing: ".04em",
                    cursor: sending ? "not-allowed" : "pointer",
                    transition:
                      "transform .25s, box-shadow .25s, background .2s",
                    fontFamily: "DM Sans, sans-serif",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    if (!sending) {
                      e.currentTarget.style.transform = "translateY(-1px)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 32px rgba(20,101,116,.5)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "none";
                  }}>
                  {sending ? (
                    <>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        style={{ animation: "spin 1s linear infinite" }}
                        aria-hidden>
                        <circle
                          cx="8"
                          cy="8"
                          r="6"
                          stroke="rgba(255,255,255,.25)"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 2a6 6 0 0 1 6 6"
                          stroke="#5ce1e6"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      Wird gesendet …
                    </>
                  ) : (
                    <>
                      Nachricht senden
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden>
                        <path
                          d="M3 7h8M7 3l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  )}
                </button>
                <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>

                <p
                  className="font-mono"
                  style={{
                    textAlign: "center",
                    fontSize: ".6rem",
                    color: "rgba(143,163,168,.4)",
                    letterSpacing: ".08em",
                  }}>
                  * Pflichtfelder · DSGVO-konform · SSL-verschlüsselt
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
