import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', "/categories(.*)", "/blogs(.*)", "/", "/api(.*)"])
const isAdminRoute = createRouteMatcher(['/admin(.*)'])


export default clerkMiddleware(async (auth, req) => {
    if (!isPublicRoute(req)) {
        await auth.protect()
    }

    if (isAdminRoute(req)) {
        const authData = await auth()
        const res = await fetch(new URL("/api/auth/role", req.url), {
            headers: {
                cookie: req.headers.get("cookie") ?? "",
            },
        })

        if (!res.ok) {
            return NextResponse.redirect(new URL("/", req.url))
        }

        const { role } = await res.json()
        if (role !== "admin") {
            return NextResponse.redirect(new URL("/", req.url))
        }
    }
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}