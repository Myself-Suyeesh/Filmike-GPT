// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL07jw2y7pnasXOmCpUEvBwLpHrn-UlL0",
  authDomain: "filmike-gpt.firebaseapp.com",
  projectId: "filmike-gpt",
  storageBucket: "filmike-gpt.firebasestorage.app",
  messagingSenderId: "797725083270",
  appId: "1:797725083270:web:a19e48125165be988bb307",
  measurementId: "G-XX1ZFKMZV5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth();
