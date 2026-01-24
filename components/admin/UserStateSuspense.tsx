import { getTotalUsers } from '@/features/users/db/users'
import StateCard from '../common/StateCard'
import { Suspense } from 'react'
import StateCardSkelton from '../common/StateCardSkelton'

export default async function UserStateSuspense() {
    const usersCount = await getTotalUsers()
    return (
        <Suspense fallback={<StateCardSkelton />}>
            <StateCard title="Users" count={usersCount} />
        </Suspense>
    )
}
