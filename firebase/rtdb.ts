import { onValue, ref, serverTimestamp, set } from 'firebase/database';
import { db } from './firebase';
import { get, child } from 'firebase/database';
import { rejects } from 'assert';
export function writeUserData(id: string, name: string, age: number) {
  set(ref(db, 'users/' + id), {
    username: name,
    age: age,
    timestamp: serverTimestamp(),
  });
  console.log('writing user data...');
}

export async function getProductData(productName: string) {
  const productDataRef = ref(db, 'products/' + productName + '/images');
  onValue(productDataRef, (snapshot) => {
    const data = snapshot.val();
    console.log({ data });
  });
}

export function getProducts(pageName: string): any {
  const dbRef = ref(db);
  let data: any = 'adsfs';
  get(child(dbRef, 'landing-page-products')).then((snapshot) => {
    if (snapshot.exists()) {
      data = snapshot.val();
    } else {
      console.log('no data available');
    }
  });
  return data;
}
