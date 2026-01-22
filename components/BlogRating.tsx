import { db } from '@/database/db'
import { blog, rating, review } from '@/database/schema'
import { and, eq, sql } from 'drizzle-orm'
import { Star } from './Star'

export async function BlogRating({ blogId }: { blogId: string }) {
    const { avgRating, totalReviews } = await getBlogRating(blogId)
    const fullStar = Math.floor(avgRating)
    const hasHalfStar = avgRating % 1 >= 0.5;

    return (
        <div className='flex items-center gap-2 mt-4'>
            <div className='flex items-center'>
                {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                        key={i}
                        filled={
                            i <= fullStar ||
                            (i === fullStar + 1 && hasHalfStar)
                        }
                        className='h-4 w-4'
                    />
                ))}
            </div>
            <span className='font-medium'>
                Ratings ⭐ ({avgRating.toFixed(1)})
            </span>
            <span className='text-muted-foreground'>
                Reviews ({totalReviews})
            </span>
        </div>
    )
}

async function getBlogRating(blogId: string) {
    const [result] = await db
        .select({
            avgRating: sql<number>`COALESCE(AVG(${rating.rating}),0)`,
            totalReviews: sql<number>`COUNT(DISTINCT(${review.id}))`,
        })
        .from(blog)
        .leftJoin(rating, eq(rating.blogId, blog.id))
        .leftJoin(review, eq(review.blogId, blog.id))
        .where(and(eq(blog.id, blogId), eq(blog.status, "publish")))
        .groupBy(blog.id)

    return {
        avgRating: Number(result?.avgRating ?? 0),
        totalReviews: Number(result?.totalReviews ?? 0),
    }
}