import ContentSection from "@/components/Shared/ContentSection";

export default function AboutPage() {

    const values = [
        {
            id: 1,
            title: "Honest engineering",
            description: "We build with integrity — no shortcuts, no hidden complexity, only solutions we can stand behind."
        },
        {
            id: 2,
            title: "Radical transparency",
            description: "Clear communication at every step. You always know what is being built, why, and how."
        },
        {
            id: 3,
            title: "Quality over competition",
            description: "We don’t chase others — we set higher standards through clean, reliable and scalable systems."
        },
        {
            id: 4,
            title: "Clean architecture mindset",
            description: "We design systems that are structured, readable and easy to evolve over time."
        },
        {
            id: 5,
            title: "Respect for craft",
            description: "Engineering is treated as craftsmanship — precision, discipline and attention to detail in every line of code."
        },
        {
            id: 6,
            title: "Long-term trust",
            description: "We prioritize relationships over transactions, building software that earns trust over time."
        },
        {
            id: 7,
            title: "Ethical performance",
            description: "We optimize for speed and growth without compromising honesty, user experience or stability."
        },
        {
            id: 8,
            title: "Continuous improvement",
            description: "We evolve constantly — improving systems, processes and outcomes with every iteration."
        }
    ];

    return (
        <main className="bg-[#05020a] text-white overflow-hidden">

            {/* ================= HERO ================= */}
            <section className="font-maven relative min-h-screen flex items-center justify-center px-6 py-24 md:py-0">
                {/* GLOW (responsive) */}
                <div className="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] md:w-[650px] md:h-[650px] bg-white/10 blur-[90px] md:blur-[180px] rounded-full" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,77,254,0.12),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(172,36,255,0.10),transparent_60%)]" />

                {/* CONTENT */}
                <div className="relative max-w-5xl text-center px-4 sm:px-6">
                    {/* LABEL */}
                    <span className="text-white/40 uppercase tracking-[0.25em] md:tracking-[0.35em] text-[10px] sm:text-xs">
                        About Versus
                    </span>
                    {/* TITLE */}
                    <h1 className="mt-5 md:mt-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight leading-[1.1]">
                        <span className="block">
                            We build digital products
                        </span>

                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1b4dfe] via-[#ac24ff] to-[#fe881b]">
                            engineered for scale
                        </span>
                    </h1>

                    {/* SUBTITLE */}
                    <p className="mt-6 md:mt-8 text-sm sm:text-base md:text-lg text-white/50 max-w-xl md:max-w-2xl mx-auto leading-relaxed">
                        We are a software studio focused on building high-performance SaaS platforms, e-commerce systems and custom digital products.
                    </p>

                </div>
            </section>

            {/* ================= VALUES ================= */}
            <ContentSection values={values} />

        </main>
    );
}