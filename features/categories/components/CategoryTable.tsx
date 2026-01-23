"use client"

import Image from "next/image"
import { formateDate } from "@/lib/formatters"
import { TableActions } from "./TableActions"
import { DataTable, Column } from "./DataTable"
import { deleteCategory } from "../actions/category"
import { useRouter } from "next/navigation"
import { actionToast } from "@/lib/actionToast"

type CategoryDataTypes = {
    id: string
    name: string
    slug: string
    imageUrl: string | null
    createdAt: Date
}



export function CategoryTable({
    categories,
}: {
    categories: CategoryDataTypes[]
}) {

    const router = useRouter()

    async function handleDelete(id: string) {
        const res = await deleteCategory(id)
        actionToast(res)
        router.refresh()
    }
    async function handleEdit(id: string) {
        router.push(`/admin/categories/${id}/edit`)
    }

    const categoryColumns: Column<CategoryDataTypes>[] = [
        {
            header: "Image",
            cell: (cat) =>
                cat.imageUrl ? (
                    <Image
                        src={cat.imageUrl}
                        alt={cat.name}
                        width={48}
                        height={48}
                        className="rounded-md object-cover"
                    />
                ) : null,
        },
        {
            header: "Name",
            accessor: "name",
        },
        {
            header: "Slug",
            accessor: "slug",
        },
        {
            header: "Created",
            cell: (cat) => formateDate(new Date(cat.createdAt)),
        },
        {
            header: "Actions",
            className: "text-right",
            cell: (cat) => (
                <TableActions
                    onEdit={() => handleEdit(cat.id)}
                    onDelete={() => handleDelete(cat.id)}
                />
            ),
        },
    ]

    return (
        <DataTable
            data={categories}
            columns={categoryColumns}
            emptyMessage="No categories found"
        />
    )
}
