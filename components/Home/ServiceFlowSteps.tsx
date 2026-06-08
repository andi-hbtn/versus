"use client";

import { useState } from "react";
import { ServiceFlow } from "@/app/Types/service-flow.type";
import ServiceModal from "./ServiceModal";

export default function ServiceFlowCards({ card }: { card: ServiceFlow }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="
                group relative
                bg-[#ddccff06]
                border border-[#352f48]/40
                rounded-2xl
                p-6
                min-h-[260px] md:min-h-[320px]
                flex flex-col justify-between
                overflow-hidden
                transition-all duration-500
                hover:border-[#ac24ff]/50
                hover:bg-[#1e162c]/60
                backdrop-blur-sm
            ">

                {/* hover image */}
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none scale-105">
                    <img
                        src="/images/hover_card_img.png"
                        className="w-full h-full object-cover mix-blend-color-dodge"
                        alt="hover"
                    />
                </div>

                {/* HEADER */}
                <div className="flex flex-col gap-4">

                    <div className="inline-flex items-center gap-2 bg-[#1e162c] border border-[#352f48]/60 px-3 py-1.5 rounded-full w-fit">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d={card.svgPath} fill="#C86FFF" />
                            {card.extraSvg}
                        </svg>

                        <span className="text-xs text-white">
                            {card.caption}
                        </span>
                    </div>

                    <h4 className="text-white text-base md:text-lg font-medium leading-snug">
                        {card.title}
                    </h4>

                    <ul className="flex flex-col gap-2">
                        {card.features.map((feat) => (
                            <li key={feat} className="flex items-center gap-2 text-[#a997ce] text-sm">
                                <span className="w-1.5 h-1.5 bg-[#ac24ff] rounded-full" />
                                {feat}
                            </li>
                        ))}
                    </ul>

                </div>

                {/* BUTTON */}
                <div className="mt-6 pt-4">
                    <button
                        onClick={() => setOpen(true)}
                        className="
                            w-full
                            py-3
                            rounded-xl
                            text-sm
                            font-medium
                            text-white
                            bg-gradient-to-r from-[#1b4dfe] via-[#ac24ff] to-[#fe881b]
                            bg-[length:300%_100%]
                            bg-left hover:bg-right
                            transition-all duration-500
                        "
                    >
                        Show me more
                    </button>
                </div>

            </div>

            <ServiceModal open={open} onClose={() => setOpen(false)} card={card} />
        </>
    );
}