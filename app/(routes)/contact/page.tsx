import Header from "@/components/Layout/Header";
import ContactForm from "@/components/Contact/ContactForm";

export default function ContactPage() {
    return (
        <>
            <Header />

            <main className="bg-[#05020a] text-white overflow-hidden">

                {/* ================= HERO ================= */}
                <section className="
                    font-maven
                    relative
                    max-w-6xl
                    mx-auto
                    px-6
                    py-20 md:py-28
                    text-center
                ">

                    {/* glow (responsive) */}
                    <div className="
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_center,rgba(172,36,255,0.10),transparent_60%)]
                    " />

                    {/* LABEL */}
                    <span className="
                        text-white/40
                        uppercase
                        tracking-[0.25em] md:tracking-[0.35em]
                        text-[10px] sm:text-xs
                    ">
                        Contact
                    </span>

                    {/* TITLE */}
                    <h1 className="
                        mt-5 md:mt-6
                        text-3xl sm:text-5xl md:text-6xl
                        font-light
                        leading-[1.1]
                    ">
                        Let’s build something
                        <span className="
                            block
                            text-transparent
                            bg-clip-text
                            bg-gradient-to-r
                            from-[#1b4dfe]
                            via-[#ac24ff]
                            to-[#fe881b]
                        ">
                            that actually matters
                        </span>
                    </h1>

                    {/* SUBTITLE */}
                    <p className="
                        mt-6
                        text-sm sm:text-base md:text-lg
                        text-white/60
                        max-w-xl md:max-w-2xl
                        mx-auto
                        leading-relaxed
                    ">
                        Whether you're building SaaS platforms, CRM systems or mobile apps —
                        we help you design, engineer and scale them.
                    </p>

                    {/* RESPONSE TIME */}
                    <div className="
                        mt-8
                        text-white/30
                        text-xs sm:text-sm
                    ">
                        Response time:
                        <span className="text-white/60"> within 24 hours</span>
                    </div>

                </section>

                {/* ================= CONTENT ================= */}
                <section className="
                    max-w-6xl
                    mx-auto
                    px-6
                    pb-20 md:pb-28
                    grid
                    grid-cols-1 md:grid-cols-2
                    gap-8 md:gap-10
                ">

                    <ContactForm />

                    {/* INFO PANEL */}
                    <div className="flex flex-col gap-6 md:gap-10">

                        <div className="
                            p-6 md:p-10
                            rounded-2xl md:rounded-[28px]
                            border border-white/10
                            bg-white/[0.02]
                            backdrop-blur-xl
                        ">
                            <h3 className="text-lg md:text-xl font-light mb-4 md:mb-6">
                                Why work with us
                            </h3>

                            <ul className="space-y-3 md:space-y-4 text-white/60 text-sm md:text-base">
                                <li>• Full-stack engineering (Web + Mobile + Backend)</li>
                                <li>• Scalable architecture thinking</li>
                                <li>• Direct communication</li>
                                <li>• Performance-first mindset</li>
                            </ul>
                        </div>

                        <div className="
                            p-6 md:p-10
                            rounded-2xl md:rounded-[28px]
                            border border-white/10
                            bg-white/[0.02]
                            backdrop-blur-xl
                        ">
                            <h3 className="text-lg md:text-xl font-light mb-4 md:mb-6">
                                Direct contact
                            </h3>

                            <div className="text-white/60 text-sm md:text-base space-y-2">
                                <p>
                                    Email: <span className="text-white">hello@versus.dev</span>
                                </p>
                                <p>
                                    Response: <span className="text-white">within 24h</span>
                                </p>
                            </div>
                        </div>

                    </div>

                </section>
            </main>
        </>
    );
}