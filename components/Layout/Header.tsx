"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

type Node = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    alpha: number;
    isValue?: boolean;
    label?: string;
};

function getDeviceProfile() {
    const w = window.innerWidth;
    if (w < 640) {
        // Mobile
        return {
            nodeCount: 30,
            valueNodeDist: 100,
            linkDist: 110,
            mouseRadius: 100,
            orbitSpeed: 0.0008,
            orbitAmp: 0.15,
        };
    } else if (w < 1024) {
        // Tablet
        return {
            nodeCount: 50,
            valueNodeDist: 140,
            linkDist: 130,
            mouseRadius: 140,
            orbitSpeed: 0.001,
            orbitAmp: 0.18,
        };
    } else {
        // Desktop
        return {
            nodeCount: 80,
            valueNodeDist: 180,
            linkDist: 160,
            mouseRadius: 180,
            orbitSpeed: 0.001,
            orbitAmp: 0.2,
        };
    }
}

export default function Header() {
    const containerRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.fromTo(badgeRef.current,
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration: 1.2 }
        );

        if (titleRef.current) {
            const lines = titleRef.current.children;
            tl.fromTo(lines,
                { opacity: 0, y: 60 },
                { opacity: 1, y: 0, duration: 1.4, stagger: 0.15 },
                "-=1"
            );
        }

        tl.fromTo(textRef.current,
            { opacity: 0, y: 20 },
            { opacity: 0.6, y: 0, duration: 1 },
            "-=0.8"
        );

        tl.fromTo(buttonsRef.current?.children || [],
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
            "-=0.6"
        );

        // ---------------- CANVAS ----------------
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const mouse = { x: -1000, y: -1000, tx: -1000, ty: -1000 };

        const labels = [
            "Smart Budget", "Optimization", "Trust",
            "Transparency", "Quality", "Precision",
            "Scalability", "Engineering",
        ];

        let profile = getDeviceProfile();
        let allNodes: Node[] = [];
        let animFrameId: number;

        function buildNodes() {
            profile = getDeviceProfile();
            const nodes: Node[] = [];

            const minDist = width < 640 ? 100 : 200;
            const maxExtra = width < 640 ? 200 : 400;

            for (let i = 0; i < profile.nodeCount; i++) {
                const angle = Math.random() * Math.PI * 2;
                const dist = minDist + Math.random() * maxExtra;

                nodes.push({
                    x: width / 2 + Math.cos(angle) * dist,
                    y: height / 2 + Math.sin(angle) * dist,
                    vx: (Math.random() - 0.5) * 0.6,
                    vy: (Math.random() - 0.5) * 0.6,
                    radius: Math.random() * 2 + 1,
                    alpha: Math.random() * 0.3 + 0.2,
                });
            }

            const valueNodes: Node[] = labels.map((label, i) => {
                const angle = (i / labels.length) * Math.PI * 2;
                return {
                    x: width / 2 + Math.cos(angle) * profile.valueNodeDist,
                    y: height / 2 + Math.sin(angle) * profile.valueNodeDist,
                    vx: 0,
                    vy: 0,
                    radius: width < 640 ? 3 : 4,
                    alpha: 1,
                    isValue: true,
                    label,
                };
            });

            allNodes = [...nodes, ...valueNodes];
        }

        buildNodes();

        // Touch support
        const handleTouchMove = (e: TouchEvent) => {
            const touch = e.touches[0];
            const rect = canvas.getBoundingClientRect();
            mouse.tx = touch.clientX - rect.left;
            mouse.ty = touch.clientY - rect.top;
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.tx = e.clientX - rect.left;
            mouse.ty = e.clientY - rect.top;
        };

        const handleTouchEnd = () => {
            mouse.tx = -1000;
            mouse.ty = -1000;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove, { passive: true });
        window.addEventListener("touchend", handleTouchEnd);

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            buildNodes();
        };

        window.addEventListener("resize", resize);

        const isMobile = () => window.innerWidth < 640;
        const fontSize = () => isMobile() ? "8px" : "10px";
        const labelOffset = () => isMobile() ? 14 : 18;
        const minCenterDist = () => isMobile() ? 80 : 120;
        const maxCenterDist = () => isMobile() ? 500 : 750;

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            mouse.x += (mouse.tx - mouse.x) * 0.08;
            mouse.y += (mouse.ty - mouse.y) * 0.08;

            const cx = width / 2;
            const cy = height / 2;

            for (let i = 0; i < allNodes.length; i++) {
                const n = allNodes[i];

                n.x += n.vx;
                n.y += n.vy;

                const dxC = n.x - cx;
                const dyC = n.y - cy;
                const dC = Math.hypot(dxC, dyC);

                if (dC > maxCenterDist() || dC < minCenterDist()) {
                    n.vx *= -1;
                    n.vy *= -1;
                }

                const dx = mouse.x - n.x;
                const dy = mouse.y - n.y;
                const d = Math.hypot(dx, dy);

                if (d < profile.mouseRadius && d > 0) {
                    const force = (profile.mouseRadius - d) / profile.mouseRadius;
                    n.x -= (dx / d) * force * 1.2;
                    n.y -= (dy / d) * force * 1.2;
                }

                if (n.isValue) {
                    n.x += Math.sin(Date.now() * profile.orbitSpeed + i) * profile.orbitAmp;
                    n.y += Math.cos(Date.now() * profile.orbitSpeed + i) * profile.orbitAmp;
                }

                ctx.beginPath();
                ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
                ctx.fillStyle = n.isValue
                    ? "rgba(255,255,255,0.9)"
                    : `rgba(255,255,255,${n.alpha})`;
                ctx.shadowBlur = n.isValue ? 25 : 10;
                ctx.shadowColor = n.isValue
                    ? "rgba(172,36,255,0.8)"
                    : "rgba(47,94,255,0.6)";
                ctx.fill();
                ctx.shadowBlur = 0;

                if (n.isValue && n.label) {
                    ctx.fillStyle = "rgba(255,255,255,0.45)";
                    ctx.font = `${fontSize()} sans-serif`;
                    ctx.textAlign = "center";
                    ctx.fillText(n.label, n.x, n.y + labelOffset());
                }

                for (let j = i + 1; j < allNodes.length; j++) {
                    const n2 = allNodes[j];
                    const dx2 = n.x - n2.x;
                    const dy2 = n.y - n2.y;
                    const dist = Math.hypot(dx2, dy2);

                    if (dist < profile.linkDist) {
                        ctx.beginPath();
                        ctx.moveTo(n.x, n.y);
                        ctx.lineTo(n2.x, n2.y);

                        const alpha = (1 - dist / profile.linkDist) * 0.2;
                        ctx.strokeStyle = n.isValue || n2.isValue
                            ? `rgba(188,78,255,${alpha})`
                            : `rgba(120,120,255,${alpha})`;
                        ctx.lineWidth = n.isValue || n2.isValue ? 1 : 0.6;
                        ctx.stroke();
                    }
                }
            }

            animFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animFrameId);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <section ref={containerRef}
            className="relative w-full min-h-[95vh] overflow-hidden bg-[#05020a] text-white flex items-center justify-center"
        >
            {/* CANVAS */}
            <canvas ref={canvasRef}
                className="absolute inset-0 w-full h-full z-10 pointer-events-none mix-blend-screen"
            />

            {/* CORE GLOW */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-white/20 blur-[120px] sm:blur-[150px] md:blur-[180px] rounded-full opacity-70 z-0" />

            {/* CONTENT */}
            <div className="relative z-20 max-w-5xl w-full text-center px-4 sm:px-6 flex flex-col items-center">

                <div ref={badgeRef}
                    className="font-maven mb-6 sm:mb-8 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.35em] uppercase text-white/60 opacity-0"
                >
                    System Architecture • Neural Engineering
                </div>

                <h1 ref={titleRef} className="font-maven text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight leading-tight">
                    <span className="block opacity-0">Build modern products</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3b6eff] via-[#bc4eff] to-[#ff9e4f] opacity-0">
                        that actually scale
                    </span>
                </h1>

                <p ref={textRef}
                    className="mt-5 sm:mt-8 text-sm sm:text-base lg:text-lg text-white/50 max-w-[90%] sm:max-w-[560px] md:max-w-[640px] opacity-0 leading-relaxed"
                >
                    We design and engineer high-performance SaaS platforms with precision systems thinking.
                </p>

                <div ref={buttonsRef}
                    className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto"
                >
                    <Link
                        href="/book-call"
                        className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-black font-medium hover:scale-105 active:scale-95 transition-transform text-sm sm:text-base text-center"
                    >
                        Initiate Project
                    </Link>

                    <Link
                        href="/case-studies"
                        className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/20 text-white/80 hover:border-white/40 active:scale-95 transition-all text-sm sm:text-base text-center"
                    >
                        Case Studies
                    </Link>
                </div>

            </div>
        </section>
    );
}
