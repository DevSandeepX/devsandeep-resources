import React, { ReactNode } from 'react'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui/table'

export type Column<T> = {
    name: string
    accessor?: keyof T
    className?: string
}

type DataTableProps<T> = {
    columns: Column<T>[]
    data: T[]
    renderRow: (item: T) => ReactNode
}


export default function DataTable<T>({
    columns,
    data,
    renderRow, }: DataTableProps<T>) {
    return (
        <div className='w-full overflow-x-auto rounded px-4'>
            <Table>
                <TableHeader>
                    <TableRow>
                        {columns.map((col, i) => (
                            <TableHead key={i}>{col.name}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((row) => renderRow(row))}
                </TableBody>
            </Table>
        </div>
    )
}
