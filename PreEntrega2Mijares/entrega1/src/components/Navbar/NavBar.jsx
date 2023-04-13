import styles from './navbar.module.scss';
import CartWidget from './CartWidget.jsx';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/products">
        <p> JM</p>
      </Link>

      <Link to="/category/electronics">
        <p>Electronics</p>
      </Link>

      <Link to="/products">
        <p>Catalogo</p>
      </Link>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
