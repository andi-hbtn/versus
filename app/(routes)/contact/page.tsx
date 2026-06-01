export default function HeroSection() {
    return (
        <section className="w-full min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-3xl px-6 text-center">

                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                    Build Modern Web Applications Faster
                </h1>

                {/* Subtitle */}
                <p className="mt-6 text-lg md:text-xl text-gray-600">
                    We help developers and companies build scalable, performant and clean digital products with modern technologies.
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

                    <button className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition">
                        Get Started
                    </button>

                    <button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-800 font-medium hover:bg-gray-100 transition">
                        Learn More
                    </button>

                </div>

            </div>
        </section>
    );
}