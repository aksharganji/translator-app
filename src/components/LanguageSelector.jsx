export default function LanguageSelector({ lang, setLang, theme }) {
  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value)}
      className={`flex-1 rounded-xl p-4 text-lg border transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 border-gray-700 text-gray-200"
          : "bg-white border-gray-300 text-gray-900"
      }`}
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
  );
}
