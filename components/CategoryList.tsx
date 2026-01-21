import { CATEGORIES } from "@/constants";
import CategoryCard from "./CategoryCard";
import { db } from "@/database/db";
import { desc } from "drizzle-orm";
import { tech } from "@/database/schema";
import { NoTechs } from "./notFound";



export default async function CategoriesList() {

    const techs = await getTechs()
    if (techs.length == 0) return <NoTechs />
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
                    {techs.map((tech) => (
                        <CategoryCard key={tech.slug} {...tech} />
                    ))}
                </div>

            </div>
        </section>
    );
}



export function getTechs() {
    return db.query.tech.findMany({
        orderBy: desc(tech.createdAt)
    })
}
