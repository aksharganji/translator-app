import { useEffect, useState } from "react";
import InputBox from "./InputBox";
import LanguageSelector from "./LanguageSelector";
import OutputBox from "./OutputBox";
import Loader from "./Loader";
import Toolbar from "./Toolbar";
import { translateTextAPI } from "../utils/api";
import PageWrapper from "./PageWrapper";

export default function Translator() {
  const [text, setText] = useState("");
  const [lang, setLang] = useState("hi");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("translations");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  // Clear Functions
  const clearInput = () => setText("");
  const clearOutput = () => setOutput("");
  const clearHistory = () => {
    localStorage.removeItem("translations");
    setHistory([]);
  };

  // Copy to Clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(output || "");
    alert("Copied to Clipboard!"); // Simple notification
  };

  // Speak Output
  const speakOutput = () => {
    if (!output) return;
    const utterance = new SpeechSynthesisUtterance(output);
    utterance.lang = lang;
    speechSynthesis.speak(utterance);
  };

  // Voice Input (Speech Recognition)
  const voiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support voice recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const speechText = event.results[0][0].transcript;
      setText((prev) => prev + " " + speechText);
    };
  };

  const translateText = async () => {
    if (!text.trim()) return;

    setLoading(true);
    try {
      const result = await translateTextAPI(text, lang);
      setOutput(result);

      const entry = {
        text,
        translated: result,
        lang,
        time: Date.now(),
      };

      const updated = [entry, ...history];
      setHistory(updated);
      localStorage.setItem("translations", JSON.stringify(updated));
    } catch (err) {
      console.error(err);
      setOutput("Translation failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper direction="right">
      <div className="min-h-screen px-4 py-10 flex justify-center 
        bg-gradient-to-br from-[#0a0f1f] to-[#081020]">

        <div className="max-w-3xl w-full bg-white/5 backdrop-blur-xl 
          border border-white/10 shadow-2xl rounded-2xl p-10">

          <h1 className="text-4xl font-bold text-center mb-6 
            bg-gradient-to-r from-purple-400 to-blue-400 
            text-transparent bg-clip-text">
            🌐 Premium Translator
          </h1>

          {/* Toolbar */}
          <Toolbar
            onClearHistory={clearHistory}
            onClearInput={clearInput}
            onClearOutput={clearOutput}
          />

          {/* Input */}
          <InputBox value={text} onChange={setText} />

          {/* Voice Input Button */}
          <button
            onClick={voiceInput}
            className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-lg 
            hover:bg-purple-700 transition shadow-md"
          >
            🎤 Voice Input
          </button>

          {/* Language + Translate */}
          <div className="flex items-center gap-4 mt-4">
            <LanguageSelector lang={lang} setLang={setLang} />

            <button
              onClick={translateText}
              className="px-6 py-3 rounded-lg text-white font-semibold
              bg-gradient-to-r from-purple-600 to-blue-600 
              shadow-lg hover:shadow-purple-400/40 transition hover:-translate-y-1"
            >
              Translate
            </button>
          </div>

          {/* Output */}
          <OutputBox value={output} />

          {loading && <Loader />}

          {/* Copy + Speak Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={copyToClipboard}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow 
              hover:bg-blue-700 transition"
            >
              📋 Copy
            </button>

            <button
              onClick={speakOutput}
              className="px-5 py-2 bg-green-600 text-white rounded-lg shadow 
              hover:bg-green-700 transition"
            >
              🔊 Speak
            </button>
          </div>

          {/* History */}
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2 text-purple-300">
              📜 Translation History
            </h2>

            {history.length === 0 && (
              <p className="text-gray-400">No history yet...</p>
            )}

            {history.map((h) => (
              <div
                key={h.time}
                className="bg-white/10 p-3 rounded-lg mb-2 border border-white/10"
              >
                <p><b>Input:</b> {h.text}</p>
                <p><b>Output:</b> {h.translated}</p>
                <p className="text-sm opacity-60">{h.lang}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
