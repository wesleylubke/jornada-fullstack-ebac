
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCwBbUcxHGC_q0qSF6iWSICURrkOC6JhWs",
  authDomain: "tiktokclone-66f11.firebaseapp.com",
  projectId: "tiktokclone-66f11",
  storageBucket: "tiktokclone-66f11.appspot.com",
  messagingSenderId: "457019383083",
  appId: "1:457019383083:web:22363c10861afd36c6396e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;