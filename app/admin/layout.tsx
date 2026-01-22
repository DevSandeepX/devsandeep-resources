import { ReactNode } from "react";
import Header from "@/components/Header";
import FilterHeader from "@/components/Filter";
import Sidebar from "@/components/admin/Sidebar";
import AdminHeader from "@/components/admin/Header";

export default function AdminLayout({ children }: {
    children: ReactNode
}) {
    return (
        <div className="min-h-screen">
            <Sidebar />
            <div className="flex flex-col min-h-screen ml-64">
                <AdminHeader />
                <main className="flex-1 p-6 bg-muted/40">
                    {children}
                </main>
            </div>
        </div>
    )
}