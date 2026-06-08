import { Signal, Wifi, BatteryFull } from "lucide-react";
import IphoneScreens from "./IphoneScreens";

export default function IphoneMock({ step = 0 }: { step?: number }) {
    return (
        <div className="w-full aspect-[1/2] rounded-[40px] sm:rounded-[55px] bg-[#1c1c1e] p-[6px] sm:p-[10px]
            shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.08),inset_0_0_0_1px_rgba(255,255,255,0.12)] relative">

            {/* SIDE BUTTONS (Fshihen në mobile për thjeshtësi vizuale dhe performancë lartësie) */}
            <div className="hidden sm:block absolute -left-[3px] top-[110px] h-[34px] w-[3px] rounded-l-full bg-[#3a3a3c]" />
            <div className="hidden sm:block absolute -left-[3px] top-[155px] h-[34px] w-[3px] rounded-l-full bg-[#3a3a3c]" />
            <div className="hidden sm:block absolute -left-[3px] top-[75px] h-[22px] w-[3px] rounded-l-full bg-[#3a3a3c]" />
            <div className="hidden sm:block absolute -right-[3px] top-[120px] h-[64px] w-[3px] rounded-r-full bg-[#3a3a3c]" />

            {/* SCREEN FRAME */}
            <div className="relative h-full w-full overflow-hidden rounded-[34px] sm:rounded-[46px] bg-black flex flex-col">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a1a2e_0%,_#16213e_40%,_#0f3460_100%)]" />
                <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

                {/* ── STATUS BAR ── */}
                <div className="relative flex justify-between items-center px-6 sm:px-8 pt-3 sm:pt-4 pb-1 select-none z-30">
                    {/* Time */}
                    <span className="text-white text-xs sm:text-[15px] font-semibold tracking-[-0.3px]">
                        9:41
                    </span>

                    {/* DYNAMIC ISLAND */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-[10px] sm:top-[14px]
                        h-[24px] sm:h-[34px] w-[80px] sm:w-[120px] rounded-full bg-black
                        shadow-[0_0_0_1px_rgba(255,255,255,0.06),inset_0_0_8px_rgba(0,0,0,0.8)]
                        flex items-center justify-between px-2 sm:px-3">
                        <div className="h-[6px] sm:h-[10px] w-[6px] sm:w-[10px] rounded-full bg-[#0a0a0a] flex items-center justify-center">
                            <div className="h-[3px] sm:h-[5px] w-[3px] sm:w-[5px] rounded-full bg-[#111827]/80" />
                        </div>
                        <div className="h-[7px] sm:h-[11px] w-[7px] sm:w-[11px] rounded-full bg-[#0d0d0f] ring-[0.5px] ring-white/[0.06]" />
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-[4px] sm:gap-[7px] text-white">
                        <Signal className="w-3 h-3 sm:w-[15px] sm:h-[15px]" strokeWidth={2.5} />
                        <Wifi className="w-3 h-3 sm:w-[15px] sm:h-[15px]" strokeWidth={2.5} />
                        <BatteryFull className="w-4 h-4 sm:w-[22px] sm:h-[22px]" strokeWidth={2} />
                    </div>
                </div>

                {/* ── CONTENT ── */}
                <div className="flex-1 flex items-center justify-center p-4 sm:p-6 z-20 overflow-hidden">
                    <IphoneScreens step={step} />
                </div>
            </div>
        </div>
    );
}