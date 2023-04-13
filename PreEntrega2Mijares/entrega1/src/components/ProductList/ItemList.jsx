import Card from '../Card';

export const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  );
};
