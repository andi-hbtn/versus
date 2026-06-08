"use client";

import { ServiceFlow } from "@/app/Types/service-flow.type";
import { useEffect } from "react";

type Props = {
    open: boolean;
    onClose: () => void;
    card: ServiceFlow | null;
};

export default function ServiceModal({ open, onClose, card }: Props) {

    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
    }, [open]);

    if (!open || !card) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* BACKDROP */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* MODAL */}
            <div className="relative w-[92vw] max-w-[1100px] max-h-[90vh] overflow-y-auto rounded-[24px] bg-[#13101c] border border-white/10 shadow-2xl p-[3vw] animate-fadeIn">

                {/* HEADER */}
                <div className="flex items-center justify-between mb-[2vw]">
                    <div className="flex items-center gap-3 text-white">
                        <span className="w-3 h-3 rounded-full bg-[#C86FFF]" />
                        <span className="text-sm text-white/70">{card.caption}</span>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
                    >
                        ✕
                    </button>
                </div>

                {/* TITLE */}
                <h2 className="text-white text-[2vw] font-semibold leading-tight">
                    {card.title}
                </h2>

                {/* FEATURES */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw] mt-[3vw]">

                    <div className="space-y-4">
                        {card.features.map((f, i) => (
                            <div key={i} className="flex gap-3 text-white/70">
                                <span className="w-2 h-2 mt-2 rounded-full bg-[#ac24ff]" />
                                {f}
                            </div>
                        ))}
                    </div>

                    <div className="text-white/60 text-sm leading-relaxed">
                        Deep explanation area can go here (optional).
                        You can extend this per service.
                    </div>
                </div>
            </div>
        </div>
    );
}