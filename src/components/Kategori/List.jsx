import React, { useEffect, useState  } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2

export default function List() {
  const [kategori, setKategori] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://tugas1-pw2-if3b-2428250004.vercel.app/api/api/kategori")
      .then((response) => {
        console.log(response.data);
        setKategori(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch kategori", error);
      });
  }, []);

  const handleDelete = (id, nama) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert this!! Kategori ${nama} `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://tugas1-pw2-if3b-2428250004.vercel.app/api/api/kategori/${id}`
          )
          .then((response) => {
            setKategori(kategori.filter((data) => data.id !== id));
            Swal.fire("Deleted!!", "Your data has been deleted.", "success");
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
                      <h2>List Kategori</h2>
                  <NavLink to="/kategori/create" className="btn btn-primary">
                  Tambah Kategori
                  </NavLink>
                  <table className="table table-bordered border-primary">
                           <thead>
                              <tr>
                                     <th> Nama Kategori </th>
                                     <th> Aksi </th>
                               </tr>
                           </thead>
                           <tbody>
                                 {kategori.map((data) => (
                                 <tr key={data.id}>
                                   <td>{data.nama}</td> {/* Menampilkan nama Kategori*/}
                                   <td>
                                      <NavLink to={`${data.id}`} className="btn btn-primary me-2">
                                         Detail
                                      </NavLink>
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
        className="btn btn-dark ms-2 mb-3"
        onClick={() => navigate("/produk")}
      >
        Produk
      </button>
              </div>
              
      );
  }
