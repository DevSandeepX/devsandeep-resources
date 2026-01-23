"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ReactNode } from "react"

export type Column<T> = {
    header: string
    accessor?: keyof T
    cell?: (row: T) => ReactNode
    className?: string
}

type DataTableProps<T> = {
    columns: Column<T>[]
    data: T[]
    emptyMessage?: string
}



type Category = {
    id: string
    name: string
    slug: string
    imageUrl: string | null
    createdAt: Date
}

export function DataTable<T>({
    data, columns, emptyMessage = "No data found"
}: DataTableProps<T>) {

    if (!data.length) {
        return (
            <p className="text-muted-foreground">{emptyMessage}</p>
        )
    }

    return (
        <div className="overflow-x-auto rounded-lg border">
            <Table>
                <TableHeader>
                    <TableRow>
                        {columns.map((col, colIndex) => (
                            <TableHead key={colIndex}>{col.header}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {columns.map((col, colIndex) => (
                                <TableCell key={colIndex}>
                                    {col.cell
                                        ? col.cell(row)
                                        : col.accessor
                                            ? String(row[col.accessor])
                                            : null}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}