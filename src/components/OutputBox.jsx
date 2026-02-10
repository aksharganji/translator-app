export default function OutputBox({ value }) {
  return (
    <div
      className="w-full min-h-32 p-4 rounded-lg bg-white/5 
                 border border-white/20 text-white"
    >
      {value || "Translation will appear here..."}
    </div>
  );
}
