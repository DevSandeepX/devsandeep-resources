import { PageHeader } from '@/components/admin/PageHeade'
import BlogForm from '@/features/blogs/components/BlogForm'
import { getCategoriesCustomeField } from '@/features/categories/db/db'
import React from 'react'

export default async function NewBlogPage() {
    const categories = await getCategoriesCustomeField()
    return (
        <div className='container mx-auto px-4 flex flex-col gap-3'>
            <PageHeader title='New Blog' />
            <BlogForm categories={categories} />
        </div>
    )
}
