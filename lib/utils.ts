export const EVENT_DATE = new Date('2026-09-25T18:00:00')
export const VENUE = 'The Rose Hall'
export const AREA = 'Talha'
export const COUPLE = { a: 'Ahmed', b: 'Basma' }

export function slugToName(slug: string): string {
  const cap = (w: string) => w.charAt(0).toUpperCase() + w.slice(1)
  return decodeURIComponent(slug)
    .replace(/-and-/gi, ' & ')
    .split('-')
    .map((part) => part.split(' ').map(cap).join(' '))
    .join(' ')
}

export function nameToSlug(name: string): string {
  return (
    name
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 28) || 'guest'
  )
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function formatTime(d: Date): string {
  return d
    .toLocaleTimeString('en-GB', { hour: 'numeric', minute: '2-digit', hour12: true })
    .toUpperCase()
}

export function getDaysUntil(target: Date): number {
  return Math.max(0, Math.floor((target.getTime() - Date.now()) / 86400000))
}
