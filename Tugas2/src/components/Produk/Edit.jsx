import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [namaProduk, setNamaProduk] = useState("");
    const [error, setError] = useState();
    const [success, setSuccess] = useState("");

    useEffect(() => {
        axios
        .get(`https://tugas1-pw2-if3b-2428250004.vercel.app/api/api/produk/${id}`)
        .then((response) => {
            console.log(response.data);
            setNamaProduk(response.data.data.nama);
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
                        className="form-control" id="nama"
                        value={namaProduk}
                        onChange={(e) => setNamaProduk(e.target.value)}
                        placeholder="Masukkan nama produk"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Update
                </button>
            </form>
        </div>
    );
}