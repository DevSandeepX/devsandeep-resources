"use client"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"

type TableActionsProps = {
    onEdit?: () => void
    onDelete?: () => void
}

export function TableActions({ onDelete, onEdit }: TableActionsProps) {
    return <div className="flex justify-end gap-2">
        {onEdit && (
            <Button size="icon" variant="outline" onClick={onEdit}>
                <Pencil className="h-4 w-4" />
            </Button>
        )}

        {onDelete && (
            <Button size="icon" variant="outline" onClick={onDelete}>
                <Trash2 className="h-4 w-4" />
            </Button>
        )}
    </div>
}