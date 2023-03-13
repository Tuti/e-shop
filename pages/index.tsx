/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/navbar/navbar';
import TopBanner from '@/components/top-banner/top-banner';
import ProductTile from '@/components/product-tile/product-tile';
import ProductCarousel from '@/components/product-row/product-carousel';
import { ProductInfo } from '../components/product-tile/product-tile';
import { useEffect } from 'react';
import { writeUserData } from '@/firebase/rtdb';

export default function Home() {
  const data: ProductInfo[] = [
    {
      src: './images/backpack-01.webp',
      alt: 'backpack image',
      productName: 'Backpack',
      price: 150,
    },
    {
      src: './images/longsleeve-01.webp',
      alt: 'long sleeve shirt image',
      productName: 'Long Sleeve Shirt',
      price: 30,
    },
    {
      src: './images/pins-01.webp',
      alt: 'pins image',
      productName: 'Pins',
      price: 8,
    },
  ];

  useEffect(() => {
    writeUserData('randID', 'testname', 21);
  });

  return (
    <>
      <Head>
        <title>Tuti Store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Navbar />
        <TopBanner message={'Your banner message goes here!'} />
      </header>
      <main className={styles['main']}>
        <div style={{ minHeight: '2rem' }}></div>
        <section>
          <h2 className={styles['section-heading']}>Just In!</h2>
          <ProductTile
            src={'./images/backpack-01.webp'}
            alt={'image of black backpack'}
            productName={'TTT Backpack'}
            price={150.0}
          ></ProductTile>
        </section>
        <section className={styles['section']}>
          <h2 className={`${styles['section-heading']}`}> Best Sellers</h2>
          <ProductCarousel productInfo={data}></ProductCarousel>
        </section>
      </main>
    </>
  );
}
