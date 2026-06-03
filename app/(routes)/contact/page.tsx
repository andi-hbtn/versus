import Header from "@/components/layout/Header";
import ContactForm from "@/components/Contact/ContactForm";

export default function ContactPage() {
    return (
        <>
            <Header />

            <main className="bg-[#05020a] text-white overflow-hidden">

                {/* ================= HERO ================= */}
                <section className="relative max-w-6xl mx-auto px-6 py-28 text-center">

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(172,36,255,0.10),transparent_60%)]" />

                    <span className="text-white/40 uppercase tracking-[0.35em] text-xs">
                        Contact
                    </span>

                    <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
                        Let’s build something
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1b4dfe] via-[#ac24ff] to-[#fe881b]">
                            that actually matters
                        </span>
                    </h1>

                    <p className="mt-6 text-white/60 max-w-2xl mx-auto">
                        Whether you're building SaaS platforms, CRM systems or mobile apps — we help you design, engineer and scale them.
                    </p>

                    <div className="mt-10 text-white/30 text-sm">
                        Response time: <span className="text-white/60">within 24 hours</span>
                    </div>

                </section>

                {/* ================= CONTENT ================= */}
                <section className="max-w-6xl mx-auto px-6 pb-28 grid md:grid-cols-2 gap-10">

                    {/* CLIENT FORM ONLY */}
                    <ContactForm />

                    {/* INFO PANEL (SERVER) */}
                    <div className="flex flex-col gap-10">

                        <div className="p-10 rounded-[28px] border border-white/10 bg-white/[0.02] backdrop-blur-xl">
                            <h3 className="text-xl font-light mb-6">
                                Why work with us
                            </h3>

                            <ul className="space-y-4 text-white/60">
                                <li>• Full-stack engineering (Web + Mobile + Backend)</li>
                                <li>• Scalable architecture thinking</li>
                                <li>• Direct communication</li>
                                <li>• Performance-first mindset</li>
                            </ul>
                        </div>

                        <div className="p-10 rounded-[28px] border border-white/10 bg-white/[0.02] backdrop-blur-xl">
                            <h3 className="text-xl font-light mb-6">
                                Direct contact
                            </h3>

                            <div className="text-white/60 space-y-2">
                                <p>Email: <span className="text-white">hello@versus.dev</span></p>
                                <p>Response: <span className="text-white">within 24h</span></p>
                            </div>
                        </div>

                    </div>

                </section>
            </main>
        </>
    );
}