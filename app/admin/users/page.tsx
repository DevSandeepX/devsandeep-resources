import { PageHeader } from '@/components/admin/PageHeade'
import UserTable from '@/features/users/components/UserTable'
import { getUsers } from '@/features/users/db/users'
import { Suspense } from 'react';
export const dynamic = "force-dynamic";
export default async function UsersPage() {
    const users = await getUsers()
    return (
        <div>
            <PageHeader title='Users' />
            <Suspense fallback={<div className='w-full h-48 bg-muted rounded' />}>
                <UserTable users={users} />
            </Suspense>
        </div>
    )
}
