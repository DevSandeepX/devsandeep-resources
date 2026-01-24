import StateCard from '../common/StateCard'
import { getTotalCategories } from '@/features/categories/db/db'
import StateCardSkelton from '../common/StateCardSkelton'
import { Suspense } from 'react'

export default async function TechStateSuspense() {
    const techsCount = await getTotalCategories()
    return (
        <Suspense fallback={<StateCardSkelton />}>
            <StateCard title="Categories" count={techsCount} />
        </Suspense>
    )
}
