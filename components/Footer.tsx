import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300">
            <div className="mx-auto max-w-7xl px-4 py-14">

                {/* Top */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-white">
                            DevSandeepX
                        </h3>
                        <p className="mt-4 text-sm text-gray-400">
                            Learn modern web development with high-quality blogs and tutorials
                            on Next.js, React, HTML, CSS, and more.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="mb-4 font-semibold text-white">Explore</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/blogs" className="hover:text-white">Blogs</Link></li>
                            <li><Link href="/categories" className="hover:text-white">Categories</Link></li>
                            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Tech */}
                    <div>
                        <h4 className="mb-4 font-semibold text-white">Tech</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Next.js</li>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="mb-4 font-semibold text-white">Follow</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">GitHub</a></li>
                            <li><a href="#" className="hover:text-white">Twitter / X</a></li>
                            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} DevSandeepX. All rights reserved.
                </div>

            </div>
        </footer>
    );
}
