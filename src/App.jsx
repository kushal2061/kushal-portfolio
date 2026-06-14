import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";

import AboutPage from "./pages/AboutPage";

const API = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

export default function App() {
  useEffect(() => {
    fetch(`${API}/projects/`).catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark text-ink dark:text-text-dark font-body">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
