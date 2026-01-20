"use client";

import { useState } from "react";
import Link from "next/link";
import {NAV_LINKS} from "@/constants";


export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full border-b bg-white dark:bg-black">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">

                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    DevSandeepX
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-6">
                    {NAV_LINKS.map((link) => (
                        <Link href="/" className="hover:text-blue-600 text-sm" key={link.href}>{link.label}</Link>
                    ))}

                </nav>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-2xl"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden border-t bg-white dark:bg-black">
                    <nav className="flex flex-col gap-4 p-4">
                        {NAV_LINKS.map((link) => (
                            <Link className="text-sm" href="/" key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
                        ))}

                    </nav>
                </div>
            )}
        </header>
    );
}
