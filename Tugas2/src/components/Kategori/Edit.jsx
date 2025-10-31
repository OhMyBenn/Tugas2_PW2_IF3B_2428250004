import React, {useState, useEffect} from "react"; //Mengimpor React, useState, dan useEffect dari library React
import { useParams, useNavigate } from "react-router-dom"; //Menimpor useParams dan useNavigate dari react-router-dom untuk menangani parameter navigasi
import axios from "axios"; //Mengimpor axios untuk melakukan request HTTP
import Swal from "sweetalert2";
import { use } from "react";

export default function Edit() {
    const { id } = useParams(); //Mengambil parameter "id" dari URL mengggunakan useParams
    const navigate = useNavigate(); //Menggunakan useNavigate untuk navigasi setelah proses selesai
    const [namaKategori, setNamaKategori] = useState(""); //Menginisialisasi state 'Nama Kategori' untuk menyimpan Kategori
    const [error, setError] = useState(null); //Menginisialisasi state 'error' untuk menyimpan pesan error jika ada
    const [success, setSuccess] = useState(""); //Menginisialisasi state untuk menyimpan pesan sukses
    
    //Mengambil data Kategori berdasarkan id ketika komponen pertama kali di muat
    useEffect( () => {
        axios
        .get(`https://tugas1-pw2-if3b-2428250004.vercel.app/api/api/kategori/${id}`) //Mengirimkan request GET untuk mendapatkan data Kategori berdasarkan id
        .then((response) => {
            console.log(response.data);
            setNamaKategori(response.data.data.nama);
        })
        .catch( (error) => {
            setError("Failed to fetch kategeori data");
        })
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault(); // Mencegah reload halaman setelah form disubmit
        setError(""); // Reset pesan error sebelum proses
        setSuccess(""); // Reset pesan sukses sebelum proses


    try {
      // Melakukan HTTP POST request untuk menyimpan data Kategori
      const response = await axios.patch(
        `https://tugas1-pw2-if3b-2428250004.vercel.app/api/api/kategori/${id}`, // Endpoint API yang dituju
        {
          nama : namaKategori, // Data yang dikirim berupa objek JSON dengan properti 'nama'
        }
      );

      // Jika response HTTP status 200 (HTTP_OK), berarti berhasil
      if (response.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "Kategori updated successfully",
          icon: "success"
        });
        navigate("/kategori"); // Navigasi kembali ke halaman list fakult
      } else {
        // Jika tidak berhasil, tampilkan pesan error
        setError("Failed to update Kategori");
      }
    } catch (error) {
      // Jika terjadi error (misal masalah jaringan), tampilkan pesan error
      setError("An error occurred while updating Kategori");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Edit Kategori</h2>
      {/* Jika ada pesan error, tampilkan dalam alert bootstrap */}
      {error && <div className="alert alert-danger">{error}</div>}
      {/* Jika ada pesan sukses, tampilkan dalam alert bootstrap */}
      {success && <div className="alert alert-success">{success}</div>}
      {/* Form untuk mengisi nama Kategori */}
      <form onSubmit={handleSubmit}>
        {/* Tangani event submit dengan handleSubmit */}
        <div className="mb-3">
          <label className="form-label">
            Nama Kategori
          </label>
          {/* Input untuk nama Kategori dengan class bootstrap */}
          <input
            type="text" className="form-control" id="nama"
            value={namaKategori} // Nilai input disimpan di state nama
            onChange={(e) => setNamaKategori(e.target.value)} // Update state saat input berubah
            placeholder="Enter Kategori Name" // Placeholder teks untuk input
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}