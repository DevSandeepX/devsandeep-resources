import { pgTable, text, uniqueIndex, uuid, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { blog } from "./blog";
import { timestamps } from "../schemaHelpers";

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
export const techRelations = relations(tech, ({ many }) => ({
    blogs: many(blog),
}))