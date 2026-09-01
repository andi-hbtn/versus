import { ArrowUpRight } from "lucide-react";
import { CaseStudy } from "@/app/Types/case-study.types";

export default function CaseCard({ id, client, sector, description, url, tags }: CaseStudy) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col p-10 rounded-[28px] border border-[#ac24ff]/20 bg-[#1b4dfe]/5 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#ac24ff]/40 hover:-translate-y-1"
        >
            {/* glow background (always visible) */}
            <div className="absolute inset-0 opacity-100 bg-[radial-gradient(circle_at_center,rgba(172,36,255,0.12),transparent_60%)]" />

            {/* TOP TAG */}
            <div className="relative z-10 flex items-center gap-3">
                <span className="text-white/30 text-sm tracking-widest">
                    {id}
                </span>

                <div className="h-[1px] w-10 bg-white/10" />

                <span className="text-white/40 uppercase tracking-[0.25em] text-[10px]">
                    {sector}
                </span>
            </div>

            {/* CLIENT */}
            <h3 className="relative z-10 text-2xl md:text-3xl mt-6 font-light leading-tight">
                {client}
            </h3>

            {/* DESC */}
            <p className="relative z-10 text-white/60 mt-4">{description}</p>

            {/* TAGS */}
            {tags && (
                <ul className="relative z-10 mt-6 flex flex-wrap gap-2">
                    {tags.map((t) => (
                        <li
                            key={t}
                            className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-white/50 text-xs"
                        >
                            {t}
                        </li>
                    ))}
                </ul>
            )}

            {/* VISIT LINK */}
            <div className="relative z-10 mt-auto pt-8 flex items-center gap-2 text-sm text-white/50 group-hover:text-white transition-colors">
                Visit site
                <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
            </div>

            {/* gradient layer (always visible) */}
            <div className="absolute inset-0 opacity-100 bg-gradient-to-r from-[#1b4dfe]/5 via-[#ac24ff]/5 to-[#fe881b]/5 pointer-events-none" />
            {/* bottom glow (always visible) */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-[#ac24ff]/10 blur-[80px] opacity-100 pointer-events-none" />
        </a>
    );
}
