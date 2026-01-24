import { PageHeader } from '@/components/admin/PageHeade'
import { Button } from '@/components/ui/button'
import BlogTable from '@/features/blogs/components/BlogTable'
import { getBlogs } from '@/features/blogs/db/blogs'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default async function BlogsPage() {
    const blogs = await getBlogs()

    return (
        <div>
            <PageHeader title='Blogs'>
                <Button asChild>
                    <Link href={`/admin/blogs/new`}>
                        <Plus /> New Blog
                    </Link>
                </Button>
            </PageHeader>
            <BlogTable blogs={blogs} />
        </div>
    )
}
