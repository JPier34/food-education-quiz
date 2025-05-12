⚡️ React + TypeScript + Vite Starter
Welcome to your minimal yet powerful starter template for building React apps with TypeScript and Vite 🚀
It comes pre-configured with Hot Module Replacement (HMR), ESLint, and strong linting rules for clean, scalable code.

Here's the website: https://jpier34.github.io/food-education-quiz/

🛠️ Tech Stack
⚛️ React – UI library

🧪 TypeScript – static typing

⚡️ Vite – lightning-fast dev server and bundler

🧹 ESLint – code quality & best practices

🔁 HMR – instant feedback during development

🚀 Getting Started
bash
Copia codice
git clone https://github.com/JPier34/food-quiz-project.git
cd your-project
npm install
npm run dev
🔌 Vite Plugins for React
Choose between two official plugins for Fast Refresh:

Plugin Description
@vitejs/plugin-react Uses Babel
@vitejs/plugin-react-swc Uses SWC for blazing-fast performance ⚡
✅ Advanced ESLint Configuration
For production-ready apps, enable type-aware rules:

ts
Copia codice
export default tseslint.config({
extends: [
...tseslint.configs.recommendedTypeChecked,
// or stricter rules:
// ...tseslint.configs.strictTypeChecked,
// optionally add for stylistic preferences:
...tseslint.configs.stylisticTypeChecked,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
},
})
🎯 React-Specific ESLint Plugins (Optional but Recommended)
Install and configure eslint-plugin-react-x and eslint-plugin-react-dom:

bash
Copia codice
npm install eslint-plugin-react-x eslint-plugin-react-dom --save-dev
ts
Copia codice
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
plugins: {
'react-x': reactX,
'react-dom': reactDom,
},
rules: {
...reactX.configs['recommended-typescript'].rules,
...reactDom.configs.recommended.rules,
},
})
📁 Suggested Project Structure
bash
Copia codice
src/
├── assets/ # images, icons, fonts
├── components/ # reusable UI components
├── pages/ # page-level views
├── hooks/ # custom hooks
├── styles/ # CSS /
├── App.tsx
├── main.tsx
📦 Building for Production
bash
Copia codice
npm run build
Build output will be generated in the dist/ directory.

💡 Pro Tips
Use Prettier for automatic code formatting

Consider Husky to lint and test before each commit

Fine-tune your tsconfig for better DX and compile-time safety

🧪 Optional: Add Testing
For unit and UI testing, we recommend:

🧪 Vitest

🧪 React Testing Library

👨‍💻 Author
Built with ❤️ by Jacopo Pierantozzi

📜 License
MIT
