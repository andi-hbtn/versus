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

    const formFields = ["name", "email", "company"] as const;
    const [state, formAction, isPending] = useActionState(sendEmailAction, initialState);

    return (
        <div className="relative p-6 md:p-8 rounded-xl border border-white/[0.06] bg-[#0d0b14]/40 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden group">
            
            {/* Cyber Matrix Glow Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(47,102,255,0.05),transparent_50%)] pointer-events-none" />

            <div className="relative z-10">
                <div className="flex justify-between items-center mb-6 md:mb-8 pb-2 border-b border-white/[0.05]">
                    <h2 className="text-base font-mono text-white/90 uppercase tracking-wider">
                        Initialize_Session //
                    </h2>
                    <span className="text-[9px] font-mono text-white/20 tracking-widest">FORM_ID: 0x9B4</span>
                </div>

                {/* SUCCESS TERMINAL BANNER */}
                {state.success && (
                    <div className="mb-6 p-3 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                        [SUCCESS]: {state.message}
                    </div>
                )}

                {/* ERROR TERMINAL BANNER */}
                {!state.success && state.message && (
                    <div className="mb-6 p-3 rounded bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs">
                        [ERROR]: {state.message}
                    </div>
                )}

                <form action={formAction} className="flex flex-col gap-4">
                    
                    {/* INPUTS (Stil Inputi kibernetik i pastër) */}
                    {formFields.map((field) => (
                        <div key={field} className="relative">
                            <input
                                name={field}
                                autoComplete="off"
                                placeholder={
                                    field === "company"
                                        ? "Company_Name (Optional)"
                                        : field.toUpperCase() + "_IDENTIFIER"
                                }
                                className="w-full px-4 py-3 rounded-lg bg-[#050308]/60 border border-white/10 text-white font-mono text-xs md:text-sm tracking-wide placeholder-white/20 outline-none focus:border-[#2f66ff]/60 focus:bg-[#09070d] focus:shadow-[0_0_15px_rgba(47,102,255,0.1)] transition-all"
                            />
                            {state.errors?.[field]?.[0] && (
                                <p className="text-red-400 font-mono text-[10px] mt-1 pl-1">
                                    ! Field_Error: {state.errors[field][0]}
                                </p>
                            )}
                        </div>
                    ))}

                    {/* MESSAGE TEXTAREA */}
                    <div className="relative">
                        <textarea
                            name="message"
                            placeholder="PROJECT_SCOPE_AND_OBJECTIVES..."
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg bg-[#050308]/60 border border-white/10 text-white font-mono text-xs md:text-sm tracking-wide placeholder-white/20 outline-none resize-none focus:border-[#b842ff]/60 focus:bg-[#09070d] focus:shadow-[0_0_15px_rgba(184,66,255,0.1)] transition-all"
                        />
                        {state.errors?.message?.[0] && (
                            <p className="text-red-400 font-mono text-[10px] mt-1 pl-1">
                                ! Field_Error: {state.errors.message[0]}
                            </p>
                        )}
                    </div>
                    {/* BUTTON */}
                    <button
                        disabled={isPending}
                        className="
                            mt-2
                            px-6 py-3 md:py-4
                            rounded-xl
                            bg-[#1b4dfe]
                            text-sm md:text-base
                            font-medium
                            disabled:opacity-50
                            hover:bg-[#1557e6]
                            active:scale-[0.98]
                            transition-all
                            shadow-[0_10px_30px_rgba(27,79,254,0.25)]
                        "
                    >
                        {isPending ? "Sending..." : "Send message"}
                    </button>

                </form>
            </div>
        </div>
    );
}