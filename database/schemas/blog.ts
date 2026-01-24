import { index, pgEnum, pgTable, text, uniqueIndex, uuid, varchar } from "drizzle-orm/pg-core";
import { tech } from "./tech";
import { relations } from "drizzle-orm";
import { markdown } from "./markdown";
import { review } from "./review";
import { rating } from "./rating";
import { timestamps } from "../schemaHelpers";

export const blogStatus = ["publish", "private"] as const
export type BlogStatus = (typeof blogStatus)[number]
export const blogStatusEnum = pgEnum("blog_status", [
    "publish",
    "private",
])

export const blog = pgTable(
    "blogs",
    {
        id: uuid("id").primaryKey().defaultRandom(),

        techId: uuid("tech_id")
            .references(() => tech.id, { onDelete: "cascade" })
            .notNull(),
        title: varchar("title", { length: 255 }).notNull(),
        imageUrl: varchar("image_url", { length: 255 }).notNull(),
        slug: varchar("slug", { length: 255 })
            .notNull()
            .unique(),
        status: blogStatusEnum("status")
            .default("publish")
            .notNull(),
        description: text("description"),
        ...timestamps,
    },
    (table) => ({
        slugIdx: uniqueIndex("blog_slug_idx").on(table.slug),
        techIdx: index("blog_tech_idx").on(table.techId),
        statusIdx: index("blog_status_idx").on(table.status),
        createdAtIdx: index("blog_created_at_idx").on(table.createdAt),
    })
)

export const blogRelations = relations(blog, ({ many }) => ({
    markdowns: many(markdown),
    reviews: many(review),
    ratings: many(rating),
}))