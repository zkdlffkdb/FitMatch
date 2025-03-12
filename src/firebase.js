import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5C5XUaBiPo13A5mfjD37iHrAElgO-HO0",
  authDomain: "fitmatch-7eb7a.firebaseapp.com",
  projectId: "fitmatch-7eb7a",
  storageBucket: "fitmatch-7eb7a.firebasestorage.app",
  messagingSenderId: "431236004400",
  appId: "1:431236004400:web:444ff2eb4fdb985367cbf5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

export default db;
