import { CATEGORIES } from "@/constants";
import CategoryCard from "./CategoryCard";



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
                        <CategoryCard key={cat.slug} {...cat} />
                    ))}
                </div>

            </div>
        </section>
    );
}
