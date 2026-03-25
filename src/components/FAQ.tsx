'use client'
import { useState } from 'react'

const FAQS = [
  {
    frage: 'Wie läuft das Erstgespräch ab?',
    antwort: 'Das Erstgespräch ist kostenlos und unverbindlich. Wir nehmen uns 30–45 Minuten Zeit, um Ihre Situation zu verstehen – persönlich vor Ort in Frankfurt oder per Video-Call. Kein Druck, keine versteckten Kosten, keine Verpflichtungen.',
  },
  {
    frage: 'Wie kommunizieren wir miteinander?',
    antwort: 'Wir arbeiten vollständig digital: Dokumente teilen Sie uns über unser verschlüsseltes Mandantenportal mit, Kommunikation läuft per E-Mail oder Video-Call. Natürlich sind wir auch persönlich in Frankfurt erreichbar – ganz wie Sie es bevorzugen.',
  },
  {
    frage: 'Was kostet die Steuerberatung?',
    antwort: 'Unsere Honorare richten sich nach der Steuerberatervergütungsverordnung (StBVV) und dem tatsächlichen Aufwand. Im Erstgespräch erhalten Sie immer eine transparente Kostenschätzung – bevor wir loslegen. Keine Überraschungen auf der Rechnung.',
  },
  {
    frage: 'Kann ich auch als Existenzgründer zu Ihnen kommen?',
    antwort: 'Absolut. Wir begleiten Gründer von der Rechtsformwahl über die Anmeldung beim Finanzamt bis zur laufenden Beratung. Gerade in der Gründungsphase zahlt sich professionelle Steuerberatung besonders schnell aus.',
  },
  {
    frage: 'Wie schnell wird meine Steuererklärung bearbeitet?',
    antwort: 'Bei vollständig vorliegenden Unterlagen bearbeiten wir Ihre Erklärung in der Regel innerhalb von 2–4 Wochen. Für dringende Fälle bieten wir einen Express-Service an – sprechen Sie uns einfach darauf an.',
  },
  {
    frage: 'Arbeiten Sie mit DATEV oder anderer Buchhaltungssoftware?',
    antwort: 'Ja – DATEV ist unser Hauptsystem. Wir können uns problemlos mit Ihrer vorhandenen Buchhaltungssoftware verbinden, darunter Lexware, sevDesk, lexoffice und weitere. Alles vollständig digital und DSGVO-konform.',
  },
  {
    frage: 'Betreuen Sie auch Mandanten außerhalb von Frankfurt?',
    antwort: 'Ja. Dank unserer volldigitalen Arbeitsweise betreuen wir Mandanten deutschlandweit. Persönliche Treffen organisieren wir auf Wunsch in Frankfurt oder per Video-Call – ortsunabhängig und flexibel.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section id="faq" style={{ background:'var(--black)', paddingBlock:'var(--section-py)' }}>
      <div className="container">

        {/* ── Header ── */}
        <div style={{
          display:       'flex',
          flexDirection: 'column',
          alignItems:    'center',
          textAlign:     'center',
          marginBottom:  'clamp(3rem,6vw,5.5rem)',
        }}>
          <p className="font-mono" style={{ fontSize:'clamp(.6rem,.75vw,.7rem)', color:'#5ce1e6', letterSpacing:'.2em', textTransform:'uppercase', marginBottom:'1rem' }}>
            — Häufige Fragen
          </p>
          <h2 className="font-display" style={{ fontSize:'clamp(1.9rem,4.5vw,3.6rem)', fontWeight:700, color:'#eef1f6', letterSpacing:'-0.02em', lineHeight:1.08, marginBottom:'1.25rem' }}>
            Fragen &<br /><em style={{ color:'#5ce1e6' }}>Antworten</em>
          </h2>
          <p style={{ color:'#8fa3a8', lineHeight:1.72, fontSize:'clamp(.85rem,1.05vw,.95rem)', maxWidth:'500px' }}>
            Haben Sie eine Frage, die hier nicht beantwortet wird?{' '}
            <a href="#kontakt" style={{ color:'#5ce1e6', textDecoration:'none', borderBottom:'1px solid rgba(92,225,230,.3)' }}>
              Schreiben Sie uns direkt.
            </a>
          </p>
        </div>

        {/* ── Accordion ── */}
        <div style={{ maxWidth:'min(780px, 100%)', marginInline:'auto' }}>
          {FAQS.map((faq, i) => {
            const isOpen = open === i

            return (
              <div
                key={i}
                style={{
                  borderBottom: '1px solid rgba(255,255,255,.06)',
                  background:   isOpen ? 'rgba(20,101,116,.06)' : 'transparent',
                  transition:   'background .3s',
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  style={{
                    width:          '100%',
                    display:        'flex',
                    justifyContent: 'space-between',
                    alignItems:     'center',
                    gap:            'clamp(1rem,2vw,2rem)',
                    padding:        'clamp(1.25rem,2vw,1.75rem) 0',
                    background:     'none',
                    border:         'none',
                    cursor:         'pointer',
                    textAlign:      'left',
                  }}
                >
                  {/* Number + text */}
                  <div style={{ display:'flex', alignItems:'center', gap:'clamp(.75rem,1.5vw,1.25rem)' }}>
                    <span
                      className="font-mono"
                      style={{
                        fontSize:     'clamp(.55rem,.65vw,.62rem)',
                        color:        isOpen ? '#5ce1e6' : 'rgba(143,163,168,.35)',
                        letterSpacing:'.1em',
                        flexShrink:   0,
                        transition:   'color .25s',
                        minWidth:     '1.8rem',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{
                      fontSize:   'clamp(.9rem,1.15vw,1.05rem)',
                      fontWeight: 600,
                      color:      isOpen ? '#eef1f6' : '#c8d4d7',
                      lineHeight: 1.35,
                      transition: 'color .25s',
                    }}>
                      {faq.frage}
                    </span>
                  </div>

                  {/* Icon */}
                  <div style={{
                    width:        'clamp(26px,3vw,32px)',
                    height:       'clamp(26px,3vw,32px)',
                    flexShrink:   0,
                    borderRadius: '50%',
                    border:       `1px solid ${isOpen ? '#5ce1e6' : 'rgba(255,255,255,.12)'}`,
                    background:   isOpen ? 'rgba(92,225,230,.1)' : 'transparent',
                    display:      'flex',
                    alignItems:   'center',
                    justifyContent:'center',
                    transition:   'all .3s',
                  }}>
                    <svg
                      width="11" height="11" viewBox="0 0 11 11" fill="none"
                      style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition:'transform .35s ease' }}
                      aria-hidden
                    >
                      <path d="M5.5 1v9M1 5.5h9" stroke={isOpen ? '#5ce1e6' : '#8fa3a8'} strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </button>

                {/* Answer – smooth expand */}
                <div
                  style={{
                    display:    'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows .4s ease',
                  }}
                >
                  <div style={{ overflow:'hidden' }}>
                    <div style={{
                      paddingLeft:   'clamp(1.55rem,3vw,2.8rem)',
                      paddingBottom: 'clamp(1.25rem,2vw,1.75rem)',
                      paddingRight:  'clamp(2rem,4vw,3.5rem)',
                    }}>
                      <p style={{ color:'#8fa3a8', lineHeight:1.78, fontSize:'clamp(.83rem,1vw,.92rem)' }}>
                        {faq.antwort}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <div style={{
          display:        'flex',
          justifyContent: 'center',
          marginTop:      'clamp(3rem,5vw,5rem)',
        }}>
          <a
            href="#kontakt"
            style={{
              display:        'inline-flex', alignItems:'center', gap:'.6rem',
              background:     'linear-gradient(135deg,#146574,#1a7d90)',
              color:          '#eef1f6', textDecoration:'none',
              padding:        'clamp(.8rem,1.2vw,1rem) clamp(1.5rem,2.5vw,2.2rem)',
              borderRadius:   '3px',
              fontSize:       'clamp(.83rem,1vw,.92rem)',
              fontWeight:     600, letterSpacing:'.04em',
              border:         '1px solid rgba(92,225,230,.22)',
              boxShadow:      '0 6px 28px rgba(20,101,116,.3)',
              transition:     'transform .25s, box-shadow .25s',
              whiteSpace:     'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 36px rgba(20,101,116,.5)' }}
            onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 6px 28px rgba(20,101,116,.3)' }}
          >
            Noch Fragen? Jetzt Kontakt aufnehmen
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
