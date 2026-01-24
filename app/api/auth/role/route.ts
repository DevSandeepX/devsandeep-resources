import { auth } from "@clerk/nextjs/server"
import { db } from "@/database/db"
import { user } from "@/database/schema"
import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"

export async function GET() {
    const { userId } = await auth()
    if (!userId) {
        return NextResponse.json({ role: null }, { status: 401 })
    }

    const [dbUser] = await db
        .select({ role: user.role })
        .from(user)
        .where(eq(user.id, userId))

    return NextResponse.json({
        role: dbUser?.role ?? "user",
    })
}
