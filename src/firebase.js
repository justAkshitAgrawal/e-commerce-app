// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbhlmBYwGYcsCeA78dH57zoI7gqo0OCgw",
  authDomain: "ecommerce-app-b59b2.firebaseapp.com",
  projectId: "ecommerce-app-b59b2",
  storageBucket: "ecommerce-app-b59b2.appspot.com",
  messagingSenderId: "269342708778",
  appId: "1:269342708778:web:7b46894c82db0825735f53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
