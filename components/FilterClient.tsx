"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search } from "./admin/Search";

type FilterHeaderClientProps = {
    data: {
        slug: string,
        name: string
    }[]
}

export default function FilterHeaderClient({ data }: FilterHeaderClientProps) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const activeParam = searchParams.get("category") ?? "all"
    const [active, setActive] = useState(activeParam);


    function handleFilter(slug: string) {
        const params = new URLSearchParams(searchParams.toString());
        if (slug === "all") {
            params.delete("category")
        } else {
            params.set("category", slug)
        }

        setActive(slug)
        router.push(`${pathname}?${params.toString()}`)
    }


    return (
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            <Button
                onClick={() => handleFilter("all")}
                variant="outline"
                className={cn(

                    active === "all"
                        ? "bg-blue-600 text-white"
                        : ""
                )}
            >
                All
            </Button>
            {data.map((item) => (
                <Button
                    key={item.slug}
                    variant="outline"
                    onClick={() => handleFilter(item.slug)}
                    className={cn(

                        active === item.slug
                            ? "bg-blue-600 text-white"
                            : ""
                    )}
                >
                    {item.name}
                </Button>
            ))}

            <Search />
        </div>
    );
}
