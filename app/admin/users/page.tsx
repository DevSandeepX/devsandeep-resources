import { PageHeader } from '@/components/admin/PageHeade'
import BlogTable from '@/features/blogs/components/BlogTable'
import UserTable from '@/features/users/components/UserTable'
import { getUsers } from '@/features/users/db/users'

export default async function UsersPage() {
    const users = await getUsers()
    return (
        <div>
            <PageHeader title='Users' />
            <UserTable users={users} />
        </div>
    )
}
