import ProductTile from '../product-tile/product-tile';
import ArrowLeftIcon from '../icons/arrow-left/arrow-left';
import ArrowRightIcon from '../icons/arrow-right/arrow-right';
import styles from './product-carousel.module.css';
import { ProductInfo } from '../product-tile/product-tile';
import React, { useState } from 'react';

interface Props {
  productInfo: ProductInfo[];
}

export default function ProductCarousel(props: Props) {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  function handleLeftClick() {
    if (currentProductIndex === 0) {
      //do nothing
      return;
    }
    setCurrentProductIndex((currentProductIndex) => currentProductIndex - 1);
  }

  function handleRightClick() {
    if (currentProductIndex >= props.productInfo.length) {
      //do nothing
      return;
    }
    setCurrentProductIndex((currentProductIndex) => currentProductIndex + 1);
  }

  const products = props.productInfo.map((item, index) => {
    let className;
    if (index < currentProductIndex) {
      console.log('less than current index');
      className = `${styles['left']} ${styles['carousel-tile']}`;
    } else if (index === currentProductIndex) {
      console.log('equals index');
      className = `${styles['current']} ${styles['carousel-tile']}}`;
    } else {
      console.log('greater than index');
      className = `${styles['right']} ${styles['carousel-tile']}`;
    }
    return (
      <div className={className} key={index}>
        <ProductTile
          src={item.src}
          alt={item.alt}
          productName={item.productName}
          price={item.price}
        ></ProductTile>
      </div>
    );
  });

  return (
    <div className={`${styles['container']}`}>
      {products}
      <div className={`${styles['buttons']}`}>
        <button
          className={styles['button']}
          onClick={handleLeftClick}
          title="left click"
        >
          <ArrowLeftIcon></ArrowLeftIcon>
        </button>
        <button
          className={styles['button']}
          onClick={handleRightClick}
          title="right click"
        >
          <ArrowRightIcon></ArrowRightIcon>
        </button>
      </div>
    </div>
  );
}
