"use server"

import z from "zod"
import { categorySchema } from "../schemas/schema"
import { deleteCategoryDb, insertCategoryDb, updateCategoryDb } from "../db/db"
import { generateSlug } from "@/lib/utils"

export async function createCategory(
    unsafe: z.infer<typeof categorySchema>
) {
    const parsed = categorySchema.safeParse(unsafe)

    if (!parsed.success) {
        return {
            success: false,
            message: "Invalid data received",
        }
    }

    await insertCategoryDb({
        ...parsed.data,
        slug: generateSlug(parsed.data.name),
    })

    return {
        success: true,
        message: "Category created successfully",
    }
}

export async function updateCategory(
    id: string,
    unsafe: z.infer<typeof categorySchema>
) {
    const parsed = categorySchema.safeParse(unsafe)

    if (!parsed.success) {
        return {
            success: false,
            message: "Invalid data received",
        }
    }

    await updateCategoryDb(id, {
        ...parsed.data,
        slug: generateSlug(parsed.data.name),
    })

    return {
        success: true,
        message: "Category updated successfully",
    }
}

export async function deleteCategory(
    id: string,

) {


    await deleteCategoryDb(id)

    return {
        success: true,
        message: "Category Deleted successfully",
    }
}
