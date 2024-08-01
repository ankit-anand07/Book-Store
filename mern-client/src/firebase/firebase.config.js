// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZP5iqy1b0wjI2Q2Az_IdydE9nUX9kiuk",
  authDomain: "mern-book-inventory-6066f.firebaseapp.com",
  projectId: "mern-book-inventory-6066f",
  storageBucket: "mern-book-inventory-6066f.appspot.com",
  messagingSenderId: "88107440526",
  appId: "1:88107440526:web:91eae3270c448963a1ecdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;