export default function PrivacyPage() {
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
                        Privacy Policy
                    </h1>

                    <p className="mt-6 text-white/50">
                        We respect your privacy and are committed to protecting any data you share with us.
                    </p>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="max-w-4xl mx-auto p-6 space-y-14">
                <div>
                    <h2 className="text-xl font-light text-white/80">1. Information We Collect</h2>
                    <p className="mt-3 text-white/50 leading-relaxed">
                        We may collect basic contact information such as name, email address,
                        and project details when you reach out to us through forms or direct communication.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-light text-white/80">2. How We Use Information</h2>
                    <p className="mt-3 text-white/50 leading-relaxed">
                        Information is used strictly for communication, project evaluation,
                        and service delivery. We do not sell or share personal data with third parties.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-light text-white/80">3. Data Protection</h2>
                    <p className="mt-3 text-white/50 leading-relaxed">
                        We apply standard security practices to ensure your data remains protected
                        against unauthorized access or misuse.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-light text-white/80">4. Cookies</h2>
                    <p className="mt-3 text-white/50 leading-relaxed">
                        Our website may use minimal cookies for performance and analytics purposes
                        to improve user experience.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-light text-white/80">5. Contact</h2>
                    <p className="mt-3 text-white/50 leading-relaxed">
                        If you have any questions about this policy, you can contact us through
                        the contact page.
                    </p>
                </div>

            </section>
        </main>
    );
}