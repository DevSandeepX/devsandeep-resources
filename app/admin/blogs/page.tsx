import { PageHeader } from '@/components/admin/PageHeade'
import { Button } from '@/components/ui/button'
import BlogTable from '@/features/blogs/components/BlogTable'
import { getBlogs } from '@/features/blogs/db/blogs'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'
export const dynamic = "force-dynamic";

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
            <Suspense fallback={<div className='w-full h-34 bg-muted rounded' />}>
                <BlogTable blogs={blogs} />
            </Suspense>
        </div>
    )
}
