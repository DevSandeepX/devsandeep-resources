import { db } from "@/database/db";
import { blog } from "@/database/schema";
import { NewBlog } from "@/database/schemas/types";
import { count, desc, eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function insertBlogDb(data: NewBlog) {
    try {
        const [newBlog] = await db.insert(blog).values(data).returning()
        if (newBlog == null) throw new Error("Insert error")
        return newBlog
    } catch (error) {
        console.log("Db Call Error : ", error)
        throw new Error("Failed to craete blog")
    }
}
export async function updateBlogDb(id: string, data: Partial<NewBlog>) {
    try {
        const [updatedBlog] = await db.update(blog).set(data).where(eq(blog.id, id)).returning()
        if (updatedBlog == null) throw new Error("Update error")
        return updatedBlog
    } catch (error) {
        console.log("Db Call Error : ", error)
        throw new Error("Failed to update blog")
    }
}
export async function deleteBlogDb(id: string) {
    try {
        const [deletedBlog] = await db.delete(blog).where(eq(blog.id, id)).returning()
        if (deletedBlog == null) throw new Error("Insert error")
        return deletedBlog
    } catch (error) {
        console.log("Db Call Error : ", error)
        throw new Error("Failed to delete blog")
    }
}

export async function getBlog(id: string) {
    return db.query.blog.findFirst({
        where: eq(blog.id, id)
    })
}
export async function getBlogs() {
    return db.query.blog.findMany({
        orderBy: desc(blog.createdAt)
    })
}

export async function getTotalBlogs() {
    try {
        const result = await db
            .select({ total: count() })
            .from(blog)

        return result[0]?.total ?? 0
    } catch (error) {
        console.error("Error fetching total blogs:", error)
        throw new Error("Failed to get total blogs")
    }
}