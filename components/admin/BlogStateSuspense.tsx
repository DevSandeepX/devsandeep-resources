import { getTotalBlogs } from '@/features/blogs/db/blogs'
import StateCard from '../common/StateCard'
import { getTotalCategories } from '@/features/categories/db/db'
import { Suspense } from 'react'
import StateCardSkelton from '../common/StateCardSkelton'

export default async function BlogStateSuspense() {
    const blogsCount = await getTotalBlogs()
    return (

        <Suspense fallback={<StateCardSkelton />}>
            <StateCard title="Blogs" count={blogsCount} />
        </Suspense>

    )
}
