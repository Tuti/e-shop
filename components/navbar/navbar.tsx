import Link from 'next/link';
import styles from './navbar.module.css';
import { Roboto } from '@next/font/google';
import { useState } from 'react';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  function handleHamburgerClick() {}

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
        Tuti Store
      </Link>
      <ul className={`${styles['nav-menu']}`}>
        <li>
          <Link href="#">Home</Link>
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
    </nav>
  );
}
