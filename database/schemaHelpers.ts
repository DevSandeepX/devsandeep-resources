import { timestamp } from "drizzle-orm/pg-core"

export const updatedAt = timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull()

export const createdAt = timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull()

export const timestamps = {
    updatedAt,
    createdAt

}
