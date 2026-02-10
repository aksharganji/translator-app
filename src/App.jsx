import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TranslatorPage from "./pages/TranslatorPage";
import RandomGeneratorPage from "./pages/RandomGeneratorPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translator" element={<TranslatorPage />} />
        <Route path="/tools/generator" element={<RandomGeneratorPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
