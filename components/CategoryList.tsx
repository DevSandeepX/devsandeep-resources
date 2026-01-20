import Link from "next/link";
import {CATEGORIES} from "@/constants";



export default function CategoriesList() {
    return (
        <section className="bg-gray-50 dark:bg-black py-16">
            <div className="mx-auto max-w-7xl px-4">

                {/* Section Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        What You’ll Learn
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        Explore blogs and tutorials across modern web technologies
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {CATEGORIES.map((cat) => (
                        <Link
                            key={cat.slug}
                            href={`/categories/${cat.slug}`}
                            className="group rounded-xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:bg-zinc-900"
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-3xl">{cat.icon}</div>
                                <h3 className="text-xl font-semibold group-hover:text-blue-600">
                                    {cat.title}
                                </h3>
                            </div>

                            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                                {cat.description}
                            </p>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
