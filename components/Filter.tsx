

import { db } from "@/database/db";
import FilterHeaderClient from "./FilterClient";

export default async function FilterHeader() {
    const techs = await getTech()
    if (techs.length == 0) return null

    return (
        <div className="w-full border-b bg-white dark:bg-black fixed top-[60px] z-50">
            <div className="container mx-auto px-4 py-3">
                <FilterHeaderClient data={techs} />
            </div>
        </div>
    );
}

async function getTech() {
    return db.query.tech.findMany({
        columns: { slug: true, name: true }
    })
}