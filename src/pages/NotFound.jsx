export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl mb-6">The page you’re looking for does not exist.</p>
      <a
        href="/"
        className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition text-white"
      >
        Go Home
      </a>
    </div>
  );
}
