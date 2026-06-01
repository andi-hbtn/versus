import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Search, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="w-full bg-[#13101c] text-white border-b border-[#352f48] sticky top-0 z-50 px-[4vw] py-[1.2vw]">
            <div className="max-w-[92vw] mx-auto flex items-center justify-between">

                {/* LOGO AREA */}
                <Link href="/" className="flex items-center gap-[0.6vw] font-medium text-[1.5vw] tracking-tight group">
                    <div className="w-[2.5vw] h-[2.5vw] bg-gradient-to-r from-[#1b4dfe] via-[#ac24ff] to-[#fe881b] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(172,36,255,0.3)]">
                        <span className="text-[1vw] font-bold text-white">UI</span>
                    </div>
                    <span className="hidden sm:inline-block font-semibold tracking-[-0.02vw] text-[1.25vw]">
                        Platforma
                    </span>
                </Link>

                {/* RADIX NAVIGATION MENU (DESKTOP) */}
                <NavigationMenu.Root className="relative z-10 hidden md:flex items-center justify-center flex-1 mx-[2vw]">
                    <NavigationMenu.List className="flex items-center gap-[2vw] list-none m-0 p-0">

                        <NavigationMenu.Item>
                            <Link href="/sherbimet" className="text-[#a997ce] hover:text-white text-[0.97vw] font-medium transition-colors duration-300">
                                Shërbimet
                            </Link>
                        </NavigationMenu.Item>

                        {/* Dropdown Menu me Radix UI */}
                        <NavigationMenu.Item className="relative">
                            <NavigationMenu.Content className="absolute top-full left-1/2 -translate-x-1/2 mt-[1vw] w-[28vw] bg-[#1e162c] border border-[#352f48] p-[1.5vw] rounded-[1.39vw] shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-[36px]">
                                <ul className="flex flex-col gap-[0.8vw] list-none p-0 m-0">
                                    <li className="p-[0.8vw] hover:bg-[#251938] rounded-[0.97vw] transition-colors group/item">
                                        <Link href="/solutions/development" className="flex items-center justify-between text-[1vw] font-medium text-white">
                                            <span>Zhvillim Software</span>
                                            <ArrowRight className="w-[0.9vw] h-[0.9vw] opacity-0 group-hover/item:opacity-100 transition-all text-[#ac24ff]" />
                                        </Link>
                                        <span className="text-[0.8vw] text-[#a997ce] block mt-[0.2vw]">Ndërtimi i sistemeve moderne dhe të shpejta.</span>
                                    </li>
                                    <li className="p-[0.8vw] hover:bg-[#251938] rounded-[0.97vw] transition-colors group/item">
                                        <Link href="/solutions/ui-ux" className="flex items-center justify-between text-[1vw] font-medium text-white">
                                            <span>UI/UX Dizajn</span>
                                            <ArrowRight className="w-[0.9vw] h-[0.9vw] opacity-0 group-hover/item:opacity-100 transition-all text-[#ac24ff]" />
                                        </Link>
                                        <span className="text-[0.8vw] text-[#a997ce] block mt-[0.2vw]">Ndërfaqe të pastra dhe formati i organizuar.</span>
                                    </li>
                                </ul>
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>

                        <NavigationMenu.Item>
                            <Link href="/rreth-nesh" className="text-[#a997ce] hover:text-white text-[0.97vw] font-medium transition-colors duration-300">
                                Rreth Nesh
                            </Link>
                        </NavigationMenu.Item>

                    </NavigationMenu.List>
                </NavigationMenu.Root>

                {/* RIGHT SIDE ACTIONS */}
                <div className="flex items-center gap-[1.5vw]">

                    {/* Custom Search Icon Trigger */}
                    <button className="p-[0.6vw] text-[#a997ce] hover:text-white hover:bg-[#1e162c] rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer">
                        <Search className="w-[1.2vw] h-[1.2vw]" />
                    </button>



                    {/* MAIN CTA BUTTON WITH GRADIENT BORDER (.main-cta) */}
                    <Link href="/kontakt" className="hidden sm:inline-flex p-[1px] bg-gradient-to-r from-[#1b4dfe] via-[#ac24ff] to-[#fe881b] rounded-[0.972vw] transition-transform duration-300 hover:scale-[1.03]">
                        <span className="px-[1.5vw] py-[0.6vw] bg-[#13101c] rounded-[0.9vw] text-[0.9vw] font-medium text-white block transition-colors hover:bg-[#13101c]/80">
                            Fillo Tani
                        </span>
                    </Link>

                </div>
            </div>
        </header>
    );
}