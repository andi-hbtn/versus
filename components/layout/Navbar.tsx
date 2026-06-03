import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50">

            {/* glass background */}
            <div className="absolute inset-0 bg-[#0f0c16]/70 backdrop-blur-xl border-b border-white/10" />
            <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* ───── LOGO ───── */}
                <Link href="/" className="flex items-center gap-3 group">
                    <Image
                        src="/images/logo.png"
                        className="w-35 h-auto"
                        alt="Versus Logo"
                        width={150}
                        height={150}
                        priority
                    />
                </Link>

                {/* ───── NAV LINKS ───── */}
                <NavigationMenu.Root className="hidden md:flex items-center">
                    <NavigationMenu.List className="flex items-center gap-8">
                        <NavigationMenu.Item>
                            <Link href="/services" className="text-white/60 hover:text-white transition text-sm">
                                Services
                            </Link>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item>
                            <Link href="/about" className="text-white/60 hover:text-white transition text-sm">
                                About Us
                            </Link>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item>
                            <Link href="/contact" className="text-white/60 hover:text-white transition text-sm">
                                Contact
                            </Link>
                        </NavigationMenu.Item>
                    </NavigationMenu.List>
                </NavigationMenu.Root>
            </div>
        </nav>
    );
}