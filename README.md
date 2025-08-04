
<div align="center">
  <br />
  <img src="https://i.ibb.co/YbFzxtP/BestBytes-Screenshot.png" alt="BestBytes Screenshot" width="600" />
  <br />

  <div>
    <img alt="React" src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
    <img alt="TailwindCSS" src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
    <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
    <img alt="OpenAI" src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" />
  </div>

  <h1>Best Bytes | Recipe Uploader</h1>
</div>

---

## 📚 Table of Contents

1. [Introduction](#introduction)  
2. [Tech Stack](#tech-stack)  
3. [Features](#features)  
4. [Quick Start](#quick-start)  
5. [Project Structure](#project-structure)  
6. [License](#license)  

---

## <a name="introduction">🚀 Introduction</a>

Best Bytes is an innovative recipe uploader and extractor app that uses OCR to read recipe text from images, then leverages OpenAI's GPT to format and enhance the extracted recipe text. Built with Next.js, Tailwind CSS, and TypeScript, this app delivers a sleek user experience with a futuristic dark/light mode and interactive UI elements.

---

## <a name="tech-stack">🛠 Tech Stack</a>

- **[Next.js](https://nextjs.org/)** — React framework for production-ready server-side rendering and static site generation.  
- **[React](https://reactjs.org/)** — Frontend UI library for building interactive user interfaces.  
- **[TypeScript](https://www.typescriptlang.org/)** — Adds static typing to JavaScript for improved developer experience and maintainability.  
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework for rapid UI development.  
- **[OpenAI API](https://platform.openai.com/)** — AI service powering recipe formatting and enhancements.  
- **[Tesseract.js](https://github.com/naptha/tesseract.js)** — JavaScript OCR library to extract text from images on the client side.  
- **[ShadCN UI](https://ui.shadcn.com/)** — Component library for accessible, customizable UI components.

---

## <a name="features">⚡ Features</a>

- 🖼️ Upload images of recipes and preview before processing.  
- 🔍 Client-side OCR extraction of text from uploaded images.  
- 🤖 AI-powered formatting of recipes using OpenAI GPT models.  
- 🌗 Smooth dark/light mode toggle with purple theming and glowing UI effects.  
- ✨ Interactive UI with floating, cursor-tracking headers and 3D glowing cards.  
- 🚀 Responsive design optimized for all screen sizes and devices.  

---

## <a name="quick-start">🚦 Quick Start</a>

### Prerequisites

Make sure you have:

- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/en) (v16+)  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)  

### Clone the repository

```bash
git clone https://github.com/ZachCortez/best-bytes.git
cd best-bytes
````

### Install dependencies

```bash
npm install
# or
yarn
```

### Create `.env.local`

Add your OpenAI API key:

```
OPENAI_API_KEY=your_openai_api_key_here
```

### Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## <a name="project-structure">📁 Project Structure</a>

```
best-bytes/
├── app/                   # Next.js app directory with pages and API routes
├── components/            # React UI components
├── lib/                   # Helper functions (OCR, OpenAI integration)
├── public/                # Static assets and images
├── styles/                # Global CSS and Tailwind config
├── .env.local             # Environment variables (API keys)
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript config
├── package.json           # Project dependencies and scripts
└── README.md              # Project overview and documentation
```

---

## <a name="license">📜 License</a>

Distributed under the [MIT License](LICENSE).

---

<div align="center">
  <img src="https://raw.githubusercontent.com/zachcortez/best-bytes/main/public/best-bytes-logo.png" alt="Best Bytes Logo" width="120" />
  <p>Made with ❤️ by Zach Cortez</p>
</div>


---


