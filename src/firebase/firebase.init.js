// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsNOrXELHlLApsKoodG-hR5GmXSZ-aX3Q",
  authDomain: "iebd-88fb9.firebaseapp.com",
  projectId: "iebd-88fb9",
  storageBucket: "iebd-88fb9.firebasestorage.app",
  messagingSenderId: "10481261685",
  appId: "1:10481261685:web:3116ed9124a4cbf9426c3c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
