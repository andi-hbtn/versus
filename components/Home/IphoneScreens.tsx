export default function IphoneScreens({ step }: { step: number }) {
    return (
        <div className="flex-1 flex items-center justify-center px-6 z-30">

            <div key={step} className="w-full max-w-[430px] rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-2xl overflow-hidden relative p-8">

                {/* ambient glow */}
                <div className="relative z-10">
                    {/* STATUS */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-2 h-2 rounded-full bg-[#1b4dfe]" />
                                <div className="absolute inset-0 rounded-full bg-[#1b4dfe] animate-ping opacity-50" />
                            </div>
                            <span className="text-[11px] uppercase tracking-[0.25em] text-white/40">
                                Active Phase
                            </span>
                        </div>
                        <span className="text-[11px] text-white/30">
                            0{step + 1} / 04
                        </span>
                    </div>
                    {/* PHASE */}
                    <div className="mt-10">
                        <div className="text-white/25 text-xs uppercase tracking-[0.35em]">
                            {step === 0 && "Strategy"}
                            {step === 1 && "Design"}
                            {step === 2 && "Engineering"}
                            {step === 3 && "Launch"}
                        </div>
                        <h2 className="mt-4 text-4xl font-extralight leading-tight">
                            {step === 0 && (
                                <>
                                    Understanding
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1b4dfe] to-[#60a5fa]">
                                        the Product
                                    </span>
                                </>
                            )}
                            {step === 1 && (
                                <>
                                    Designing
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ac24ff] to-[#d946ef]">
                                        the Experience
                                    </span>
                                </>
                            )}
                            {step === 2 && (
                                <>
                                    Building
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1b4dfe] via-[#ac24ff] to-[#60a5fa]">
                                        the System
                                    </span>
                                </>
                            )}
                            {step === 3 && (
                                <>
                                    Launching
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#fe881b] to-[#f59e0b]">
                                        to Production
                                    </span>
                                </>
                            )}
                        </h2>
                    </div>
                    {/* DESCRIPTION */}
                    <p className="mt-8 text-sm text-white/55 leading-relaxed">
                        {step === 0 &&
                            "We define scope, users, architecture and business goals before any design or code begins."}
                        {step === 1 &&
                            "We translate strategy into clean, modern and conversion-focused interfaces."}
                        {step === 2 &&
                            "We build scalable frontend and backend systems using production-grade architecture."}
                        {step === 3 &&
                            "We deploy, optimize and support the product for real-world usage and growth."}
                    </p>
                    {/* OUTPUTS */}
                    <div className="mt-10">
                        <div className="text-[11px] uppercase tracking-[0.25em] text-white/30 mb-4">
                            System Outputs
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {step === 0 && (
                                <>
                                    <Tag text="Product Roadmap" />
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
                                    <Tag text="Scalable Codebase" />
                                    <Tag text="API Integration" />
                                    <Tag text="Optimization" />
                                </>
                            )}
                            {step === 3 && (
                                <>
                                    <Tag text="Deployment" />
                                    <Tag text="Monitoring" />
                                    <Tag text="Support" />
                                </>
                            )}
                        </div>
                    </div>

                    {/* PROGRESS */}
                    <div className="mt-10">
                        <div className="flex justify-between text-[11px] text-white/30 mb-3">
                            <span>Workflow Progress</span>
                            <span>{(step + 1) * 25}%</span>
                        </div>
                        <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-[#1b4dfe] via-[#ac24ff] to-[#fe881b] transition-all duration-700"
                                style={{
                                    width: `${(step + 1) * 25}%`
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Tag({ text }: { text: string }) {
    return (
        <div
            className="px-3 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs text-white/70 backdrop-blur-xl">
            {text}
        </div>
    );
}