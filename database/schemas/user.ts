import { pgEnum, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";


const userRole = ["user", "admin"] as const
export type UserRole = typeof userRole[number]
export const userRoleEnum = pgEnum('users_user_role', userRole)
export const user = pgTable("users", {
    id: varchar("id", { length: 255 }) // 👈 Clerk userId
        .primaryKey()
        .notNull(),

    email: varchar("email", { length: 255 }).notNull(),
    role: userRoleEnum().default("user"),
    name: varchar("name", { length: 255 }),
    imageUrl: varchar("image_url", { length: 500 }),
    createdAt: timestamp("created_at").defaultNow(),
})
