import { index, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { blog } from "./blog";
import { timestamps } from "../schemaHelpers";

export const markdown = pgTable(
    "blog_markdowns",
    {
        id: uuid("id").primaryKey().defaultRandom(),

        blogId: uuid("blog_id")
            .references(() => blog.id, { onDelete: "cascade" })
            .notNull(),

        content: text("content").notNull(),

        ...timestamps,
    },
    (table) => ({
        blogIdx: index("markdown_blog_idx").on(table.blogId),
    })
)