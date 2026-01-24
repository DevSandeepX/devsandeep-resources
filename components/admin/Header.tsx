import { Search } from "./Search";

export default function AdminHeader() {
    return (
        <header className="sticky top-0 z-30 h-16 border border-b bg-background/80 backdrop-blur">
            <div className="flex h-full items-center justify-between px-6">
                <Search />
                <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">Admin</span>
                    <div className="h-8 w-8 rounded-full bg-muted" />
                </div>
            </div>
        </header>
    )
}