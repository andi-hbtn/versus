import Header from "@/components/Layout/Header";
import ContentSection from "@/components/Shared/ContentSection";
import Link from "next/link";

export default function CaseStudiesPage() {

    const cases = [
        {
            id: 1,
            title: "SaaS Architecture for High-Load Systems",
            description:
                "Designed and engineered a modular SaaS architecture optimized for scale, multi-tenant performance and long-term maintainability under high traffic loads."
        },
        {
            id: 2,
            title: "Conversion-Driven E-Commerce Engine",
            description:
                "Built a performance-first commerce system with optimized checkout flows, product indexing, and UX patterns focused on maximizing conversion rates."
        },
        {
            id: 3,
            title: "Enterprise Workflow Intelligence Platform",
            description:
                "Developed an internal system that unified operations, automated workflows, and provided real-time visibility across teams and business units."
        },
        {
            id: 4,
            title: "Real-Time Scheduling & Availability System",
            description:
                "Engineered a dynamic booking infrastructure with real-time availability sync, conflict prevention and seamless multi-device coordination."
        },
        {
            id: 5,
            title: "Custom Automation & Process Engine",
            description:
                "Built a system that replaced manual operations with structured automation pipelines, reducing operational friction and improving execution speed."
        },
        {
            id: 6,
            title: "Cross-Platform Mobile Experience Layer",
            description:
                "Delivered a unified mobile system with shared backend logic, optimized performance layers and consistent UX across iOS and Android."
        }
    ];

    return (
        <>
            <main className="bg-[#05020a] text-white overflow-hidden">
                {/* ================= HERO (more cinematic + structured) ================= */}
                <section className="relative min-h-screen flex items-center justify-center px-6">

                    {/* layered energy field */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(27,77,254,0.14),transparent_60%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(172,36,255,0.12),transparent_65%)]" />
                    <div className="absolute w-[700px] h-[700px] bg-white/10 blur-[200px] rounded-full opacity-60" />

                    <div className="relative max-w-5xl text-center">

                        <span className="text-white/40 uppercase tracking-[0.35em] text-xs">
                            Case Studies Archive
                        </span>

                        <h1 className="mt-6 text-5xl md:text-7xl font-extralight leading-tight">
                            <span className="block">
                                Systems designed under
                            </span>

                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1b4dfe] via-[#ac24ff] to-[#fe881b]">
                                production constraints
                            </span>
                        </h1>

                        <p className="mt-8 text-white/50 max-w-2xl mx-auto text-lg">
                            A collection of engineering outcomes built under real-world load, scale, and business pressure — not prototypes.
                        </p>

                        {/* micro trust strip */}
                        <div className="mt-10 flex justify-center gap-6 text-xs text-white/40">
                            <span>Scalable Systems</span>
                            <span>•</span>
                            <span>Production Ready</span>
                            <span>•</span>
                            <span>Real Impact</span>
                        </div>
                    </div>
                </section>

                {/* ================= CASE STUDIES ================= */}
                <ContentSection values={cases} />

                {/* ================= IMPACT SECTION ================= */}
                <section className="max-w-6xl mx-auto px-6 py-32">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {[
                            { value: "10x", label: "Performance Improvements" },
                            { value: "99.9%", label: "System Uptime Targets" },
                            { value: "Scale", label: "Designed for Growth" }
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="relative p-8 rounded-[24px] border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,77,254,0.10),transparent_60%)]" />

                                <div className="relative">
                                    <div className="text-3xl font-light text-white">
                                        {item.value}
                                    </div>
                                    <div className="text-white/50 text-sm mt-2">
                                        {item.label}
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </section>

                {/* ================= CTA ================= */}
                <section className="max-w-5xl mx-auto px-6 pb-32 text-center">

                    <h3 className="text-3xl md:text-4xl font-extralight">
                        Ready to build something
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1b4dfe] via-[#ac24ff] to-[#fe881b]">
                            that actually scales?
                        </span>
                    </h3>

                    <p className="mt-6 text-white/50">
                        We design systems where architecture, performance and UX are treated as one.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-[#1b4dfe] via-[#2563eb] to-[#60a5fa] text-white font-medium hover:opacity-90 transition"
                    >
                        Start a project
                    </Link>
                </section>

            </main>
        </>
    );
}