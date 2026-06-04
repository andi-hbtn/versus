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

        const labels = ["Smart Budget", "Optimization", "Trust", "Transparency", "Quality", "Precision", "Scalability", "Engineering Precision"];

        const nodes: Node[] = [];

        // center graph particles
        for (let i = 0; i < 80; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = 200 + Math.random() * 400;

            nodes.push({
                x: width / 2 + Math.cos(angle) * dist,
                y: height / 2 + Math.sin(angle) * dist,
                vx: (Math.random() - 0.5) * 0.6,
                vy: (Math.random() - 0.5) * 0.6,
                radius: Math.random() * 2 + 1,
                alpha: Math.random() * 0.3 + 0.2,
            });
        }

        // VALUE NODES (IMPORTANT PART 🔥)
        const valueNodes: Node[] = labels.map((label, i) => {
            const angle = (i / labels.length) * Math.PI * 2;
            const dist = 180;

            return {
                x: width / 2 + Math.cos(angle) * dist,
                y: height / 2 + Math.sin(angle) * dist,
                vx: 0,
                vy: 0,
                radius: 4,
                alpha: 1,
                isValue: true,
                label,
            };
        });

        const allNodes = [...nodes, ...valueNodes];

        const handleMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.tx = e.clientX - rect.left;
            mouse.ty = e.clientY - rect.top;
        };

        window.addEventListener("mousemove", handleMove);

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resize);

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            mouse.x += (mouse.tx - mouse.x) * 0.08;
            mouse.y += (mouse.ty - mouse.y) * 0.08;

            const cx = width / 2;
            const cy = height / 2;

            // update nodes
            for (let i = 0; i < allNodes.length; i++) {
                const n = allNodes[i];

                // drift
                n.x += n.vx;
                n.y += n.vy;

                const dxC = n.x - cx;
                const dyC = n.y - cy;
                const dC = Math.hypot(dxC, dyC);

                if (dC > 750 || dC < 120) {
                    n.vx *= -1;
                    n.vy *= -1;
                }

                // mouse magnet
                const dx = mouse.x - n.x;
                const dy = mouse.y - n.y;
                const d = Math.hypot(dx, dy);

                if (d < 180) {
                    const force = (180 - d) / 180;
                    n.x -= (dx / d) * force * 1.2;
                    n.y -= (dy / d) * force * 1.2;
                }

                // VALUE NODE extra behavior (soft orbit)
                if (n.isValue) {
                    n.x += Math.sin(Date.now() * 0.001 + i) * 0.2;
                    n.y += Math.cos(Date.now() * 0.001 + i) * 0.2;
                }

                // draw node
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

                // label (VALUES TEXT ON CANVAS 🔥)
                if (n.isValue && n.label) {
                    ctx.fillStyle = "rgba(255,255,255,0.45)";
                    ctx.font = "10px sans-serif";
                    ctx.textAlign = "center";
                    ctx.fillText(n.label, n.x, n.y + 18);
                }

                // links (GRAPH CONNECTIONS)
                for (let j = i + 1; j < allNodes.length; j++) {
                    const n2 = allNodes[j];

                    const dx = n.x - n2.x;
                    const dy = n.y - n2.y;
                    const dist = Math.hypot(dx, dy);

                    if (dist < 160) {
                        ctx.beginPath();
                        ctx.moveTo(n.x, n.y);
                        ctx.lineTo(n2.x, n2.y);

                        const alpha = (1 - dist / 160) * 0.2;

                        ctx.strokeStyle = n.isValue || n2.isValue
                            ? `rgba(188,78,255,${alpha})`
                            : `rgba(120,120,255,${alpha})`;

                        ctx.lineWidth = n.isValue || n2.isValue ? 1 : 0.6;
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[95vh] overflow-hidden bg-[#05020a] text-white flex items-center justify-center"
        >
            {/* CANVAS */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full z-10 pointer-events-none mix-blend-screen"
            />

            {/* CORE GLOW */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/20 blur-[180px] rounded-full opacity-70 z-0" />

            {/* CONTENT */}
            <div className="relative z-20 max-w-5xl text-center px-6 flex flex-col items-center">

                <div
                    ref={badgeRef}
                    className="mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[10px] tracking-[0.35em] uppercase text-white/60 opacity-0"
                >
                    System Architecture • Neural Engineering
                </div>

                <h1
                    ref={titleRef}
                    className="text-4xl md:text-7xl font-extralight leading-tight"
                >
                    <span className="block opacity-0">Build modern products</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3b6eff] via-[#bc4eff] to-[#ff9e4f] opacity-0">
                        that actually scale
                    </span>
                </h1>

                <p
                    ref={textRef}
                    className="mt-8 text-lg text-white/50 max-w-[640px] opacity-0"
                >
                    We design and engineer high-performance SaaS platforms with precision systems thinking.
                </p>

                <div
                    ref={buttonsRef}
                    className="mt-12 flex gap-5"
                >
                    <Link
                        href="/book-call"
                        className="px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform"
                    >
                        Initiate Project
                    </Link>

                    <button className="px-8 py-4 rounded-full border border-white/20 text-white/80">
                        Case Studies
                    </button>
                </div>

            </div>
        </section>
    );
}