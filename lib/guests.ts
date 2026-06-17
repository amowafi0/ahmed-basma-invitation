// UUID → guest display name
// Generate UUIDs with: crypto.randomUUID() in browser console
export const GUESTS: Record<string, string> = {
  // Example — replace with real guests:
  "1": " Mostafa Mowafy",
  "2": "Dr : Mohamed Mowafy",
  "3": "MR : Mahmoued Mowafy",
  "5": "Eng : Mohamed Zaki  ",
  "6": "Eng : Medhat Abdelaal",
  "7": "Eng : Salama  Abo Elhear ",
  "8": "Eng : Mohamed Etman ",
  "9": "Mr : Mahmoued Etman",
  "10": "Mr : Yahia Etman",
  "11": "aunt Ahlam & Family",
  "12": "Mr : lotfy & Family",
  "13": "Sabya",
  "14": "Karim Salah",
  "15": "Mostafa Lotfy",
  "16": "Asem Mostafa",
  "17": "Mazen Mohamed",
  "18": "karim shebo",
  // "a1b2c3d4-e5f6-7890-abcd-ef1234567890": "Mohamed Ali",
  // "b2c3d4e5-f6a7-8901-bcde-f01234567891": "Sara & Khaled",
};

export function getGuestByToken(token: string): string | null {
  return GUESTS[token] ?? null;
}
