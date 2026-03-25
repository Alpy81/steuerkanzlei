'use client'
import { useState } from 'react'

const TEAM = [
  {
    initials: 'MW',
    name:     'Dr. Michael Weber',
    role:     'Steuerberater & Gründer',
    exp:      '22 Jahre Erfahrung',
    spec:     'Unternehmensbesteuerung, M&A, Holdingstrukturen',
    bio:      'Dr. Weber gründete die Kanzlei nach 10 Jahren in einer internationalen Wirtschaftsprüfungsgesellschaft. Sein Fokus liegt auf strategischer Steuergestaltung für wachsende Unternehmen.',
    farbe:    ['#146574', '#1a7d90'],
  },
  {
    initials: 'SH',
    name:     'Sandra Hoffmann',
    role:     'Steuerberaterin',
    exp:      '14 Jahre Erfahrung',
    spec:     'Einkommensteuer, Immobilien, Freiberufler',
    bio:      'Sandra Hoffmann ist Ansprechpartnerin für Privatpersonen und Selbstständige. Sie ist bekannt für ihre klare Kommunikation und dafür, komplexes Steuerrecht verständlich zu machen.',
    farbe:    ['#1a7d90', '#5ce1e6'],
  },
  {
    initials: 'JB',
    name:     'Jonas Becker',
    role:     'Dipl.-Kaufmann',
    exp:      '9 Jahre Erfahrung',
    spec:     'Buchhaltung, Jahresabschluss, Lohnsteuer',
    bio:      'Jonas Becker verantwortet die Finanzbuchhaltung und Jahresabschlüsse unserer Mandanten. Seine strukturierte Arbeitsweise sorgt für Genauigkeit und Zuverlässigkeit.',
    farbe:    ['#0d4a56', '#146574'],
  },
  {
    initials: 'LR',
    name:     'Lena Richter',
    role:     'Steuerfachangestellte',
    exp:      '6 Jahre Erfahrung',
    spec:     'Mandantenbetreuung, Finanzbuchhaltung',
    bio:      'Lena Richter ist das erste Gesicht, das unsere Mandanten kennenlernen. Ihre freundliche, präzise Art macht die Zusammenarbeit unkompliziert und angenehm.',
    farbe:    ['#146574', '#45e7ff'],
  },
]

export default function Team() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [flipped, setFlipped]  = useState<number | null>(null)

  const toggle = (i: number) => setFlipped(flipped === i ? null : i)

  return (
    <section id="team" style={{ background:'var(--black-soft)', paddingBlock:'var(--section-py)' }}>
      <div className="container">

        {/* ── Header ── */}
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(min(100%,300px),1fr))',
          gap:'clamp(2rem,5vw,5rem)',
          alignItems:'end',
          marginBottom:'clamp(3rem,6vw,5rem)',
        }}>
          <div>
            <p className="font-mono" style={{ fontSize:'clamp(.6rem,.75vw,.7rem)', color:'#5ce1e6', letterSpacing:'.2em', textTransform:'uppercase', marginBottom:'1rem' }}>
              — Wer wir sind
            </p>
            <h2 className="font-display" style={{ fontSize:'clamp(1.9rem,4.5vw,3.6rem)', fontWeight:700, color:'#eef1f6', letterSpacing:'-0.02em', lineHeight:1.08 }}>
              Menschen,<br /><em style={{ color:'#5ce1e6' }}>keine Nummern.</em>
            </h2>
          </div>
          <p style={{ color:'#8fa3a8', lineHeight:1.75, fontSize:'clamp(.85rem,1.05vw,.95rem)', maxWidth:'480px' }}>
            Bei uns haben Sie immer denselben Ansprechpartner. Kein Call-Center,
            keine wechselnden Sachbearbeiter – sondern ein Team, das Ihre Geschichte
            kennt und Ihre Ziele versteht.
          </p>
        </div>

        {/* ── Cards ── */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%,260px),1fr))',
          gap:                 'clamp(1rem,2vw,1.5rem)',
        }}>
          {TEAM.map((m, i) => {
            const isFlipped  = flipped === i
            const isHovered  = hovered === i

            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => toggle(i)}
                style={{ perspective:'1000px', cursor:'pointer', minHeight:'clamp(280px,30vw,360px)' }}
                role="button"
                aria-label={`${m.name} – mehr erfahren`}
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && toggle(i)}
              >
                <div style={{
                  position:        'relative',
                  width:           '100%',
                  height:          '100%',
                  minHeight:       'clamp(280px,30vw,360px)',
                  transformStyle:  'preserve-3d',
                  transition:      'transform .55s cubic-bezier(.4,0,.2,1)',
                  transform:       isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}>

                  {/* ── Front ── */}
                  <div style={{
                    position:        'absolute', inset:0,
                    backfaceVisibility: 'hidden',
                    padding:         'clamp(1.75rem,2.5vw,2.5rem)',
                    border:          `1px solid ${isHovered && !isFlipped ? 'rgba(92,225,230,.22)' : 'rgba(255,255,255,.06)'}`,
                    background:      isHovered && !isFlipped ? 'rgba(20,101,116,.1)' : 'rgba(15,22,24,.8)',
                    transition:      'border-color .3s, background .3s',
                    display:         'flex', flexDirection:'column',
                  }}>
                    {/* Avatar */}
                    <div style={{
                      width:        'clamp(60px,7vw,80px)',
                      height:       'clamp(60px,7vw,80px)',
                      borderRadius: '50%',
                      background:   `linear-gradient(135deg,${m.farbe[0]},${m.farbe[1]})`,
                      display:      'flex', alignItems:'center', justifyContent:'center',
                      marginBottom: 'clamp(1.25rem,2vw,1.75rem)',
                      flexShrink:   0,
                    }}>
                      <span className="font-display" style={{ fontSize:'clamp(1.1rem,1.8vw,1.5rem)', fontWeight:700, color:'#eef1f6' }}>
                        {m.initials}
                      </span>
                    </div>

                    <h3 className="font-display" style={{ fontSize:'clamp(1rem,1.5vw,1.2rem)', fontWeight:700, color:'#eef1f6', marginBottom:'.25rem', lineHeight:1.2 }}>
                      {m.name}
                    </h3>
                    <p className="font-mono" style={{ fontSize:'clamp(.6rem,.72vw,.68rem)', color:'#5ce1e6', letterSpacing:'.08em', marginBottom:'clamp(.75rem,1.2vw,1.1rem)' }}>
                      {m.role}
                    </p>
                    <p style={{ color:'#8fa3a8', fontSize:'clamp(.78rem,.95vw,.88rem)', lineHeight:1.6 }}>
                      {m.spec}
                    </p>

                    <div style={{ marginTop:'auto', paddingTop:'1.25rem', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                      <span className="font-mono" style={{ fontSize:'clamp(.58rem,.68vw,.65rem)', color:'rgba(92,225,230,.45)', letterSpacing:'.1em' }}>
                        {m.exp}
                      </span>
                      <span style={{ fontSize:'.7rem', color:'rgba(143,163,168,.5)' }}>Umdrehen →</span>
                    </div>
                  </div>

                  {/* ── Back ── */}
                  <div style={{
                    position:           'absolute', inset:0,
                    backfaceVisibility: 'hidden',
                    transform:          'rotateY(180deg)',
                    padding:            'clamp(1.75rem,2.5vw,2.5rem)',
                    border:             '1px solid rgba(92,225,230,.2)',
                    background:         'rgba(20,101,116,.12)',
                    display:            'flex', flexDirection:'column', justifyContent:'space-between',
                  }}>
                    <div>
                      <p className="font-mono" style={{ fontSize:'clamp(.58rem,.68vw,.65rem)', color:'#5ce1e6', letterSpacing:'.12em', textTransform:'uppercase', marginBottom:'1rem' }}>
                        Über {m.name.split(' ')[0]}
                      </p>
                      <p style={{ color:'#eef1f6', lineHeight:1.72, fontSize:'clamp(.82rem,1vw,.92rem)' }}>
                        {m.bio}
                      </p>
                    </div>
                    <a
                      href="#kontakt"
                      onClick={e => e.stopPropagation()}
                      style={{
                        display:'inline-flex', alignItems:'center', gap:'.45rem',
                        color:'#5ce1e6', textDecoration:'none', fontWeight:600,
                        fontSize:'clamp(.78rem,.9vw,.88rem)',
                        borderBottom:'1px solid rgba(92,225,230,.3)', paddingBottom:'2px',
                        width:'fit-content',
                      }}
                    >
                      Kontakt aufnehmen →
                    </a>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

        {/* ── Bottom note ── */}
        <p style={{
          textAlign:'center', marginTop:'clamp(2.5rem,4vw,4rem)',
          color:'rgba(143,163,168,.45)', fontSize:'clamp(.72rem,.85vw,.8rem)',
          fontFamily:'DM Mono, monospace', letterSpacing:'.1em',
        }}>
          Klicken Sie auf eine Karte, um mehr über das Teammitglied zu erfahren.
        </p>

      </div>
    </section>
  )
}
