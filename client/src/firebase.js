// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mblogbdsx.firebaseapp.com",
  projectId: "mblogbdsx",
  storageBucket: "mblogbdsx.firebasestorage.app",
  messagingSenderId: "1044254202700",
  appId: "1:1044254202700:web:4737d29997e64e0a144de9"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
