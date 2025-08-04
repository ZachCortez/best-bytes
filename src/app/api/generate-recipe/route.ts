import { OpenAI } from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { text } = await req.json();

        if (!text) {
            return NextResponse.json({ error: "No text provided" }, { status: 400 });
        }

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",

            messages: [
                {
                    role: "system",
                    content:
                        "You are a helpful chef assistant. Format any raw OCR-scanned recipe text into a clean, readable recipe with ingredients and step-by-step instructions.",
                },
                {
                    role: "user",
                    content: text,
                },
            ],
            temperature: 0.7,
        });

        const recipe = completion.choices[0]?.message?.content || "";

        return NextResponse.json({ recipe });
    } catch (error: any) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Failed to generate recipe" },
            { status: 500 }
        );
    }
}
