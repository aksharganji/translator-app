export default function Toolbar({ onClearHistory, onClearInput, onClearOutput }) {
  return (
    <div className="flex flex-wrap gap-3 justify-end mb-4">

      {/* Clear History */}
      <button 
        onClick={onClearHistory}
        className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition"
      >
        🗑 Clear History
      </button>

      {/* Clear Input */}
      <button 
        onClick={onClearInput}
        className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition"
      >
        ❌ Clear Input
      </button>

      {/* Clear Output */}
      <button 
        onClick={onClearOutput}
        className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white transition"
      >
        🧹 Clear Output
      </button>

    </div>
  );
}
