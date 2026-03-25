'use client'
import { useState } from 'react'

const LEISTUNGEN = [
  { label: 'Einkommensteuererklärung', href: '/leistungen/einkommensteuer' },
  { label: 'Unternehmensbesteuerung',  href: '/leistungen/unternehmen'     },
  { label: 'Buchhaltung & Jahresabschluss', href: '/leistungen/buchhaltung' },
  { label: 'Lohnbuchhaltung',          href: '/leistungen/lohn'            },
  { label: 'Steuergestaltung',         href: '/leistungen/gestaltung'      },
  { label: 'Existenzgründung',         href: '/leistungen/gruendung'       },
]

const KANZLEI = [
  { label: 'Team',     href: '#team'     },
  { label: 'Branchen', href: '#branchen' },
  { label: 'FAQ',      href: '#faq'      },
  { label: 'Blog',     href: '#blog'     },
  { label: 'Kontakt',  href: '#kontakt'  },
]

const RECHTLICHES = [
  { label: 'Impressum',        href: '/impressum'   },
  { label: 'Datenschutz',      href: '/datenschutz' },
  { label: 'AGB',              href: '/agb'         },
  { label: 'Cookie-Einstellungen', href: '#'        },
]

function FooterLink({ label, href }: { label: string; href: string }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display:        'block',
        color:          hov ? '#eef1f6' : '#8fa3a8',
        textDecoration: 'none',
        fontSize:       'clamp(.8rem,.95vw,.875rem)',
        lineHeight:     1.5,
        paddingBlock:   '.28rem',
        transition:     'color .2s',
      }}
    >
      {label}
    </a>
  )
}

function ColHeader({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-mono"
      style={{
        fontSize:      'clamp(.58rem,.7vw,.65rem)',
        color:         '#5ce1e6',
        letterSpacing: '.16em',
        textTransform: 'uppercase',
        marginBottom:  'clamp(1rem,1.8vw,1.4rem)',
      }}
    >
      {children}
    </p>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background:'var(--black-soft)', borderTop:'1px solid rgba(255,255,255,.04)' }}>

      {/* ── Top band ── */}
      <div
        style={{
          borderBottom: '1px solid rgba(255,255,255,.04)',
          paddingBlock: 'clamp(3rem,5vw,5rem)',
        }}
      >
        <div className="container">
          <div style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            gap:                 'clamp(2.5rem,4vw,4rem)',
          }}>

            {/* ── Brand column ── */}
            <div style={{ gridColumn: 'span 1' }}>
              {/* Logo text */}
              <a href="#" style={{ textDecoration:'none', display:'inline-block', marginBottom:'clamp(1rem,1.5vw,1.25rem)' }}>
                <div
                  className="font-display"
                  style={{ fontSize:'clamp(1.15rem,1.8vw,1.4rem)', fontWeight:700, color:'#eef1f6', letterSpacing:'-0.02em', lineHeight:1 }}
                >
                  Steuer<span style={{ color:'#5ce1e6' }}>&</span>Partner
                </div>
                <div
                  className="font-mono"
                  style={{ fontSize:'clamp(.52rem,.65vw,.6rem)', color:'#8fa3a8', letterSpacing:'.18em', textTransform:'uppercase', marginTop:'4px' }}
                >
                  Steuerberatung · Frankfurt
                </div>
              </a>

              <p style={{ color:'#8fa3a8', fontSize:'clamp(.78rem,.95vw,.875rem)', lineHeight:1.7, marginBottom:'clamp(1.5rem,2.5vw,2rem)', maxWidth:'280px' }}>
                Moderne Steuerberatung mit persönlichem Anspruch.
                Seit über 20 Jahren Ihr Partner für steuerliche Klarheit.
              </p>

              {/* Social icons */}
              <div style={{ display:'flex', gap:'.75rem' }}>
                {[
                  { label:'LinkedIn', path:'M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0ZM5.5 6.5h1v5h-1v-5Zm.5-1.5a.65.65 0 1 1 0-1.3.65.65 0 0 1 0 1.3Zm8 6.5h-1v-2.5c0-.8-.4-1.3-1.1-1.3-.6 0-1 .5-1 1.3v2.5h-1v-5h1v.7a2 2 0 0 1 1.7-.8c1.2 0 1.9.8 1.9 2.1v3Z' },
                  { label:'XING',    path:'M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm-1.4 11.3L4.8 8.8l2.1-3.6h1.8L6.6 8.8l1.8 2.5H6.6Zm5.2-7.5-3.3 5.7 2 3.5H9.7l-2-3.5 3.3-5.7h1.8Z' },
                ].map(s => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    style={{
                      width:'36px', height:'36px',
                      border:'1px solid rgba(255,255,255,.1)',
                      borderRadius:'3px',
                      display:'flex', alignItems:'center', justifyContent:'center',
                      color:'#8fa3a8', transition:'all .2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor='#5ce1e6'; e.currentTarget.style.color='#5ce1e6'; e.currentTarget.style.background='rgba(92,225,230,.08)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,.1)'; e.currentTarget.style.color='#8fa3a8'; e.currentTarget.style.background='transparent' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                      <path d={s.path}/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* ── Leistungen ── */}
            <div>
              <ColHeader>Leistungen</ColHeader>
              {LEISTUNGEN.map(l => <FooterLink key={l.href} {...l} />)}
            </div>

            {/* ── Kanzlei ── */}
            <div>
              <ColHeader>Kanzlei</ColHeader>
              {KANZLEI.map(l => <FooterLink key={l.href} {...l} />)}
            </div>

            {/* ── Kontakt & Rechtliches ── */}
            <div>
              <ColHeader>Kontakt</ColHeader>
              <div style={{ display:'flex', flexDirection:'column', gap:'.55rem', marginBottom:'clamp(1.5rem,2.5vw,2.25rem)' }}>
                {[
                  { icon:'📍', text:'Musterstraße 12, 60311 Frankfurt' },
                  { icon:'📞', text:'+49 69 123 456 789' },
                  { icon:'✉️', text:'info@steuerpartner-ffm.de' },
                ].map(item => (
                  <div key={item.icon} style={{ display:'flex', gap:'.6rem', alignItems:'flex-start' }}>
                    <span style={{ fontSize:'.8rem', flexShrink:0, marginTop:'1px' }}>{item.icon}</span>
                    <span style={{ color:'#8fa3a8', fontSize:'clamp(.78rem,.9vw,.85rem)', lineHeight:1.5 }}>{item.text}</span>
                  </div>
                ))}
              </div>

              <ColHeader>Rechtliches</ColHeader>
              {RECHTLICHES.map(l => <FooterLink key={l.label} {...l} />)}
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ paddingBlock:'clamp(1.25rem,2vw,1.75rem)' }}>
        <div
          className="container"
          style={{
            display:        'flex',
            flexWrap:       'wrap',
            alignItems:     'center',
            justifyContent: 'space-between',
            gap:            '1rem',
          }}
        >
          <span
            className="font-mono"
            style={{ fontSize:'clamp(.55rem,.68vw,.63rem)', color:'rgba(143,163,168,.38)', letterSpacing:'.08em' }}
          >
            © {year} Steuer &amp; Partner GmbH · Alle Rechte vorbehalten
          </span>

          <div style={{ display:'flex', alignItems:'center', gap:'clamp(.75rem,1.5vw,1.5rem)', flexWrap:'wrap' }}>
            {RECHTLICHES.slice(0, 3).map(l => (
              <a
                key={l.label}
                href={l.href}
                className="font-mono"
                style={{ fontSize:'clamp(.53rem,.65vw,.62rem)', color:'rgba(143,163,168,.38)', textDecoration:'none', letterSpacing:'.08em', transition:'color .2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#8fa3a8')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(143,163,168,.38)')}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* StB badge */}
          <div style={{
            display:'flex', alignItems:'center', gap:'.5rem',
            padding:'.3rem .8rem',
            border:'1px solid rgba(92,225,230,.1)',
            borderRadius:'100px',
          }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'#5ce1e6', boxShadow:'0 0 6px rgba(92,225,230,.5)' }} />
            <span className="font-mono" style={{ fontSize:'clamp(.52rem,.63vw,.6rem)', color:'rgba(92,225,230,.6)', letterSpacing:'.1em', textTransform:'uppercase' }}>
              Zugelassener Steuerberater · StBK Hessen
            </span>
          </div>
        </div>
      </div>

    </footer>
  )
}
