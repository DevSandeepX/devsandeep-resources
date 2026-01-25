import { CategoryForm } from "@/features/categories/components/CaregoryForm";
import { getCategory } from "@/features/categories/db/db";
import { notFound } from "next/navigation";
export const dynamic = "force-dynamic";
export default async function EditCategoryPage({ params }: {
    params: Promise<{ catId: string }>
}) {

    const { catId } = await params
    const category = await getCategory(catId)
    if (!category) return notFound()
    return (
        <div className="py-4">
            <div className="text-2xl font-semibold">
                Edit {category.name}
            </div>
            <CategoryForm category={category} />
        </div>
    )
}
