import styles from './navbar.module.scss';
import CartWidget from './CartWidget.jsx';

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <a href="#">Ecommerce JM</a>
      <a href="#">Home</a>
      <a href="#">About Us</a>
      <a href="#">Contact Us</a>
      <CartWidget />
    </div>
  );
};

export default NavBar;
