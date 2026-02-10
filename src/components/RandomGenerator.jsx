import { useState, useEffect } from "react";
import PageWrapper from "../components/PageWrapper";

export default function RandomGeneratorPage() {
  const [length, setLength] = useState(12);
  const [result, setResult] = useState("");
  const [auto, setAuto] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateString = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let str = "";

    for (let i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }

    setResult(str);
  };

  // Auto-generate every 1 sec
  useEffect(() => {
    let timer;
    if (auto) {
      timer = setInterval(() => generateString(), 1000);
    }
    return () => clearInterval(timer);
  }, [auto, length]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <PageWrapper direction="left">
      <div className="min-h-screen px-4 py-10 flex justify-center
        bg-gradient-to-br from-[#060b18] to-[#0a1129]">

        <div className="max-w-3xl w-full bg-white/5 backdrop-blur-xl 
          border border-white/10 shadow-2xl rounded-2xl p-10">

          <h1 className="text-4xl font-bold text-center mb-8 
            bg-gradient-to-r from-purple-400 to-blue-400 
            text-transparent bg-clip-text flex justify-center items-center gap-3">
            🔐 Random String Generator
          </h1>

          {/* INPUT - STRING LENGTH */}
          <label className="text-gray-300 text-lg">String Length:</label>
          <input
            type="number"
            className="w-full mt-2 mb-4 px-4 py-3 rounded-lg bg-black/40 
              border border-white/10 text-white outline-none"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            min="1"
          />

          {/* GENERATE BUTTON */}
          <button
            onClick={generateString}
            className="w-full py-3 rounded-lg text-white font-semibold
            bg-gradient-to-r from-purple-600 to-blue-600 
            shadow-lg hover:shadow-purple-400/40 transition hover:-translate-y-1"
          >
            Generate
          </button>

          {/* AUTO GENERATE SWITCH */}
          <div className="mt-6 flex items-center justify-between">
            <span className="text-white text-lg">Auto Generate</span>

            {/* Beautiful Toggle Switch */}
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={auto}
                onChange={() => setAuto(!auto)}
                className="hidden"
              />
              <div
                className={
                  "w-14 h-7 flex items-center rounded-full p-1 duration-300 " +
                  (auto ? "bg-purple-500" : "bg-gray-600")
                }
              >
                <div
                  className={
                    "bg-white w-6 h-6 rounded-full shadow-md transform duration-300 " +
                    (auto ? "translate-x-7" : "")
                  }
                ></div>
              </div>
            </label>
          </div>

          {/* RESULT BOX */}
          <label className="text-gray-300 text-lg mt-6 block">
            Generated String:
          </label>

          <textarea
            className="w-full h-24 mt-2 px-4 py-3 rounded-lg bg-black/40 
            border border-white/10 text-white outline-none"
            value={result}
            readOnly
          ></textarea>

          {/* COPY BUTTON */}
          <button
            onClick={copyToClipboard}
            className="w-full mt-4 py-3 rounded-lg font-semibold text-white
            bg-gradient-to-r from-blue-500 to-purple-600 
            shadow-lg hover:shadow-blue-400/40 transition hover:-translate-y-1 flex justify-center items-center gap-2"
          >
            📋 Copy
          </button>

          {copied && (
            <p className="text-green-400 mt-2 text-center">Copied to clipboard!</p>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
