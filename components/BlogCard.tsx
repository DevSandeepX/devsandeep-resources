import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type BlogProps = {
    id: string,
    title: string,
    description: string | null,
    imageUrl: string,
    slug: string,
}

export default function BlogCard({ id, imageUrl, title, description, slug }: BlogProps) {
    return (
        < Link
            key={id}
            href={`/blogs/${slug}`}
            className="group overflow-hidden rounded-xl border transition hover:shadow-lg dark:border-zinc-800"
        >
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="h-full w-full object-cover transition group-hover:scale-105"
                />
            </div>

            <div className="p-5">
                {/* <span className="text-xs font-semibold text-blue-600">
                  {tag}
                </span> */}

                <h3 className="mt-2 text-lg font-semibold group-hover:text-blue-600 line-clamp-1">
                    {title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                    {description}
                </p>
                <Button
                    className="mt-6 w-full"
                >Explore More...</Button>
            </div>
        </Link>
    )
}