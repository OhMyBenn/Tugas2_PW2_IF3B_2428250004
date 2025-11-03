import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


const ProdukKategori = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produk, setProduk] = useState([]);
  const [kategori, setKategori] = useState({});

  useEffect(() => {
    axios.get(`https://tugas1-pw2-if3b-2428250004.vercel.app/api/api/kategori/${id}`)
      .then((response) => setKategori(response.data))
      .catch((error) => console.log(error));

    axios.get(`https://tugas1-pw2-if3b-2428250004.vercel.app/api/api/kategori/${id}/produk`)
      .then((response) => setProduk(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Produk dalam Kategori: {kategori.nama}</h2>
      <button
        className="btn btn-info mb-3"
        onClick={() => navigate("/kategori")}
      >
        Kembali
      </button>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nama Produk</th>
            <th>Kode Produk</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(produk) && produk.length > 0 ? (
            produk.map((p) => (
            <tr key={p.id}>
            <td>{p.nama}</td>
            <td>{p.kode}</td>
            </tr>
        ))
        ) : (
        <tr>
            <td colSpan="2" className="text-center">
                Tidak ada produk untuk kategori ini.
            </td>
        </tr>
        )}
        </tbody>
      </table>
    </div>
  );
};

export default ProdukKategori;
