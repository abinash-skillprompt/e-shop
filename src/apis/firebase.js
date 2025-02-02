// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'e-shop-37868.firebaseapp.com',
  projectId: 'e-shop-37868',
  storageBucket: 'e-shop-37868.firebasestorage.app',
  messagingSenderId: '556007840061',
  appId: '1:556007840061:web:817bd91bb0e62c10d18d54',
  measurementId: 'G-2YM553EJVL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
