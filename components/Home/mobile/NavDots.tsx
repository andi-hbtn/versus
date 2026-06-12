"use client";

import React, { useTransition } from "react";

interface NavDotsProps {
    count: number;
    active: number;
    onSelect: (index: number) => void;
}

export default function FluidMorphingDock({ count, active, onSelect }: NavDotsProps) {
    const [isPending, startTransition] = useTransition();

    // Ruajmë dimensionet ekzakte për llogaritjen e lëvizjes fizike
    const DOT_GAP = 12; // gap-3 (12px)
    const DOT_WIDTH = 10; // h-1.5 (6px)
    const ACTIVE_WIDTH = 28; // gjerësia e kapsulës aktive (28px)

    // Llogaritja e saktë e pozicionit X për kapsulën që rrëshqet
    const transformX = active * (DOT_WIDTH + DOT_GAP);

    return (
        <div className="flex justify-center items-center py-2 select-none">
            {/* NEXT-LEVEL CYBERNETIC GLASS TRACK */}
            <nav
                className="relative flex items-center gap-3 px-[18px] py-3.5 rounded-full border border-white/[0.06] bg-[#06040a]/60 backdrop-blur-3xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.08),0_20px_50px_rgba(0,0,0,0.6)]"
                aria-label="Pagination"
                style={{
                    // Krijon tranzicionin elastik "Morphing" gjatë ndryshimit të indeksit
                    "--active-index": active,
                } as React.CSSProperties}
            >

                {/* SHTRESA FLUIDE (Kapsula High-Tech me gradient dhe lazer glow) */}
                <div
                    className="absolute left-[18px] h-[6px] rounded-full will-change-[transform,width] pointer-events-none"
                    style={{
                        width: `${ACTIVE_WIDTH}px`,
                        // Kalimi te gradienti zyrtar i projektit për sinkronizim total vizual
                        background: "linear-gradient(90deg, #2f66ff 0%, #b842ff 100%)",
                        transform: `translateX(${transformX}px)`,
                        // Tranzicion i personalizuar kubik (Custom Spring-like Bezier) që simulon fizikën e iOS
                        transition: "transform 0.55s cubic-bezier(0.175, 0.885, 0.32, 1.12), width 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        // Shtuar një glow i fshehur neon nën kapsulë që ecën bashkë me të
                        boxShadow: "0 0 14px rgba(184, 66, 255, 0.5), inset 0 1px 0.5px rgba(255, 255, 255, 0.3)",
                    }}
                >
                    {/* Micro High-End Refraction Ray brenda kapsulës */}
                    <span className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-full opacity-50" />
                </div>

                {/* PIKAT PASIVE (Anchor Points) */}
                {Array.from({ length: count }).map((_, i) => {
                    const isActive = i === active;

                    return (
                        <button
                            key={i}
                            type="button"
                            aria-label={`Go to page ${i + 1}`}
                            aria-current={isActive ? "page" : undefined}
                            disabled={isPending}
                            onClick={() => {
                                if (!isActive) {
                                    startTransition(() => {
                                        onSelect(i);
                                    });
                                }
                            }}
                            className="group relative flex h-4 items-center justify-center focus:outline-none"
                            style={{
                                // Gjerësia e butonit përputhet saktë me dritaren e animacionit
                                width: `${isActive ? ACTIVE_WIDTH : DOT_WIDTH}px`,
                                transition: "width 0.55s cubic-bezier(0.175, 0.885, 0.32, 1.12)",
                                WebkitTapHighlightColor: "transparent",
                            }}
                        >
                            {/* Pika e Background-it (Duket vetëm nëse nuk është aktive) */}
                            <span
                                className="block h-[5px] rounded-full transition-all duration-500"
                                style={{
                                    width: `${DOT_WIDTH}px`,
                                    backgroundColor: isActive
                                        ? "transparent"
                                        : "rgba(172, 36, 255, 0.2)", // Ndryshuar nga gri në një violë tech shumë të fshehur
                                    transform: isActive ? "scale(0)" : "scale(1)",
                                }}
                            />

                            {/* Advanced Glow Target në Hover / Touch */}
                            {!isActive && (
                                <span className="absolute h-5 w-5 rounded-full bg-[#ac24ff]/10 opacity-0 scale-50 transition-all duration-300 ease-out group-hover:scale-110 group-hover:opacity-100 group-focus-visible:scale-110 group-focus-visible:opacity-100 border border-[#ac24ff]/20" />
                            )}
                        </button>
                    );
                })}
            </nav>
        </div>
    );
}