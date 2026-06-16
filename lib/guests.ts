// UUID → guest display name
// Generate UUIDs with: crypto.randomUUID() in browser console
export const GUESTS: Record<string, string> = {
  // Example — replace with real guests:
  "1": "Mohamed Ali",
  "2": "Sara & Khaled",
  // "a1b2c3d4-e5f6-7890-abcd-ef1234567890": "Mohamed Ali",
  // "b2c3d4e5-f6a7-8901-bcde-f01234567891": "Sara & Khaled",
};

export function getGuestByToken(token: string): string | null {
  return GUESTS[token] ?? null;
}
