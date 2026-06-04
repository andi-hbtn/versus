import Header from "@/components/Layout/Header";
import ContentSection from "@/components/Shared/ContentSection";
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
            <Header />
            <main className="bg-[#05020a] text-white overflow-hidden">

                {/* ================= HEADER ================= */}
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
                <ContentSection values={values} />

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