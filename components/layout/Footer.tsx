import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#13101c] border-t border-[#352f48] relative overflow-hidden pt-[6vw] pb-[3vw]">

            {/* BACKGROUND LINEAR BLUR EFFECT (.linear_blur) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[30vw] pointer-events-none filter blur-[120px] bg-gradient-to-b from-[#ac24ff1a] via-[#1c4eff15] to-transparent" />

            <div className="max-w-[83vw] mx-auto flex flex-col gap-[4vw] relative z-10">

                {/* TOP SECTION: KARTAT APO STATISTIKAT (.div-block-490) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-[2vw] bg-[#ddccff0d] border border-[#352f48]/30 rounded-[2.08vw] px-[4.03vw] py-[2.5vw] items-center justify-between">

                    <div className="flex flex-col text-left">
                        <span className="text-[1.39vw] font-medium text-white tracking-tight">250+</span>
                        <span className="text-[0.97vw] text-[#a997ce]">Projekte të Përfunduara</span>
                    </div>

                    <div className="hidden md:block w-[1px] h-[3vw] bg-gradient-to-b from-transparent via-[#ac24ff] to-transparent" />

                    <div className="flex flex-col text-left">
                        <span className="text-[1.39vw] font-medium text-white tracking-tight">99%</span>
                        <span className="text-[0.97vw] text-[#a997ce]">Klientë të Kënaqur</span>
                    </div>

                    <div className="hidden md:block w-[1px] h-[3vw] bg-gradient-to-b from-transparent via-[#fe881b] to-transparent" />

                    <div className="flex flex-col text-left">
                        <span className="text-[1.39vw] font-medium text-white tracking-tight">15+</span>
                        <span className="text-[0.97vw] text-[#a997ce]">Ekspertë në Ekip</span>
                    </div>
                </div>

                {/* MIDDLE SECTION: LINQET E NAVIGIMIT */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-[3vw] mt-[2vw]">

                    {/* Kolona 1 */}
                    <div className="flex flex-col gap-[1vw]">
                        <span className="text-[0.69vw] text-[#a997ce] uppercase tracking-wider font-semibold">Eksploro</span>
                        <Link href="/sherbimet" className="text-[1.11vw] text-[#bdaee7] hover:text-white transition-colors">Shërbimet</Link>
                        <Link href="/solutions" className="text-[1.11vw] text-[#bdaee7] hover:text-white transition-colors">Zgjidhjet</Link>
                        <Link href="/cmimet" className="text-[1.11vw] text-[#bdaee7] hover:text-white transition-colors">Çmimet</Link>
                    </div>

                    {/* Kolona 2 */}
                    <div className="flex flex-col gap-[1vw]">
                        <span className="text-[0.69vw] text-[#a997ce] uppercase tracking-wider font-semibold">Kompania</span>
                        <Link href="/rreth-nesh" className="text-[1.11vw] text-[#bdaee7] hover:text-white transition-colors">Rreth Nesh</Link>
                        <Link href="/karriera" className="text-[1.11vw] text-[#bdaee7] hover:text-white transition-colors">Karriera</Link>
                        <Link href="/blog" className="text-[1.11vw] text-[#bdaee7] hover:text-white transition-colors">Blog</Link>
                    </div>

                    {/* Kolona 3 */}
                    <div className="flex flex-col gap-[1vw]">
                        <span className="text-[0.69vw] text-[#a997ce] uppercase tracking-wider font-semibold">Suporti</span>
                        <Link href="/kontakt" className="text-[1.11vw] text-[#bdaee7] hover:text-white transition-colors">Na Kontaktoni</Link>
                        <Link href="/faq" className="text-[1.11vw] text-[#bdaee7] hover:text-white transition-colors">Pyetje të Shpeshta</Link>
                    </div>

                    {/* Kolona 4: Custom Gradient Text Section */}
                    <div className="flex flex-col gap-[1vw]">
                        <span className="text-[0.69vw] text-[#a997ce] uppercase tracking-wider font-semibold">Misioni</span>
                        <p className="text-[1.11vw] leading-[140%] text-transparent bg-clip-text bg-gradient-to-r from-[#2ba7ff] via-[#ca45ff] to-[#fe881b] font-medium">
                            Ndërtojmë të ardhmen e eksperiencave digjitale.
                        </p>
                    </div>

                </div>

                {/* BOTTOM SECTION: COPYRIGHT (.footer-bottom) */}
                <div className="border-t border-[#352f48]/40 pt-[2vw] mt-[2vw] flex flex-col sm:flex-row items-center justify-between gap-[1vw]">
                    <span className="text-[0.97vw] text-[#a997ce] opacity-50">
                        © {new Date().getFullYear()} Platforma. Të gjitha të drejtat të rezervuara.
                    </span>
                    <div className="flex gap-[2vw]">
                        <Link href="/privatësia" className="text-[0.97vw] text-[#a997ce] hover:text-white transition-colors">Politika e Privatësisë</Link>
                        <Link href="/kushtet" className="text-[0.97vw] text-[#a997ce] hover:text-white transition-colors">Kushtet e Përdorimit</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}