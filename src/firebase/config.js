import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyD6A1skw9ua-4WMa8L5gc97qaBmPB5gr5k",
  authDomain: "heroapp-torrez.firebaseapp.com",
  projectId: "heroapp-torrez",
  storageBucket: "heroapp-torrez.appspot.com",
  messagingSenderId: "1094536341230",
  appId: "1:1094536341230:web:cb820382d7b48d55b5b5ff"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)