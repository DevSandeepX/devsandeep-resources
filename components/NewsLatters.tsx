export default function Newsletters() {
    return (
        <section className="relative overflow-hidden bg-blue-600 py-16">

            {/* Decorative Gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-90" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">

                <h2 className="text-3xl font-bold sm:text-4xl">
                    Stay Updated with DevSandeepX
                </h2>

                <p className="mt-4 text-blue-100">
                    Get the latest blogs, tutorials, and web development tips directly in
                    your inbox.
                </p>

                {/* Form */}
                <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg px-4 py-3 text-sm text-black focus:outline-none"
                        required
                    />

                    <button
                        type="submit"
                        className="rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-900"
                    >
                        Subscribe
                    </button>
                </form>

                <p className="mt-4 text-xs text-blue-100">
                    No spam. Unsubscribe anytime.
                </p>

            </div>
        </section>
    );
}
