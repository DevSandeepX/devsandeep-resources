const STATS = [
    {
        value: "150+",
        label: "Tech Blogs",
    },
    {
        value: "50K+",
        label: "Monthly Readers",
    },
    {
        value: "20+",
        label: "Topics Covered",
    },
    {
        value: "5+",
        label: "Years Experience",
    },
];

export default function StatsList() {
    return (
        <section className="bg-white py-16 dark:bg-black">
            <div className="mx-auto max-w-7xl px-4">

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {STATS.map((stat, index) => (
                        <div
                            key={index}
                            className="rounded-xl border bg-gray-50 p-8 text-center transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
                        >
                            <h3 className="text-4xl font-extrabold text-blue-600">
                                {stat.value}
                            </h3>
                            <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
