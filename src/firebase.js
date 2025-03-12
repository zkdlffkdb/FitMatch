import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB65gx5ZU2Izp0a4XSAEpVhNRkmbF3w1h0",
  authDomain: "fitmatchtest.firebaseapp.com",
  projectId: "fitmatchtest",
  storageBucket: "fitmatchtest.firebasestorage.app",
  messagingSenderId: "953996984922",
  appId: "1:953996984922:web:c97df7baa8aab8e1da8e63",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

export default db;
