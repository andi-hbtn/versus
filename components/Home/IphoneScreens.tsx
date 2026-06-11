export default function IphoneScreens({ step }: { step: number }) {
    return (
        <div key={step} className="w-full h-full overflow-hidden relative p-5 sm:p-7 flex flex-col justify-between dynamic-screen-card select-none">

            <div className="relative z-10 flex flex-col justify-between h-full w-full">
                {/* STATUS BAR INNER */}
                <div className="flex items-center justify-between border-b border-white/[0.05] pb-3">
                    <div className="flex items-center gap-2">
                        <div className="relative flex h-2 w-2">
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75
                                ${step === 0 && "bg-blue-400"}
                                ${step === 1 && "bg-purple-400"}
                                ${step === 2 && "bg-indigo-400"}
                                ${step === 3 && "bg-orange-400"}
                            `}></span>
                            <span className={`relative inline-flex rounded-full h-2 w-2
                                ${step === 0 && "bg-[#1b4dfe]"}
                                ${step === 1 && "bg-[#ac24ff]"}
                                ${step === 2 && "bg-[#1b4dfe]"}
                                ${step === 3 && "bg-[#fe881b]"}
                            `}></span>
                        </div>
                        <span className="text-[10px] font-mono tracking-[0.2em] text-white/50 uppercase">
                            Phase_Active
                        </span>
                    </div>
                    <span className="text-[10px] font-mono text-white/40 bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/[0.05]">
                        0{step + 1} // 04
                    </span>
                </div>

                {/* PHASE & TITLE */}
                <div className="mt-5 sm:mt-7">
                    <div className="text-white/30 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.4em]">
                        {step === 0 && "[ 01 // Strategy ]"}
                        {step === 1 && "[ 02 // Design ]"}
                        {step === 2 && "[ 03 // Engineering ]"}
                        {step === 3 && "[ 04 // Launch ]"}
                    </div>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-light tracking-tight text-white leading-[1.15]">
                        {step === 0 && (
                            <>
                                Understanding <br />
                                <span className="font-medium bg-gradient-to-r from-[#2f66ff] to-[#60a5fa] text-transparent bg-clip-text drop-shadow-[0_2px_10px_rgba(47,102,255,0.15)]">
                                    the Product
                                </span>
                            </>
                        )}
                        {step === 1 && (
                            <>
                                Designing <br />
                                <span className="font-medium bg-gradient-to-r from-[#b842ff] to-[#d946ef] text-transparent bg-clip-text drop-shadow-[0_2px_10px_rgba(184,42,255,0.15)]">
                                    the Experience
                                </span>
                            </>
                        )}
                        {step === 2 && (
                            <>
                                Building <br />
                                <span className="font-medium bg-gradient-to-r from-[#2f66ff] via-[#b842ff] to-[#60a5fa] text-transparent bg-clip-text drop-shadow-[0_2px_10px_rgba(184,42,255,0.15)]">
                                    the System
                                </span>
                            </>
                        )}
                        {step === 3 && (
                            <>
                                Launching <br />
                                <span className="font-medium bg-gradient-to-r from-[#ff9e3b] to-[#f59e0b] text-transparent bg-clip-text drop-shadow-[0_2px_10px_rgba(255,158,59,0.15)]">
                                    to Production
                                </span>
                            </>
                        )}
                    </h2>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-4 text-xs sm:text-[13px] text-white/60 font-light leading-relaxed">
                    {step === 0 && "We define scope, users, architecture and business goals before any design or code begins."}
                    {step === 1 && "We translate strategy into clean, modern and conversion-focused interfaces."}
                    {step === 2 && "We build scalable frontend and backend systems using production-grade architecture."}
                    {step === 3 && "We deploy, optimize and support the product for real-world usage and growth."}
                </p>

                {/* OUTPUTS (Glassmorphic Badges) */}
                <div className="mt-5 sm:mt-6">
                    <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/30 mb-2.5">
                        // Core_Outputs
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {step === 0 && (
                            <>
                                <Tag text="Roadmap" />
                                <Tag text="Architecture" />
                                <Tag text="User Flows" />
                            </>
                        )}
                        {step === 1 && (
                            <>
                                <Tag text="Wireframes" />
                                <Tag text="UI System" />
                                <Tag text="Prototypes" />
                            </>
                        )}
                        {step === 2 && (
                            <>
                                <Tag text="Codebase" />
                                <Tag text="APIs" />
                                <Tag text="Optimization" />
                            </>
                        )}
                        {step === 3 && (
                            <>
                                <Tag text="Deploy" />
                                <Tag text="Monitor" />
                                <Tag text="Support" />
                            </>
                        )}
                    </div>
                </div>

                {/* PROGRESS BAR (Glow Tech style) */}
                <div className="mt-5 sm:mt-6 border-t border-white/[0.05] pt-4">
                    <div className="flex justify-between text-[10px] font-mono text-white/40 mb-2">
                        <span>SYSTEM_METRIC</span>
                        <span className="text-white/80 font-medium">{(step + 1) * 25}%</span>
                    </div>
                    <div className="h-[3px] bg-white/[0.06] rounded-full overflow-hidden relative">
                        <div
                            className="h-full bg-gradient-to-r from-[#2f66ff] via-[#b842ff] to-[#ff9e3b] transition-all duration-700 rounded-full shadow-[0_0_8px_#b842ff]"
                            style={{ width: `${(step + 1) * 25}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Tag({ text }: { text: string }) {
    return (
        <div className="px-2.5 py-1 rounded-md border border-white/[0.07] bg-white/[0.02] text-[10px] sm:text-xs font-mono text-white/80 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] tracking-wide whitespace-nowrap hover:bg-white/[0.05] transition-colors duration-300">
            {text}
        </div>
    );
}