export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80)",
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:py-28 lg:py-32">
                <div className="max-w-3xl">

          <span className="inline-block rounded-full bg-blue-600/20 px-4 py-1 text-sm text-blue-400">
            Learn Modern Web Development
          </span>

                    <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                        Learn <span className="text-blue-500">Next.js</span>,{" "}
                        <span className="text-blue-500">React</span>, HTML, CSS & More
                    </h1>

                    <p className="mt-6 text-lg text-gray-300 sm:text-xl">
                        High-quality blogs, tutorials, and real-world examples to help you
                        master modern web development — from basics to advanced concepts.
                    </p>

                    {/* Actions */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="/blogs"
                            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                        >
                            Explore Blogs
                        </a>

                        <a
                            href="/categories"
                            className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                        >
                            Browse Topics
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
