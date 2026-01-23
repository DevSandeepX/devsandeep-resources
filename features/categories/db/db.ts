import { db } from "@/database/db";
import { tech } from "@/database/schema";
import { NewTech } from "@/database/schemas/types";
import { desc, eq } from "drizzle-orm";

export async function insertCategoryDb(data: NewTech) {
    try {
        const [category] = await db.insert(tech).values(data).returning()
        if (category == null) throw new Error("Insert error")
        return category
    } catch (error) {
        console.log("Db Call Error : ", error)
        throw new Error("Failed to craete category")
    }
}

export async function updateCategoryDb(id: string, data: Partial<NewTech>) {
    try {
        const [category] = await db
            .update(tech)
            .set(data)
            .where(eq(tech.id, id))
            .returning()

        if (!category) {
            throw new Error("Category not found")
        }

        return category
    } catch (error) {
        console.error("Update category DB error:", error)
        throw new Error("Failed to update category")
    }
}
export async function deleteCategoryDb(id: string) {
    try {
        const [category] = await db
            .delete(tech)
            .where(eq(tech.id, id))
            .returning()

        if (!category) {
            throw new Error("Category not found")
        }

        return category
    } catch (error) {
        console.error("Delete category DB error:", error)
        throw new Error("Failed to delete category")
    }
}

export async function getCategories() {
    return await db.query.tech.findMany({
        orderBy: desc(tech.createdAt),
    })
}

export async function getCategory(id: string) {
    return await db.query.tech.findFirst({
        where: eq(tech.id, id),
    })
}