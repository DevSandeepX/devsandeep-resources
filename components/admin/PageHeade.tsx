import { ReactNode } from "react";

export function PageHeader({ title, children }: {
    title: string,
    children?: ReactNode
}) {

    return <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{title}</h1>
        {children && (
            <div>{children}</div>
        )}
    </div>
}