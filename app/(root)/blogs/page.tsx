import BlogsList from "@/components/BlogsList";
import FilterHeader from "@/components/Filter";
import { db } from "@/database/db";
import { blog, tech } from "@/database/schema";
import { and, desc, eq, ilike } from "drizzle-orm";

export const metadata = {
    title: "Tech Blog | Learn Next.js, React & Web Dev",
    description: "Read modern web development blogs on Next.js, React, Backend and more",
};



export default async function BlogPage({ searchParams, }: { searchParams?: Promise<{ [key: string]: string | undefined }> }) {
    const params = await searchParams
    const category = params?.category ?? ""
    const search = params?.search ?? ""
    console.log(category)

    return (
        <>
            <FilterHeader />
            <section className="container mx-auto px-4 py-12">
                <BlogsList
                    title="Tech Blog | Learn Next.js, React & Web Dev"
                    description="Read modern web development blogs on Next.js, React, Backend and more"
                    fn={() => getBlogs({ category, search })}
                />
            </section>
        </>
    );
}

/* Skeleton */
export function BlogListSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
                <div
                    key={i}
                    className="h-56 rounded-xl bg-muted animate-pulse"
                />
            ))}
        </div>
    );
}

async function getBlogs({ category = "", search = "" }: { category?: string, search?: string }) {
    const conditions = [];
    if (category) {
        conditions.push(eq(tech.slug, category))
    }
    if (search) {
        conditions.push(ilike(blog.title, `%${search}%`))
    }

    return db
        .select({
            id: blog.id,
            title: blog.title,
            description: blog.description,
            imageUrl: blog.imageUrl,
            slug: blog.slug
        })
        .from(blog)
        .limit(9)
        .leftJoin(
            tech,
            eq(blog.techId, tech.id)
        )
        .where(conditions.length ? and(...conditions) : undefined)
        .orderBy(desc(blog.createdAt))
}