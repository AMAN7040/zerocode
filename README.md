# ZeroCode Frontend Engineer Assignment

A production-grade, chatbot web application built using **Next.js App Router**, **Tailwind CSS v4**, and **TypeScript**. The app features secure JWT-based authentication, a responsive dark/light UI, and a simulated real-time messaging experience between user and bot.

---

## 🚀 Demo

**Live URL**:  
**Test Credentials**:
- Email: `amansingh79620@gmail.com`
- Password: `aman@1`

---

## 📸 Screenshots

| Light Mode | Dark Mode |
|------------|-----------|
| 
---

## 🧠 Architecture Overview

zerocode-fe-assignment/
├── public/
│ └── screenshots/ # Demo screenshots
├── src/
│ ├── app/ # Next.js App Router
│ │ ├── login/ # Login page
│ │ ├── register/ # Register page
│ │ └── chat/ # Auth-protected chat page
│ ├── components/ # UI components (chat, layout, form)
│ ├── context/ # AuthContext (JWT handling)
│ ├── features/ # Auth and Chat modules
│ ├── hooks/ # Custom hooks (useChat, useTheme)
│ ├── lib/ # Utilities (e.g., cn)
│ ├── services/ # API service layer (mocked)
│ ├── store/ # State management (context-based)
│ ├── styles/ # Tailwind & theme variables
│ └── types/ # TypeScript types and schemas
├── .eslintrc.cjs
├── tailwind.config.ts
├── tsconfig.json
├── README.md
└── next.config.js




## ✅ Features

### 🔐 Authentication
- Secure login & register flow using JWT (mocked)
- Token persistence via `localStorage`
- Route protection using `AuthGuard`

### 💬 Chat Experience
- Real-time UI interaction with simulated backend
- Auto-scroll, typing indicator, and input history
- UX design
- Responsive on mobile/tablet/desktop

### 🎨 Theming
- Tailwind CSS v4 with `@layer` & CSS variables
- System preference fallback
- Light/Dark mode toggle

### ⚙️ Code Quality
- Fully typed using TypeScript
- Clean modular architecture (feature-based)
- ESLint, Prettier, and consistent Git commits

---

## 🎁 Bonus Features

- ✅ **Dark/Light Theme Toggle** (custom colors)
- ✅ **Auto-scroll to latest message**
- ✅ **Chat input history with Enter-to-send**
- 🚧 Planned (not implemented): Voice input, export chat as .txt/.json

---

## 🛠️ Setup & Development

### 1. Clone & Install

```bash
git clone https://github.com/<AMAN7040>/zerocode-fe-assignment.git
cd zerocode-fe-assignment
npm install
2. Start the Dev Server
npm run dev


✅ Tech Stack
Tech	Usage
Next.js	App Router, Routing, SSR
Tailwind	Styling & theming (v4, CSS variables)
TypeScript	Static typing
Zod	Schema validation
React Hook Form	Form state handling
ESLint + Prettier	Code quality enforcement