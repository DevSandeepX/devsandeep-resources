import Link from "next/link"

const ADMIN_LINKS = [
    { name: "Dashboard", href: "/admin" },
    { name: "Blogs", href: "/admin/blogs" },
    { name: "Users", href: "/admin/users" },
    { name: "Categories", href: "/admin/categories" },
]

export default function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background">
            <div className="flex h-16 items-center px-6 font-bold text-lg">
                Admin Panel
            </div>
            <nav className="space-y-1 px-4">
                {ADMIN_LINKS.map((link) => (
                    <Link href={link.href}
                        key={link.href}
                        className="block rounded-lg px-4 py-2 text-sm hover:bg-muted transition">
                        {link.name}
                    </Link>
                ))}
            </nav>

        </aside>
    )
}