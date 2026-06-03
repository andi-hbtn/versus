export default function BodySection() {

    const services = [
        {
            number: "01",
            title: "Web Platforms",
            desc: "We design and build high-performance web applications using Next.js, React and modern architectures focused on speed, scalability and conversion."
        },
        {
            number: "02",
            title: "E-Commerce Systems",
            desc: "Custom e-commerce solutions built for growth — optimized checkout flows, product systems, admin dashboards and conversion-driven UX."
        },
        {
            number: "03",
            title: "CRM & Business Platforms",
            desc: "Internal systems that automate operations, manage clients, track workflows and improve decision-making across your organization."
        },
        {
            number: "04",
            title: "Mobile Applications (iOS & Android)",
            desc: "Cross-platform mobile apps built with modern frameworks, designed for performance, usability and seamless user experience across devices."
        },
        {
            number: "05",
            title: "Custom Software Engineering",
            desc: "Tailor-made systems designed around your business logic — from SaaS platforms to internal tools and complex backend architectures."
        },
        {
            number: "06",
            title: "iOS & Android App Development",
            desc: "Native-quality mobile experiences built for both iOS and Android, focused on performance, smooth UX and scalable architecture integrated with your backend systems."
        }
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 py-20">

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {services.map((s) => (
                    <div
                        key={s.number}
                        className="
                            group relative
                            p-10 rounded-[28px]
                            border border-white/10
                            bg-white/[0.02]
                            backdrop-blur-xl
                            overflow-hidden
                            transition-all duration-500
                            hover:border-[#ac24ff]/40
                            hover:bg-[#1b4dfe]/5
                        "
                    >

                        {/* glow background */}
                        <div className="
                            absolute inset-0 opacity-0 group-hover:opacity-100
                            transition duration-700
                            bg-[radial-gradient(circle_at_center,rgba(172,36,255,0.12),transparent_60%)]
                        " />

                        {/* TOP TAG */}
                        <div className="relative z-10 flex items-center gap-3">
                            <span className="text-white/30 text-sm tracking-widest">
                                {s.number}
                            </span>

                            <div className="h-[1px] w-10 bg-white/10" />
                        </div>

                        {/* TITLE */}
                        <h3 className="relative z-10 text-2xl md:text-3xl mt-6 font-light leading-tight">
                            {s.title}
                        </h3>

                        {/* DESC */}
                        <p className="relative z-10 text-white/60 mt-4 leading-relaxed">
                            {s.desc}
                        </p>

                        {/* gradient hover layer */}
                        <div className="
                            absolute inset-0 opacity-0 group-hover:opacity-100
                            transition duration-700
                            bg-gradient-to-r from-[#1b4dfe]/5 via-[#ac24ff]/5 to-[#fe881b]/5
                        " />

                        {/* bottom glow */}
                        <div className="
                            absolute -bottom-10 left-1/2 -translate-x-1/2
                            w-[200px] h-[200px]
                            bg-[#ac24ff]/10 blur-[80px]
                            opacity-0 group-hover:opacity-100
                            transition
                        " />
                    </div>
                ))}
            </div>
        </section>
    );
}