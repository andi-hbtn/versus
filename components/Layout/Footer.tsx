import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative w-full bg-[#0f0c16] text-white overflow-hidden">

            {/* Ambient glow background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ac24ff1a,transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#1b4dfe12,transparent_55%)] pointer-events-none" />

            <div className="relative max-w-[1200px] mx-auto px-6 py-24 flex flex-col gap-20">

                {/* ───── HERO / BRAND MESSAGE ───── */}
                <div className="flex flex-col items-center text-center gap-6">
                    <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
                        Build products that
                        <span className="block bg-gradient-to-r from-[#1b4dfe] via-[#ac24ff] to-[#fe881b] text-transparent bg-clip-text font-medium">
                            actually feel alive
                        </span>
                    </h2>

                    <p className="text-white/50 max-w-[520px] text-sm leading-relaxed">
                        We design, build and scale digital products with a focus on clarity,
                        performance and user experience — from idea to launch.
                    </p>
                </div>

                {/* ───── STATS CARDS ───── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {[
                        { value: "25+", label: "Projects Delivered" },
                        { value: "99%", label: "Client Satisfaction" },
                        { value: "15+", label: "Team Experts" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl
                            hover:bg-white/10 transition"
                        >
                            <div className="text-3xl font-light">{item.value}</div>
                            <div className="text-white/50 text-sm mt-1">{item.label}</div>
                        </div>
                    ))}

                </div>

                {/* ───── NAVIGATION ───── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

                    <div>
                        <span className="text-xs text-white/40 uppercase tracking-widest">Explore</span>
                        <div className="mt-4 flex flex-col gap-2 text-sm text-white/70">
                            <Link href="/services" className="hover:text-white transition">Services</Link>
                            <Link href="/pricing" className="hover:text-white transition">Pricing</Link>
                        </div>
                    </div>

                    <div>
                        <span className="text-xs text-white/40 uppercase tracking-widest">Company</span>
                        <div className="mt-4 flex flex-col gap-2 text-sm text-white/70">
                            <Link href="/about" className="hover:text-white transition">About</Link>
                            <Link href="/tech-stack" className="hover:text-white transition">Tech Stack</Link>
                        </div>
                    </div>

                    <div>
                        <span className="text-xs text-white/40 uppercase tracking-widest">Support</span>
                        <div className="mt-4 flex flex-col gap-2 text-sm text-white/70">
                            <Link href="/contact" className="hover:text-white transition">Contact</Link>
                            <Link href="/faq" className="hover:text-white transition">FAQ</Link>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <div>
                            <span className="text-xs text-white/40 uppercase tracking-widest">Vision</span>
                            <p className="mt-4 text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#2ba7ff] via-[#ca45ff] to-[#fe881b]">
                                Crafting the next generation of digital experiences.
                            </p>
                        </div>
                        <Link
                            href="/book-call"
                            className="mt-6 px-4 py-2 rounded-full border border-white/15 text-sm text-center text-white/70 hover:text-white hover:border-white/30 transition">
                            Let’s talk
                        </Link>
                    </div>

                </div>

                {/* ───── BOTTOM BAR ───── */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-sm text-white/40">

                    <span>
                        © {new Date().getFullYear()} Platforma. All rights reserved.
                    </span>

                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition">Terms</Link>
                    </div>

                </div>

            </div>
        </footer>
    );
}