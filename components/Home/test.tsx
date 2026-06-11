"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IphoneMock from "./IphoneMock";
import NavDots from "./mobile/NavDots";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        id: "discovery",
        title: "Discovery & Strategy",
        description: "We analyze your idea, define requirements, user flows and technical architecture."
    },
    {
        id: "design",
        title: "UI/UX Design",
        description: "We craft modern, intuitive interfaces focused on usability and conversion."
    },
    {
        id: "development",
        title: "Development",
        description: "We build scalable web and mobile applications using modern technologies."
    },
    {
        id: "launch",
        title: "Launch & Growth",
        description: "We deploy, optimize and support your product for long-term success."
    }
];

export default function ProductJourney() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        let mm = gsap.matchMedia();

        // Aktivizohet vetëm për ekrane nga 768px e lart (Tablet & Desktop)
        mm.add("(min-width: 768px)", () => {
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "+=2000",
                onUpdate: (self) => {
                    const index = Math.min(
                        steps.length - 1,
                        Math.floor(self.progress * steps.length)
                    );
                    setActiveStep(index);
                }
            });
        });

        return () => mm.revert();
    }, []);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 764);

        check(); // initial sync
        window.addEventListener("resize", check);

        return () => window.removeEventListener("resize", check);
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-[#05020a] text-white relative min-h-screen md:min-h-[300vh] px-4 sm:px-[5vw] py-16 md:py-0 overflow-hidden">

            {/* HIGH-TECH BACKGROUND ELEMENTS (Ambient Glows) */}
            <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-[#1b4dfe]/10 rounded-full blur-[120px] pointer-events-none hidden md:block animate-pulse duration-[6000ms]" />
            <div className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] bg-[#ac24ff]/10 rounded-full blur-[150px] pointer-events-none hidden md:block animate-pulse duration-[8000ms]" />

            {/* FINE TECH GRID (Sfond diskret me rrjetë) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="sticky top-[60px] h-auto md:h-screen flex flex-col md:flex-row items-center max-w-[1400px] mx-auto gap-10 md:gap-[8vw] z-10">

                {/* LEFT SIDE: Titulli dhe Hapat */}
                <div className="w-full md:w-1/2 flex flex-col gap-8 md:gap-[4vw]">
                    <div>
                        {/* Kicker Tag */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ac24ff]/30 bg-[#ac24ff]/5 text-[#ac24ff] text-xs font-mono uppercase tracking-widest mb-4 backdrop-blur-sm shadow-[0_0_15px_rgba(172,36,255,0.1)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ac24ff] animate-ping" />
                            Workflow Execution
                        </div>

                        <h2 className="font-maven text-4xl sm:text-5xl lg:text-[3.5vw] font-bold leading-[1.1] tracking-tight">
                            From idea <br />
                            <span className="font-maven bg-gradient-to-r from-[#2f66ff] via-[#b842ff] to-[#ff9e3b] text-transparent bg-clip-text drop-shadow-[0_2px_20px_rgba(184,66,255,0.2)]">
                                to launch.
                            </span>
                        </h2>

                        <p className="text-[#9686ba] mt-4 max-w-full md:max-w-[28vw] text-base sm:text-lg font-light leading-relaxed">
                            A highly optimized blueprint that engineered concept formulation into high-performing digital architecture.
                        </p>
                    </div>

                    {/* STEPS LIST */}
                    <div className="flex flex-col gap-4 md:gap-[1.2vw] relative">
                        {/* Vija vertikale "Glow" në background e të gjithë hapave */}
                        <div className="absolute left-[3px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#2a2238] via-[#2a2238] to-transparent hidden md:block" />

                        {isMobile ?
                            ""
                            :
                            steps.map((step, index) => {
                                const isActive = index === activeStep;
                                return (
                                    <div
                                        key={step.id}
                                        onClick={() => setActiveStep(index)}
                                        className={`group relative pl-8 transition-all duration-500 cursor-pointer py-3 rounded-r-xl border-l-[3px]
                                        ${isActive
                                                ? "border-[#ac24ff] bg-gradient-to-r from-[#ac24ff]/10 to-transparent opacity-100 translate-x-1"
                                                : "border-transparent opacity-30 hover:opacity-60 translate-x-0"
                                            }
                                    `}
                                    >
                                        {/* High-tech Indicator Dot & Laser Glow Line */}
                                        {isActive && (
                                            <div className="absolute left-[-3px] top-1/2 -translate-y-1/2 w-[3px] h-3/4 bg-[#ac24ff] shadow-[0_0_15px_#ac24ff,0_0_30px_#ac24ff] rounded-full transition-all duration-500" />
                                        )}

                                        {/* Flex container për Numrin dhe Titullin */}
                                        <div className="flex items-baseline gap-3">
                                            {/* Tech Index Number (e.g. 01, 02) */}
                                            <span className={`font-mono text-xs font-semibold transition-colors duration-500
                                                ${isActive ? "text-[#ac24ff]" : "text-[#9686ba]"}
                                            `}>
                                                0{index + 1}//
                                            </span>

                                            <h3 className={`text-lg sm:text-xl font-semibold tracking-wide transition-all duration-500
                                                ${isActive ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" : "text-[#d1c5eb]"}
                                            `}>
                                                {step.title}
                                            </h3>
                                        </div>

                                        <p className={`text-sm mt-1.5 max-w-[35vw] font-light leading-relaxed transition-all duration-500
                                            ${isActive ? "text-[#c2b4e2]" : "text-[#8271a6]"}
                                        `}>
                                            {step.description}
                                        </p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                {/* RIGHT SIDE: Telefoni Mockup */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center mt-6 md:mt-0 relative">
                    {/* Glow pas telefonit */}
                    <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#ac24ff]/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />

                    {/* Cyber Frame Container */}
                    <div className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[350px] transition-all duration-700 p-4 rounded-[40px] border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <IphoneMock step={activeStep} />
                    </div>
                </div>

                {isMobile && (
                    <NavDots
                        count={steps.length}
                        active={activeStep}
                        onSelect={(index) => setActiveStep(index)}
                    />)
                }
            </div>
        </section>
    );
}





// service-flow-section
"use client";
// import { useState } from "react";
// import { ServiceFlow } from "@/app/Types/service-flow.type";
// import ServiceModal from "./ServiceModal";
// export default function ServiceFlowCards({ card }: { card: ServiceFlow }) {
//     const [open, setOpen] = useState(false);
//     return (
//         <>
//             {/* NEXT LEVEL GLASSMORPHIC CARD CHASSIS */}
//             <div className="group relative bg-[#0d0b14]/40 border border-white/[0.06] rounded-2xl p-6 min-h-[280px] md:min-h-[340px] flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-[#b842ff]/40 hover:bg-[#120e1c]/50 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(184,66,255,0.08)] hover:-translate-y-1">
//                 {/* Cyber Matrix Glow Overlay në Hover */}
//                 <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none scale-100 group-hover:scale-105 bg-[radial-gradient(circle_at_top,_rgba(184,66,255,0.08),transparent_60%)]">
//                     <img
//                         src="/images/hover_card_img.png"
//                         className="w-full h-full object-cover mix-blend-color-dodge opacity-20"
//                         alt="hover matrix"
//                     />
//                 </div>
//                 {/* HEADER CONTENT */}
//                 <div className="flex flex-col gap-5">
//                     {/* Badge */}
//                     <div className="inline-flex items-center gap-2 bg-[#09070d] border border-white/[0.08] px-3 py-1 rounded-md w-fit shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
//                         <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="drop-shadow-[0_0_4px_#b842ff]">
//                             <path d={card.svgPath} fill="#b842ff" />
//                             {card.extraSvg}
//                         </svg>
//                         <span className="text-[11px] font-mono font-medium tracking-wider text-[#d1c5eb]">
//                             {card.caption.toUpperCase()}
//                         </span>
//                     </div>
//                     {/* Title */}
//                     <h4 className="text-white text-base md:text-[17px] font-medium leading-snug tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300">
//                         {card.title}
//                     </h4>
//                     {/* Features List */}
//                     <ul className="flex flex-col gap-2.5 mt-1">
//                         {card.features.map((feat) => (
//                             <li key={feat} className="flex items-center gap-2.5 text-[#9686ba] text-sm font-light">
//                                 <span className="w-1 h-1 bg-[#b842ff] rounded-full shadow-[0_0_6px_#b842ff]" />
//                                 {feat}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 {/* BUTTON (Premium Shkëlqim dhe Tranzicion i Lëmuar) */}
//                 <div className="mt-6 pt-2 border-t border-white/[0.04]">
//                     <button
//                         onClick={() => setOpen(true)}
//                         className="w-full py-2.5 rounded-xl text-xs font-mono tracking-widest uppercase text-white/90 border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] hover:border-[#b842ff]/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:shadow-[0_0_15px_rgba(184,66,255,0.15)] transition-all duration-300 active:scale-[0.98]">
//                         Execute_Inquiry //
//                     </button>
//                 </div>
//             </div>
//             <ServiceModal open={open} onClose={() => setOpen(false)} card={card} />
//         </>
//     );
// }