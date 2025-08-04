"use client";

import { useState } from "react";
import { extractTextFromImage } from "@/lib/ocr";
import { getFormattedRecipe } from "@/lib/gpt";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface Props {
    onRecipeGenerated: (recipe: string) => void;
}

export default function UploadRecipe({ onRecipeGenerated }: Props) {
    const [image, setImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleUpload = async () => {
        if (!image) return;
        setLoading(true);
        try {
            const rawText = await extractTextFromImage(image);
            const recipe = await getFormattedRecipe(rawText);
            onRecipeGenerated(recipe || "No recipe returned.");
        } catch (err) {
            console.error(err);
            onRecipeGenerated("Failed to extract recipe.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="p-6 space-y-4 bg-glass backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg">
            <Input type="file" accept="image/*" onChange={handleFileChange} />
            {previewUrl && (
                <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full max-h-64 object-contain rounded-lg"
                />
            )}
            <Button onClick={handleUpload} disabled={loading}>
                {loading ? "Processing..." : "Upload & Extract Recipe"}
            </Button>
        </Card>
    );
}
