"use client"

import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignOutButton,
    UserButton,
} from "@clerk/nextjs"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { User, LayoutDashboard, LogOut } from "lucide-react"
import Link from "next/link"

export function AuthButton() {
    return (
        <>
            {/* 🔓 Not logged in */}
            <SignedOut>
                <Button asChild variant="default">
                    <SignInButton mode="modal">
                        Sign In
                    </SignInButton>
                </Button>
            </SignedOut>

            {/* 🔐 Logged in */}
            <SignedIn>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full"
                        >
                            <UserButton
                                appearance={{
                                    elements: {
                                        avatarBox: "w-8 h-8",
                                    },
                                }}
                            />
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-44">
                        <DropdownMenuItem asChild>
                            <Link href="/profile" className="flex gap-2">
                                <User size={16} /> Profile
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <Link href="/admin" className="flex gap-2">
                                <LayoutDashboard size={16} /> Dashboard
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem>
                            <SignOutButton>
                                <span className="flex gap-2 text-red-500">
                                    <LogOut size={16} /> Logout
                                </span>
                            </SignOutButton>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SignedIn>
        </>
    )
}
