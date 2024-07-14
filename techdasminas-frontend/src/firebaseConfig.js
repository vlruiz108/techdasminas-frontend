import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCZF2tIhkZGN8l3BTVGkMw1DIcntxC7Nkk",
  authDomain: "techdasminas-backend.firebaseapp.com",
  projectId: "techdasminas-backend",
  storageBucket: "techdasminas-backend.appspot.com",
  messagingSenderId: "1029614492081",
  appId: "1:1029614492081:web:3a7dca03e282f77b054590",
  measurementId: "G-44QEK7NK87"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Instâncias dos serviços Firebase
const auth = getAuth(app); // Autenticação
const db = getFirestore(app); // Firestore
const storage = getStorage(app); // Armazenamento

// Provedor do Google para autenticação
const googleProvider = new GoogleAuthProvider();

// Exporta todas as instâncias e funções que você precisa usar em sua aplicação
export {
  app,
  auth,
  db,
  storage,
  createUserWithEmailAndPassword,
  signInWithPopup,
  googleProvider
};
