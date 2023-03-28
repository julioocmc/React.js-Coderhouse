import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home/index.jsx';
import ItemListContainer from './components/Item/ItemListContainer.jsx';
import ProductDetails from './components/Item/ProductDetails.jsx';
import NavBar from './components/Navbar/NavBar.jsx';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category:id" element={<ItemListContainer />} />
        <Route path="/products" element={<ItemListContainer />} />
        <Route path="/product/:name" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
