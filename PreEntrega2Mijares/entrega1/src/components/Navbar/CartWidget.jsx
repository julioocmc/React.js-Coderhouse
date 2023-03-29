import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <Link to="/cart">
      <FontAwesomeIcon icon={faCartShopping} />1
    </Link>
  );
};

export default CartWidget;
