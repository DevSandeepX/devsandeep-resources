// app/admin/categories/page.tsx


import { PageHeader } from "@/components/admin/PageHeade"
import { Button } from "@/components/ui/button"
import CategoryTable from "@/features/categories/components/CategoryTable"
import { getCategories } from "@/features/categories/db/db"
import { Plus } from "lucide-react"
import Link from "next/link"
export const dynamic = "force-dynamic";
export default async function CategoriesPage() {
    const categories = await getCategories()

    return (
        <div className="p-6">
            <PageHeader title="Categories">
                <Button asChild>
                    <Link href={`/admin/categories/new`}>
                        <Plus /> New Category
                    </Link>
                </Button>
            </PageHeader>
            <CategoryTable
                categories={categories}
            />
        </div>
    )
}
