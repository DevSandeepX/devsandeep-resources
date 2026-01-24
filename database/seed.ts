import { db } from "@/database/db"
import { blog, markdown, rating, review, tech, user } from "./schema"


async function seed() {
    await db.delete(markdown)
    await db.delete(rating)
    await db.delete(review)
    await db.delete(blog)
    await db.delete(tech)
    await db.delete(user)
    console.log("✅ All tables cleaned")
}

seed()
    .catch(console.error)
    .finally(() => process.exit(0))
