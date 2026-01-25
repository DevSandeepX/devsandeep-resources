import { PageHeader } from '@/components/admin/PageHeade'
import BlogForm from '@/features/blogs/components/BlogForm'
import { getBlog } from '@/features/blogs/db/blogs'
import { getCategories } from '@/features/categories/db/db'
import { notFound } from 'next/navigation'
import React from 'react'
export const dynamic = "force-dynamic";
export default async function EditBlogPage({ params }: {
  params: Promise<{ bId: string }>
}) {

  const { bId } = await params
  const blog = await getBlog(bId)
  const categories = await getCategories()
  if (blog == null) return notFound()


  return (
    <div>
      <PageHeader title={`update ${blog.title}`} />
      <BlogForm categories={categories} blog={blog} />
    </div>
  )
}
