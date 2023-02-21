import Link from 'next/link';
import styles from './navbar.module.css';
import { Roboto } from '@next/font/google';
import { useState } from 'react';
import SearchIcon from '../icons/search/search';
import ShoppingCartIcon from '../icons/cart/shopping-cart';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

const STORE_NAME: string = 'Store';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  function handleHamburgerClick() {
    setMenuActive(!menuActive);
  }

  return (
    <nav className={`${styles['nav']}`}>
      <div
        className={`${styles['hamburger-menu']}`}
        onClick={handleHamburgerClick}
      >
        <span className={styles.bar}> </span>
        <span className={styles.bar}> </span>
        <span className={styles.bar}> </span>
      </div>
      <Link className={`${styles['nav-branding']}`} href="#">
        {STORE_NAME}
      </Link>
      <ul
        className={
          menuActive
            ? `${styles['nav-menu']} ${styles['active']}`
            : `${styles['nav-menu']}`
        }
      >
        <li>
          <Link
            href="#"
            onClick={() => {
              setMenuActive(!menuActive);
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link href="../clothing">Clothing</Link>
        </li>
        <li>
          <Link href={'../gear'}>Gear</Link>
        </li>
        <li>
          <Link href={'../all-products'}>All Products</Link>
        </li>
      </ul>
      <div className={`${styles['search-cart']}`}>
        <SearchIcon fill={'white'}></SearchIcon>
        <ShoppingCartIcon fill={'white'}></ShoppingCartIcon>
      </div>
    </nav>
  );
}
