import { CalendarCheck } from 'lucide-react';
import Link from 'next/link';

export default function BookCallPage() {
    return (
        <>
            <main className="bg-[#05020a] text-white overflow-hidden">

                {/* ================= HERO ================= */}
                <section className="relative min-h-screen flex items-center justify-center px-6">

                    {/* ambient glow (same system as About) */}
                    <div className="absolute w-[650px] h-[650px] bg-white/10 blur-[180px] rounded-full" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,77,254,0.12),transparent_60%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(172,36,255,0.10),transparent_60%)]" />

                    <div className="relative max-w-4xl text-center">

                        <span className="text-white/40 uppercase tracking-[0.35em] text-xs">
                            Free Discovery Call
                        </span>

                        <h1 className="mt-6 text-5xl md:text-7xl font-extralight leading-tight">
                            <span className="block">
                                Let’s talk about your
                            </span>

                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1b4dfe] via-[#ac24ff] to-[#fe881b]">
                                next product
                            </span>
                        </h1>

                        <p className="mt-8 text-white/50 max-w-2xl mx-auto text-lg">
                            We’ll review your idea, define the technical approach,
                            and help you understand exactly how to build it — from architecture to execution.
                        </p>

                        {/* trust / micro info */}
                        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 text-white/40 text-sm">
                            <span>30 min call</span>
                            <span className="hidden md:block">•</span>
                            <span>No commitment</span>
                            <span className="hidden md:block">•</span>
                            <span>Product & technical guidance</span>
                        </div>

                        {/* CTA */}
                        <div className="mt-10">
                            <Link href="https://calendly.com/andi-bevapi/30min"
                                target="_blank"
                                className="px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition inline-flex items-center gap-2 group"
                            >
                                Schedule your call
                                <CalendarCheck className="transition-transform" size={18} />
                            </Link>
                        </div>

                    </div>
                </section>
            </main>
        </>
    );
}