"use client";

import { useState, useEffect } from "react";
import UploadRecipe from "@/components/UploadRecipe";
import GlowCard from "@/components/GlowCard";

export default function Home() {
    const [formattedRecipe, setFormattedRecipe] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        if (darkMode) {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <main className="min-h-screen bg-futuristic-grid bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300 p-8 flex flex-col items-center justify-center space-y-8 relative overflow-hidden">
        <div className="w-full flex justify-between items-center max-w-4xl">
                <h1
                    className={`text-5xl font-extrabold tracking-tight bg-clip-text text-transparent p-8
          ${darkMode ? "bg-gradient-to-r from-cyan-400 to-purple-600" : "bg-gradient-to-r from-purple-700 to-purple-400"}`}
                >
                    BestBytes
                </h1>


                {/* Toggle Switch */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    aria-label="Toggle dark mode"
                    className="relative w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
          <span
              className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-yellow-400 dark:bg-gray-800 transition-transform 
              ${darkMode ? "translate-x-6" : "translate-x-0"}`}
          />
                    {/* Sun icon */}
                    <svg
                        className={`absolute top-1.5 left-1.5 w-5 h-5 text-yellow-400 transition-opacity duration-300 ${
                            darkMode ? "opacity-0" : "opacity-100"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 4.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0112 4.75zm5.303 1.97a.75.75 0 011.06 1.06l-1.06 1.06a.75.75 0 11-1.06-1.06l1.06-1.06zM18.25 12a.75.75 0 01.75.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm-1.97 5.303a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zM12 18.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zm-5.303-1.97a.75.75 0 011.06-1.06l1.06 1.06a.75.75 0 11-1.06 1.06l-1.06-1.06zM5.75 12a.75.75 0 01.75-.75H8a.75.75 0 010 1.5H6.5a.75.75 0 01-.75-.75zm1.97-5.303a.75.75 0 010-1.06l1.06-1.06a.75.75 0 111.06 1.06L7.72 6.63a.75.75 0 01-1.06 0zM12 8.75a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z" />
                    </svg>

                    {/* Moon icon */}
                    <svg
                        className={`absolute top-1.5 right-1.5 w-5 h-5 text-gray-300 transition-opacity duration-300 ${
                            darkMode ? "opacity-100" : "opacity-0"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M21.75 12.04a9 9 0 11-9.71-9.7 7.5 7.5 0 009.71 9.7z" />
                    </svg>
                </button>
            </div>

            <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-center max-w-xl`}>
                Upload a photo of your recipe and let AI extract and format it beautifully for you.
            </p>

            <GlowCard>
                <UploadRecipe onRecipeGenerated={setFormattedRecipe} />
            </GlowCard>


            {formattedRecipe && (
                <GlowCard>
                    <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                        🍽️ Formatted Recipe
                    </h2>
                    <pre className="text-md leading-relaxed whitespace-pre-wrap">{formattedRecipe}</pre>
                </GlowCard>
            )}
        </main>
    );
}
