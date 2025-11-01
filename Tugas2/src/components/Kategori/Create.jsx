import React, { useState } from "react"; // Import React dan useState untuk menggunakan state hooks
import axios from "axios"; // Import axios untuk melakukan HTTP request

export default function CreateKategori() {
  // Inisialisasi state untuk menyimpan nama kategori
  const [namaKategori, setNamaKategori] = useState("");
  // Inisialisasi state untuk menyimpan kode kategori
  const [kodeKategori, setKodeKategori] = useState("");
  // Inisialisasi state untuk menyimpan pesan error
  const [error, setError] = useState("");
  // Inisialisasi state untuk menyimpan pesan sukses
  const [success, setSuccess] = useState("");

  // Fungsi yang akan dijalankan saat form disubmit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman setelah form disubmit
    setError(""); // Reset pesan error sebelum proses
    setSuccess(""); // Reset pesan sukses sebelum proses

    // Validasi input: jika namaKategori kosong, set pesan error
    if (namaKategori.trim() === "") {
      setError("Nama Kategori is required"); // Set pesan error jika input kosong
      return; // Stop eksekusi fungsi jika input tidak valid
    }

    // Proses pengiriman data ke API
    try {
      // Melakukan HTTP POST request untuk menyimpan data kategori
      const response = await axios.post(
        "https://tugas1-pw2-if3b-2428250004.vercel.app/api/api/kategori", // Endpoint API yang dituju
        {
          nama: namaKategori, // Data yang dikirim berupa objek JSON dengan properti 'nama'
          kode: kodeKategori, // Data yang dikirim berupa objek JSON dengan properti 'kode'
        },
      );

      // Jika response HTTP status 201 (Created), berarti berhasil
      if (response.status === 201) {
        // Tampilkan pesan sukses jika kategori berhasil dibuat
        setSuccess("Kategori created successfully!");
        setNamaKategori(""); // Kosongkan input form setelah sukses submit
      } else {
        // Jika tidak berhasil, tampilkan pesan error
        setError("Failed to create kategori");
      }
    } catch (error) {
      // Jika terjadi error (misal masalah jaringan), tampilkan pesan error
      setError("An error occurred while creating kategori");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Create Kategori</h2>

      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="namaKategori" className="form-label">
            Nama Kategori
          </label>
          <input
            type="text"
            className="form-control"
            id="namaKategori"
            value={namaKategori}
            onChange={(e) => setNamaKategori(e.target.value)}
            placeholder="Masukkan nama kategori"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="kodeKategori" className="form-label">
            Kode Kategori
          </label>
          <input
            type="text"
            className="form-control"
            id="kodeKategori"
            value={kodeKategori}
            onChange={(e) => setKodeKategori(e.target.value)}
            placeholder="Masukkan kode kategori"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Tambah
        </button>
      </form>
    </div>
  );
}
