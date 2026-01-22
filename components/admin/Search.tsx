"use client"
import { SearchIcon } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Input } from "../ui/input"

export function Search() {
    const pathname = usePathname()
    const router = useRouter()
    const params = useSearchParams()
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newParam = new URLSearchParams(params)
            if (searchText == "") {
                newParam.delete("search")
            } else {
                newParam.set("search", searchText)
            }
            router.push(`${pathname}?${newParam}`)
        }, 300)

        return () => clearInterval(intervalId)

    }, [searchText])
    return (
        <div className="relative w-full max-w-sm">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full rounded-lg border bg-background px-9 text-sm focus:outline-none"
            />
        </div>
    )
}
