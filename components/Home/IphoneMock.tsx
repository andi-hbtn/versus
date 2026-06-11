import { Signal, Wifi, BatteryFull } from "lucide-react";
import IphoneScreens from "./IphoneScreens";

export default function IphoneMock({ step = 0 }: { step?: number }) {
    return (
        /* PREMIUM TITANIUM CHASSIS (Ngjyra ultra-realiste Space Black Titanium me hije të thella) */
        <div className="w-full aspect-[1/2] rounded-[40px] sm:rounded-[55px] bg-gradient-to-b from-[#1c1a22] via-[#111015] to-[#0b0a0d] p-[6px] sm:p-[10px]
            shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.06),inset_0_1.5px_2px_rgba(255,255,255,0.12)] relative">

            {/* REALISTIC METAL SIDE BUTTONS (Ngjyra titanike e vërtetë pa neon, me refleksion delikat dritash) */}
            {/* Volume Up */}
            <div className="hidden sm:block absolute -left-[2px] top-[110px] h-[34px] w-[2.5px] rounded-l-full bg-gradient-to-b from-[#3a3742] to-[#242229] border-r border-black/40 shadow-[inset_0.5px_0_1px_rgba(255,255,255,0.1)]" />
            {/* Volume Down */}
            <div className="hidden sm:block absolute -left-[2px] top-[155px] h-[34px] w-[2.5px] rounded-l-full bg-gradient-to-b from-[#3a3742] to-[#242229] border-r border-black/40 shadow-[inset_0.5px_0_1px_rgba(255,255,255,0.1)]" />
            {/* Action Button */}
            <div className="hidden sm:block absolute -left-[2px] top-[75px] h-[22px] w-[2.5px] rounded-l-full bg-gradient-to-b from-[#3a3742] to-[#242229] border-r border-black/40 shadow-[inset_0.5px_0_1px_rgba(255,255,255,0.1)]" />
            {/* Power Button */}
            <div className="hidden sm:block absolute -right-[2px] top-[120px] h-[64px] w-[2.5px] rounded-r-full bg-gradient-to-b from-[#3a3742] to-[#242229] border-l border-black/40 shadow-[inset_-0.5px_0_1px_rgba(255,255,255,0.1)]" />

            {/* SCREEN FRAME (OLED Deep Black bezel) */}
            <div className="relative h-full w-full overflow-hidden rounded-[34px] sm:rounded-[46px] bg-[#000000] flex flex-col ring-1 ring-white/[0.08] shadow-[inset_0_0_4px_rgba(0,0,0,0.9)]">
                {/* Real-world Screen Glow (Sfondi i brendshëm diskret OLED për thellësi) */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0d0c14_0%,_#050507_60%,_#000000_100%)]" />

                {/* Subtle Glass Reflection Overlay (Refleksion i hollë drite që kalon diagonalisht) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.015] to-transparent pointer-events-none z-30" />

                {/* ── STATUS BAR (Iphone Realist me fontet zyrtare) ── */}
                <div className="relative flex justify-between items-center px-6 sm:px-8 pt-3 sm:pt-4 pb-1 select-none z-30">
                    {/* Time (San Francisco Style Font) */}
                    <span className="text-white text-xs sm:text-[14px] font-sans font-semibold tracking-tight">
                        9:41
                    </span>

                    {/* DYNAMIC ISLAND (E zezë absolute, me sensorët e fshehur që duken vetëm nën dritë) */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-[10px] sm:top-[14px] h-[24px] sm:h-[30px] w-[80px] sm:w-[100px] rounded-full bg-[#000000] shadow-[0_0_0_1px_rgba(255,255,255,0.04),inset_0_1px_2px_rgba(0,0,0,0.8)]
                        flex items-center justify-between px-2 sm:px-3">
                        {/* Proximity Sensor */}
                        <div className="h-[6px] sm:h-[8px] w-[6px] sm:w-[8px] rounded-full bg-[#030303]" />
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-[4px] sm:gap-[5px] text-white">
                        <Signal className="w-3 h-3 sm:w-[13px] sm:h-[13px]" strokeWidth={2.2} />
                        <Wifi className="w-3 h-3 sm:w-[13px] sm:h-[13px]" strokeWidth={2.2} />

                        {/* Real Battery Frame */}
                        <div className="relative flex items-center">
                            <BatteryFull className="w-4 h-4 sm:w-[20px] sm:h-[20px]" strokeWidth={1.8} />
                        </div>
                    </div>
                </div>

                {/* ── CONTENT ── */}
                <div className="flex-1 flex items-center justify-center z-20 overflow-hidden relative">
                    <IphoneScreens step={step} />
                </div>
            </div>
        </div>
    );
}