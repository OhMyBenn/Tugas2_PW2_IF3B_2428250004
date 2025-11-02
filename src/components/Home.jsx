import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, List, PlusCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      {/* Container utama */}
      <div className="max-w-3xl w-full text-center">
        {/* Judul */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Selamat Datang di <span className="text-blue-600">Vitmart</span>
        </h1>

        {/* Deskripsi singkat */}
        <p className="text-gray-600 text-lg md:text-xl mb-8">
          Menyediakan semua yang dibutuhkan.
        </p>

        {/* Tombol navigasi */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/kategori"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition-all"
          >
            <List className="w-5 h-5" />
            Kelola Kategori
          </Link>

          <Link
            to="/produk"
            className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-700 transition-all"
          >
            <ShoppingBag className="w-5 h-5" />
            Kelola Produk
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-gray-500 text-sm">
          © 2025 Vitmart. Dibuat oleh <span className="font-semibold">Benn</span>
        </footer>
      </div>
    </div>
  );
}
