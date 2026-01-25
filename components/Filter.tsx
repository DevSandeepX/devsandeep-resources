

import { db } from "@/database/db";
import FilterHeaderClient from "./FilterClient";
import { Suspense } from "react";

export default async function FilterHeader() {
    const techs = await getTech()
    if (techs.length == 0) return null

    return (
        <div className="w-full border-b bg-white dark:bg-black fixed top-[60px] z-50">
            <div className="container mx-auto px-4 py-3">
                <Suspense fallback={
                    <div className="grid grid-cols-4">
                        <div className="w-6 h-4 bg-muted" />
                        <div className="w-6 h-4 bg-muted" />
                        <div className="w-6 h-4 bg-muted" />
                        <div className="w-6 h-4 bg-muted" />
                    </div>
                }>
                    <FilterHeaderClient data={techs} />
                </Suspense>
            </div>
        </div>
    );
}

async function getTech() {
    return db.query.tech.findMany({
        columns: { slug: true, name: true }
    })
}