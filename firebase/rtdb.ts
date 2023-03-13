import { ref, serverTimestamp, set } from 'firebase/database';
import { db } from './firebase';

export function writeUserData(id: string, name: string, age: number) {
  set(ref(db, 'users/' + id), {
    username: name,
    age: age,
    timestamp: serverTimestamp(),
  });
  console.log('writing user data...');
}
