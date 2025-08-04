"use client";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";

interface GlowCardProps {
    children: React.ReactNode;
    className?: string;
}

export default function GlowCard({ children, className = "" }: GlowCardProps) {
    const [style, setStyle] = useState({});
    const cardRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setStyle({
            background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(168, 85, 247, 0.25), transparent 80%)`,
        });
    };

    const handleMouseLeave = () => {
        setStyle({});
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative rounded-3xl transition-all duration-300 transform hover:scale-[1.02] ${className}`}
        >
            <div
                className="absolute inset-0 z-0 rounded-3xl transition-opacity pointer-events-none"
                style={style}
            />
            <Card className="relative z-10 backdrop-blur-lg bg-glass border border-white/20 p-8 shadow-[0_0_40px_rgba(168,85,247,0.2)]">
                {children}
            </Card>
        </div>
    );
}
