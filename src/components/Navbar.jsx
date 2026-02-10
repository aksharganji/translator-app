import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full px-10 py-5 flex justify-between items-center
      bg-black/20 backdrop-blur-lg border-b border-white/10 shadow-lg">

      <h1 className="text-3xl font-bold bg-gradient-to-r 
        from-purple-400 to-blue-400 text-transparent bg-clip-text">
        My Project
      </h1>

      <div className="flex gap-8 text-lg">
        <Link to="/" className="hover:text-purple-300 transition">Home</Link>

        {/* FIXED PATH */}
        <Link to="/translator" className="hover:text-purple-300 transition">Translator</Link>

        {/* FIXED PATH */}
        <Link to="/tools/generator" className="hover:text-purple-300 transition">Random Generator</Link>
      </div>
    </nav>
  );
}
