'use client'
import { useState } from 'react'
import type { Leistung } from '@/lib/leistungen-data'

export default function LeistungPage({ data }: { data: Leistung }) {
  const [hovV, setHovV] = useState<number | null>(null)
  const [hovT, setHovT] = useState<number | null>(null)

  return (
    <main style={{ background:'var(--black)', minHeight:'100vh' }}>

      {/* ── Navbar back-link ── */}
      <div style={{
        position:'fixed', top:0, left:0, right:0, zIndex:100,
        height:'64px',
        background:'rgba(8,12,14,.92)',
        backdropFilter:'blur(20px)',
        borderBottom:'1px solid rgba(92,225,230,.1)',
        display:'flex', alignItems:'center',
      }}>
        <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <a href="/" style={{ textDecoration:'none', display:'flex', flexDirection:'column', gap:'2px' }}>
            <span className="font-display" style={{ fontSize:'clamp(1rem,1.6vw,1.25rem)', fontWeight:700, color:'#eef1f6', letterSpacing:'-0.02em', lineHeight:1 }}>
              Steuer<span style={{ color:'#5ce1e6' }}>&</span>Partner
            </span>
          </a>
          <a
            href="/#leistungen"
            style={{
              display:'inline-flex', alignItems:'center', gap:'.45rem',
              color:'#8fa3a8', textDecoration:'none',
              fontSize:'clamp(.78rem,.9vw,.875rem)', fontWeight:500,
              transition:'color .2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#5ce1e6')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8fa3a8')}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M11 7H3M7 3L3 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Alle Leistungen
          </a>
        </div>
      </div>

      {/* ── Hero ── */}
      <section
        className="mesh-bg"
        style={{ paddingTop:'clamp(8rem,14vw,12rem)', paddingBottom:'clamp(4rem,7vw,7rem)', position:'relative', overflow:'hidden' }}
      >
        {/* accent line */}
        <div aria-hidden style={{ position:'absolute', top:0, right:'20%', width:'1px', height:'100%', background:'linear-gradient(to bottom,transparent,rgba(92,225,230,.12),transparent)' }} />

        <div className="container">
          <div style={{ maxWidth:'min(720px,100%)' }}>
            <p className="font-mono" style={{ fontSize:'clamp(.58rem,.72vw,.68rem)', color:'#5ce1e6', letterSpacing:'.2em', textTransform:'uppercase', marginBottom:'1rem' }}>
              — Leistung
            </p>
            <h1 className="font-display" style={{ fontSize:'clamp(2.2rem,5.5vw,4.8rem)', fontWeight:900, color:'#eef1f6', letterSpacing:'-0.03em', lineHeight:1.06, marginBottom:'.875rem' }}>
              {data.titel}
            </h1>
            <p className="font-display" style={{ fontSize:'clamp(1rem,1.8vw,1.35rem)', color:'#5ce1e6', fontStyle:'italic', fontWeight:400, marginBottom:'clamp(1.5rem,2.5vw,2rem)' }}>
              {data.untertitel}
            </p>
            <p style={{ color:'#8fa3a8', lineHeight:1.75, fontSize:'clamp(.88rem,1.1vw,1rem)', maxWidth:'560px' }}>
              {data.intro}
            </p>
          </div>
        </div>
      </section>

      {/* ── Beschreibung ── */}
      <section style={{ paddingBlock:'clamp(4rem,7vw,7rem)', background:'var(--black-soft)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,340px),1fr))', gap:'clamp(3rem,6vw,7rem)', alignItems:'start' }}>
            <div>
              <p className="font-mono" style={{ fontSize:'clamp(.58rem,.72vw,.68rem)', color:'#5ce1e6', letterSpacing:'.2em', textTransform:'uppercase', marginBottom:'1rem' }}>
                — Leistungsbeschreibung
              </p>
              <h2 className="font-display" style={{ fontSize:'clamp(1.5rem,3vw,2.4rem)', fontWeight:700, color:'#eef1f6', letterSpacing:'-0.02em', lineHeight:1.12, marginBottom:'clamp(1.5rem,2.5vw,2rem)' }}>
                Was wir für Sie tun
              </h2>
              {data.beschreibung.split('\n\n').map((p, i) => (
                <p key={i} style={{ color:'#8fa3a8', lineHeight:1.78, fontSize:'clamp(.85rem,1.05vw,.95rem)', marginBottom:'1.25rem' }}>
                  {p}
                </p>
              ))}
            </div>

            {/* Vorteile */}
            <div>
              <p className="font-mono" style={{ fontSize:'clamp(.58rem,.72vw,.68rem)', color:'#5ce1e6', letterSpacing:'.2em', textTransform:'uppercase', marginBottom:'1rem' }}>
                — Was Sie erwartet
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:'1px', background:'rgba(255,255,255,.04)' }}>
                {data.vorteile.map((v, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => setHovV(i)}
                    onMouseLeave={() => setHovV(null)}
                    style={{
                      padding:'clamp(1.25rem,2vw,1.75rem)',
                      background: hovV===i ? 'rgba(20,101,116,.12)' : 'var(--black-soft)',
                      borderLeft:`2px solid ${hovV===i ? '#5ce1e6' : 'transparent'}`,
                      transition:'background .25s, border-color .25s',
                    }}
                  >
                    <div style={{ display:'flex', alignItems:'flex-start', gap:'.875rem' }}>
                      <div style={{ width:8, height:8, borderRadius:'50%', background:'#5ce1e6', flexShrink:0, marginTop:'.35rem', boxShadow: hovV===i ? '0 0 8px rgba(92,225,230,.6)' : 'none', transition:'box-shadow .25s' }} />
                      <div>
                        <div style={{ fontWeight:600, color:'#eef1f6', fontSize:'clamp(.88rem,1.1vw,.98rem)', marginBottom:'.3rem' }}>{v.titel}</div>
                        <div style={{ color:'#8fa3a8', fontSize:'clamp(.8rem,.95vw,.875rem)', lineHeight:1.62 }}>{v.text}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Prozess ── */}
      <section style={{ paddingBlock:'clamp(4rem,7vw,7rem)', background:'var(--black)' }} className="mesh-bg">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'clamp(3rem,5vw,5rem)' }}>
            <p className="font-mono" style={{ fontSize:'clamp(.58rem,.72vw,.68rem)', color:'#5ce1e6', letterSpacing:'.2em', textTransform:'uppercase', marginBottom:'1rem' }}>
              — So arbeiten wir
            </p>
            <h2 className="font-display" style={{ fontSize:'clamp(1.5rem,3vw,2.4rem)', fontWeight:700, color:'#eef1f6', letterSpacing:'-0.02em', lineHeight:1.12 }}>
              Unser Prozess
            </h2>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap:'1px', background:'rgba(255,255,255,.04)' }}>
            {data.prozess.map((step, i) => (
              <div key={i} style={{ padding:'clamp(1.75rem,2.5vw,2.5rem)', background:'var(--black)', position:'relative', overflow:'hidden' }}>
                {/* connector line */}
                {i < data.prozess.length - 1 && (
                  <div aria-hidden style={{ position:'absolute', top:'clamp(2rem,3vw,2.8rem)', right:0, width:'1px', height:'28px', background:'rgba(92,225,230,.15)' }} />
                )}
                <span className="font-mono" style={{ fontSize:'clamp(.6rem,.75vw,.7rem)', color:'rgba(92,225,230,.35)', letterSpacing:'.1em', display:'block', marginBottom:'1rem' }}>
                  {step.nr}
                </span>
                <h3 style={{ fontWeight:700, color:'#eef1f6', fontSize:'clamp(.9rem,1.2vw,1.05rem)', marginBottom:'.75rem', lineHeight:1.25 }}>
                  {step.titel}
                </h3>
                <p style={{ color:'#8fa3a8', fontSize:'clamp(.78rem,.92vw,.875rem)', lineHeight:1.65 }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ paddingBlock:'clamp(4rem,7vw,7rem)', background:'var(--black-soft)' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'clamp(3rem,5vw,5rem)' }}>
            <p className="font-mono" style={{ fontSize:'clamp(.58rem,.72vw,.68rem)', color:'#5ce1e6', letterSpacing:'.2em', textTransform:'uppercase', marginBottom:'1rem' }}>
              — Kundenstimmen
            </p>
            <h2 className="font-display" style={{ fontSize:'clamp(1.5rem,3vw,2.4rem)', fontWeight:700, color:'#eef1f6', letterSpacing:'-0.02em', lineHeight:1.12 }}>
              Was unsere Mandanten sagen
            </h2>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap:'clamp(1rem,2vw,1.5rem)' }}>
            {data.testimonials.map((t, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovT(i)}
                onMouseLeave={() => setHovT(null)}
                style={{
                  padding:'clamp(1.75rem,2.5vw,2.5rem)',
                  border:`1px solid ${hovT===i ? 'rgba(92,225,230,.2)' : 'rgba(255,255,255,.06)'}`,
                  background: hovT===i ? 'rgba(20,101,116,.08)' : 'transparent',
                  transition:'all .3s',
                  position:'relative',
                }}
              >
                {/* Quote mark */}
                <div className="font-display" aria-hidden style={{ fontSize:'4rem', color:'rgba(92,225,230,.1)', lineHeight:.8, marginBottom:'1rem', fontWeight:900 }}>"</div>
                <p style={{ color:'#8fa3a8', lineHeight:1.72, fontSize:'clamp(.82rem,1vw,.92rem)', marginBottom:'clamp(1.25rem,2vw,1.75rem)', fontStyle:'italic' }}>
                  {t.text}
                </p>
                <div style={{ display:'flex', alignItems:'center', gap:'.875rem' }}>
                  <div style={{
                    width:'clamp(36px,4vw,44px)', height:'clamp(36px,4vw,44px)',
                    borderRadius:'50%',
                    background:'linear-gradient(135deg,#146574,#5ce1e6)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    flexShrink:0,
                  }}>
                    <span className="font-display" style={{ fontSize:'.75rem', fontWeight:700, color:'#eef1f6' }}>{t.initials}</span>
                  </div>
                  <div>
                    <div style={{ fontWeight:600, color:'#eef1f6', fontSize:'clamp(.82rem,.95vw,.9rem)' }}>{t.name}</div>
                    <div className="font-mono" style={{ fontSize:'clamp(.58rem,.68vw,.65rem)', color:'#8fa3a8', letterSpacing:'.06em', marginTop:'2px' }}>{t.rolle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ paddingBlock:'clamp(4rem,7vw,7rem)', background:'var(--black)' }}>
        <div className="container">
          <div style={{
            padding:'clamp(2.5rem,5vw,5rem)',
            border:'1px solid rgba(92,225,230,.15)',
            background:'rgba(20,101,116,.07)',
            textAlign:'center',
            position:'relative', overflow:'hidden',
          }}>
            {/* bg glow */}
            <div aria-hidden style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'400px', height:'200px', background:'radial-gradient(ellipse,rgba(20,101,116,.25),transparent)', pointerEvents:'none' }} />

            <p className="font-mono" style={{ fontSize:'clamp(.58rem,.72vw,.68rem)', color:'#5ce1e6', letterSpacing:'.2em', textTransform:'uppercase', marginBottom:'1rem', position:'relative' }}>
              — Jetzt starten
            </p>
            <h2 className="font-display" style={{ fontSize:'clamp(1.6rem,3.5vw,2.8rem)', fontWeight:700, color:'#eef1f6', letterSpacing:'-0.02em', lineHeight:1.1, marginBottom:'1.25rem', position:'relative' }}>
              Bereit für Ihr{' '}
              <em style={{ color:'#5ce1e6' }}>kostenloses Erstgespräch?</em>
            </h2>
            <p style={{ color:'#8fa3a8', lineHeight:1.7, fontSize:'clamp(.85rem,1.05vw,.95rem)', maxWidth:'480px', margin:'0 auto clamp(2rem,3.5vw,3rem)', position:'relative' }}>
              Kein Risiko, keine Verpflichtung – nur ein offenes Gespräch über Ihre Situation und wie wir Ihnen helfen können.
            </p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem', justifyContent:'center', position:'relative' }}>
              <a
                href="/#kontakt"
                style={{
                  display:'inline-flex', alignItems:'center', gap:'.55rem',
                  background:'linear-gradient(135deg,#146574,#1a7d90)',
                  color:'#eef1f6', textDecoration:'none',
                  padding:'clamp(.85rem,1.2vw,1.05rem) clamp(1.75rem,2.5vw,2.5rem)',
                  borderRadius:'3px', fontSize:'clamp(.85rem,1vw,.95rem)',
                  fontWeight:600, letterSpacing:'.04em',
                  border:'1px solid rgba(92,225,230,.25)',
                  boxShadow:'0 8px 32px rgba(20,101,116,.35)',
                  transition:'transform .25s, box-shadow .25s',
                  whiteSpace:'nowrap',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 14px 40px rgba(20,101,116,.55)' }}
                onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 8px 32px rgba(20,101,116,.35)' }}
              >
                Kostenloses Erstgespräch buchen →
              </a>
              <a
                href="tel:+496912345678"
                style={{
                  display:'inline-flex', alignItems:'center', gap:'.55rem',
                  color:'#8fa3a8', textDecoration:'none',
                  padding:'clamp(.85rem,1.2vw,1.05rem) clamp(1.25rem,2vw,1.75rem)',
                  borderRadius:'3px', fontSize:'clamp(.82rem,.95vw,.9rem)',
                  fontWeight:500,
                  border:'1px solid rgba(255,255,255,.1)',
                  transition:'all .25s', whiteSpace:'nowrap',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(92,225,230,.25)'; e.currentTarget.style.color='#eef1f6' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,.1)'; e.currentTarget.style.color='#8fa3a8' }}
              >
                📞 +49 69 123 456 789
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
