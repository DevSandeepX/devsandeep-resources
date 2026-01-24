import { getCurrentUser } from '@/services/clerk/lib/getCurrentUser'
import { Button } from '../ui/button'
import Link from 'next/link'

export default async function AdminLink() {
    const user = await getCurrentUser()

    if (user?.role !== "admin") {
        return null
    }

    return (
        <Button asChild size="sm">
            <Link href={"/admin"}>
                Admin
            </Link>
        </Button>
    )
}
