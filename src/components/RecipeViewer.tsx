"use client";

import { Card } from "@/components/ui/card";

interface Props {
    recipe: string;
}

export default function RecipeViewer({ recipe }: Props) {
    return (
        <Card className="p-6 bg-glass backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg whitespace-pre-wrap">
            {recipe || "No recipe loaded."}
        </Card>
    );
}
