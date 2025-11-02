import React, {Suspense} from "react"; 
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

const Home = React.lazy(() => import('./components/Home'));
const KategoriList = React.lazy(() => import('./components/Kategori/List'));
const KategoriCreate = React.lazy(() => import('./components/Kategori/Create'));
const KategoriEdit = React.lazy(() => import ('./components/Kategori/Edit'))
const ProdukList = React.lazy(() => import('./components/Produk/List'));
const ProdukCreate = React.lazy(() => import('./components/Produk/Create'));
const ProdukEdit = React.lazy(() => import ('./components/Produk/Edit'));

function App() {
  

  return (
    <Router>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a className="navbar-brand" href="#">Vitmart</a>
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
        {/* <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
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
        </Routes>
      </Suspense>
    </Router>
  )
}


export default App
