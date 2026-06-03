import Header from "@/components/layout/Header";
import BodySection from "@/components/Services/BodySection";
export default function ServicesPage() {

    return (
        <>
            <Header />
            <main className="bg-[#05020a] text-white overflow-hidden">

                {/* ================= HERO ================= */}
                <section className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">

                    <span className="text-white/40 uppercase tracking-[0.35em] text-xs">
                        Software Studio Services
                    </span>

                    <h1 className="mt-6 text-5xl md:text-7xl font-extralight leading-tight">
                        Building digital products
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1b4dfe] via-[#ac24ff] to-[#fe881b]">
                            that scale and perform
                        </span>
                    </h1>

                    <p className="mt-8 text-white/50 max-w-2xl mx-auto text-lg">
                        With 8+ years of experience in full-stack engineering, we design and build
                        web platforms, SaaS systems, e-commerce solutions and mobile applications
                        that are engineered for real-world scale.
                    </p>
                </section>

                {/* ================= SERVICES ================= */}
                <BodySection/>

                {/* ================= VALUE PROPOSITION ================= */}
                <section className="max-w-5xl mx-auto px-6 py-32 text-center">

                    <h2 className="text-4xl md:text-5xl font-extralight leading-tight">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1b4dfe] via-[#ac24ff] to-[#fe881b]">
                            we build systems that grow businesses
                        </span>
                    </h2>

                    <p className="mt-8 text-white/50">
                        Every product is engineered with long-term scalability, clean architecture
                        and performance-first thinking.
                    </p>
                </section>
            </main>
        </>
    );
}