"use client";

import { useActionState } from "react";

type FormState = {
    success: boolean;
    message?: string;
};

async function sendMessage(prevState: FormState, formData: FormData): Promise<FormState> {
    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company");
    const message = formData.get("message");

    // 👉 backend logic (DB / email / API)
    console.log({ name, email, company, message });

    return {
        success: true,
        message: "Message sent successfully!"
    };
}

export default function ContactForm() {
    const [state, formAction, isPending] = useActionState(sendMessage, {
        success: false
    });

    return (
        <div className="relative p-10 rounded-[28px] border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">

            {/* glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(172,36,255,0.12),transparent_60%)] opacity-0 hover:opacity-100 transition" />

            <div className="relative z-10">

                <h2 className="text-2xl font-light mb-8">
                    Start a project
                </h2>

                <form action={formAction} className="flex flex-col gap-4">

                    <input
                        name="name"
                        placeholder="Your name"
                        className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 outline-none"
                        required
                    />

                    <input
                        name="email"
                        placeholder="Email address"
                        className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 outline-none"
                        required
                    />

                    <input
                        name="company"
                        placeholder="Company (optional)"
                        className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 outline-none"
                    />

                    <textarea
                        name="message"
                        placeholder="Tell us about your project..."
                        rows={5}
                        className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 outline-none resize-none"
                        required
                    />

                    <button
                        disabled={isPending}
                        className="mt-2 px-6 py-4 rounded-xl bg-[#1b4dfe] font-medium disabled:opacity-50 hover:bg-[#1557e6] active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(27,79,254,0.25)]"
                    >
                        {isPending ? "Sending..." : "Send message"}
                    </button>

                    {state.success && (
                        <p className="text-green-400 text-sm mt-2">
                            {state.message}
                        </p>
                    )}

                </form>

            </div>
        </div>
    );
}