import { CalendarCheck } from "lucide-react";
import Link from "next/link";

export default function BookCallPage() {
    return (
        <main className="bg-[#05020a] text-white overflow-hidden">

            {/* ================= HERO ================= */}
            <section className="
                font-maven
                relative
                min-h-[85vh] md:min-h-screen
                flex items-center justify-center
                px-6
                py-20 md:py-0
                text-center
            ">

                {/* GLOW (responsive) */}
                <div className="
                    absolute
                    w-[280px] h-[280px]
                    sm:w-[420px] sm:h-[420px]
                    md:w-[650px] md:h-[650px]
                    bg-white/10
                    blur-[80px] md:blur-[180px]
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
                    relative
                    max-w-4xl
                    px-4 sm:px-6
                ">

                    {/* LABEL */}
                    <span className="
                        text-white/40
                        uppercase
                        tracking-[0.25em] md:tracking-[0.35em]
                        text-[10px] sm:text-xs
                    ">
                        Free Discovery Call
                    </span>

                    {/* TITLE */}
                    <h1 className="
                        mt-5 md:mt-6
                        text-3xl sm:text-5xl md:text-6xl lg:text-7xl
                        font-extralight
                        leading-[1.1]
                    ">
                        <span className="block">
                            Let’s talk about your
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
                            next product
                        </span>
                    </h1>

                    {/* SUBTITLE */}
                    <p className="
                        mt-6 md:mt-8
                        text-sm sm:text-base md:text-lg
                        text-white/50
                        max-w-xl md:max-w-2xl
                        mx-auto
                        leading-relaxed
                    ">
                        We’ll review your idea, define the technical approach,
                        and help you understand exactly how to build it — from architecture to execution.
                    </p>

                    {/* TRUST ROW */}
                    <div className="
                        mt-8 md:mt-10
                        flex flex-col md:flex-row
                        items-center justify-center
                        gap-2 md:gap-4
                        text-white/40
                        text-xs sm:text-sm
                    ">
                        <span>30 min call</span>
                        <span className="hidden md:block">•</span>
                        <span>No commitment</span>
                        <span className="hidden md:block">•</span>
                        <span>Product & technical guidance</span>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 md:mt-10">
                        <Link
                            href="https://calendly.com/andi-bevapi/30min"
                            target="_blank"
                            className="
                                inline-flex
                                items-center justify-center
                                gap-2
                                px-6 md:px-8
                                py-3 md:py-4
                                rounded-full
                                bg-white
                                text-black
                                font-medium
                                text-sm md:text-base
                                hover:scale-105
                                active:scale-95
                                transition
                            "
                        >
                            Schedule your call
                            <CalendarCheck size={18} />
                        </Link>
                    </div>

                </div>
            </section>
        </main>
    );
}