import React, {useState, useEffect} from "react"; //Mengimpor React, useState, dan useEffect dari library React
import { useParams, useNavigate } from "react-router-dom"; //Menimpor useParams dan useNavigate dari react-router-dom untuk menangani parameter navigasi
import axios from "axios"; //Mengimpor axios untuk melakukan request HTTP

export default function Edit() {
    const { id } = useParams(); //Mengambil parameter "id" dari URL mengggunakan useParams
    const navigate = useNavigate(); //Menggunakan useNavigate untuk navigasi setelah proses selesai
    const [namaKategori, setNamaKategori] = useState(""); //Menginisialisasi state 'namaKategori' untuk menyimpan namaKategori fakultas
    const [error, setError] = useState(null); //Menginisialisasi state 'error' untuk menyimpan pesan error jika ada
    
    //Mengambil data fakultas berdasarkan id ketika komponen pertama kali di muat
    useEffect( () => {
        axios
        .get(`https://tugas1-pw2-if3b-2428250004.vercel.app/api/api/kategori/${id}`, ) //Mengirimkan request GET untuk mendapatkan data fakultas berdasarkan id
        .then( (response) => {
            setNamaKategori(response.data.data.namaKategori)
        })
        .catch( (error) => {
            console.error("Error fetching data", error)
            setError("Data tidak ditemukan")
        })
    }, [id])

    //Menghandle perubahan input saat pengguna mengetik di form\
    const handleChange = (e) => {
        setNamaKategori(e.target.value)
    }

    //Menghandle submit form untuk mengedit data fakultas
    const handleSubmit = (e) => {
        e.preventDefault()
        axios
        .patch(`https://tugas1-pw2-if3b-2428250004.vercel.app/api/api/kategori/${id}`, {
            nama: namaKategori
        })
        .then((response) => {
            navigate("/kategori")
        })
        .catch( (error) => {
            console.error("Error updating data:", error)
            setError("Gagal mengupdate data")
        })
    }
    return (
        <div>
            <h2>Edit Kategori</h2>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="namaKategori" className="form-label">Nama Kategori</label>
                    <input 
                    type="text"
                    className="form-control"
                    id="namaKategori"
                    value={namaKategori}
                    onChange={handleSubmit}
                    required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    )
}