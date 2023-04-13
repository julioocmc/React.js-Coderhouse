import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        if (!id) {
          setProductos(data);
        } else {
          setProductos(data.filter((item) => item.category === id));
        }
        setLoading(false);
      });
  }, [id]);

  return loading ? (
    <div>Cargando...</div>
  ) : (
    <div>
      <ItemList items={productos} />
    </div>
  );
};

export default ItemListContainer;
