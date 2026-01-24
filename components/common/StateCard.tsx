import { Card } from '../ui/card'

export default function StateCard({ title, count }: {
    title: string
    count: number
}) {
    return (
        <Card className='p-4'>
            <h2 className='text-2xl font-semibold text-blue-700'>{title}</h2>
            <p className='text-sm text-muted-foreground'>{count}</p>
        </Card>
    )
}
