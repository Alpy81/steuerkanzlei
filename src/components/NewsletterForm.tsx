"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [focused, setFocused] = useState<string | null>(null);
  const [msg, setMsg] = useState("");

  const inp = (key: string): React.CSSProperties => ({
    width: "100%",
    background:
      focused === key ? "rgba(20,101,116,.08)" : "rgba(255,255,255,.03)",
    border: `1px solid ${
      focused === key ? "#5ce1e6" : "rgba(255,255,255,.09)"
    }`,
    borderRadius: "2px",
    padding: ".7rem 1rem",
    color: "#eef1f6",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "clamp(.82rem,1vw,.9rem)",
    outline: "none",
    transition: "border-color .2s, background .2s",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      if (res.ok) {
        setStatus("success");
        setMsg("Vielen Dank! Sie erhalten in Kürze eine Bestätigungsmail.");
      } else {
        const data = await res.json();
        setStatus("error");
        setMsg(data.error ?? "Ein Fehler ist aufgetreten.");
      }
    } catch {
      setStatus("error");
      setMsg("Verbindungsfehler. Bitte versuchen Sie es erneut.");
    }
  };

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "2rem 0" }}>
        <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>✓</div>
        <p
          style={{
            color: "#5ce1e6",
            fontWeight: 600,
            fontSize: "clamp(.9rem,1.1vw,1rem)",
            marginBottom: ".5rem",
          }}>
          Anmeldung erfolgreich!
        </p>
        <p style={{ color: "#8fa3a8", fontSize: "clamp(.78rem,.9vw,.85rem)" }}>
          {msg}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: ".875rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,180px),1fr))",
          gap: ".75rem",
        }}>
        <div>
          <label
            className="font-mono"
            style={{
              display: "block",
              fontSize: ".6rem",
              color: "#8fa3a8",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              marginBottom: ".4rem",
            }}>
            Vorname (optional)
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            style={inp("name")}
            placeholder="Max"
          />
        </div>
        <div>
          <label
            className="font-mono"
            style={{
              display: "block",
              fontSize: ".6rem",
              color: "#8fa3a8",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              marginBottom: ".4rem",
            }}>
            E-Mail *
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            style={inp("email")}
            placeholder="max@beispiel.de"
          />
        </div>
      </div>

      {status === "error" && (
        <p
          style={{
            color: "#ff6b6b",
            fontSize: ".82rem",
            background: "rgba(255,107,107,.08)",
            border: "1px solid rgba(255,107,107,.2)",
            padding: ".6rem .875rem",
            borderRadius: "2px",
          }}>
          {msg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: ".5rem",
          background:
            status === "loading"
              ? "rgba(20,101,116,.5)"
              : "linear-gradient(135deg,#146574,#1a7d90)",
          color: "#eef1f6",
          border: "1px solid rgba(92,225,230,.22)",
          borderRadius: "2px",
          padding: ".8rem 1.5rem",
          fontSize: "clamp(.82rem,.95vw,.9rem)",
          fontWeight: 600,
          letterSpacing: ".04em",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          transition: "transform .25s, box-shadow .25s",
          fontFamily: "DM Sans, sans-serif",
          width: "100%",
        }}
        onMouseEnter={(e) => {
          if (status !== "loading") {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(20,101,116,.45)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow = "none";
        }}>
        {status === "loading" ? (
          <>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              style={{ animation: "spin 1s linear infinite" }}
              aria-hidden>
              <circle
                cx="7"
                cy="7"
                r="5"
                stroke="rgba(255,255,255,.25)"
                strokeWidth="2"
              />
              <path
                d="M7 2a5 5 0 0 1 5 5"
                stroke="#5ce1e6"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Wird angemeldet …
          </>
        ) : (
          <>Jetzt anmelden →</>
        )}
      </button>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>

      <p
        className="font-mono"
        style={{
          fontSize: ".58rem",
          color: "rgba(143,163,168,.4)",
          letterSpacing: ".08em",
          textAlign: "center",
        }}>
        Kein Spam · Jederzeit abmeldbar · DSGVO-konform
      </p>
    </form>
  );
}
