import { InvitationCard } from '@/components/InvitationCard'
import { getGuestByToken, GUESTS } from '@/lib/guests'
import { slugToName } from '@/lib/utils'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import pageStyles from '../page.module.css'

interface Props {
  params: Promise<{ guest: string }>
}

function resolveName(token: string): string | null {
  const byUUID = getGuestByToken(token)
  if (byUUID) return byUUID
  // Fall back to slug-based name for old-style links
  const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(token)
  if (isUUID) return null
  return slugToName(token)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { guest } = await params
  const name = resolveName(guest)
  if (!name) return { title: 'Ahmed & Basma — Invitation' }
  const title = `Ahmed & Basma — Invitation for ${name}`
  const description = `${name}, you are warmly invited to celebrate the engagement of Ahmed & Basma`
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/opengraph-image'],
    },
  }
}

export default async function GuestPage({ params }: Props) {
  const { guest } = await params
  const guestName = resolveName(guest)
  if (!guestName) notFound()

  return (
    <main className={pageStyles.page}>
      <div className={pageStyles.card}>
        <InvitationCard guestName={guestName} />
      </div>
    </main>
  )
}

export function generateStaticParams() {
  return Object.keys(GUESTS).map((token) => ({ guest: token }))
}
