import z from "zod";

export const categorySchema = z.object({
    name: z
        .string()
        .min(1, "Bug title must be at least 1 characters.")
        .max(100, "Bug title must be at most 100 characters."),

    imageUrl: z.string().url()
        .min(5, "Image URL must be at least 5 characters."),
    description: z
        .string()
        .min(50, "Description must be at least 50 characters.")

})