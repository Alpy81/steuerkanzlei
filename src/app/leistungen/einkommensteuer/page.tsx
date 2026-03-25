import { LEISTUNGEN } from '@/lib/leistungen-data'
import LeistungPage   from '@/components/LeistungPage'

export default function Page() {
  return <LeistungPage data={LEISTUNGEN['einkommensteuer']} />
}
