export async function getFormattedRecipe(text: string): Promise<string | null> {
    try {
        const response = await fetch("/api/generate-recipe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text }),
        });

        if (!response.ok) {
            throw new Error("Failed to fetch recipe");
        }

        const data = await response.json();
        return data.recipe || null;
    } catch (err) {
        console.error("getFormattedRecipe error:", err);
        return null;
    }
}