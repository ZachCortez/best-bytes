"use client";

import Tesseract from "tesseract.js";

// Convert file to base64
function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Use base64 instead of blob URL
export async function extractTextFromImage(file: File): Promise<string> {
    const base64 = await fileToBase64(file);

    return Tesseract.recognize(base64, "eng", {
        logger: (m) => console.log(m),
    }).then(({ data: { text } }) => text);
}
