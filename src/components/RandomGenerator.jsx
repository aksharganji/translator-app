import { useState, useEffect, useCallback } from "react";

export default function RandomGenerator() {
  const [length, setLength] = useState(12);
  const [result, setResult] = useState("");
  const [auto, setAuto] = useState(false);

  const playClick = () => new Audio("/sounds/click.wav").play();

  const generateString = useCallback(() => {
    playClick();
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%&!";
    let out = "";
    for (let i = 0; i < length; i++) {
      out += chars[Math.floor(Math.random() * chars.length)];
    }
    setResult(out);
  }, [length]);

  useEffect(() => {
    let i = null;
    if (auto) i = setInterval(generateString, 1200);
    return () => clearInterval(i);
  }, [auto, generateString]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-black/50 p-10 rounded-2xl border border-purple-500/20 shadow-2xl">

        <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text">
          🔐 Random String Generator
        </h1>

        <label>String Length:</label>
        <input
          type="number"
          className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 mb-4"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />

        {/* Neon Button */}
        <button
          onClick={generateString}
          className="w-full p-3 rounded-lg text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg hover:shadow-purple-500/50 transition"
        >
          Generate
        </button>

        <div className="flex justify-between mt-4">
          <label>Auto Generate</label>
          <input type="checkbox" checked={auto} onChange={() => setAuto(!auto)} />
        </div>

        <label className="mt-4 block">Generated String:</label>
        <textarea
          className="w-full h-24 p-3 bg-gray-900 border border-gray-700 rounded-lg text-lg"
          value={result}
          readOnly
        />

        <button
          onClick={() => navigator.clipboard.writeText(result)}
          className="w-full mt-4 p-3 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:shadow-blue-500/50 transition"
        >
          📋 Copy
        </button>

      </div>
    </div>
  );
}
