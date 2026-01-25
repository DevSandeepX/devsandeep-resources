import BlogStateSuspense from "@/components/admin/BlogStateSuspense";
import TechStateSuspense from "@/components/admin/TechStateSuspense";
import UserStateSuspense from "@/components/admin/UserStateSuspense";
export const dynamic = "force-dynamic";

export default async function AdminDashboard() {

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <UserStateSuspense />
                <BlogStateSuspense />
                <TechStateSuspense />
            </div>
        </div>
    )
}