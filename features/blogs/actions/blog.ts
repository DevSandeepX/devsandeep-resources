"use server"

import z from "zod"
import { generateSlug } from "@/lib/utils"
import { blogSchema } from "../schemas/blog"
import { deleteBlogDb, insertBlogDb, updateBlogDb } from "../db/blogs"

export async function createBlog(
    unsafe: z.infer<typeof blogSchema>
) {
    const parsed = blogSchema.safeParse(unsafe)

    if (!parsed.success) {
        return {
            success: false,
            message: "Invalid data received",
        }
    }

    await insertBlogDb({
        ...parsed.data,
        slug: generateSlug(parsed.data.title),
    })

    return {
        success: true,
        message: "Blog created successfully",
    }
}

export async function updateBlog(
    id: string,
    unsafe: z.infer<typeof blogSchema>
) {
    const parsed = blogSchema.safeParse(unsafe)

    if (!parsed.success) {
        return {
            success: false,
            message: "Invalid data received",
        }
    }

    await updateBlogDb(id, {
        ...parsed.data,
        slug: generateSlug(parsed.data.title),
    })

    return {
        success: true,
        message: "blog updated successfully",
    }
}

export async function deleteBlog(
    id: string,
) {
    await deleteBlogDb(id)
    return {
        success: true,
        message: "Blog Deleted successfully",
    }
}
