import { InvitationCard } from '@/components/InvitationCard'
import { slugToName } from '@/lib/utils'
import type { Metadata } from 'next'
import pageStyles from '../page.module.css'

interface Props {
  params: Promise<{ guest: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { guest } = await params
  const name = slugToName(guest)
  return {
    title: `Ahmed & Basma — Invitation for ${name}`,
    description: `${name}, you are warmly invited to celebrate the engagement of Ahmed & Basma`,
  }
}

export default async function GuestPage({ params }: Props) {
  const { guest } = await params
  const guestName = slugToName(guest)

  return (
    <main className={pageStyles.page}>
      <div className={pageStyles.card}>
        <InvitationCard guestName={guestName} />
      </div>
    </main>
  )
}

export function generateStaticParams() {
  return []
}
