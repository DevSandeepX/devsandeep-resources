import { db } from "@/database/db";
import { user } from "@/database/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export async function getCurrentUser() {
    const { userId } = await auth()
    if (userId == null) return null
    try {
        const dbUser = await db.query.user.findFirst({
            columns: { role: true },
            where: eq(user.id, userId)
        })

        if (dbUser == null) throw new Error("User not found")
        return dbUser
    } catch (error) {
        error instanceof Error &&
            console.log(error.message)
        throw new Error("Db Error")
    }
}