"use client";

import { useState } from "react";
import {FILTER_LINKS} from "@/constants";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

export default function FilterHeader() {
    const [active, setActive] = useState("all");

    return (
        <div className="w-full border-b bg-white dark:bg-black">
            <div className="container mx-auto px-4 py-3">

                <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                    {FILTER_LINKS.map((item) => (
                        <Button
                            key={item.slug}
                            variant="outline"
                            onClick={() => setActive(item.slug)}
                            className={cn(

                                active === item.slug
                                    ? "bg-blue-600 text-white"
                                    : ""
                            )}
                        >
                            {item.label}
                        </Button>
                    ))}
                </div>

            </div>
        </div>
    );
}
