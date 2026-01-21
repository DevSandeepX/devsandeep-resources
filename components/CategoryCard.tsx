import Image from 'next/image'
import Link from 'next/link'

export default function CategoryCard({ slug, name, imageUrl, description }: CategoryCard) {
    return (
        <Link
            key={slug}
            href={`/categories/${slug}`}
            className="group rounded-xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:bg-zinc-900"
        >
            <div className="flex items-center gap-4">
                <div className="relative w-16 h-12">
                    <Image src={imageUrl ?? "https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.webp?a=1&b=1&s=612x612&w=0&k=20&c=tYuiZwlaXjvdPwGxjZbQBdtcgG_i3SambRbsaGuW1jM="} alt={name} fill className='object cover rounded aspect-video' />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-blue-600">
                    {name}
                </h3>
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                {description}
            </p>
        </Link>
    )
}
