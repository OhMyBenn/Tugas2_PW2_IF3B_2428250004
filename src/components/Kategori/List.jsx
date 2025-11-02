import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2

export default function List() {
  const [kategori, setKategori] = useState([]);
  const [data, setData] = useState([]);

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
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Judul */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">
        List Kategori
      </h2>

      {/* Tombol Tambah */}
      <div className="flex justify-center md:justify-start mb-6">
        <NavLink
          to="/kategori/create"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Tambah Kategori
        </NavLink>
      </div>

      {/* Tabel Responsif */}
      <div className="overflow-x-auto shadow-md rounded-lg bg-white">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-800 uppercase text-xs">
            <tr>
              <th scope="col" className="px-4 py-3 w-1/2">
                Nama Kategori
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {kategori.map((data) => (
              <tr key={data.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-4 py-3">{data.nama}</td>
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => handleDelete(data.id, data.nama)}
                    className="bg-red-500 hover:bg-red-600 text-white font-medium px-3 py-1 rounded-md mr-2 transition"
                  >
                    Hapus
                  </button>
                  <NavLink
                    to={`edit/${data.id}`}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium px-3 py-1 rounded-md transition"
                  >
                    Edit
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Benn
      </footer>
    </div>
  );
}
