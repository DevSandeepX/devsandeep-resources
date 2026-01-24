// import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { AuthButton } from "@/services/clerk/components/AuthButton";
import AdminLink from "./admin/AdminLink";

export default function Header() {

    return (
        <header className="fixed top-0 z-50 w-full border-b bg-white dark:bg-black">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <div className="flex gap-4">
                    <Link href="/" className="text-2xl font-bold text-blue-600">
                        DevSandeepX
                    </Link>
                    <AdminLink />
                </div>
                <nav className="hidden md:flex items-center gap-6">

                    {NAV_LINKS.map((link) => (
                        <Link href={link.href} className="hover:text-blue-600 text-sm" key={link.href}>{link.label}</Link>
                    ))}

                    <AuthButton />
                </nav>

            </div>

        </header>
    );
}


