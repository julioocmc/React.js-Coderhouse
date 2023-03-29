import React, { useState, useEffect } from 'react';

function obtenerCategorias() {
  return fetch('https://fakestoreapi.com/products/categories')
    .then((respuesta) => respuesta.json())
    .then((categorias) => categorias)
    .catch((error) => console.error(error));
}

function obtenerProductosPorCategoria(categoria) {
  return fetch(`https://fakestoreapi.com/products/category/${categoria}`)
    .then((respuesta) => respuesta.json())
    .then((productos) => productos)
    .catch((error) => console.error(error));
}

function Producto({ producto }) {
  return (
    <div>
      <h3>{producto.title}</h3>
      <img src={producto.image} alt={producto.title} width="200" height="250" />
      <p>Precio: {producto.price}</p>
      <b>{producto.category}</b>
    </div>
  );
}

function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerCategorias().then((categorias) => setCategorias(categorias));
  }, []);

  async function handleClickCategoria(categoria) {
    const productosPorCategoria = await obtenerProductosPorCategoria(categoria);
    setProductos(productosPorCategoria);
  }

  return (
    <div>
      <h2>Categorías</h2>
      {categorias.map((categoria) => (
        <div key={categoria}>
          <button onClick={() => handleClickCategoria(categoria)}>
            {categoria}
          </button>
        </div>
      ))}
      <h2>Productos</h2>
      {productos.map((producto) => (
        <Producto producto={producto} key={producto.id} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <Categorias />
    </div>
  );
}

export default App;
