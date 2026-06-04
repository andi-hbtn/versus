"use client";

import { useActionState } from "react";
import { sendEmailAction } from "./actions";
import { FormState } from "@/app/Types/send-email";

export default function ContactForm() {
    const initialState: FormState = {
        success: false,
        message: "",
        errors: {},
    };

    const [state, formAction, isPending] = useActionState(sendEmailAction, initialState);

    console.log("state----", state);

    return (
        <div className="relative p-10 rounded-[28px] border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">

            {/* glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(172,36,255,0.12),transparent_60%)] opacity-0 hover:opacity-100 transition" />

            <div className="relative z-10">
                <h2 className="text-2xl font-light mb-8">Start a project</h2>

                {/* SUCCESS MESSAGE */}
                {state.success && (
                    <p className="mb-4 text-green-400 text-sm">
                        {state.message}
                    </p>
                )}

                {/* ERROR MESSAGE (GLOBAL) */}
                {!state.success && state.message && (
                    <p className="mb-4 text-red-400 text-sm">
                        {state.message}
                    </p>
                )}

                <form action={formAction} className="flex flex-col gap-4">

                    {/* NAME */}
                    <div>
                        <input
                            name="name"
                            placeholder="Your name"
                            className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 outline-none w-full"
                        />
                        {state.errors?.name?.[0] && (
                            <p className="text-red-400 text-sm mt-1">
                                {state.errors.name[0]}
                            </p>
                        )}
                    </div>

                    {/* EMAIL */}
                    <div>
                        <input
                            name="email"
                            placeholder="Email address"
                            className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 outline-none w-full"
                        />
                        {state.errors?.email?.[0] && (
                            <p className="text-red-400 text-sm mt-1">
                                {state.errors.email[0]}
                            </p>
                        )}
                    </div>

                    {/* COMPANY */}
                    <div>
                        <input
                            name="company"
                            placeholder="Company (optional)"
                            className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 outline-none w-full"
                        />
                        {state.errors?.company?.[0] && (
                            <p className="text-red-400 text-sm mt-1">
                                {state.errors.company[0]}
                            </p>
                        )}
                    </div>

                    {/* MESSAGE */}
                    <div>
                        <textarea
                            name="message"
                            placeholder="Tell us about your project..."
                            rows={5}
                            className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 outline-none resize-none w-full"
                        />
                        {state.errors?.message?.[0] && (
                            <p className="text-red-400 text-sm mt-1">
                                {state.errors.message[0]}
                            </p>
                        )}
                    </div>

                    {/* BUTTON */}
                    <button
                        disabled={isPending}
                        className="mt-2 px-6 py-4 rounded-xl bg-[#1b4dfe] font-medium disabled:opacity-50 hover:bg-[#1557e6] active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(27,79,254,0.25)]"
                    >
                        {isPending ? "Sending..." : "Send message"}
                    </button>

                </form>
            </div>
        </div>
    );
}