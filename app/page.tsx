import { InvitationCard } from '@/components/InvitationCard'
import pageStyles from './page.module.css'

export default function HomePage() {
  return (
    <main className={pageStyles.page}>
      <div className={pageStyles.card}>
        <InvitationCard />
      </div>
    </main>
  )
}
