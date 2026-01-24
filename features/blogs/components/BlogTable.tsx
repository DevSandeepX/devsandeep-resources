import DataTable, { Column } from '@/components/common/DataTable';
import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';
import { formateDate } from '@/lib/formatters';
import Image from 'next/image';
import React from 'react'
import { Pencil, Trash2 } from 'lucide-react';
import { ActionButton } from '@/components/common/ActionButton';
import Link from 'next/link';
import { deleteBlog } from '../actions/blog';

type BlogTableProps = {
    blogs: {
        title: string;
        id: string;
        slug: string;
        imageUrl: string | null;
        createdAt: Date;
    }[]
}

const columns: Column<Item>[] = [
    { name: "Image", accessor: "imageUrl", },
    { name: "Title", accessor: "title", },
    { name: "Slug", accessor: "slug", },
    { name: "Created", accessor: "createdAt", },
    { name: "Actions" },
]

type Item = {
    imageUrl: string | null;
    title: string;
    slug: string;
    createdAt: Date;
    id: string;
}

function renderRow(item: Item) {
    return <TableRow key={item.id}>
        <TableCell>
            {item.imageUrl && (
                <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={48}
                    height={48}
                    className='rounded object-cover'
                />
            )}
        </TableCell>
        <TableCell>{item.title}</TableCell>
        <TableCell>{item.slug}</TableCell>
        <TableCell>{formateDate(item.createdAt)}</TableCell>
        <TableCell>
            <div className='flex gap-2 justify-start'>
                <ActionButton requireAreYouSure action={deleteBlog.bind(null, item.id)}>
                    <Trash2 />
                </ActionButton>
                <Button asChild variant="outline" className='text-green-400'>
                    <Link href={`/admin/blogs/${item.id}/edit`}>
                        <Pencil />
                    </Link>
                </Button>
            </div>
        </TableCell>
    </TableRow>
}

export default function BlogTable({
    blogs
}: BlogTableProps) {


    return (
        <div>
            <DataTable
                columns={columns}
                renderRow={renderRow}
                data={blogs}
            />
        </div>
    )
}
