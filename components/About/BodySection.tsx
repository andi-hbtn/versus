"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BodySection() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        if (titleRef.current) {
            const lines = titleRef.current.children;

            tl.fromTo(
                lines,
                { opacity: 0, y: 60 },
                { opacity: 1, y: 0, duration: 1.2, stagger: 0.15 }
            );
        }

        tl.fromTo(
            textRef.current,
            { opacity: 0, y: 20 },
            { opacity: 0.6, y: 0, duration: 1 },
            "-=0.6"
        );

        tl.fromTo(
            statsRef.current?.children || [],
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
            "-=0.5"
        );
    }, []);

    return (
        <main className="bg-[#05020a] text-white overflow-hidden">

            {/* ================= HERO ================= */}
            <section className="relative min-h-screen flex items-center justify-center px-6">

                <div className="absolute w-[650px] h-[650px] bg-white/10 blur-[180px] rounded-full" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,77,254,0.12),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(172,36,255,0.10),transparent_60%)]" />

                <div className="relative max-w-5xl text-center">

                    <span className="text-white/40 uppercase tracking-[0.35em] text-xs">
                        About Versus
                    </span>

                    <h1
                        ref={titleRef}
                        className="mt-6 text-5xl md:text-7xl font-extralight leading-tight"
                    >
                        <span className="block opacity-0">
                            We build digital products
                        </span>

                        <span className="block opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-[#1b4dfe] via-[#ac24ff] to-[#fe881b]">
                            engineered for scale
                        </span>
                    </h1>

                    <p
                        ref={textRef}
                        className="mt-8 text-white/50 max-w-2xl mx-auto text-lg opacity-0"
                    >
                        We are a software studio focused on building high-performance SaaS platforms,
                        e-commerce systems and custom digital products.
                    </p>
                </div>
            </section>
            {/* ================= VALUES + CTA FUSION ================= */}
            <section className="relative py-40 overflow-hidden">

                {/* ambient layers */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(27,77,254,0.10),transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(172,36,255,0.12),transparent_60%)]" />

                {/* soft glow core */}
                <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-white/5 blur-[180px] rounded-full" />

                <div className="relative max-w-6xl mx-auto px-6">

                    {/* HEADER */}
                    <div className="text-center mb-24">
                        <span className="text-white/40 uppercase tracking-[0.35em] text-xs">
                            Principles & Vision
                        </span>

                        <h2 className="mt-6 text-5xl md:text-6xl font-extralight leading-tight">
                            What defines how we
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1b4dfe] via-[#ac24ff] to-[#fe881b]">
                                build digital systems
                            </span>
                        </h2>

                        <p className="mt-6 text-white/50 max-w-2xl mx-auto">
                            Every decision we make is guided by engineering clarity, performance,
                            and long-term scalability — not short-term aesthetics.
                        </p>
                    </div>

                    {/* VALUES GRID */}
                    <div className="grid md:grid-cols-2 gap-6">

                        {[
                            {
                                title: "Systems over features",
                                desc: "We design architecture that scales, not temporary solutions."
                            },
                            {
                                title: "Performance first",
                                desc: "Every product is optimized for speed, efficiency and stability."
                            },
                            {
                                title: "Clean engineering",
                                desc: "Readable, maintainable systems that evolve over time."
                            },
                            {
                                title: "Long-term thinking",
                                desc: "We build products that grow, not collapse under scale."
                            }
                        ].map((v) => (
                            <div
                                key={v.title}
                                className="group relative p-10 rounded-[28px] border border-white/10 bg-white/[0.02] hover:border-white/20 transition overflow-hidden"
                            >
                                {/* hover glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_center,rgba(172,36,255,0.12),transparent_60%)]" />

                                <h3 className="text-2xl relative z-10">{v.title}</h3>
                                <p className="text-white/60 mt-4 relative z-10">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}