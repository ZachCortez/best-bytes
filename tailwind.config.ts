import type { Config } from "tailwindcss";

import tailwindcss_animate from "tailwindcss-animate";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class", // Enable class-based dark mode
    theme: {
        extend: {
            animation: {
                'pulse-slow': 'pulse 4s ease-in-out infinite',
            },
            backdropBlur: {
                xs: '2px',
            },
            colors: {
                glass: 'rgba(255, 255, 255, 0.15)',
                glassDark: 'rgba(0, 0, 0, 0.2)',
                purpleDark: "#4c1d95",  // dark purple
                purpleLight: "#c4b5fd", // light purple
            },
        },
    },
    plugins: [
        tailwindcss_animate,
    ],
};

export default config;
