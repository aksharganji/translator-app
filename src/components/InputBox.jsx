export default function InputBox({ value, onChange }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}   // ✅ FIXED
      placeholder="Type something here..."
      className="w-full h-40 p-4 rounded-lg bg-white/10 text-white 
                 border border-white/20 outline-none"
    />
  );
}
