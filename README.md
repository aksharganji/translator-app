🌐 Premium Tools Suite

A modern, beautifully designed web application built using React + Vite + Tailwind CSS featuring:

✨ Premium AI Translator (RapidAPI)
✨ Random String Generator Tool
✨ Smooth animations, theme toggle, page transitions
✨ Voice input, text-to-speech, clipboard copy, and history tracking

🚀 Features
🌐 Premium Translator

Translate text into 100+ languages

Built using Google Translator API (RapidAPI)

Voice Input (speech-to-text)

Speak Output (text-to-speech)

Copy to Clipboard with notification

Translation History (localStorage)

Dark/Light Mode

Gradient UI + neon components

Smooth page transitions & animations

🔐 Random String Generator

Generate secure random strings

Custom length input

Auto-Generate Toggle (Switch Button)

One-tap Copy to Clipboard

Clean glass-morphism design

Responsive & mobile-friendly

🛠️ Tech Stack
Technology	Purpose
React + Vite	Frontend Framework
Tailwind CSS	UI Styling
Framer Motion / Custom CSS	Animations + Transitions
RapidAPI (Google Translator)	Translation Engine
LocalStorage	Save History
Web Speech API	Voice Input & Text-to-Speech
📦 Installation
1️⃣ Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2️⃣ Install dependencies
npm install

3️⃣ Add your environment variable

Create a file named .env in the project root:

VITE_RAPIDAPI_KEY=your_api_key_here

4️⃣ Run the project
npm run dev

📂 Project Structure
src/
│── components/
│   ├── InputBox.jsx
│   ├── OutputBox.jsx
│   ├── LanguageSelector.jsx
│   ├── Toolbar.jsx
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   ├── PageWrapper.jsx
│── pages/
│   ├── Home.jsx
│   ├── TranslatorPage.jsx
│   ├── RandomGeneratorPage.jsx
│   ├── NotFound.jsx
│── utils/
│   ├── api.js
│── App.jsx
│── main.jsx
│── index.css

🔑 API Usage (Google Translator – RapidAPI)
Request Structure:
const url = "https://google-translator9.p.rapidapi.com/v2";

const options = {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "google-translator9.p.rapidapi.com",
  },
  body: JSON.stringify({
    q: text,
    source: "en",
    target: targetLang,
  }),
};

📸 Screenshots
🏠 Home Page

A clean landing page with animated components.

🌐 Translator Tool

Voice input, translation history, neon buttons, theme toggle.

🔐 Random Generator Tool

Auto-generate switch + glass UI.

(Add screenshots after deployment or during GitHub upload)

🚀 Deployment

You can deploy using:

Vercel (Recommended)
vercel --prod

Netlify

Drag & drop build folder
or

npm run build
netlify deploy

🤝 Contributing

Pull requests are welcome!
If you'd like major changes, please open an issue first to discuss.

📝 License

This project is open-source and free to use.
