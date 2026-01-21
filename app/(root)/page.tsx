import Hero from "@/components/Hero";
import CategoriesList from "@/components/CategoryList";
import BlogsList from "@/components/BlogsList";
import WhyDevSandeepX from "@/components/FeaturesList";
import StatsList from "@/components/StatesList";
import Newsletters from "@/components/NewsLatters";
import { db } from "@/database/db";
import { desc } from "drizzle-orm";
import { blog } from "@/database/schema";
import { BlogListSkeleton } from "./blogs/page";
import { Suspense } from "react";

export default function HomePage() {
    return <>
        <Hero />
        <CategoriesList />
        <Suspense fallback={<BlogListSkeleton />}>
            <BlogsList title="Latest Blogs" description="Fresh tutorials and articles on modern web development" fn={getBlogs} />
        </Suspense>
        <WhyDevSandeepX />
        <StatsList />
        <Newsletters />
    </>
}

async function getBlogs() {
    return db.query.blog.findMany({
        orderBy: desc(blog.createdAt)
    })
}