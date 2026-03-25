'use client'
import { useState } from 'react'

const BRANCHEN = [
  {
    icon:  '👤',
    name:  'Privatpersonen',
    short: 'Einkommensteuer, Immobilien, Erbschaften',
    desc:  'Von der einfachen Steuererklärung bis zur komplexen Vermögensplanung – wir optimieren Ihre persönliche Steuerlast und geben Ihnen die Sicherheit, die Sie verdienen.',
    punkte: ['Einkommensteuererklärung', 'Immobilienbesteuerung', 'Erbschaft & Schenkung', 'Kapitalerträge & Fonds'],
  },
  {
    icon:  '💼',
    name:  'Freiberufler & Freelancer',
    short: 'Umsatzsteuer, Betriebsausgaben, Vorsorge',
    desc:  'Selbstständig arbeiten heißt nicht, sich allein um Steuern kümmern zu müssen. Wir kennen die speziellen Herausforderungen der Selbstständigkeit und lösen sie.',
    punkte: ['Einnahmen-Überschuss-Rechnung', 'Umsatzsteuervoranmeldung', 'Betriebsausgaben-Optimierung', 'Altersvorsorge & Absicherung'],
  },
  {
    icon:  '🔧',
    name:  'Handwerk & Gewerbe',
    short: 'Betriebsbesteuerung, Investitionsplanung',
    desc:  'Handwerksbetriebe haben besondere steuerliche Anforderungen. Wir begleiten Sie von der Gründung über Investitionen bis zur Betriebsübergabe.',
    punkte: ['Gewerbesteuer-Optimierung', 'Investitionsabzugsbetrag', 'Lohnbuchhaltung', 'Betriebsübergabe & Nachfolge'],
  },
  {
    icon:  '🚀',
    name:  'Startups & GmbHs',
    short: 'Rechtsformoptimierung, Holding-Strukturen',
    desc:  'Wir begleiten Sie von der Gründung bis zum Exit – mit strategischer Steuergestaltung, Gesellschafterverträgen und zukunftssicheren Holding-Strukturen.',
    punkte: ['Rechtsformwahl & Gründung', 'Gesellschafterverträge', 'Holding-Strukturen', 'Due Diligence & Exit-Planung'],
  },
  {
    icon:  '🏠',
    name:  'Immobilienbesitzer',
    short: 'Vermietung, AfA, Grunderwerbsteuer',
    desc:  'Ob ein Objekt oder ein Portfolio: Wir maximieren Ihre Rendite durch gezielte steuerliche Gestaltung und sorgen für rechtssichere Strukturen.',
    punkte: ['Vermietung & Verpachtung', 'Abschreibungsoptimierung (AfA)', 'Grunderwerbsteuer', 'Immobilien-GmbH & Strukturierung'],
  },
  {
    icon:  '⚕️',
    name:  'Medizin & Heilberufe',
    short: 'Praxisgründung, MVZ, Gemeinschaftspraxis',
    desc:  'Ärzte, Zahnärzte und Therapeuten haben steuerlich besondere Rahmenbedingungen. Unsere spezialisierte Beratung sorgt für maximale Klarheit.',
    punkte: ['Praxisgründung & -übernahme', 'Gemeinschaftspraxis & MVZ', 'Umsatzsteuerbefreiung', 'Betriebswirtschaftliche Auswertung'],
  },
]

export default function Branchen() {
  const [active, setActive] = useState(0)
  const current = BRANCHEN[active]

  return (
    <section id="branchen" className="mesh-bg" style={{ paddingBlock:'var(--section-py)' }}>
      <div className="container">

        {/* ── Header ── */}
        <div style={{ marginBottom:'clamp(3rem,6vw,5rem)' }}>
          <p className="font-mono" style={{ fontSize:'clamp(.6rem,.75vw,.7rem)', color:'#5ce1e6', letterSpacing:'.2em', textTransform:'uppercase', marginBottom:'1rem' }}>
            — Für wen wir arbeiten
          </p>
          <h2 className="font-display" style={{ fontSize:'clamp(1.9rem,4.5vw,3.6rem)', fontWeight:700, color:'#eef1f6', letterSpacing:'-0.02em', lineHeight:1.08 }}>
            Ihre <em style={{ color:'#5ce1e6' }}>Branche.</em><br />Unsere Expertise.
          </h2>
        </div>

        {/* ── Two-column layout ── */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap:                 'clamp(2rem,5vw,5rem)',
          alignItems:          'start',
        }}>

          {/* Left – list */}
          <div style={{ display:'flex', flexDirection:'column' }}>
            {BRANCHEN.map((b, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  display:     'flex', alignItems:'center', gap:'1rem',
                  padding:     'clamp(1rem,1.8vw,1.4rem) clamp(1rem,1.5vw,1.5rem)',
                  border:'none', cursor:'pointer', textAlign:'left',
                  borderLeft:  `2px solid ${active === i ? '#5ce1e6' : 'rgba(255,255,255,.07)'}`,
                  background:  active === i ? 'rgba(20,101,116,.1)' : 'transparent',
                  transition:  'background .25s, border-color .25s',
                }}
              >
                <span style={{ fontSize:'clamp(1.1rem,1.8vw,1.3rem)', flexShrink:0 }}>{b.icon}</span>
                <div>
                  <div style={{
                    fontWeight:  600,
                    fontSize:    'clamp(.88rem,1.1vw,1rem)',
                    color:       active === i ? '#eef1f6' : '#8fa3a8',
                    transition:  'color .25s',
                    lineHeight:  1.3,
                  }}>
                    {b.name}
                  </div>
                  <div className="font-mono" style={{ fontSize:'clamp(.58rem,.7vw,.65rem)', color:'rgba(143,163,168,.55)', letterSpacing:'.06em', marginTop:'.2rem' }}>
                    {b.short}
                  </div>
                </div>
                {/* arrow */}
                <svg
                  style={{ marginLeft:'auto', flexShrink:0, opacity: active===i ? 1 : 0, transition:'opacity .25s', color:'#5ce1e6' }}
                  width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden
                >
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            ))}
          </div>

          {/* Right – detail panel */}
          <div style={{
            position:   'sticky', top:'clamp(5rem,8vw,7rem)',
            padding:    'clamp(2rem,3.5vw,3.5rem)',
            border:     '1px solid rgba(92,225,230,.15)',
            background: 'rgba(20,101,116,.06)',
            borderRadius: '2px',
          }}>
            <div style={{ fontSize:'clamp(2rem,4vw,3rem)', marginBottom:'1.25rem' }}>{current.icon}</div>

            <h3 className="font-display" style={{
              fontSize:'clamp(1.5rem,2.8vw,2rem)', fontWeight:700,
              color:'#eef1f6', marginBottom:'1rem', letterSpacing:'-0.01em', lineHeight:1.15,
            }}>
              {current.name}
            </h3>

            <p style={{ color:'#8fa3a8', lineHeight:1.75, fontSize:'clamp(.85rem,1.05vw,.95rem)', marginBottom:'clamp(1.5rem,2.5vw,2.5rem)' }}>
              {current.desc}
            </p>

            {/* Bullet points */}
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'.65rem', marginBottom:'clamp(1.75rem,3vw,2.75rem)' }}>
              {current.punkte.map(p => (
                <li key={p} style={{ display:'flex', alignItems:'center', gap:'.75rem', fontSize:'clamp(.82rem,1vw,.9rem)', color:'#eef1f6' }}>
                  <span style={{ width:5, height:5, borderRadius:'50%', background:'#5ce1e6', flexShrink:0, boxShadow:'0 0 6px rgba(92,225,230,.5)' }} />
                  {p}
                </li>
              ))}
            </ul>

            <a
              href="#kontakt"
              style={{
                display:'inline-flex', alignItems:'center', gap:'.5rem',
                color:'#5ce1e6', textDecoration:'none',
                fontWeight:600, fontSize:'clamp(.82rem,.95vw,.9rem)',
                borderBottom:'1px solid rgba(92,225,230,.3)', paddingBottom:'2px',
                transition:'border-color .2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#5ce1e6')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(92,225,230,.3)')}
            >
              Jetzt beraten lassen →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
