import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export default function BookCallPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-light mb-6">
                        Book a Discovery Call
                    </h1>

                    <p className="text-white/60 mb-10">
                        Tell us about your project and schedule a call with our team.
                    </p>

                    {/* Calendly embed */}
                    <div className="rounded-3xl overflow-hidden border border-white/10">
                        <iframe
                            src="https://calendly.com/YOUR-LINK"
                            width="100%"
                            height="700"
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}