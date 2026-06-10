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
        <section ref={sectionRef} className="w-full bg-[#0f0c16] text-white relative min-h-screen md:min-h-[300vh] px-4 sm:px-[5vw] py-16 md:py-0">
            <div className="sticky top-[60px] h-auto md:h-screen flex flex-col md:flex-row items-center max-w-[1400px] mx-auto gap-10 md:gap-[6vw]">

                {/* LEFT SIDE: Titulli dhe Hapat */}
                <div className="w-full md:w-1/2 flex flex-col gap-8 md:gap-[3vw]">
                    <div>
                        <h2 className="font-maven text-3xl sm:text-4xl lg:text-[3vw] font-semibold leading-tight">
                            From idea <br />
                            <span className="font-maven bg-gradient-to-r from-[#1b4dfe] via-[#ac24ff] to-[#fe881b] text-transparent bg-clip-text">
                                to launch
                            </span>
                        </h2>

                        <p className="text-[#a997ce] mt-4 max-w-full md:max-w-[30vw] text-base">
                            A structured process that turns ideas into scalable digital products.
                        </p>
                    </div>

                    {/* STEPS LIST */}
                    <div className="flex flex-col gap-6 md:gap-[2vw]">

                        {isMobile ?
                            ""
                            :
                            steps.map((step, index) => (
                                <div
                                    key={step.id}
                                    onClick={() => {
                                        // Në mobile lejojmë klikimin për të ndryshuar ekranin e telefonit manually
                                        setActiveStep(index);
                                    }}
                                    className={`pl-6 border-l-2 transition-all duration-500 cursor-pointer
                                    ${index === activeStep
                                            ? "border-[#ac24ff] opacity-100 scale-100"
                                            : "border-[#2a2238] opacity-40 md:opacity-40 scale-[0.98]"
                                        }
                                `}
                                >
                                    <h3 className="text-lg sm:text-xl font-medium">
                                        {step.title}
                                    </h3>
                                    <p className="text-[#a997ce] text-sm mt-1">
                                        {step.description}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* RIGHT SIDE: Telefoni Mockup */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center mt-6 md:mt-0">
                    <div className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] transition-all duration-700">
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