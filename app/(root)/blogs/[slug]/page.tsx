import Markdown from '@/components/Markdown'
import { db } from '@/database/db'
import { blog, markdown } from '@/database/schema'
import { eq } from 'drizzle-orm'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export default async function BlogDetailPage({ params }: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    console.log(slug)
    const blog = await getsingleBlog(slug)
    if (!blog) {
        return notFound()
    }
    return (
        <article className='container mx-auto max-w-4xl px-4 py-12'>
            <div className='relative mb-8 aspect-[16/9] overflow-hidden rounded-xl'>
                <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    fill
                    className='object-cover'
                />
            </div>

            <header className='mb-10'>
                <h1 className='text-3xl font-bold leading-tight sm:text-4xl'>{blog.title}</h1>

                {blog.description && (
                    <p className='mt-4 text-lg text-muted-foreground'>{blog.description}</p>
                )}

                <div className='mt-4 text-lg text-muted-foreground'>
                    Published on{" "}
                    {new Date(blog.createdAt).toISOString()}
                </div>

                <section>
                    <Markdown content={blog.content} />
                </section>
            </header>
        </article>
    )
}


async function getsingleBlog(slug: string) {
    const result = await db
        .select({
            id: blog.id,
            slug: blog.slug,
            title: blog.title,
            imageUrl: blog.imageUrl,
            description: blog.description,
            createdAt: blog.createdAt,
            content: markdown.content,
        })
        .from(blog)
        .innerJoin(markdown,
            eq(markdown.blogId, blog.id)
        )
        .where(eq(blog.slug, slug))
        .limit(1)
    return result[0] ?? null
}