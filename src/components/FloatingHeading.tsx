"use client";
import { useEffect, useRef, useState } from "react";

export default function FloatingHeading() {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const [style, setStyle] = useState({});

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 2;
            const y = (e.clientY / innerHeight - 0.5) * 2;
            const rotateX = y * -15;
            const rotateY = x * 15;

            setStyle({
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                textShadow: `
          0 0 10px rgba(147, 51, 234, 0.6),
          0 0 20px rgba(147, 51, 234, 0.4)
        `,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <h1
            ref={headingRef}
            className="text-5xl md:text-6xl font-extrabold text-center
        text-purple-900 dark:text-purple-200
        transition-transform duration-100 ease-out animate-pulse-slow"
            style={style}
        >
            BestBytes
        </h1>
    );
}
