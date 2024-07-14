// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZF2tIhkZGN8l3BTVGkMw1DIcntxC7Nkk",
  authDomain: "techdasminas-backend.firebaseapp.com",
  projectId: "techdasminas-backend",
  storageBucket: "techdasminas-backend.appspot.com",
  messagingSenderId: "1029614492081",
  appId: "1:1029614492081:web:3a7dca03e282f77b054590",
  measurementId: "G-44QEK7NK87"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
