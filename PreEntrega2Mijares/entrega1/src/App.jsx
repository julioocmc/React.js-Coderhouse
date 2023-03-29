import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ProductList/ItemListContainer.jsx';
import NavBar from './components/Navbar/NavBar.jsx';
import ProductList from './components/ProductList/index.jsx';
import CardDetail from './components/CardDetail/index.jsx';
import Filtrar from './components/Category/index.jsx';

function App() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <ItemListContainer text="Bienvenido!" />

      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<ProductList productos={productos} />} />
        <Route
          path="/products"
          element={<ProductList productos={productos} />}
        />
        <Route path="/products/:id" element={<CardDetail />} />
        <Route path="/categorias" element={<Filtrar />} />
      </Routes>
    </div>
  );
}

export default App;
