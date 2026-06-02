"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IphoneMock from "./IphoneMock";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        id: "discovery",
        title: "Discovery & Strategy",
        description:
            "We analyze your idea, define requirements, user flows and technical architecture."
    },
    {
        id: "design",
        title: "UI/UX Design",
        description:
            "We craft modern, intuitive interfaces focused on usability and conversion."
    },
    {
        id: "development",
        title: "Development",
        description:
            "We build scalable web and mobile applications using modern technologies."
    },
    {
        id: "launch",
        title: "Launch & Growth",
        description:
            "We deploy, optimize and support your product for long-term success."
    }
];

export default function ProductJourney() {
    const sectionRef = useRef(null);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "+=2500",
                scrub: true,
                onUpdate: (self) => {
                    const index = Math.min(
                        steps.length - 1,
                        Math.floor(self.progress * steps.length)
                    );

                    setActiveStep(index);
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    console.log("sectionRef---", sectionRef);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#0f0c16] text-white relative min-h-[400vh] px-[5vw]"
        >
            <div className="sticky top-[60px] h-screen flex items-center max-w-[1400px] mx-auto gap-[6vw]">

                {/* LEFT */}
                <div className="w-1/2 flex flex-col gap-[3vw]">

                    <div>
                        <h2 className="text-[3vw] font-semibold leading-tight">
                            From idea <br />
                            <span className="bg-gradient-to-r from-[#1b4dfe] via-[#ac24ff] to-[#fe881b] text-transparent bg-clip-text">
                                to launch
                            </span>
                        </h2>

                        <p className="text-[#a997ce] mt-4 max-w-[30vw]">
                            A structured process that turns ideas into scalable digital products.
                        </p>
                    </div>

                    {/* STEPS */}
                    <div className="flex flex-col gap-[2vw]">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`pl-6 border-l transition-all duration-500 ${index === activeStep
                                    ? "border-[#ac24ff] opacity-100 scale-100"
                                    : "border-[#2a2238] opacity-40 scale-[0.98]"
                                    }`}
                            >
                                <h3 className="text-xl font-medium">
                                    {step.title}
                                </h3>
                                <p className="text-[#a997ce] text-sm mt-1">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

                {/* RIGHT */}
                <div className="w-1/2 flex justify-end">
                    <div className="transition-all duration-700">
                        <IphoneMock step={activeStep} />
                    </div>
                </div>

            </div>
        </section>
    );
}