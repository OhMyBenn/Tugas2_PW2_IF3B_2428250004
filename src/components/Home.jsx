import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-3">
        Selamat Datang di Vitmart
      </h1>
      <p className="text-gray-600 mb-8">Menyediakan semua yang dibutuhkan.</p>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/kategori")}
          className="text-black"
        >
          Kategori
        </button>
        <button
          onClick={() => navigate("/produk")}
          className="text-black"
        >
          Produk
        </button>
      </div>

      <footer className="mt-16 text-gray-500 text-sm">
        © 2025 Vitmart. Dibuat oleh Benn
      </footer>
    </div>
  );
}
