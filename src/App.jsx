import React, {Suspense, useState } from "react"; 
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Loader from "./components/Louder";
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
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Vitmart</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="container-fluid" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to ="/"href="">Home</
          NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/kategori">Kategori</
          NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/produk">Produk</
          NavLink>
        </li>
        <li> {token ? ( // Tampilkan Logout jika token ada
          <NavLink className="nav-link" to="/logout">
            Logout
          </NavLink>
        ) : ( 
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        )}
        </li>
      </ul>
    </div>
  </div>
</nav> 
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route untuk halaman Home */}
          {/* <Route path="/kategori" element={<KategoriList />} /> */}
          {/* Route ke halaman Kategori List */}
          <Route path="/kategori/create" element={<KategoriCreate />} />
          {/* Route ke halaman Kategori Create */}
          <Route path="/kategori/edit/:id" element={<KategoriEdit />}/>
          {/* Route ke halaman Kategori Edit */}
          {/* <Route path="/produk" element={<ProdukList />} /> */}
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
            path="/kategori"
            element={
              <ProtectedRoute>
                <KategoriList />
              </ProtectedRoute>
            }
          /> 
          <Route
            path="/produk"
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
