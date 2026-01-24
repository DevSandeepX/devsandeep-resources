import { db } from "@/database/db";
import { user } from "@/database/schema";
import { count, desc, eq } from "drizzle-orm";

export async function upsertUser(data: typeof user.$inferInsert) {
    try {
        const [dbUser] =
            await db.insert(user)
                .values(data)
                .onConflictDoUpdate({ target: [user.id], set: data })
                .returning()

        if (dbUser == null) throw new Error("failed to usert user")
        return dbUser
    } catch (error) {
        console.log("Db Error : ", error)
        error instanceof Error ?
            console.log(error.message)
            : console.log(error)
        throw new Error("Error while upserting user :")
    }
}

export async function deleteUser(id: string) {
    try {
        const [dbUser] =
            await db.delete(user)
                .where(eq(user.id, id))
                .returning()

        if (dbUser == null) throw new Error("failed to delete user")
        return dbUser
    } catch (error) {
        error instanceof Error ?
            console.log(error.message)
            : console.log("Db Error : ", error)
        throw new Error("Somthing went wrong")
    }

}

export async function getUsers() {
    return db.query.user.findMany({
        orderBy: desc(user.createdAt)
    })
}

export async function getTotalUsers() {
    try {
        const result = await db
            .select({ total: count() })
            .from(user)

        return result[0]?.total ?? 0
    } catch (error) {
        console.error("Error fetching total users:", error)
        throw new Error("Failed to get total users")
    }
}