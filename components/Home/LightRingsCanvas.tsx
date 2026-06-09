"use client";

import { useEffect, useRef } from "react";

export default function LightRingsCanvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        let rotationAngle = 0;

        const mouse = {
            x: -1000,
            y: -1000,
            targetX: -1000,
            targetY: -1000,
        };

        const rings = [
            { radius: 180, speed: 0.005, color: "rgba(172, 36, 255, 0.6)", dash: [20, 40], lineWidth: 2, blur: 15 },
            { radius: 240, speed: -0.003, color: "rgba(47, 94, 255, 0.7)", dash: [60, 30], lineWidth: 1.5, blur: 20 },
            { radius: 320, speed: 0.002, color: "rgba(254, 136, 27, 0.4)", dash: [10, 80], lineWidth: 3, blur: 25 },
            { radius: 100, speed: -0.008, color: "rgba(255, 255, 255, 0.2)", dash: [5, 5], lineWidth: 1, blur: 5 },
        ];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resize);
        resize();

        window.addEventListener("mousemove", (e) => {
            mouse.targetX = e.clientX;
            mouse.targetY = e.clientY;
        });

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            // smooth mouse follow
            mouse.x += (mouse.targetX - mouse.x) * 0.08;
            mouse.y += (mouse.targetY - mouse.y) * 0.08;

            rings.forEach((ring) => {
                ctx.save();
                ctx.translate(centerX, centerY);

                // mouse distortion
                const mDx = mouse.x - centerX;
                const mDy = mouse.y - centerY;
                const mDist = Math.sqrt(mDx * mDx + mDy * mDy);

                if (mDist < 400) {
                    const distortionFactor = (400 - mDist) / 400;
                    ctx.translate(
                        mDx * distortionFactor * 0.15,
                        mDy * distortionFactor * 0.15
                    );
                }

                ctx.rotate(rotationAngle * (ring.speed > 0 ? 1 : -1));

                // glow
                ctx.shadowBlur = ring.blur + Math.sin(Date.now() * 0.003) * 8;
                ctx.shadowColor = ring.color;

                ctx.beginPath();
                ctx.arc(0, 0, ring.radius, 0, Math.PI * 2);
                ctx.strokeStyle = ring.color;
                ctx.lineWidth = ring.lineWidth;
                ctx.setLineDash(ring.dash);
                ctx.stroke();

                ctx.restore();
            });

            rotationAngle += 0.01;

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
            }}
        />
    );
}