import { blogStatus } from "@/database/schema"
import z from "zod"

export const blogSchema = z.object({
    techId: z
        .string()
        .trim()
        .min(1, "Please select a category"),

    title: z
        .string()
        .trim()
        .min(10, "Blog title must be at least 10 characters")
        .max(150, "Blog title must not exceed 150 characters"),

    imageUrl: z
        .string()
        .url("Please provide a valid image URL"),

    status: z.enum(blogStatus),

    description: z
        .string()
        .trim()
        .min(50, "Description must be at least 50 characters")
        .max(5000, "Description must not exceed 5000 characters"),
})
