// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC3IS9Zzm0GXWmAATNZgAKDe9Rx3K5OJNE",
  authDomain: "shopper-616e4.firebaseapp.com",
  projectId: "shopper-616e4",
  storageBucket: "shopper-616e4.appspot.com",
  messagingSenderId: "997005554798",
  appId: "1:997005554798:web:728b40d0a3ccbabf7e627f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
