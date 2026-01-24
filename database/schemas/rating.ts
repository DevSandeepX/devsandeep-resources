import { index, numeric, pgTable, uniqueIndex, uuid, varchar } from "drizzle-orm/pg-core";
import { blog } from "./blog";
import { user } from "./user";
import { relations } from "drizzle-orm";
import { timestamps } from "../schemaHelpers";

export const rating = pgTable(
    "ratings",
    {
        id: uuid("id").primaryKey().defaultRandom(),

        blogId: uuid("blog_id")
            .references(() => blog.id, { onDelete: "cascade" })
            .notNull(),
        userId: varchar("user_id")
            .references(() => user.id, { onDelete: "cascade" })
            .notNull(),
        rating: numeric("rating", { precision: 2, scale: 1 }).notNull(),

        ...timestamps,
    },
    (table) => ({
        blogIdx: index("rating_blog_idx").on(table.blogId),
        userIdx: index("rating_user_idx").on(table.userId),
        uniqueUserBlogIdx: uniqueIndex("rating_user_blog_idx").on(
            table.blogId,
            table.userId
        ),
    })
)

export const ratingRelations = relations(rating, ({ one }) => ({
    blog: one(blog, {
        fields: [rating.blogId],
        references: [blog.id],
    }),
    user: one(user, {
        fields: [rating.userId],
        references: [user.id],
    }),
}))