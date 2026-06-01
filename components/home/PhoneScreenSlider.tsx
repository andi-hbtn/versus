"use client";

import { useEffect, useRef, useState } from "react";

/**
 * FINAL FIX (SCREEN WAS BLACK DUE TO OVERLAY BUG)
 *
 * ROOT CAUSE:
 * - PHONE FRAME had `bg-black` covering entire screen (z-30)
 * - This was hiding the actual content behind it
 *
 * FIX:
 * - Removed full black background overlay
 * - Kept only border styling for frame
 * - Ensured screen is visible (z-index corrected)
 */

interface Screen {
    title: string;
    desc: string;
    color: string;
    bg: string;
}

const screens: Screen[] = [
    {
        title: "Technology Crafted",
        desc: "We create intuitive experiences.",
        color: "#fe881b",
        bg: "linear-gradient(to bottom, #1c110b, #13101c)",
    },
    {
        title: "Meet The Minds",
        desc: "Designers, strategists, makers.",
        color: "#ac24ff",
        bg: "linear-gradient(to bottom, #0d0b13, #13101c)",
    },
    {
        title: "Build Faster",
        desc: "Optimized workflows for modern teams.",
        color: "#1b4dfe",
        bg: "linear-gradient(to bottom, #0b1020, #13101c)",
    },
];

export default function LogoCloud() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const sectionHeight = rect.height;
            const windowHeight = window.innerHeight;

            const scrolledIntoSection = -rect.top;
            const maxScrollable = sectionHeight - windowHeight;

            if (maxScrollable > 0) {
                let percentage = scrolledIntoSection / maxScrollable;
                percentage = Math.max(0, Math.min(1, percentage));
                setScrollPercentage(percentage);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const translateY = scrollPercentage * (screens.length - 1) * 100;

    return (
        <section
            ref={containerRef}
            className="w-full bg-[#0a0810] text-white flex flex-col md:flex-row min-h-[220vh]"
        >
            {/* LEFT */}
            <div className="w-full md:w-1/2 px-[6vw] py-[10vw] flex flex-col gap-[10vh]">
                <div className="min-h-[65vh] flex flex-col justify-center">
                    <h2 className="text-[3.5vw] font-semibold">Technology Crafted for All</h2>
                </div>

                <div className="min-h-[65vh] flex flex-col justify-center">
                    <h2 className="text-[3.5vw] font-semibold">Meet The Minds Behind The Work</h2>
                </div>
            </div>

            {/* RIGHT */}
            <div className="w-full md:w-1/2 flex justify-center pt-[10vh]">

                {/* FIX: relative container */}
                <div className="sticky top-[12vh] w-[26vw] h-[52vw] max-h-[85vh] relative">

                    {/* PHONE FRAME (FIXED - NO FULL BLACK OVERLAY) */}
                    <div className="absolute inset-0 border-[0.6vw] border-[#2d283e] rounded-[3.5vw] z-30 pointer-events-none" />

                    {/* SCREEN */}
                    <div className="absolute inset-[0.4vw] rounded-[3.1vw] overflow-hidden bg-[#13101c] z-20">
                        <div
                            className="flex flex-col h-full will-change-transform transition-transform duration-200"
                            style={{ transform: `translateY(-${translateY}%)` }}
                        >
                            {screens.map((s, i) => (
                                <div
                                    key={i}
                                    className="w-full h-full flex flex-col justify-between p-[2vw] shrink-0"
                                    style={{ background: s.bg }}
                                >
                                    <div className="flex justify-between">
                                        <span className="font-bold">Fluxora</span>
                                        <span className="text-xs bg-white text-black px-2 py-1 rounded-full">
                                            Live
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-[2vw] font-bold" style={{ color: s.color }}>
                                            {s.title}
                                        </h3>
                                        <p className="text-[#a997ce] text-[0.8vw]">{s.desc}</p>
                                    </div>

                                    <div
                                        className="p-[1vw] rounded-[1vw] text-white text-[0.8vw]"
                                        style={{ backgroundColor: `${s.color}20` }}
                                    >
                                        Scroll to explore
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
