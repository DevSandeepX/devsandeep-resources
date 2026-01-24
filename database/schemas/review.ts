import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";
import { blog } from "./blog";
import { user } from "./user";
import { timestamps } from "../schemaHelpers";

export const review = pgTable('reviews', {
    id: uuid("id").primaryKey().defaultRandom(),

    blogId: uuid("blog_id")
        .references(() => blog.id, { onDelete: "cascade" })
        .notNull(),

    userId: varchar("user_id")
        .references(() => user.id, { onDelete: "cascade" })
        .notNull(),
    review: text("review"),
    ...timestamps
})