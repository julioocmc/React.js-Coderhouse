import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CardDetail = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducto(data);
      });
  }, []);

  if (!producto) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h3>{producto.title}</h3>
      <img src={producto.image} alt={producto.title} width="200" height="250" />
      <p>{producto.description}</p>
      <p>$ {producto.price}</p>
      <p>{producto.category}</p>
    </div>
  );
};

export default CardDetail;
