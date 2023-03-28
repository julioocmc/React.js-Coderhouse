import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../data.js';

const ProductDetails = () => {
  const { name } = useParams();
  const product = productsData.find((p) => p.name === name);

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Precio: ${product.price.toFixed(2)}</p>
      <p>Descripcion: {product.description}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
};

export default ProductDetails;
