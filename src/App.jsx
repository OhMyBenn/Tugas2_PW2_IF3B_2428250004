import React, {Suspense, useState } from "react"; 
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Logout from "./components/Logout";

const Home = React.lazy(() => import('./components/Home'));
const KategoriList = React.lazy(() => import('./components/Kategori/List'));
const KategoriCreate = React.lazy(() => import('./components/Kategori/Create'));
const KategoriEdit = React.lazy(() => import ('./components/Kategori/Edit'))
const ProdukList = React.lazy(() => import('./components/Produk/List'));
const ProdukCreate = React.lazy(() => import('./components/Produk/Create'));
const ProdukEdit = React.lazy(() => import ('./components/Produk/Edit'));
const ProdukKategori = React.lazy(() => import ('./components/Kategori/ProdukKategori'));
const Login = React.lazy(() => import ('./components/Login'));

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("authToken") || null);

  return (
    <Router>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a className="navbar-brand" href="/">Vitmart</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink className="nav-link active" aria-current="page" to ="/"href="">Home</
          NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/kategori">Kategori</
          NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/produk">Produk</
          NavLink>
        </li>
        {token ? ( // Tampilkan Logout jika token ada
          <NavLink className="nav-link" to="/logout">
            Logout
          </NavLink>
        ) : ( 
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        )}
      </ul>
    </div>
  </div>
</nav> 
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route untuk halaman Home */}
          <Route path="/kategori" element={<KategoriList />} />
          {/* Route ke halaman Kategori List */}
          <Route path="/kategori/create" element={<KategoriCreate />} />
          {/* Route ke halaman Kategori Create */}
          <Route path="/kategori/edit/:id" element={<KategoriEdit />}/>
          {/* Route ke halaman Kategori Edit */}
          <Route path="/produk" element={<ProdukList />} />
          {/* Route ke halaman Produk List */}
          <Route path="/produk/create" element={<ProdukCreate />} />
          {/* Route ke halaman Produk Create */}
          <Route path="/produk/edit/:id" element={<ProdukEdit />}/>
          {/* Route ke halaman Produk Edit */}
          <Route path="/kategori/:id" element={<ProdukKategori />} />
          {/* Route ke halaman Produk berdasarkan Kategori */}
          <Route path="/login" element={<Login setToken={setToken} />} /> 
          {/* Route untuk halaman Login */}
          <Route path="/logout" element={<Logout />} />
          {/* Route untuk halaman Logout */}
          {/* Protected routes */} 
          <Route
            path="/protected"
            element={
              <ProtectedRoute>
                <ProdukList />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  )
}


export default App
