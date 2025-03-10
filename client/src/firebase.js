// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "redux-e8438.firebaseapp.com",
  projectId: "redux-e8438",
  storageBucket: "redux-e8438.firebasestorage.app",
  messagingSenderId: "667608420699",
  appId: "1:667608420699:web:8eb9784433e690555b8a7e"
};

// Initialize Firebase
export const  app = initializeApp(firebaseConfig);