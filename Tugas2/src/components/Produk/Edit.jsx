import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [namaProduk, setNamaProduk] = useState("");
    const [kodeProduk, setKodeProduk] = useState("");
    const [kategoriId, setKategoriId] = useState("");
    const [error, setError] = useState();
    const [success, setSuccess] = useState("");

    useEffect(() => {
        axios
        .get(`https://tugas1-pw2-if3b-2428250004.vercel.app/api/api/produk/${id}`)
        .then((response) => {
            console.log(response.data);
            setNamaProduk(response.data.data.nama);
            setKodeProduk(response.data.data.kode);
            setKategoriId(response.data.data.kategori_id);
        })
        .catch((error) => {
            setError("Failed to fetch produk data");
        })
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

    try {
      const response = await axios.patch(
        `https://tugas1-pw2-if3b-2428250004.vercel.app/api/api/produk/${id}`,
        {
          nama: namaProduk,
          kode: kodeProduk,
          kategori_id: kategoriId,
        }
      );

        if (response.status === 200) {
            Swal.fire({
            title: "Success!",
            text: "Produk updated successfully",
            icon: "success"
        });
        navigate("/produk");
      } else {
        setError("Failed to update produk");
      }
    } catch (error) {
        setError("An error occurred while updating produk");
    }
  };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Edit Produk</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nama Produk</label>
                    <input
                        type="text"
                        className="form-control"
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
                        value={kodeProduk}
                        onChange={(e) => setKodeProduk(e.target.value)}
                        placeholder="Masukkan kode produk"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Kategori ID</label>
                    <input
                        type="text"
                        className="form-control"
                        value={kategoriId}  
                        onChange={(e) => setKategoriId(e.target.value)}
                        placeholder="Masukkan kategori ID"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Update
                </button>
            </form>
        </div>
    );
}