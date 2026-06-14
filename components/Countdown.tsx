'use client'

import { useEffect, useState } from 'react'
import { getDaysUntil } from '@/lib/utils'

export function DaysLine({ target }: { target: Date }) {
  const [days, setDays] = useState(() => getDaysUntil(target))

  useEffect(() => {
    const id = setInterval(() => setDays(getDaysUntil(target)), 60_000)
    return () => clearInterval(id)
  }, [target])

  return (
    <b style={{ fontStyle: 'normal', fontWeight: 500, color: 'var(--gold-deep)' }}>
      {days}
    </b>
  )
}
