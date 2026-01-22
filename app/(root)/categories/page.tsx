import { db } from "@/database/db"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Categories | DevSandeepX",
    description: "Browse blogs by technology | category"
}

export default async function page() {
    const categories = await db.query.tech.findMany({
        columns: {
            id: true,
            name: true,
            slug: true,
            description: true,
            imageUrl: true
        },
        orderBy: (tech, { asc }) => [asc(tech.name)]
    })
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="mb-12 max-w-2xl">
                <h1 className="text-4xl font-bold">Browse Categories</h1>
                <p className="mt-3 text-muted-foreground">
                    Explore blogs by technology, framework, or programming language.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map(cat => (
                    <Link key={cat.id}
                        href={`/blogs?category=${cat.slug}`}
                        className="group rounded-xl border bg-white p-6 transition hover:translate-y-1 hover:shadow-lg dark:bg-zinc-900"
                    >
                        <h3 className="text-xl font-semibold group-hover:text-blue-600">
                            {cat.name}
                        </h3>

                        {cat.description && (
                            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{cat.description}</p>
                        )}

                        <span className="mt-4 inline-block text-sm font-medium text-blue-600">
                            View blogs →
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    )
}
