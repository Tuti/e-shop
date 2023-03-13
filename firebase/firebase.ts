// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCA3iMK99JQPEZv746wsM8vaYP29urIImI',
  authDomain: 'eshop-e4163.firebaseapp.com',
  projectId: 'eshop-e4163',
  storageBucket: 'eshop-e4163.appspot.com',
  messagingSenderId: '655930927707',
  appId: '1:655930927707:web:623f183e640c758047ad7e',
  measurementId: 'G-BLTD5XK803',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase();
