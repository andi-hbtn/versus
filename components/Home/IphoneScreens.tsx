export default function IphoneScreens({ step }: { step: number }) {
    return (
        <div className="flex-1 flex flex-col items-center justify-start pt-[80px] text-center z-30 px-6">
            <div key={step} className="w-full max-w-[400px] mx-auto transition-all duration-700 ease-in-out space-y-6">

                {/* CONTEXT BADGE */}
                <div className="flex justify-center">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-white/40 border border-white/10 px-3 py-1 rounded-full backdrop-blur-xl">
                        {step === 0 && "Phase 01 • Strategy"}
                        {step === 1 && "Phase 02 • Design"}
                        {step === 2 && "Phase 03 • Engineering"}
                        {step === 3 && "Phase 04 • Launch"}
                    </span>
                </div>

                {/* TITLE */}
                <h1 className="text-white text-3xl font-light tracking-tight">
                    {step === 0 && "Understanding the product"}
                    {step === 1 && "Designing the experience"}
                    {step === 2 && "Building the system"}
                    {step === 3 && "Launching to production"}
                </h1>

                {/* MAIN INSIGHT */}
                <p className="text-white/60 text-xs leading-relaxed max-w-[390px] mx-auto">
                    {step === 0 && "We define scope, users, architecture and business goals before any design or code begins."}
                    {step === 1 && "We translate strategy into clean, modern and conversion-focused interfaces."}
                    {step === 2 && "We build scalable frontend and backend systems using production-grade architecture."}
                    {step === 3 && "We deploy, optimize and support the product for real-world usage and growth."}
                </p>

                {/* KEY OUTPUTS */}
                <div className="flex flex-col gap-2 items-center">

                    {step === 0 && (
                        <>
                            <span className="text-[11px] text-white/40">• Product roadmap</span>
                            <span className="text-[11px] text-white/40">• Technical architecture</span>
                            <span className="text-[11px] text-white/40">• User flows</span>
                        </>
                    )}

                    {step === 1 && (
                        <>
                            <span className="text-[11px] text-white/40">• Wireframes</span>
                            <span className="text-[11px] text-white/40">• UI system</span>
                            <span className="text-[11px] text-white/40">• Prototypes</span>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <span className="text-[11px] text-white/40">• Scalable codebase</span>
                            <span className="text-[11px] text-white/40">• API integration</span>
                            <span className="text-[11px] text-white/40">• Performance optimization</span>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <span className="text-[11px] text-white/40">• Production deployment</span>
                            <span className="text-[11px] text-white/40">• Monitoring setup</span>
                            <span className="text-[11px] text-white/40">• Ongoing support</span>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}