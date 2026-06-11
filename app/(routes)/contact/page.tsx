import Header from "@/components/Layout/Header";
import ContactForm from "@/components/Contact/ContactForm";

export default function ContactPage() {
    return (
        <>
            <Header />

            <main className="bg-[#050308] text-white overflow-hidden min-h-screen relative">

                {/* FINE TECH GRID (Rrjeta mikro në prapavijë) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

                {/* ================= HERO HERO ================= */}
                <section className="font-maven relative max-w-6xl mx-auto px-6 py-20 md:py-28 text-center z-10">

                    {/* High-End Ambient Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,66,255,0.08),transparent_60%)] pointer-events-none" />

                    {/* Cyber Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-white/10 bg-white/[0.02] text-white/40 text-[10px] font-mono uppercase tracking-widest backdrop-blur-md mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2f66ff] shadow-[0_0_8px_#2f66ff]" />
                        Secure_Inbound_Channel //
                    </div>

                    {/* TITLE */}
                    <h1 className="text-4xl sm:text-6xl md:text-[4.5vw] font-light tracking-tight leading-[1.1] max-w-4xl mx-auto">
                        Let’s build something <br />
                        <span className="bg-gradient-to-r from-[#2f66ff] via-[#b842ff] to-[#ff9e3b] text-transparent bg-clip-text font-bold drop-shadow-[0_2px_25px_rgba(184,66,255,0.15)]">
                            that actually matters
                        </span>
                    </h1>

                    {/* SUBTITLE */}
                    <p className="mt-6 text-sm sm:text-base md:text-lg text-[#9686ba] max-w-xl md:max-w-2xl mx-auto font-light leading-relaxed">
                        Whether you're building SaaS platforms, CRM systems or mobile apps —
                        we help you design, engineer and scale them with production-grade systems.
                    </p>

                    {/* RESPONSE TIME METRIC */}
                    <div className="mt-8 text-[11px] font-mono text-white/30 tracking-wider uppercase">
                        SLA_RESPONSE_TIME: <span className="text-[#ff9e3b] font-medium">&lt; 24_HOURS</span>
                    </div>

                </section>

                {/* ================= CONTENT CONTENT ================= */}
                <section className="max-w-6xl mx-auto px-6 pb-24 md:pb-32 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">

                    <ContactForm />

                    {/* INFO MODULES */}
                    <div className="flex flex-col gap-6 md:gap-8">

                        {/* Why work with us */}
                        <div className="p-6 md:p-8 rounded-xl border border-white/[0.06] bg-[#0d0b14]/30 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] relative group">
                            <span className="absolute top-4 right-5 text-[9px] font-mono text-white/10 tracking-widest">// COGNITIVE_ADVANTAGE</span>

                            <h3 className="text-base font-mono text-white/90 uppercase tracking-wider mb-6 pb-2 border-b border-white/[0.05]">
                                Why work with us
                            </h3>

                            <ul className="space-y-4 text-[#9686ba] text-sm font-light">
                                <li className="flex items-center gap-3">
                                    <span className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.6)]" />
                                    Product-first mindset — we think like builders, not executors
                                </li>

                                <li className="flex items-center gap-3">
                                    <span className="w-1 h-1 rounded-full bg-indigo-400 shadow-[0_0_6px_rgba(99,102,241,0.6)]" />
                                    From idea → MVP → scale — end-to-end ownership
                                </li>

                                <li className="flex items-center gap-3">
                                    <span className="w-1 h-1 rounded-full bg-pink-400 shadow-[0_0_6px_rgba(244,114,182,0.6)]" />
                                    High-performance UX with obsessive attention to detail
                                </li>

                                <li className="flex items-center gap-3">
                                    <span className="w-1 h-1 rounded-full bg-emerald-300 shadow-[0_0_6px_rgba(110,231,183,0.6)]" />
                                    Built for founders — systems that grow with the business
                                </li>

                                <li className="flex items-center gap-3">
                                    <span className="w-1 h-1 rounded-full bg-yellow-400 shadow-[0_0_6px_rgba(250,204,21,0.6)]" />
                                    Rapid iteration cycles — ship, test, improve, repeat
                                </li>

                                <li className="flex items-center gap-3">
                                    <span className="w-1 h-1 rounded-full bg-violet-400 shadow-[0_0_6px_rgba(167,139,250,0.6)]" />
                                    Engineering decisions driven by business impact, not trends
                                </li>
                            </ul>
                        </div>

                        {/* Direct contact */}
                        <div className="p-6 md:p-8 rounded-xl border border-white/[0.06] bg-[#0d0b14]/30 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] relative">
                            <span className="absolute top-4 right-5 text-[9px] font-mono text-white/10 tracking-widest">// DIRECT_PINGS</span>
                            <h3 className="text-base font-mono text-white/90 uppercase tracking-wider mb-6 pb-2 border-b border-white/[0.05]">
                                Direct routing
                            </h3>
                            <div className="text-[#9686ba] text-sm font-light space-y-3">
                                <p className="flex items-center justify-between">
                                    <span>EMAIL_ENDPOINT:</span>
                                    <span className="text-white font-mono font-medium hover:text-[#b842ff] transition-colors cursor-pointer">hello@versus.dev</span>
                                </p>
                                <p className="flex items-center justify-between">
                                    <span>ENCRYPTED_COMMS:</span>
                                    <span className="text-white font-mono">TLS_1.3_ACTIVE</span>
                                </p>
                            </div>
                        </div>

                    </div>

                </section>
            </main>
        </>
    );
}