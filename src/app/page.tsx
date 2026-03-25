import Navbar     from '@/components/Navbar'
import Hero       from '@/components/Hero'
import Leistungen from '@/components/Leistungen'
import Branchen   from '@/components/Branchen'
import Team       from '@/components/Team'
import FAQ        from '@/components/FAQ'
import Blog       from '@/components/Blog'
import Kontakt    from '@/components/Kontakt'
import Footer     from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Leistungen />
      <Branchen />
      <Team />
      <FAQ />
      <Blog />
      <Kontakt />
      <Footer />
    </main>
  )
}
