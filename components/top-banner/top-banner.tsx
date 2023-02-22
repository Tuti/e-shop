import styles from './top-banner.module.css';
import { Roboto } from '@next/font/google';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function TopBanner(props: any) {
  return (
    <>
      {' '}
      <h3 className={styles['message']}>{props.message}</h3>
    </>
  );
}
