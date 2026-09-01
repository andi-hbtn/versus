import Header from "@/components/Layout/Header";
import CaseStudiesGrid from "@/components/Shared/CaseStudiesGrid";
import { CaseStudy } from "@/app/Types/case-study.types";
import Link from "next/link";

export default function CaseStudiesPage() {
    const cases: CaseStudy[] = [
        {
            id: 1,
            client: "London Glass Fitting",
            sector: "Glass & Construction",
            description:
                "Business website for a company specialising in the sale and supply of glass, glazing products and components used to connect, support and install glass systems for residential and commercial projects.",
            url: "https://londonglassfittings-frontend.njxb34.easypanel.host/",
            tags: ["Corporate site", "Glass products", "Construction components"]
        },

        {
            id: 2,
            client: "Marina Bay",
            sector: "Hospitality & Leisure",
            description:
                "Hospitality website for a destination combining hotel accommodation, bar and restaurant services, swimming pool facilities and a relaxed leisure experience for guests and visitors.",
            url: "https://marinabay.al/",
            tags: ["Hotel", "Restaurant & Bar", "Swimming pool"]
        },

        {
            id: 3,
            client: "Touch Revolution",
            sector: "Interactive Technology",
            description:
                "Corporate and product site for an Italian maker of interactive tables, digital totems, holograms and touchscreen installations for retail, museums, events and education.",
            url: "http://touchrevolution.it/en",
            tags: ["Corporate site", "Product showcase", "Multi-language"]
        },

        {
            id: 4,
            client: "Ovla Systems",
            sector: "Software Services",
            description:
                "Corporate site for a software house covering web and mobile development, UI/UX, blockchain, AI/ML and cybersecurity, structured around services and a work archive.",
            url: "https://www.ovlasystems.com/",
            tags: ["Corporate site", "Work archive", "Lead generation"]
        },

        {
            id: 5,
            client: "Itama Yacht",
            sector: "Luxury Marine",
            description:
                "Brand and model catalogue for the Ferretti Group open-yacht marque, presenting a fleet from 45 to 75 feet with lifestyle editorial and regional entry points for buyers.",
            url: "https://www.itama-yacht.com/en-us/",
            tags: ["Brand site", "Model catalogue", "Multi-region"]
        },

        {
            id: 6,
            client: "Tecnavia eEdition",
            sector: "Digital Publishing",
            description:
                "Digital publishing platform for newspapers and magazines, delivering digital replicas, paywalls, subscription management and advertising across web, iOS and Android.",
            url: "http://www.tecnavia.com/eedition/",
            tags: ["Publishing platform", "Paywall & subscriptions", "Web, iOS & Android"]
        },

        {
            id: 7,
            client: "Vito Di Bari",
            sector: "Personal Brand",
            description:
                "Portfolio and booking site for a futurist and keynote speaker advising companies and governments on AI and emerging technology, built around talks, editorial and enquiries.",
            url: "http://www.vitodibari.com",
            tags: ["Portfolio site", "Speaker booking", "Editorial content"]
        },

        {
            id: 8,
            client: "Lumetti Ceramiche",
            sector: "Ceramics & Interiors",
            description:
                "Catalogue site for an Italian ceramics manufacturer, presenting collections, finishes and technical detail for specifiers and retail customers.",
            url: "http://www.lumetticeramiche.com",
            tags: ["Product catalogue", "Collections", "Corporate site"]
        },

        {
            id: 9,
            client: "Profilegno",
            sector: "Wood Flooring",
            description:
                "Product catalogue for a Vicenza parquet manufacturer, covering engineered and solid wood floors in oak, walnut, chestnut and teak alongside PEFC, CE and A+ certification detail.",
            url: "https://www.profilegno.net/it/",
            tags: ["Product catalogue", "Technical specs", "Multi-language"]
        },

        {
            id: 10,
            client: "Monpar",
            sector: "Wood Flooring",
            description:
                "Catalogue and brand site for an Alonte parquet maker, presenting ten collections with customisable essences, thicknesses and colour finishes for residential and commercial use.",
            url: "http://www.monpar.com/",
            tags: ["Product catalogue", "Collections & finishes", "Corporate site"]
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
                            What We Built
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
                            A collection of engineering outcomes built under real-world load, scale, and business pressure, not prototypes.
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
                <CaseStudiesGrid cases={cases} />
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
                        href="/book-call"
                        className="inline-flex mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-[#1b4dfe] via-[#2563eb] to-[#60a5fa] text-white font-medium hover:opacity-90 transition"
                    >
                        Start Now
                    </Link>
                </section>
            </main>
        </>
    );
}