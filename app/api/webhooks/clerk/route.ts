import { NextRequest } from "next/server";
import { verifyWebhook } from "@clerk/nextjs/webhooks"
import { deleteUser, upsertUser } from "@/features/users/db/users";
import { UserRole } from "@/database/schema";

export async function POST(request: NextRequest) {
    try {
        const event = await verifyWebhook(request)
        switch (event.type) {
            case "user.created":
            case "user.updated":
                const clerkData = event.data
                const name = `${clerkData.first_name} ${clerkData.last_name}`.trim()
                const email = clerkData.email_addresses.find(email => email.id === clerkData.primary_email_address_id)?.email_address

                if (name == null) return new Response("No Username found", { status: 400 })
                if (email == null) return new Response("No primary email found", { status: 400 })
                const role =
                    (event.data.public_metadata?.role as UserRole) ?? "user"
                await upsertUser({
                    id: clerkData.id,
                    name,
                    email,
                    imageUrl: clerkData.image_url,
                    createdAt: new Date(clerkData.created_at),
                    role
                })
                break
            case "user.deleted":
                if (event.data.id == null) return new Response("No User ID found", { status: 400 })
                await deleteUser(event.data.id)
                break
        }
    } catch (error) {
        console.log(error)
        return new Response("Invalid webhook", { status: 400 })
    }
    return new Response("Webhook received", { status: 200 })
}