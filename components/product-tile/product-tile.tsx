/* eslint-disable @next/next/no-img-element */
import styles from './product-tile.module.css';
import Link from 'next/link';
interface Props {
  src: string;
  alt: string;
  productName: string;
  price: number;
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function ProductTile(props: Props) {
  return (
    //placeholder href
    <Link href={'#'} className={styles['product-wrapper']}>
      <img className={styles['image']} src={props.src} alt={props.alt}></img>
      <span className={styles['product-name']}>{props.productName}</span>
      <span className={styles['product-price']}>
        {formatter.format(props.price)}
      </span>
    </Link>
  );
}
