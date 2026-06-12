import { CardItem } from "@/app/Types/content-section.types"

export default function ContentSection({ values }: { values: CardItem[] }) {
    return (
        <section className="font-maven max-w-8xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {values.map((s) => (
                    <div key={s.id} className="relative p-10 rounded-[28px] border border-white/10  bg-white/[0.02] backdrop-blur-xl overflow-hidden transition-all duration-500 border-[#ac24ff]/20 bg-[#1b4dfe]/5">
                        {/* glow background (always visible) */}
                        <div className="absolute inset-0 opacity-100 bg-[radial-gradient(circle_at_center,rgba(172,36,255,0.12),transparent_60%)]" />

                        {/* TOP TAG */}
                        <div className="relative z-10 flex items-center gap-3">
                            <span className="text-white/30 text-sm tracking-widest">
                                {s.id}
                            </span>

                            <div className="h-[1px] w-10 bg-white/10" />
                        </div>

                        {/* TITLE */}
                        <h3 className="relative z-10 text-2xl md:text-3xl mt-6 font-light leading-tight">
                            {s.title}
                        </h3>

                        {/* DESC */}
                        {"description" in s && (
                            <p className="relative z-10 text-white/60 mt-4">{s.description} </p>
                        )}

                        {"techs" in s && (
                            <ul className="relative z-10 mt-4 space-y-2 text-white/60">
                                {s.techs?.map((t) => (
                                    <li key={t} className="flex items-center gap-2"> <span className="w-1.5 h-1.5 bg-[#1b4dfe] rounded-full" />{t}</li>
                                ))}
                            </ul>
                        )}
                        {/* gradient layer (always visible) */}
                        <div className="absolute inset-0 opacity-100 bg-gradient-to-r from-[#1b4dfe]/5 via-[#ac24ff]/5 to-[#fe881b]/5" />
                        {/* bottom glow (always visible) */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-[#ac24ff]/10 blur-[80px] opacity-100" />
                    </div>
                ))}
            </div>
        </section>
    )
}