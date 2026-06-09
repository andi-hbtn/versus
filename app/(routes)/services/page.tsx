import ContentSection from "@/components/Shared/ContentSection";
import Link from "next/link";

export default function ServicesPage() {

    const values = [
        {
            id: 1,
            title: "Web Platforms",
            description:
                "We design and build high-performance web applications using Next.js, React and modern architectures focused on speed, scalability and conversion."
        },
        {
            id: 2,
            title: "E-Commerce Systems",
            description:
                "Custom e-commerce solutions built for growth — optimized checkout flows, product systems, admin dashboards and conversion-driven UX."
        },
        {
            id: 3,
            title: "CRM & Business Platforms",
            description:
                "Internal systems that automate operations, manage clients, track workflows and improve decision-making across your organization."
        },
        {
            id: 4,
            title: "Mobile Applications (iOS & Android)",
            description:
                "Cross-platform mobile apps built with modern frameworks, designed for performance, usability and seamless user experience across devices."
        },
        {
            id: 5,
            title: "Custom Software Engineering",
            description:
                "Tailor-made systems designed around your business logic — from SaaS platforms to internal tools and complex backend architectures."
        },
        {
            id: 6,
            title: "iOS & Android App Development",
            description:
                "Native-quality mobile experiences built for both iOS and Android, focused on performance, smooth UX and scalable architecture integrated with your backend systems."
        }
    ];

    return (
        <main className="bg-[#05020a] text-white overflow-hidden">

            {/* ================= HERO ================= */}
            <section className="
                relative
                min-h-screen
                flex items-center justify-center
                px-6
                py-24
                md:py-0
            ">

                {/* GLOW (responsive) */}
                <div className="
                    absolute
                    w-[280px] h-[280px]
                    sm:w-[420px] sm:h-[420px]
                    md:w-[650px] md:h-[650px]
                    bg-white/10
                    blur-[90px]
                    md:blur-[180px]
                    rounded-full
                " />

                <div className="
                    absolute inset-0
                    bg-[radial-gradient(circle_at_center,rgba(27,77,254,0.12),transparent_60%)]
                " />

                <div className="
                    absolute inset-0
                    bg-[radial-gradient(circle_at_bottom,rgba(172,36,255,0.10),transparent_60%)]
                " />

                {/* CONTENT */}
                <div className="
                font-maven
                    relative
                    max-w-5xl
                    text-center
                    px-4
                    sm:px-6
                ">

                    {/* LABEL */}
                    <span className="
                        text-white/40
                        uppercase
                        tracking-[0.25em]
                        md:tracking-[0.35em]
                        text-[10px]
                        sm:text-xs
                    ">
                        Versus Services
                    </span>

                    {/* TITLE */}
                    <h1 className="
                        mt-5 md:mt-6
                        text-3xl
                        sm:text-5xl
                        md:text-6xl
                        lg:text-7xl
                        font-extralight
                        leading-[1.1]
                    ">
                        <span className="block">
                            We design and engineer
                        </span>

                        <span className="
                            block
                            text-transparent
                            bg-clip-text
                            bg-gradient-to-r
                            from-[#1b4dfe]
                            via-[#ac24ff]
                            to-[#fe881b]
                        ">
                            digital systems that scale
                        </span>
                    </h1>

                    {/* SUBTITLE */}
                    <p className="
                        mt-6 md:mt-8
                        text-sm
                        sm:text-base
                        md:text-lg
                        text-white/50
                        max-w-xl md:max-w-2xl
                        mx-auto
                        leading-relaxed
                    ">
                        From web platforms to SaaS products and complex business systems,
                        we craft software built for performance, clarity and long-term growth.
                    </p>

                </div>
            </section>

            {/* SERVICES */}
            <ContentSection values={values} />

            {/* ================= BRIDGE SECTION ================= */}
            <section className="
                font-maven
                max-w-5xl
                mx-auto
                px-6
                py-16 md:py-24
                text-center
            ">

                <h3 className="
                    text-xl
                    sm:text-2xl
                    md:text-3xl
                    font-light
                    text-white/80
                    leading-snug
                ">
                    <span className="
                        block
                        text-transparent
                        bg-clip-text
                        bg-gradient-to-r
                        from-[#1b4dfe]
                        via-[#ac24ff]
                        to-[#fe881b]
                    ">
                        Built with a carefully engineered technology stack
                    </span>
                </h3>

                <p className="
                    mt-4
                    text-sm
                    md:text-base
                    text-white/50
                    max-w-xl
                    mx-auto
                ">
                    Every service is powered by modern tools across frontend, backend and infrastructure.
                </p>

                <Link
                    href="/tech-stack"
                    className="
                        inline-flex
                        mt-6 md:mt-8
                        px-6 md:px-8
                        py-3 md:py-4
                        rounded-full
                        bg-gradient-to-r
                        from-[#1b4dfe]
                        via-[#2563eb]
                        to-[#60a5fa]
                        text-white
                        text-sm md:text-base
                        font-medium
                        hover:opacity-90
                        transition
                    "
                >
                    Explore Tech Stack
                </Link>

            </section>

        </main>
    );
}