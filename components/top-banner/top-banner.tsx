import styles from './top-banner.module.css';
import { Roboto } from '@next/font/google';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function TopBanner() {
  const MESSAGE: string = 'Your top banner message goes here!';

  return (
    <>
      {' '}
      <h3 className={styles['message']}>{MESSAGE}</h3>
    </>
  );
}
