"use client";

import { useState } from "react";
import { ServiceFlow } from "@/app/Types/service-flow.type";
import ServiceModal from "./ServiceModal";

export default function ServiceFlowCards({ card }: { card: ServiceFlow }) {

    const [open, setOpen] = useState(false);

    return (
        <>
            {/* CARD */}
            <div
                className="group relative bg-[#ddccff06] border border-[#352f48]/40 rounded-[2.08vw] p-[2vw] min-h-[28vw] flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-[#ac24ff]/50 hover:bg-[#1e162c]/60 shadow-xl backdrop-blur-sm"
            >

                {/* HOVER BG */}
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none scale-105">
                    <img
                        src="/images/hover_card_img.png"
                        className="w-full h-full object-cover mix-blend-color-dodge"
                        alt="hover"
                    />
                </div>

                {/* TOP */}
                <div className="flex flex-col gap-[1.5vw]">

                    <div className="inline-flex items-center gap-[0.5vw] bg-[#1e162c] border border-[#352f48]/60 px-[1vw] py-[0.4vw] rounded-full w-fit">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d={card.svgPath} fill="#C86FFF" />
                            {card.extraSvg}
                        </svg>
                        <span className="text-[0.85vw] text-white">{card.caption}</span>
                    </div>

                    <h4 className="text-white text-[1.5vw] font-medium">
                        {card.title}
                    </h4>

                    <ul className="flex flex-col gap-[0.6vw]">
                        {card.features.map((feat, i) => (
                            <li key={i} className="flex items-center gap-[0.5vw] text-[#a997ce]">
                                <span className="w-[0.4vw] h-[0.4vw] bg-[#ac24ff] rounded-full" />
                                {feat}
                            </li>
                        ))}
                    </ul>

                </div>

                {/* BUTTON */}
                <div className="mt-[2vw] pt-[1vw]">
                    <button
                        onClick={() => setOpen(true)}
                        className="w-full py-[0.8vw] bg-gradient-to-r from-[#1b4dfe] via-[#ac24ff] to-[#fe881b] bg-[length:300%_100%] bg-left hover:bg-right rounded-[1vw] text-white text-[0.9vw] transition-all duration-500 cursor-pointer">
                        Show me more
                    </button>
                </div>

            </div>

            {/* MODAL */}
            <ServiceModal
                open={open}
                onClose={() => setOpen(false)}
                card={card}
            />
        </>
    );
}