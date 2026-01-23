// app/admin/categories/page.tsx


import { CategoryTable } from "@/features/categories/components/CategoryTable"
import { Column, DataTable } from "@/features/categories/components/DataTable"
import { TableActions } from "@/features/categories/components/TableActions"
import { getCategories } from "@/features/categories/db/db"
import { formateDate } from "@/lib/formatters"
import Image from "next/image"





export default async function CategoriesPage() {
    const categories = await getCategories()

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-6">Categories</h1>
            <CategoryTable
                categories={categories}
            />
        </div>
    )
}
