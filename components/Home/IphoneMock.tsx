import { Signal, Wifi, BatteryFull } from "lucide-react";
import IphoneScreens from "./IphoneScreens";

export default function IphoneMock({ step = 0 }: { step?: number }) {
    return (
        <section>
            <div className="flex items-center justify-center">
                {/* PHONE BODY */}
                <div className="relative w-full max-w-[400px] h-[800px] rounded-[55px] bg-[#1c1c1e] p-[10px]
                        shadow-[0_30px_80px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.08),inset_0_0_0_1px_rgba(255,255,255,0.12)]">

                    {/* SIDE BUTTONS */}
                    {/* Volume up */}
                    <div className="absolute -left-[3px] top-[110px] h-[34px] w-[3px] rounded-l-full bg-[#3a3a3c]" />
                    {/* Volume down */}
                    <div className="absolute -left-[3px] top-[155px] h-[34px] w-[3px] rounded-l-full bg-[#3a3a3c]" />
                    {/* Silent switch */}
                    <div className="absolute -left-[3px] top-[75px] h-[22px] w-[3px] rounded-l-full bg-[#3a3a3c]" />
                    {/* Power button */}
                    <div className="absolute -right-[3px] top-[120px] h-[64px] w-[3px] rounded-r-full bg-[#3a3a3c]" />

                    {/* SCREEN FRAME */}
                    <div className="relative h-full w-full overflow-hidden rounded-[46px] bg-black">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a1a2e_0%,_#16213e_40%,_#0f3460_100%)]" />
                        {/* Subtle light leak top */}
                        <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
                        {/* SCREEN CONTENT */}
                        <div className="relative h-full w-full flex flex-col">

                            {/* ── STATUS BAR ── */}
                            <div className="relative flex justify-between items-center px-8 pt-4 pb-1 select-none z-30">

                                {/* Time */}
                                <span className="text-white text-[15px] font-semibold tracking-[-0.3px]">
                                    9:41
                                </span>

                                {/* DYNAMIC ISLAND */}
                                <div className="absolute left-1/2 -translate-x-1/2 top-[14px]
                                    h-[34px] w-[120px] rounded-full bg-black
                                    shadow-[0_0_0_1px_rgba(255,255,255,0.06),inset_0_0_8px_rgba(0,0,0,0.8)]
                                    flex items-center justify-between px-3">
                                    {/* FaceID dot left */}
                                    <div className="h-[10px] w-[10px] rounded-full bg-[#0a0a0a]
                                        shadow-[inset_0_0_3px_rgba(255,255,255,0.15),0_0_6px_rgba(80,120,255,0.15)]
                                        flex items-center justify-center">
                                        <div className="h-[5px] w-[5px] rounded-full bg-[#111827]/80" />
                                    </div>
                                    {/* Camera dot right */}
                                    <div className="h-[11px] w-[11px] rounded-full bg-[#0d0d0f]
                                        shadow-[inset_0_0_4px_rgba(255,255,255,0.1),0_0_8px_rgba(40,80,200,0.2)]
                                        ring-[0.5px] ring-white/[0.06]" />
                                </div>

                                {/* Icons */}
                                <div className="flex items-center gap-[7px] text-white">
                                    <Signal size={15} strokeWidth={2.5} />
                                    <Wifi size={15} strokeWidth={2.5} />
                                    <BatteryFull size={22} strokeWidth={2} />
                                </div>
                            </div>
                            {/* ── LOCK SCREEN / MAIN CONTENT ── */}
                            <IphoneScreens step={step} />
                            {/* ── LOCK SCREEN / MAIN CONTENT ── */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}