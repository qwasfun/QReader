import { PostList } from '../componnets/PostList'
import { db } from '../../database/drizzle'
import { rssPost } from '../../database/schema'
import { desc } from 'drizzle-orm'

export const dynamic = 'force-dynamic'

export default async function Home(props: { searchParams: any }) {
  const searchParams = await props.searchParams
  const pageSize = 20
  const page = searchParams.p ?? 1
  const postList = await db
    .select()
    .from(rssPost)
    .orderBy(desc(rssPost.pubDate))
    .limit(pageSize)
    .offset((page - 1) * pageSize)

  return (
    <section className="mt-8">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">QReader</h1>
      <div className="my-8">
        <PostList list={postList} page={page} />
      </div>
    </section>
  )
}
