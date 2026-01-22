import {
    pgTable,
    uuid,
    timestamp,
    varchar,
    text,
    pgEnum,
    numeric,
    uniqueIndex,
    index,
} from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

export const timestamps = {
    createdAt: timestamp("created_at", { withTimezone: true })
        .defaultNow()
        .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
        .defaultNow()
        .$onUpdate(() => new Date())
        .notNull(),
}

export const blogStatusEnum = pgEnum("blog_status", [
    "publish",
    "private",
])

export const tech = pgTable(
    "techs",
    {
        id: uuid("id").primaryKey().defaultRandom(),
        name: varchar("name", { length: 100 }).notNull(),
        slug: varchar("slug", { length: 100 }).notNull(),
        description: text("description"),
        imageUrl: varchar("image_url", { length: 255 }),
        ...timestamps,
    },
    (table) => ({
        nameIdx: uniqueIndex("tech_name_idx").on(table.name),
    })
)

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

export const user = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 150 }).notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    profileImageUrl: varchar("profile_image_url", { length: 255 }),
    ...timestamps,
})

export const comment = pgTable(
    "comments",
    {
        id: uuid("id").primaryKey().defaultRandom(),

        blogId: uuid("blog_id")
            .references(() => blog.id, { onDelete: "cascade" })
            .notNull(),

        userId: uuid("user_id")
            .references(() => user.id, { onDelete: "cascade" })
            .notNull(),

        message: text("message").notNull(),

        ...timestamps,
    },
    (table) => ({
        blogIdx: index("comment_blog_idx").on(table.blogId),
        userIdx: index("comment_user_idx").on(table.userId),
    })
)

export const rating = pgTable(
    "ratings",
    {
        id: uuid("id").primaryKey().defaultRandom(),

        blogId: uuid("blog_id")
            .references(() => blog.id, { onDelete: "cascade" })
            .notNull(),
        userId: uuid("user_id")
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

export const review = pgTable('reviews', {
    id: uuid("id").primaryKey().defaultRandom(),

    blogId: uuid("blog_id")
        .references(() => blog.id, { onDelete: "cascade" })
        .notNull(),

    userId: uuid("user_id")
        .references(() => user.id, { onDelete: "cascade" })
        .notNull(),
    review: text("review"),
    ...timestamps
})

export const techRelations = relations(tech, ({ many }) => ({
    blogs: many(blog),
}))

export const blogRelations = relations(blog, ({ many }) => ({
    markdowns: many(markdown),
    reviews: many(review),
    ratings: many(rating),
}))

export const userRelations = relations(user, ({ many }) => ({
    reviews: many(review),
    ratings: many(rating),
}))

export const commentRelations = relations(comment, ({ one }) => ({
    user: one(user, {
        fields: [comment.userId],
        references: [user.id],
    }),
    blog: one(blog, {
        fields: [comment.blogId],
        references: [blog.id],
    }),
}))

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



