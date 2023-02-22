/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/navbar/navbar';
import TopBanner from '@/components/top-banner/top-banner';
import ProductTile from '@/components/product-tile/product-tile';
import ArrowLeftIcon from '@/components/icons/arrow-left/arrow-left';
import ArrowRightIcon from '@/components/icons/arrow-right/arrow-right';
import ProductCarousel from '@/components/product-carousel/product-carousel';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
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
        <section>
          <h2 className={`${styles['section-heading']}`}> Best Sellers</h2>
          <ProductCarousel></ProductCarousel>
        </section>
      </main>
    </>
  );
}
