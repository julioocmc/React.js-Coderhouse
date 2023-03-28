import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../../data.js';

const ProductCard = ({ product }) => {
  return (
    <div>
      <Link to={`/product/${product.name}`}>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p>Precio: ${product.price.toFixed(2)}</p>
      </Link>
    </div>
  );
};

const ItemListContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const filteredProducts = selectedCategory
    ? productsData.filter((product) => product.category === selectedCategory)
    : productsData;

  return (
    <div>
      <nav>
        <button onClick={() => setSelectedCategory(null)}>Todos</button>
        <button onClick={() => setSelectedCategory('Franela')}>Franelas</button>
        <button onClick={() => setSelectedCategory('Short')}>Shorts</button>
        <button onClick={() => setSelectedCategory('Sueter')}>Sueteres</button>
      </nav>
      {filteredProducts.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
};

export default ItemListContainer;
