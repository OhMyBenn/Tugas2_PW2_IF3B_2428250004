import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

export default function List() {
    const [produk, setProduk] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        axios
        .get('https://tugas1-pw2-if3b-2428250004.vercel.app/api/api/produk')
        .then((response) => {
            console.log(response.data);
            setProduk(response.data);
        })
    }, []);

    const handleDelete = (id, nama) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You won't be able to revert this!! Produk ${nama} `,
            icon: "warning",
            showCancelButton: true, confirmButtonColor: "#3085d6", cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                .delete(`https://tugas1-pw2-if3b-2428250004.vercel.app/api/api/produk/${id}`)
                // eslint-disable-next-line no-unused-vars
                .then((response) => {
                    setProduk(produk.filter((data) => data.id !== id));
                    Swal.fire("Deleted!!" , "Your data has been deleted.", "success" );
                })
                .catch((error) => {
                    console.error("Error Deleting Data :", error);
                    Swal.fire(
                    "Error!",
                    "There was an issue while deleting the data.",
                    "error"
                );
            });
        }
    });
};

    return (
        <div>
                    <h2>List Produk</h2>
                <NavLink to="/produk/create" className="btn btn-primary">
                Tambah Produk
                </NavLink>
                <table className="table table-bordered border-primary">
                         <thead>
                            <tr>
                                   <th> Nama Produk </th>
                                   <th> Aksi </th>
                             </tr>
                         </thead>
                         <tbody>
                               {produk.map((data) => (
                               <tr key={data.id}>
                                 <td>{data.nama}</td> {/* Menampilkan nama Kategori*/}
                                 <td>
                                     <button onClick={() => handleDelete(data.id, data.nama)}
                                          className="btn btn-danger"
                                          >
                                       Hapus
                                    </button>
                                    <NavLink to={`edit/${data.id}`} className="btn btn-warning ms-2">
                                       Edit
                                    </NavLink>
                                 </td>
                            </tr>
                               ))}
                         </tbody>
                 </table>
                 <button
        className="btn btn-info mb-3"
        onClick={() => navigate("/")}
      >
        Kembali
      </button>

      <button
        className="btn btn-secondary ms-2 mb-3"
        onClick={() => navigate("/kategori")}
      >
        Kategori
      </button>
            </div>
    );
}