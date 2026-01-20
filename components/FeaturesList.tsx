import {FEATURES} from "@/constants";

export default function WhyDevSandeepX() {
    return (
        <section className="bg-gray-50 py-16 dark:bg-zinc-950">
            <div className="mx-auto max-w-7xl px-4">

                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Why Learn From DevSandeepX?
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        Everything you need to grow as a modern web developer
                    </p>
                </div>

                {/* Content */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {FEATURES.map((item, i) => (
                        <div
                            key={i}
                            className="rounded-xl border bg-white p-6 text-center transition hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
                        >
                            <div className="mb-4 text-4xl">{item.icon}</div>
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
