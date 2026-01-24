import {
    tech,
    blog,
    user,
    rating,
    markdown,
} from "../schema"

export type Tech = typeof tech.$inferSelect
export type NewTech = typeof tech.$inferInsert

export type Blog = typeof blog.$inferSelect
export type NewBlog = typeof blog.$inferInsert

export type User = typeof user.$inferSelect
export type NewUser = typeof user.$inferInsert

export type Rating = typeof rating.$inferSelect
export type NewRating = typeof rating.$inferInsert

export type Markdown = typeof markdown.$inferSelect
export type NewMarkdown = typeof markdown.$inferInsert
