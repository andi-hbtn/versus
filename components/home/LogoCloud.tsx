"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import PhoneScreenSlider from "./PhoneScreenSlider";

export default function LogoCloud() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            // Marrim pozicionin e seksionit në raport me dritaren e ekranit
            const rect = containerRef.current.getBoundingClientRect();
            const sectionHeight = rect.height;
            const windowHeight = window.innerHeight;

            // Llogarisim sa përqind ka kaluar përdoruesi brenda këtij seksioni
            const scrolledIntoSection = -rect.top;
            const maxScrollable = sectionHeight - windowHeight;

            if (maxScrollable > 0) {
                let percentage = scrolledIntoSection / maxScrollable;
                percentage = Math.max(0, Math.min(1, percentage)); // Limitimi mes 0 dhe 1
                setScrollPercentage(percentage);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Llogarisim zhvendosjen: pasi kemi dy imazhe, na duhet të lëvizim nga 0% në -50% të lartësisë së kontenjerit brendshëm
    const translateY = scrollPercentage * 50;

    return (
        <section
            ref={containerRef}
            className="w-full bg-[#0a0810] relative text-white flex flex-col md:flex-row items-stretch min-h-[200vh]"
        >

            {/* KRAHU I MAJTË: TEKSTI QË BËN SCROLL NORMALISHT */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-[6vw] py-[10vw] gap-[4vw] relative z-10">
                {/* Blloku 1 */}
                <div className="min-h-[70vh] flex flex-col justify-center gap-[1.5vw]">
                    <div className="inline-flex items-center gap-[0.5vw] bg-[#1a1625] border border-[#352f48]/60 px-[1vw] py-[0.4vw] rounded-full w-fit">
                        <span className="w-[0.4vw] h-[0.4vw] bg-[#fe881b] rounded-full block animate-pulse" />
                        <span className="text-[0.8vw] text-[#a997ce] uppercase tracking-widest font-medium">Fluxora Studio</span>
                    </div>
                    <h2 className="text-[3.5vw] font-semibold leading-[110%] tracking-tight">
                        Technology Crafted for All <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#fe881b] via-[#ac24ff] to-[#1b4dfe] italic font-serif">
                            Not Machines.
                        </span>
                    </h2>
                    <p className="text-[#a997ce] text-[1.1vw] max-w-[32vw] leading-[150%]">
                        We create clear, intuitive, and accessible digital experiences shaped by real human behavior.
                    </p>
                </div>

                {/* Blloku 2 */}
                <div className="min-h-[70vh] flex flex-col justify-center gap-[1.5vw] mt-[20vh]">
                    <h2 className="text-[3.5vw] font-semibold leading-[110%] tracking-tight">
                        Meet The Minds <br />
                        <span className="text-[#a997ce]">Behind The Work</span>
                    </h2>
                    <p className="text-[#a997ce] text-[1.1vw] max-w-[32vw] leading-[150%]">
                        At Fluxora® Studio, we bring together designers, strategists, and makers to craft bold, thoughtful experiences.
                    </p>

                    <div className="flex gap-[3vw] mt-[1.5vw]">
                        <div>
                            <div className="text-[2vw] font-bold text-white">150+</div>
                            <div className="text-[0.9vw] text-[#83799e]">Projects delivered</div>
                        </div>
                        <div className="w-[1px] bg-[#352f48]" />
                        <div>
                            <div className="text-[2vw] font-bold text-[#fe881b]">98%</div>
                            <div className="text-[0.9vw] text-[#83799e]">Client satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* KRAHU I DJATHTË: TELEFONI "STICKY" */}
            <div className="w-full md:w-1/2 relative flex items-start justify-center pt-[10vh]">
                <div className="sticky top-[12vh] w-[26vw] h-[52vw] max-h-[85vh] flex items-center justify-center">

                    {/* MOCKUP-I I IPHONE */}
                    <div className="absolute inset-0 z-30 pointer-events-none">
                        <Image
                            src="/images/iphone17.png"
                            alt="Phone Frame"
                            fill
                            className="object-cover rounded-[3.8vw]"
                            priority
                        />

                        <div className="absolute inset-0 rounded-[3.8vw] bg-gradient-to-br from-white/5 via-transparent to-black/20" />
                    </div>

                    {/* EKRANI BRENDSHËM (Kemi hequr overflow-y-scroll dhe kemi vënë overflow-hidden) */}
                    <div className="absolute inset-[0.4vw] rounded-[3.1vw] bg-[#13101c] z-20 overflow-hidden">

                        {/* KETU NDODH ANIMACOMI DUKE PERDORUR TRANSLATEY */}
                        <div
                            className="w-full flex flex-col relative transition-transform duration-100 ease-out"
                            style={{ transform: `translateY(-${translateY}%)` }}
                        >

                            {/* IMAZHI 1 */}
                            <div className="w-full h-[51.2vw] shrink-0 relative overflow-hidden bg-gradient-to-b from-[#1c110b] to-[#13101c]">
                                <div className="absolute top-[-5vw] left-1/2 -translate-x-1/2 w-[35vw] h-[35vw] bg-[#fe881b]/20 rounded-full blur-[40px] pointer-events-none" />
                                <div className="p-[2vw] pt-[4vw] flex flex-col justify-between h-full relative z-10">
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-[0.9vw] tracking-wider text-white">Fluxora</span>
                                        <span className="text-[0.65vw] bg-white text-black px-[0.8vw] py-[0.3vw] rounded-full font-medium">Get Started</span>
                                    </div>
                                    <div className="my-auto flex flex-col gap-[1vw] mt-[4vw]">
                                        <h3 className="text-[2vw] font-bold leading-[115%] tracking-tight text-white">
                                            Technology <br />Crafted for All <br /><span className="text-[#fe881b] italic">Not Machines</span>
                                        </h3>
                                        <p className="text-[0.75vw] text-[#a997ce] leading-[140%]">We create clear, intuitive, and accessible digital experiences.</p>
                                        <div className="w-fit bg-[#fe881b] text-white font-medium px-[1.2vw] py-[0.5vw] rounded-full text-[0.7vw] mt-[0.5vw]">
                                            Get started →
                                        </div>
                                    </div>
                                    <div className="bg-[#fe881b]/10 border border-[#fe881b]/20 p-[1vw] rounded-[1.2vw] flex justify-between items-center">
                                        <div>
                                            <div className="text-[1.2vw] font-bold text-white">98%</div>
                                            <div className="text-[0.6vw] text-[#a997ce]">Client satisfaction</div>
                                        </div>
                                        <span className="text-[1.5vw] text-[#fe881b] font-light">*</span>
                                    </div>
                                </div>
                            </div>

                            {/* IMAZHI 2 */}
                            <div className="w-full h-[51.2vw] shrink-0 relative overflow-hidden bg-[#0d0b13] border-t border-[#352f48]/40">
                                <div className="p-[2vw] pt-[3vw] flex flex-col justify-between h-full">
                                    <div className="flex flex-col gap-[0.8vw]">
                                        <span className="text-[0.6vw] text-[#83799e] uppercase tracking-widest">• Why choose us</span>
                                        <h3 className="text-[1.8vw] font-medium leading-[120%] tracking-tight text-white">
                                            Meet The Minds <br /><span className="text-[#83799e]">Behind The Work</span>
                                        </h3>
                                    </div>
                                    <div className="w-full h-[28vw] relative rounded-[1.5vw] overflow-hidden my-[1vw] border border-[#352f48]/30">
                                        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#ac24ff]/30 to-transparent" />
                                        <div className="absolute inset-0 bg-[#13101c]">
                                            <PhoneScreenSlider />
                                        </div>
                                    </div>
                                    <p className="text-[0.75vw] text-[#a997ce] leading-[140%]">
                                        At Fluxora® Studio, we bring together designers, strategists, and makers to craft bold digital experiences.
                                    </p>
                                    <div className="bg-[#ac24ff] text-center text-white py-[0.6vw] rounded-full text-[0.75vw] font-medium mt-[1vw] cursor-pointer hover:bg-[#ac24ff]/90 transition-colors">
                                        Book a call
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}