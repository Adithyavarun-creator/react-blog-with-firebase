// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH7v_7UG_jx7leRPtCz3MDK10dkTSinVM",
  authDomain: "blog-try-firebase.firebaseapp.com",
  projectId: "blog-try-firebase",
  storageBucket: "blog-try-firebase.appspot.com",
  messagingSenderId: "675599257305",
  appId: "1:675599257305:web:1c8a44a94fb8ca7e5bf8c8",
  measurementId: "G-M6BXC44X9K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
