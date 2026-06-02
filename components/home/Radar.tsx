"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function RadarHero() {
    const radarRef = useRef<HTMLDivElement>(null);
    const dotsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        // Radar pulse (circles)
        gsap.to(".radar-ring", {
            scale: 2.5,
            opacity: 0,
            duration: 2.5,
            repeat: -1,
            ease: "power2.out",
            stagger: 0.6,
        });

        // Floating nodes (developers/clients)
        dotsRef.current.forEach((dot, i) => {
            gsap.to(dot, {
                y: "random(-20, 20)",
                x: "random(-20, 20)",
                duration: 2 + i * 0.3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(dot, {
                opacity: 0.4,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });
        });
    }, []);

    return (
        <div className="relative flex items-center justify-center h-[500px]">

            {/* RADAR CORE */}
            <div
                ref={radarRef}
                className="relative w-[180px] h-[180px] flex items-center justify-center"
            >
                {/* rings */}
                <div className="radar-ring absolute w-full h-full rounded-full border border-cyan-400/40" />
                <div className="radar-ring absolute w-full h-full rounded-full border border-cyan-400/30" />
                <div className="radar-ring absolute w-full h-full rounded-full border border-cyan-400/20" />

                {/* center */}
                <div className="w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
            </div>

            {/* NODES */}
            <div className="absolute inset-0">
                {[
                    { label: "Talent", x: "-20%", y: "40%" },
                    { label: "Trust", x: "-20%", y: "18%" },
                    { label: "Quality", x: "88%", y: "50%" },
                    { label: "Match", x: "75%", y: "70%" },
                    { label: "Opportunity", x: "10%", y: "70%" },
                    { label: "Professional", x: "40%", y: "60%" },
                    { label: "Transparency", x: "-20%", y: "50%" },
                    { label: "Competitive", x: "60%", y: "30%" },
                ].map((item, i) => (
                    <div
                        key={i}
                        ref={(el) => {
                            if (el) dotsRef.current[i] = el;
                        }}
                        className="absolute"
                        style={{ left: item.x, top: item.y }}
                    >
                        <div className="px-3 py-1 text-xs text-white/80 bg-white/10 border border-white/10 rounded-full backdrop-blur-md">
                            {item.label}
                        </div>
                        <div className="w-2 h-2 bg-cyan-300 rounded-full mx-auto mt-1" />
                    </div>
                ))}
            </div>
        </div>
    );
}