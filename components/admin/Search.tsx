"use client"

import { SearchIcon } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Input } from "../ui/input"

export function Search() {
    const pathname = usePathname()
    const router = useRouter()
    const params = useSearchParams()

    const [searchText, setSearchText] = useState(
        params.get("search") ?? ""
    )

    useEffect(() => {
        const timeout = setTimeout(() => {
            const newParams = new URLSearchParams(params.toString())

            if (!searchText) {
                newParams.delete("search")
            } else {
                newParams.set("search", searchText)
            }

            router.push(`${pathname}?${newParams.toString()}`)
        }, 300)

        return () => clearTimeout(timeout)
    }, [searchText, pathname, params, router])

    return (
        <div className="relative w-full max-w-sm rounded!">
            <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

            <Input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search..."
                className="
                    rounded-full
                    bg-transparent
                    px-6
                    focus-visible:ring-0
                    focus-visible:ring-offset-0
                "
            />
        </div>
    )
}
