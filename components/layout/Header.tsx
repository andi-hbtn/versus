import RadarHero from "../home/Radar";

export default function Header() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0f0c16] text-white">
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ac24ff1a,transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#1b4dfe12,transparent_60%)]" />

            {/* Noise / depth layer */}
            <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')]" />

            <div className="relative max-w-4xl text-center px-6 flex flex-col items-center">

                {/* Badge */}
                <div className="mb-6 px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs tracking-[0.25em] uppercase text-white/50">
                    Software Studio • Product Engineering
                </div>

                {/* Main headline */}
                <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">
                    Build modern products
                    <span className="block bg-gradient-to-r from-[#1b4dfe] via-[#ac24ff] to-[#fe881b] text-transparent bg-clip-text font-medium">
                        that actually scale
                    </span>
                </h1>

                {/* Sub text */}
                <p className="mt-6 text-white/50 text-sm md:text-base max-w-[620px] leading-relaxed">
                    We design and engineer high-performance SaaS platforms, e-commerce systems,
                    and custom digital products with clean architecture and modern UX.
                </p>

                {/* CTA group */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4">

                    <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:opacity-90 transition">
                        Start a project
                    </button>

                    <button className="px-6 py-3 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition">
                        View case studies
                    </button>

                </div>

                {/* Social proof line */}
                <div className="mt-10 flex items-center gap-6 text-white/30 text-xs">
                    <span>Trusted by startups</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>Full-stack delivery</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>EU & US clients</span>
                </div>

            </div>

            <RadarHero />

            {/* <Radar_two /> */}
        </section>
    );
}