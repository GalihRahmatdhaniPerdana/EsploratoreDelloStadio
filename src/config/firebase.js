import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA70sXu7ZT16Y46xG9ChQxw7FdhxHQzEJ8',
  authDomain: 'explorateapp.firebaseapp.com',
  projectId: 'explorateapp',
  storageBucket: 'explorateapp.appspot.com',
  messagingSenderId: '936217052472',
  appId: '1:936217052472:android:279d1d5a0062b73b0eedcd',
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const db = getFirestore(app);

export { db };
