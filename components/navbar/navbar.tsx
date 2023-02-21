import Link from 'next/link';
import styles from './navbar.module.css';
import { Roboto } from '@next/font/google';
import { useState } from 'react';
import SearchIcon from '../icons/search/search';
import ShoppingCartIcon from '../icons/cart/shopping-cart';
import MenuIcon from '../icons/menu/menu';
import CloseMenuIcon from '../icons/close-menu/close-menu';

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
        <div
          className={
            menuActive
              ? `${styles['menu-icon-wrapper']} ${styles['inactive']}`
              : `${styles['menu-icon-wrapper']}`
          }
        >
          <MenuIcon fill={'white'}></MenuIcon>
        </div>
        <div
          className={
            menuActive
              ? `${styles['menu-icon-wrapper']}`
              : `${styles['menu-icon-wrapper']} ${styles['inactive']}`
          }
        >
          <CloseMenuIcon fill={'white'}></CloseMenuIcon>
        </div>
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
        <li className={styles['nav-link']}>
          <Link
            href="#"
            onClick={() => {
              setMenuActive(!menuActive);
            }}
          >
            Home
          </Link>
        </li>
        <li className={styles['nav-link']}>
          {' '}
          <Link href="../clothing">Clothing</Link>
        </li>
        <li className={styles['nav-link']}>
          {' '}
          <Link href={'../gear'}>Gear</Link>
        </li>
        <li className={styles['nav-link']}>
          {' '}
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
