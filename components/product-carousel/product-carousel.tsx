import ProductTile from '../product-tile/product-tile';
import ArrowLeftIcon from '../icons/arrow-left/arrow-left';
import ArrowRightIcon from '../icons/arrow-right/arrow-right';
import styles from './product-carousel.module.css';
import { ProductInfo } from '../product-tile/product-tile';

interface Props {
  productInfo: ProductInfo[];
}

export default function ProductCarousel(props: Props) {
  const products = props.productInfo.map((item, index) => {
    <ProductTile
      key={index}
      src={item.src}
      alt={item.alt}
      productName={item.productName}
      price={item.price}
    ></ProductTile>;
  });

  return (
    <div className={`${styles['product-carousel']}`}>
      {products}
      <div className={`${styles['buttons']}`}>
        <button>
          <ArrowLeftIcon></ArrowLeftIcon>
        </button>
        <button>
          <ArrowRightIcon></ArrowRightIcon>
        </button>
      </div>
    </div>
  );
}
