/* eslint-disable @next/next/no-img-element */
import styles from './product-tile.module.css';
import Link from 'next/link';
import { useState } from 'react';

export interface ProductInfo {
  src: string;
  alt: string;
  productName: string;
  price: number;
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function ProductTile(productInfo: ProductInfo) {
  const [className, setClassName] = useState(styles['product-wrapper']);
  const [rightActive, setRightActive] = useState(false);
  const [leftActive, setLeftActive] = useState(false);

  function updateClassName(): void {}

  return (
    //placeholder href
    <Link href={'#'} className={className}>
      <img
        className={styles['image']}
        src={productInfo.src}
        alt={productInfo.alt}
      ></img>
      <span className={styles['product-name']}>{productInfo.productName}</span>
      <span className={styles['product-price']}>
        {formatter.format(productInfo.price)}
      </span>
    </Link>
  );
}
