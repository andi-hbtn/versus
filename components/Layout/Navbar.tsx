"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50">

            {/* glass background */}
            <div className="absolute inset-0 bg-[#0f0c16]/0 backdrop-blur-xl border-b border-white/10" />

            <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LOGO */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/images/logo.png"
                        className="w-32 h-auto"
                        alt="Versus Logo"
                        width={150}
                        height={150}
                        priority
                    />
                </Link>

                {/* DESKTOP NAV */}
                <NavigationMenu.Root className="hidden md:flex items-center">
                    <NavigationMenu.List className="flex items-center gap-8">
                        <NavigationMenu.Item>
                            <Link href="/services" className="text-white font-bold hover:text-white/70 transition text-sm">
                                Services
                            </Link>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item>
                            <Link href="/about" className="text-white font-bold hover:text-white/70 transition text-sm">
                                About
                            </Link>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item>
                            <Link href="/contact" className="text-white font-bold hover:text-white/70 transition text-sm">
                                Contact
                            </Link>
                        </NavigationMenu.Item>
                    </NavigationMenu.List>
                </NavigationMenu.Root>


                {/* MOBILE BUTTON */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden relative z-[100] w-11 h-11"
                >
                    <span className={`absolute left-1/2 top-1/2 w-6 h-[2px] bg-white transition-all duration-300 ${open
                        ? "-translate-x-1/2 -translate-y-1/2 rotate-45"
                        : "-translate-x-1/2 -translate-y-[7px]"
                        }`}
                    />
                    <span className={`absolute left-1/2 top-1/2 w-6 h-[2px] bg-white transition-all duration-300 ${open
                        ? "opacity-0"
                        : "-translate-x-1/2 -translate-y-1/2"
                        }`}
                    />
                    <span className={`absolute left-1/2 top-1/2 w-6 h-[2px] bg-white transition-all duration-300 ${open
                        ? "-translate-x-1/2 -translate-y-1/2 -rotate-45"
                        : "-translate-x-1/2 translate-y-[5px]"
                        }`}
                    />
                </button>
            </div>


            {/* MOBILE MENU */}
            <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-xl transition-all duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <div className="flex flex-col items-center justify-center h-full gap-10 text-lg">
                    <Link href="/services" onClick={closeMenu} className="text-white font-semibold">Services</Link>
                    <Link href="/about" onClick={closeMenu} className="text-white font-semibold"> About</Link>
                    <Link href="/contact" onClick={closeMenu} className="text-white font-semibold">Contact</Link>
                </div>
            </div>
        </nav>
    );
}