type StateCardProps ={
    value:string,
    label:string
}

export default function StateCard({value,label}:StateCardProps){
    return(
        <div
            className="rounded-xl border bg-gray-50 p-8 text-center transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
        >
            <h3 className="text-4xl font-extrabold text-blue-600">
                {value}
            </h3>
            <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                {label}
            </p>
        </div>
    )
}