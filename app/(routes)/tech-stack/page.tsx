import ContentSection from "@/components/Shared/ContentSection";
export default function TechStackPage() {

    const stack = [
        {
            id: 1,
            title: "Frontend Engineering",
            techs: ["JavaScript", "TypeScript", "React", "Next.js", "Angular"],
        },
        {
            id: 2,
            title: "Backend Architecture",
            techs: ["Node.js", "NestJS", "Express.js", "Hapi.js", "PHP (Laravel)"],
        },
        {
            id: 3,
            title: "Databases & Data Layer",
            techs: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL"],
        },
        {
            id: 4,
            title: "DevOps & Infrastructure",
            techs: ["Docker", "CI/CD", "GitHub Actions"],
        },
        {
            id: 5,
            title: "CMS & Legacy Systems",
            techs: ["WordPress", "Drupal", "Joomla", "CodeIgniter"],
        },
        {
            id: 6,
            title: "UI / Web Foundations",
            techs: ["HTML5", "CSS3", "Bootstrap", "jQuery", "Ajax", "Photoshop"],
        }
    ];

    return (
        <main className="bg-[#05020a] text-white  overflow-hidden">
            {/* HERO */}
            <section className="font-maven relative min-h-[85vh] md:min-h-[80vh] flex items-center justify-center px-6 py-16 md:py-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,79,254,0.12),transparent_60%)]" />
                <div className="relative max-w-5xl text-center px-4 sm:px-6">

                    <span className="text-white/40 uppercase tracking-[0.35em] text-xs">
                        Technology Stack
                    </span>
                    <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
                        Built with
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1b4dfe] via-[#2563eb] to-[#60a5fa]">
                            production-grade engineering tools
                        </span>
                    </h1>
                    <p className="mt-6 text-white/60 max-w-2xl mx-auto">
                        A carefully selected stack across frontend, backend, databases and infrastructure — designed for scalable systems.
                    </p>
                </div>
            </section>
            <ContentSection values={stack} />
        </main>
    );
}