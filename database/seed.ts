import { drizzle } from 'drizzle-orm/neon-http'
import feedSeed from './seed.json'
import { feed  } from './schema'

// TODO: Replace DATABASE_URL with the actual database url string
// @ts-ignore
const db = drizzle(DATABASE_URL)

const seed = async () => {
  console.log('Seeding data...')

  try {
    for (let feedItem of feedSeed) {
      console.log(feed)
      await db.insert(feed).values({ ...feedItem })
    }
  } catch (error) {
    console.error('Error seeding data:', error)
  }
}

seed()
