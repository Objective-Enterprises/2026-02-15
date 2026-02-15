export interface Artist {
  name: string
  medium: string
  works: string[]
}

const ARTISTS: Artist[] = [
  {
    name: "Greta Gerwig",
    medium: "Film Director",
    works: ["Lady Bird", "Little Women", "Barbie"]
  },
  {
    name: "Beyoncé",
    medium: "Musician",
    works: ["Halo", "Single Ladies", "Renaissance"]
  },
  {
    name: "Frida Kahlo",
    medium: "Painter",
    works: ["The Two Fridas", "Self-Portrait with Thorn Necklace", "The Broken Column"]
  },
  {
    name: "Misty Copeland",
    medium: "Dancer",
    works: ["American Ballet Theatre performances", "Swan Lake", "Firebird"]
  },
  {
    name: "Margaret Atwood",
    medium: "Author",
    works: ["The Handmaid's Tale", "Oryx and Crake", "The Blind Assassin"]
  },
  {
    name: "Meryl Streep",
    medium: "Film Actor",
    works: ["The Iron Lady", "Sophie's Choice", "Kramer vs. Kramer"]
  },
  {
    name: "Jane Campion",
    medium: "Film Director",
    works: ["The Piano", "Top of the Lake", "The Power of the Dog"]
  },
  {
    name: "Joni Mitchell",
    medium: "Musician",
    works: ["Blue", "Both Sides Now", "A Case of You"]
  },
  {
    name: "Georgia O'Keeffe",
    medium: "Painter",
    works: ["Jimson Weed", "New York, Night", "Cow's Skull with Calico Roses"]
  },
  {
    name: "Cate Blanchett",
    medium: "Film Actor",
    works: ["Blue Jasmine", "Carol", "Elizabeth"]
  }
]

export default async function getArtists(query: string): Promise<Artist[]> {
  await new Promise(resolve => setTimeout(resolve, 1000))
  if (!query) {
    return ARTISTS
  }
  const lowerQuery = query.toLowerCase()
  return ARTISTS.filter(artist =>
    artist.name.toLowerCase().includes(lowerQuery) ||
    artist.medium.toLowerCase().includes(lowerQuery) ||
    artist.works.some(work => work.toLowerCase().includes(lowerQuery))
  )
}
