import DataTable, { Column } from '@/components/common/DataTable';
import { TableCell, TableRow } from '@/components/ui/table';
import { formateDate } from '@/lib/formatters';
import Image from 'next/image';


type UserTableProps = {
    users: {
        id: string,
        createdAt: Date
        name: string;
        email: string;
        imageUrl: string | null;

    }[]
}

const columns: Column<Item>[] = [
    { name: "Image", accessor: "imageUrl", },
    { name: "Name", accessor: "name", },
    { name: "Email", accessor: "email", },
    { name: "Created", accessor: "createdAt", },
]

type Item = {
    id: string,
    createdAt: Date
    name: string;
    email: string;
    imageUrl: string | null;
}

function renderRow(item: Item) {
    return <TableRow key={item.id}>
        <TableCell>
            {item.imageUrl && (
                <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={48}
                    height={48}
                    className='rounded object-cover'
                />
            )}
        </TableCell>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.email}</TableCell>
        <TableCell>{formateDate(item.createdAt)}</TableCell>
    </TableRow>
}

export default function UserTable({
    users
}: UserTableProps) {


    return (
        <div>
            <DataTable
                columns={columns}
                renderRow={renderRow}
                data={users}
            />
        </div>
    )
}
