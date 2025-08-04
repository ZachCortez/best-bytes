import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
    try {
        const { rawText } = await request.json();

        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    role: "system",
                    content: "You are a recipe formatting assistant. Take raw unstructured cooking text and return a clean recipe object with title, ingredients, steps, and estimated time.",
                },
                {
                    role: "user",
                    content: rawText,
                },
            ],
        });

        return NextResponse.json({ recipe: completion.choices[0].message.content });
    } catch (error) {
        console.error("OpenAI error:", error);
        return NextResponse.json({ error: "Failed to get recipe" }, { status: 500 });
    }
}
