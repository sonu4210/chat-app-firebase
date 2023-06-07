import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-app-firebase-85505.firebaseapp.com",
  projectId: "chat-app-firebase-85505",
  storageBucket: "chat-app-firebase-85505.appspot.com",
  messagingSenderId: "961742794777",
  appId: "1:961742794777:web:5a33c62ae37e5841dd7a88",
  measurementId: "G-PRNEE5R57C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
