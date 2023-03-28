import styles from './navbar.module.scss';
import CartWidget from './CartWidget.jsx';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { useState } from 'react';

const NavBar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className={styles.nav}>
      <Link to="/">
        <p>JM</p>
      </Link>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/about">
        <p>About us</p>
      </Link>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default NavBar;
