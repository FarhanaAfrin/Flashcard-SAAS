// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWjHjVxN4C3fBY16stlEVsy--mE_b3tfI",
  authDomain: "flashcardsaas-c7dc1.firebaseapp.com",
  projectId: "flashcardsaas-c7dc1",
  storageBucket: "flashcardsaas-c7dc1.appspot.com",
  messagingSenderId: "112087879195",
  appId: "1:112087879195:web:46983a47219cbea3aa32be",
  measurementId: "G-KZ0H127Z8K",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { storage };

// Named export
export { db };
