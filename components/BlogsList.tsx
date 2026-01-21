import Link from "next/link";
import {BLOGS} from "@/constants";
import BlogCard from "@/components/BlogCard";


export default function BlogsList() {
    return (
        <section className="bg-white py-16 dark:bg-black">
            <div className="mx-auto max-w-7xl px-4">

                {/* Header */}
                <div className="mb-12 flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-bold sm:text-4xl">Latest Blogs</h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Fresh tutorials and articles on modern web development
                        </p>
                    </div>

                    <Link
                        href="/blogs"
                        className="hidden sm:inline-block rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-zinc-800"
                    >
                        View All
                    </Link>
                </div>

                {/* Blog Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {BLOGS.map((blog) => (
                        <BlogCard {...blog} key={blog.id} />
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-10 text-center sm:hidden">
                    <Link
                        href="/blogs"
                        className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                    >
                        View All Blogs
                    </Link>
                </div>

            </div>
        </section>
    );
}
