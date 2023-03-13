import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <a href="#">
      <FontAwesomeIcon icon={faCartShopping} />1
    </a>
  );
};

export default CartWidget;
