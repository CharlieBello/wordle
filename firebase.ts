// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjZmXBOhrfQvoe5TyllJM01L3YdiKeIqw",
  authDomain: "wordle-319f4.firebaseapp.com",
  projectId: "wordle-319f4",
  storageBucket: "wordle-319f4.appspot.com",
  messagingSenderId: "492968382888",
  appId: "1:492968382888:web:fc03852ca617c6a5934d9d",
  measurementId: "G-78Z086W8W3",
  //databseURL:"https://wordle-319f4-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbInstance = getFirestore(app);
//const analytics = getAnalytics(app);