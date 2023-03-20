/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/navbar/navbar';
import TopBanner from '@/components/top-banner/top-banner';
import ProductTile from '@/components/product-tile/product-tile';
import ProductRow from '@/components/product-row/product-row';
import { ProductInfo } from '../components/product-tile/product-tile';
import { useEffect, useState } from 'react';
import { getProducts } from '@/firebase/rtdb';
import { rejects } from 'assert';
import { db } from '@/firebase/firebase';
import { get, ref, child } from 'firebase/database';
import Image from 'next/image';

export default function Home() {
  const [sectionData, setSectionData] = useState<any>('test');

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

  function clicked() {
    console.log({ sectionData });
  }

  useEffect(() => {
    const dbRef = ref(db);
    get(child(dbRef, 'landing-page-products'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          console.log('no data available');
        }
      })
      .then((data) => {
        setSectionData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
        <button onClick={clicked}>click me</button>
        <section className={styles['section']}>
          <h2 className={`${styles['section-heading']}`}> Best Sellers</h2>
          {/* <ProductRow
            sectionHeading={'BestSelling'}
            productInfo={data}
          ></ProductRow> */}
        </section>
      </main>
    </>
  );
}
