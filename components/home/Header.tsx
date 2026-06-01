export default function Header() {
    return (
        <section className="w-full min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-3xl text-center px-6">

                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                    Build Modern Web Products Faster
                </h1>

                <p className="mt-6 text-lg text-gray-600">
                    We help startups and developers build scalable SaaS products with clean architecture and modern tech.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition">
                        Get Started
                    </button>

                    <button className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition">
                        Learn More
                    </button>
                </div>

            </div>
        </section>
    );
}