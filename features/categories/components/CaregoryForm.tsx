"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { categorySchema } from "../schemas/schema"
import { z } from "zod"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

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
import { Button } from "@/components/ui/button"

import { createCategory, updateCategory } from "../actions/category"
import { actionToast } from "@/lib/actionToast"
import { useRouter } from "next/navigation"

type Category = {
    id: string
    name: string
    description: string | null
    imageUrl: string | null
}

export function CategoryForm({ category }: { category?: Category }) {
    const router = useRouter()
    const form = useForm<z.infer<typeof categorySchema>>({
        resolver: zodResolver(categorySchema),
        defaultValues: {
            name: category?.name ?? "",
            description: category?.description ?? "",
            imageUrl: category?.imageUrl ?? "",
        },
    })

    async function onSubmit(values: z.infer<typeof categorySchema>) {
        const action = category
            ? updateCategory.bind(null, category.id)
            : createCategory

        try {
            const data = await action(values)
            actionToast(data)
            if (data.success) {
                router.push("/admin/categories")
            }
        } catch (error) {
            console.error(error)
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
        <div className="container mx-auto max-w-3xl px-4">
            <Card>
                <CardHeader>
                    <CardTitle>
                        {category ? "Update" : "New"} Category
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Category Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="Next.js"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="imageUrl"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Category Image URL</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="https://images.unsplash.com/..."
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                placeholder="Write category description..."
                                                className="min-h-[150px] resize-none"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex justify-end">
                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={form.formState.isSubmitting}
                                >
                                    {form.formState.isSubmitting
                                        ? "Saving..."
                                        : "Save"}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
