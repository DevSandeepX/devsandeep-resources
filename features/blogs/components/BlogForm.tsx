"use client"

import { Card } from "@/components/ui/card"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { blogSchema } from "../schemas/blog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { BlogStatus, blogStatus } from "@/database/schema"
import { createBlog, updateBlog } from "../actions/blog"
import { actionToast } from "@/lib/actionToast"
import { useRouter } from "next/navigation"

type BlogFormProps = {
    blog?: {
        id: string
        title: string
        imageUrl: string
        description: string | null
        status: BlogStatus
        techId: string
    }
    categories: {
        id: string
        name: string
    }[]
}

export default function BlogForm({ categories, blog }: BlogFormProps) {
    const router = useRouter()

    const defaultValues: z.infer<typeof blogSchema> = {
        title: blog?.title ?? "",
        description: blog?.description ?? "",
        imageUrl: blog?.imageUrl ?? "",
        status: blog?.status ?? "private",
        techId: blog?.techId ?? "",
    }

    const form = useForm<z.infer<typeof blogSchema>>({
        resolver: zodResolver(blogSchema),
        defaultValues,
    })

    async function onSubmit(values: z.infer<typeof blogSchema>) {
        const action =
            blog == null ? createBlog : updateBlog.bind(null, blog.id)

        try {
            const data = await action(values)
            actionToast(data)

            if (data.success) {
                router.push("/admin/blogs")
                router.refresh()
            }
        } catch (error) {
            actionToast({
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : "Something went wrong",
            })
        }
    }

    return (
        <Card className="p-6">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid grid-cols-1 gap-6 md:grid-cols-2"
                >
                    {/* Title */}
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className="md:col-span-2">
                                <FormLabel>Blog Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter blog title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Image URL */}
                    <FormField
                        control={form.control}
                        name="imageUrl"
                        render={({ field }) => (
                            <FormItem className="md:col-span-2">
                                <FormLabel>Image URL</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="https://image-url.com"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Status */}
                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Status</FormLabel>
                                <Select
                                    value={field.value ?? ""}
                                    onValueChange={field.onChange}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select status" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {blogStatus.map((status) => (
                                            <SelectItem
                                                key={status}
                                                value={status}
                                                className="capitalize"
                                            >
                                                {status}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Category */}
                    <FormField
                        control={form.control}
                        name="techId"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Category</FormLabel>
                                <Select
                                    value={field.value ?? ""}
                                    onValueChange={field.onChange}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {categories.map((cat) => (
                                            <SelectItem
                                                key={cat.id}
                                                value={cat.id}
                                                className="capitalize"
                                            >
                                                {cat.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Description */}
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem className="md:col-span-2">
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        rows={6}
                                        placeholder="Write your blog content..."
                                        className="min-h-24"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Submit */}
                    <div className="md:col-span-2 flex justify-end">
                        <Button
                            type="submit"
                            disabled={form.formState.isSubmitting}
                        >
                            {form.formState.isSubmitting
                                ? blog
                                    ? "Updating..."
                                    : "Creating..."
                                : blog
                                    ? "Update Blog"
                                    : "Create Blog"}
                        </Button>
                    </div>
                </form>
            </Form>
        </Card>
    )
}
