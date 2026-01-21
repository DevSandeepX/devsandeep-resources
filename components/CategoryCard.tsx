import Link from 'next/link'
import React from 'react'

export default function CategoryCard({ slug, title, description }: CategoryCard) {
    return (
        <Link
            key={slug}
            href={`/categories/${slug}`}
            className="group rounded-xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:bg-zinc-900"
        >
            <div className="flex items-center gap-4">
                {/* <div className="text-3xl">{cat.icon}</div> */}
                <h3 className="text-xl font-semibold group-hover:text-blue-600">
                    {title}
                </h3>
            </div>

            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                {description}
            </p>
        </Link>
    )
}
