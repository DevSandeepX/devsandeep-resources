import { Loader2 } from "lucide-react"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function LoadingTextSwap({
    isLoading,
    children,
}: {
    isLoading: boolean
    children: ReactNode
}) {
    return (
        <span className="inline-flex items-center justify-center gap-2">
            {/* Text */}
            <span
                className={cn(
                    "whitespace-nowrap transition-all duration-200",
                    isLoading ? "invisible w-0" : "visible w-auto"
                )}
            >
                {children}
            </span>

            {/* Spinner */}
            <Loader2
                className={cn(
                    "size-4 animate-spin transition-all duration-200",
                    isLoading ? "visible opacity-100" : "invisible opacity-0"
                )}
            />
        </span>
    )
}
