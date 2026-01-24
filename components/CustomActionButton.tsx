"use client"

import { ReactNode, useState } from "react"
import { Button } from "./ui/button"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "./ui/alert-dialog"
import { LoadingTextSwap } from "./LoadingTextSwap"

type CustomActionButtonProps = {
    action: () => Promise<void>
    areYouSoure?: boolean
    children: ReactNode
    variant?: "outline"
}

export function CustomActionButton({
    action,
    areYouSoure = false,
    children,
    variant,
}: CustomActionButtonProps) {
    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = useState(false)

    async function performAction() {
        try {
            setIsLoading(true)
            await action()

            // ✅ success → close dialog
            setOpen(false)
        } finally {
            setIsLoading(false)
        }
    }

    // 🔒 prevent close while loading
    const handleOpenChange = (value: boolean) => {
        if (isLoading) return
        setOpen(value)
    }

    if (areYouSoure) {
        return (
            <AlertDialog open={open} onOpenChange={handleOpenChange}>
                <AlertDialogTrigger asChild>
                    <Button variant={variant}>
                        <LoadingTextSwap isLoading={false}>
                            {children}
                        </LoadingTextSwap>
                    </Button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <div className="flex justify-end gap-2">
                        <AlertDialogCancel disabled={isLoading}>
                            Cancel
                        </AlertDialogCancel>

                        <AlertDialogAction
                            onClick={performAction}
                            disabled={isLoading}
                        >
                            <LoadingTextSwap isLoading={isLoading}>
                                Yes, Confirm
                            </LoadingTextSwap>
                        </AlertDialogAction>
                    </div>
                </AlertDialogContent>
            </AlertDialog>
        )
    }

    // 👉 No confirmation
    return (
        <Button
            variant={variant}
            onClick={performAction}
            disabled={isLoading}
        >
            <LoadingTextSwap isLoading={isLoading}>
                {children}
            </LoadingTextSwap>
        </Button>
    )
}
