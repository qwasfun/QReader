import { pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core'

export const feed = pgTable('rss_feeds', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  feedLink: text('feed_link').unique().notNull(),
  lastFetchAt: timestamp('last_fetch_at'),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

export const post = pgTable('rss_posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  link: text('link').unique().notNull(),
  author: text('author'),
  content: text('content'),
  pubDate: timestamp('pub_date').notNull(),
  feedId: integer('feed_id')
    .notNull()
    .references(() => feed.id),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

// Type inference for Drizzle queries
export type PostSelect = typeof post.$inferSelect
export type FeedSelect = typeof feed.$inferSelect
