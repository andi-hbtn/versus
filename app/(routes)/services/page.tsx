import ContentSection from "@/components/Shared/ContentSection";
import Link from "next/link";

export default function ServicesPage() {

    const values = [
        {
            id: 1,
            title: "Web Platforms",
            description: "We design and build high-performance web applications using Next.js, React and modern architectures focused on speed, scalability and conversion."
        },
        {
            id: 2,
            title: "E-Commerce Systems",
            description: "Custom e-commerce solutions built for growth — optimized checkout flows, product systems, admin dashboards and conversion-driven UX."
        },
        {
            id: 3,
            title: "CRM & Business Platforms",
            description: "Internal systems that automate operations, manage clients, track workflows and improve decision-making across your organization."
        },
        {
            id: 4,
            title: "Mobile Applications (iOS & Android)",
            description: "Cross-platform mobile apps built with modern frameworks, designed for performance, usability and seamless user experience across devices."
        },
        {
            id: 5,
            title: "Custom Software Engineering",
            description: "Tailor-made systems designed around your business logic — from SaaS platforms to internal tools and complex backend architectures."
        },
        {
            id: 6,
            title: "iOS & Android App Development",
            description: "Native-quality mobile experiences built for both iOS and Android, focused on performance, smooth UX and scalable architecture integrated with your backend systems."
        }
    ];

    return (
        <>
            <main className="bg-[#05020a] text-white overflow-hidden">

                {/* ================= HERO ================= */}
                <section className="relative min-h-screen flex items-center justify-center px-6">

                    {/* ambient glow */}
                    <div className="absolute w-[650px] h-[650px] bg-white/10 blur-[180px] rounded-full" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,77,254,0.12),transparent_60%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(172,36,255,0.10),transparent_60%)]" />

                    <div className="relative max-w-5xl text-center">

                        {/* micro label */}
                        <span className="text-white/40 uppercase tracking-[0.35em] text-xs">
                            Versus Services
                        </span>

                        {/* main title */}
                        <h1 className="mt-6 text-5xl md:text-7xl font-extralight leading-tight">
                            <span className="block">
                                We design and engineer
                            </span>

                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1b4dfe] via-[#ac24ff] to-[#fe881b]">
                                digital systems that scale
                            </span>
                        </h1>

                        {/* subtitle */}
                        <p className="mt-8 text-white/50 max-w-2xl mx-auto text-lg">
                            From web platforms to SaaS products and complex business systems,
                            we craft software built for performance, clarity and long-term growth.
                        </p>
                    </div>
                </section>

                {/* SERVICES */}
                <ContentSection values={values} />

                {/* 🔥 NEW BRIDGE SECTION */}
                <section className="max-w-5xl mx-auto px-6 py-24 text-center">
                    <h3 className="text-2xl md:text-3xl font-light text-white/80">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1b4dfe] via-[#ac24ff] to-[#fe881b]">
                            Built with a carefully engineered technology stack
                        </span>
                    </h3>

                    <p className="mt-4 text-white/50">
                        Every service is powered by modern tools across frontend, backend and infrastructure.
                    </p>

                    <Link
                        href="/tech-stack"
                        className="inline-flex mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-[#1b4dfe] via-[#2563eb] to-[#60a5fa] text-white font-medium hover:opacity-90 transition"
                    >
                        Explore Tech Stack
                    </Link>
                </section>

            </main>
        </>
    );
}