import { useState } from "react";

export default function Translator() {
  const [text, setText] = useState("");
  const [lang, setLang] = useState("es");
  const [output, setOutput] = useState("");

  const translateText = async () => {
  if (!text.trim()) {
        setOutput("Please type something to translate.");
        return;
    }

    const url = "https://google-translator9.p.rapidapi.com/v2";

    const options = {
        method: "POST",
        headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "b9cf13c38emsh4b3da66b2144dbfp10001cjsn375c34522817",
        "X-RapidAPI-Host": "google-translator9.p.rapidapi.com",
        },
        body: JSON.stringify({
        q: text,
        target: lang,
        source: "en",
        }),
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        setOutput(data.data.translations[0].translatedText);
    } catch (error) {
        console.error(error);
        setOutput("Translation failed. Try again.");
    }
    };


  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-gray-800 shadow-2xl rounded-2xl p-10 border border-gray-700">
        
        <h2 className="text-4xl font-extrabold text-center text-indigo-400 mb-8">
          🌙 Text Translator
        </h2>

        {/* INPUT BOX */}
        <label className="text-lg font-semibold">Enter Text (English)</label>
        <textarea
          className="w-full border border-gray-700 bg-gray-900 p-5 rounded-xl mt-2 text-lg focus:ring-2 
                     focus:ring-indigo-500 outline-none h-40"
          placeholder="Type something here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        {/* LANGUAGE & BUTTON */}
        <div className="flex gap-4 mt-6">
          <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="flex-1 border border-gray-700 bg-gray-900 p-4 rounded-xl text-lg"
                >
                <option value="hi">Hindi</option>
                <option value="te">Telugu</option>
                <option value="ta">Tamil</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="ja">Japanese</option>
                <option value="ko">Korean</option>
            </select>


          <button
            onClick={translateText}
            className="bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 transition 
                       text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg"
          >
            Translate
          </button>
        </div>

        {/* RESULT */}
        <label className="text-lg font-semibold mt-8 block">Result</label>
        <div className="mt-3 p-5 border border-gray-700 bg-gray-900 rounded-xl text-xl min-h-[100px]">
          {output || <span className="text-gray-500">Translation will appear here...</span>}
        </div>

      </div>
    </div>
  );
}
