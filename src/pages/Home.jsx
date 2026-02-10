import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center animate-slideLeft">

      <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text mb-4">
        🚀 Premium Tools Suite
      </h1>

      <p className="text-gray-300 text-lg max-w-xl mb-10">
        Choose a tool from the navigation bar to get started.
      </p>

      <Link
        to="/translator"
        className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl
                   text-white text-lg shadow-lg hover:scale-105 transition-all duration-300"
      >
        Start Translating
      </Link>

    </div>
  );
}
