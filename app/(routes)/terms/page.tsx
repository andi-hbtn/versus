export default function TermsPage() {
    return (
        <main className="bg-[#05020a] text-white overflow-hidden">

            {/* ================= HERO ================= */}
            <section className="relative min-h-[70vh] flex items-center justify-center px-6">

                <div className="absolute w-[650px] h-[650px] bg-white/10 blur-[180px] rounded-full" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,77,254,0.12),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(172,36,255,0.10),transparent_60%)]" />

                <div className="relative max-w-3xl text-center">
                    <span className="text-white/40 uppercase tracking-[0.35em] text-xs">
                        Legal
                    </span>

                    <h1 className="mt-6 text-5xl md:text-6xl font-extralight">
                        Terms & Conditions
                    </h1>

                    <p className="mt-6 text-white/50">
                        Clear rules for using our services and collaborating with Versus.
                    </p>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="max-w-4xl mx-auto p-6 space-y-14">

                <div>
                    <h2 className="text-xl font-light text-white/80">1. Scope of Services</h2>
                    <p className="mt-3 text-white/50 leading-relaxed">
                        We provide software design and development services including web platforms,
                        SaaS systems, e-commerce solutions and custom applications.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-light text-white/80">2. Project Engagement</h2>
                    <p className="mt-3 text-white/50 leading-relaxed">
                        Each project is defined by a mutual agreement outlining scope, timeline,
                        and deliverables before development begins.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-light text-white/80">3. Payments</h2>
                    <p className="mt-3 text-white/50 leading-relaxed">
                        Payments are structured per project or milestone. Work begins after initial
                        agreement and agreed deposit (if applicable).
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-light text-white/80">4. Intellectual Property</h2>
                    <p className="mt-3 text-white/50 leading-relaxed">
                        Upon full payment, clients receive ownership rights to the delivered product,
                        unless otherwise specified in writing.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-light text-white/80">5. Limitations</h2>
                    <p className="mt-3 text-white/50 leading-relaxed">
                        We are not responsible for third-party services, hosting providers,
                        or external integrations beyond our control.
                    </p>
                </div>

            </section>
        </main>
    );
}