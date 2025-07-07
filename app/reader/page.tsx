import { desc } from 'drizzle-orm'
import { PostList } from '../componnets/PostList'
import { db } from '../../database/drizzle'
import { post, PostSelect } from '../../database/schema'

export const dynamic = 'force-dynamic'

interface PageProps {
  searchParams: Promise<Record<string, string | undefined>>
}

export default async function Page(props: PageProps) {
  const searchParams: Record<string, string | undefined> =
    await props.searchParams
  const pageSize: number = 20
  const page: number = Number(searchParams?.p ?? 1)
  const postList: PostSelect[] = await db
    .select()
    .from(post)
    .orderBy(desc(post.pubDate))
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
