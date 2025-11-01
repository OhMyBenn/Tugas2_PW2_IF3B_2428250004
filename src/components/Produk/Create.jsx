import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function CreateProduk() {
    const [namaProduk, setNamaProduk] = useState("");
    const [kodeProduk, setKodeProduk] = useState("");
    const [kategoriId, setKategoriId] = useState("");
    const [kategoriList, setKategoriList] = useState([]);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        const fetchKategori = async () => {
            try {
                const response = await axios.get(
                    "https://tugas1-pw2-if3b-2428250004.vercel.app/api/api/kategori"
                );
                setKategoriList(response.data);
            } catch (error) {
                console.error("Failed to fetch kategori");
            }
         };

        fetchKategori();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        if (namaProduk.trim() === "" || kategoriId.trim() === "") {
            setError("Nama Produk and Kategori is required");
            return;
        }
        try {
            const response = await axios.post(
                "https://tugas1-pw2-if3b-2428250004.vercel.app/api/api/produk",
                {
                    nama: namaProduk,
                    kode: kodeProduk,
                    kategori_id: kategoriId,
                }
            );
            if (response.status === 201) {
                setSuccess("Produk created successfully!");
                setNamaProduk("");
                setKodeProduk("");
                setKategoriId("");
            } else {
                setError("Failed to tambah produk");
            } 
        } catch (error) {
            setError("An error occurred while tambah produk");
        }
    };
    
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Tambah Produk</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nama Produk</label>
                    <input
                        type="text"
                        className="form-control"
                        id="namaProduk"
                        value={namaProduk}
                        onChange={(e) => setNamaProduk(e.target.value)}
                        placeholder="Masukkan nama produk"
                    /> 
                </div>
                <div className="mb-3">
                    <label className="form-label">Kode Produk</label>
                    <input
                        type="text"
                        className="form-control"
                        id="kodeProduk"
                        value={kodeProduk} 
                        onChange={(e) => setKodeProduk(e.target.value)}
                        placeholder="Masukkan kode produk"
                    /> 
                </div>
                <div className="mb-3">
                    <label className="form-label">Kategori</label>
                    <select
                        className="form-select"
                        id="kategoriId"
                        value={kategoriId}
                        onChange={(e) => setKategoriId(e.target.value)}
                    >
                        <option value="">Pilih Kategori</option>
                        {kategoriList.map((kategori) => (
                            <option key={kategori.id} value={kategori.id}>
                                {kategori.nama}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">
                    Tambah
                </button>
            </form>
        </div>
    );
}